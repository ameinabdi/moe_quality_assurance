import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize,{ QueryTypes } from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';
import FileRepository from './fileRepository';


const Op = Sequelize.Op;

class DashboardRepository {

static async dashboard(
  { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );
    const transaction = SequelizeRepository.getTransaction(
      options,
    );
    
    const state = await  options.database.sequelize.query("SELECT state, count(id) AS total FROM sSASurveys WHERE deletedAt IS NULL GROUP BY state ", { type: QueryTypes.SELECT });
    const region = await  options.database.sequelize.query("SELECT region, count(id) AS total FROM sSASurveys WHERE deletedAt IS NULL GROUP BY region ", { type: QueryTypes.SELECT });
    const district = await  options.database.sequelize.query("SELECT district, count(id) AS total FROM sSASurveys WHERE deletedAt IS NULL GROUP BY district ", { type: QueryTypes.SELECT });
    const owrnership = await  options.database.sequelize.query("SELECT schoolType, COUNT(id) AS total FROM schools WHERE deletedAt IS NULL GROUP BY schoolType", { type: QueryTypes.SELECT });

    return { region, district, state,owrnership, };
  }
  static async supervisionReport(
    { filter, limit = 0, offset = 0, orderBy = '' },
      options: IRepositoryOptions,
    ) {
      const tenant = SequelizeRepository.getCurrentTenant(
        options,
      );
      const transaction = SequelizeRepository.getTransaction(
        options,
      );
      
    
  
      const supervisionByState = await  options.database.sequelize.query(`
        SELECT state.id AS stateId, state.name AS stateName, COUNT(schoolSupervision.id) AS totalSupervisions FROM schoolSupervisions AS schoolSupervision LEFT JOIN states AS state ON schoolSupervision.stateId = state.id AND state.deletedAt IS NULL WHERE schoolSupervision.deletedAt IS NULL GROUP BY state.id, state.name ORDER BY totalSupervisions DESC;
        `, { type: QueryTypes.SELECT });
      const supervisionByDistrict = await  options.database.sequelize.query(`
        SELECT district.id AS districtId, district.name AS districtName, COUNT(schoolSupervision.id) AS totalSupervisions
        FROM schoolSupervisions AS schoolSupervision
        LEFT JOIN districts AS district ON schoolSupervision.districtId = district.id AND district.deletedAt IS NULL
        WHERE schoolSupervision.deletedAt IS NULL
        GROUP BY district.id, district.name
        ORDER BY totalSupervisions DESC;
      `, { type: QueryTypes.SELECT });
      const supervisionByOwnership = await  options.database.sequelize.query(`
        SELECT school.schoolType, COUNT(schoolSupervision.id) AS totalSupervisions
        FROM schoolSupervisions AS schoolSupervision
        LEFT JOIN schools AS school ON schoolSupervision.schoolId = school.id AND school.deletedAt IS NULL
        WHERE schoolSupervision.deletedAt IS NULL
        GROUP BY school.schoolType
        ORDER BY totalSupervisions DESC;
        `, { type: QueryTypes.SELECT });
  
      const supervisionByUser = await  options.database.sequelize.query(`
        SELECT 
      users.id AS userId,
      users.fullName AS userName,
      states.id AS stateId,
      states.name AS stateName,
      districts.id AS districtId,
      districts.name AS districtName,
      COUNT(schoolSupervisions.id) AS totalSupervisions
      FROM 
          schoolSupervisions
      LEFT JOIN users ON schoolSupervisions.createdById = users.id
      LEFT JOIN states ON users.stateId = states.id AND states.deletedAt IS NULL
      LEFT JOIN districts ON users.districtId = districts.id AND districts.deletedAt IS NULL
      WHERE 
          schoolSupervisions.deletedAt IS NULL
      GROUP BY 
          users.id, users.fullName, states.id, states.name, districts.id, districts.name
      ORDER BY 
      totalSupervisions DESC;
      `, { type: QueryTypes.SELECT });
      const supervisionByMostDimensionState = await  options.database.sequelize.query(`
        SELECT 
       states.id AS stateId,
       states.name AS stateName,
       COUNT(DISTINCT dimensionSsv1s.id) AS totalDimension1Added,
       COUNT(DISTINCT dimensionSsv2s.id) AS totalDimension2Added,
       COUNT(DISTINCT dimensionSsv3s.id) AS totalDimension3Added
       FROM 
           schoolSupervisions
       LEFT JOIN states ON schoolSupervisions.stateId = states.id AND states.deletedAt IS NULL
       LEFT JOIN dimensionSsv1s ON schoolSupervisions.dimension1Id = dimensionSsv1s.id AND dimensionSsv1s.deletedAt IS NULL
       LEFT JOIN dimensionSsv2s ON schoolSupervisions.dimension2Id = dimensionSsv2s.id AND dimensionSsv2s.deletedAt IS NULL
       LEFT JOIN dimensionSsv3s ON schoolSupervisions.id = dimensionSsv3s.schoolSupervisionId AND dimensionSsv3s.deletedAt IS NULL
       WHERE 
           schoolSupervisions.deletedAt IS NULL
       GROUP BY 
           states.id, states.name
       ORDER BY 
       totalDimension1Added DESC, totalDimension2Added DESC, totalDimension3Added DESC;
       `, { type: QueryTypes.SELECT });
      const supervisionByMostDimensionDistrict = await  options.database.sequelize.query(`
      SELECT 
      districts.id AS districtId,
      districts.name AS districtName,
      COUNT(DISTINCT dimensionSsv1s.id) AS totalDimension1Added,
      COUNT(DISTINCT dimensionSsv2s.id) AS totalDimension2Added,
      COUNT(DISTINCT dimensionSsv3s.id) AS totalDimension3Added
      FROM 
          schoolSupervisions
      LEFT JOIN districts ON schoolSupervisions.districtId = districts.id AND districts.deletedAt IS NULL
      LEFT JOIN dimensionSsv1s ON schoolSupervisions.dimension1Id = dimensionSsv1s.id AND dimensionSsv1s.deletedAt IS NULL
      LEFT JOIN dimensionSsv2s ON schoolSupervisions.dimension2Id = dimensionSsv2s.id AND dimensionSsv2s.deletedAt IS NULL
      LEFT JOIN dimensionSsv3s ON schoolSupervisions.id = dimensionSsv3s.schoolSupervisionId AND dimensionSsv3s.deletedAt IS NULL
      WHERE 
          schoolSupervisions.deletedAt IS NULL
      GROUP BY 
          districts.id, districts.name
      ORDER BY 
      totalDimension1Added DESC, totalDimension2Added DESC, totalDimension3Added DESC;
      `, { type: QueryTypes.SELECT });
  
      return { supervisionByState, supervisionByDistrict, supervisionByOwnership,supervisionByUser,supervisionByMostDimensionState ,supervisionByMostDimensionDistrict };
  }
  static async teacherReport(
    { filter, limit = 0, offset = 0, orderBy = '' },
      options: IRepositoryOptions,
    ) {
      const tenant = SequelizeRepository.getCurrentTenant(
        options,
      );
      const transaction = SequelizeRepository.getTransaction(
        options,
      );
  
      const teacherByGender = await  options.database.sequelize.query(`
          SELECT 
              gender,
              COUNT(*) AS totalTeachers
          FROM 
              governmentTeacherInformations
          WHERE 
              deletedAt IS NULL
          GROUP BY 
              gender
          ORDER BY 
          totalTeachers DESC; 
       `, { type: QueryTypes.SELECT });
      const teacherByEdacutionLevel = await  options.database.sequelize.query(`
        SELECT 
        educationLevel,
        COUNT(*) AS totalTeachers
        FROM 
            governmentTeacherInformations
        WHERE 
            deletedAt IS NULL
        GROUP BY 
            educationLevel
        ORDER BY 
        totalTeachers DESC;
      `, { type: QueryTypes.SELECT });
      const teacherByToughtLevel = await  options.database.sequelize.query(`
       SELECT 
        taughtLevel,
        COUNT(*) AS totalTeachers
        FROM 
            governmentTeacherInformations
        WHERE 
            deletedAt IS NULL
        GROUP BY 
            taughtLevel
        ORDER BY 
        totalTeachers DESC;
        `, { type: QueryTypes.SELECT });
  
      const teacherByShift = await  options.database.sequelize.query(`
        SELECT 
        teachingShift,
        COUNT(*) AS totalTeachers
        FROM 
            governmentTeacherInformations
        WHERE 
            deletedAt IS NULL
        GROUP BY 
            teachingShift
        ORDER BY 
        totalTeachers DESC;
      `, { type: QueryTypes.SELECT });
      const teacherByGrades = await  options.database.sequelize.query(`
       SELECT 
        gradesTaught,
        COUNT(*) AS totalTeachers
        FROM 
            governmentTeacherInformations
        WHERE 
            deletedAt IS NULL
        GROUP BY 
            gradesTaught
        ORDER BY 
        totalTeachers DESC;
       `, { type: QueryTypes.SELECT });
      const teacherBySubject = await  options.database.sequelize.query(`
      SELECT 
      subjectsTaught,
      COUNT(*) AS totalTeachers
      FROM 
          governmentTeacherInformations
      WHERE 
          deletedAt IS NULL
      GROUP BY 
          subjectsTaught
      ORDER BY 
      totalTeachers DESC;
      `, { type: QueryTypes.SELECT });
      const teacherByTraining = await  options.database.sequelize.query(`
        SELECT 
        teacherTraining,
        COUNT(*) AS totalTeachers
        FROM 
            governmentTeacherInformations
        WHERE 
            deletedAt IS NULL
        GROUP BY 
            teacherTraining
        ORDER BY 
        totalTeachers DESC;
      `, { type: QueryTypes.SELECT });
      const teacherByNumberTraining = await  options.database.sequelize.query(`
        SELECT 
        trainingNo,
        COUNT(*) AS totalTeachers
        FROM 
            governmentTeacherInformations
        WHERE 
            deletedAt IS NULL
        GROUP BY 
            trainingNo
        ORDER BY 
        totalTeachers DESC;
      `, { type: QueryTypes.SELECT });
      const teacherByPresent = await  options.database.sequelize.query(`
        SELECT 
        present,
        COUNT(*) AS totalTeachers
        FROM 
            governmentTeacherInformations
        WHERE 
            deletedAt IS NULL
        GROUP BY 
            present
        ORDER BY 
        totalTeachers DESC;
      `, { type: QueryTypes.SELECT });
      const teacherByExperience = await  options.database.sequelize.query(`
        SELECT 
        experience,
        COUNT(*) AS totalTeachers
        FROM 
            governmentTeacherInformations
        WHERE 
            deletedAt IS NULL
        GROUP BY 
        experience
        ORDER BY 
        totalTeachers DESC;
      `, { type: QueryTypes.SELECT });
      const teacherByDisability = await  options.database.sequelize.query(`
        SELECT 
        disablity,
        COUNT(*) AS totalTeachers
        FROM 
            governmentTeacherInformations
        WHERE 
            deletedAt IS NULL
        GROUP BY 
            disablity
        ORDER BY 
        totalTeachers DESC;
      `, { type: QueryTypes.SELECT });
      const teacherByState = await  options.database.sequelize.query(`
        SELECT 
            states.id AS stateId,
            states.name AS stateName,
            COUNT(governmentTeacherInformations.id) AS totalTeachers
        FROM 
            governmentTeacherInformations
        LEFT JOIN 
            states ON governmentTeacherInformations.stateId = states.id AND states.deletedAt IS NULL
        WHERE 
            governmentTeacherInformations.deletedAt IS NULL
        GROUP BY 
            states.id, states.name
        ORDER BY 
        totalTeachers DESC;
      `, { type: QueryTypes.SELECT });
      const teacherBydistrict = await  options.database.sequelize.query(`
        SELECT 
        districts.id AS districtId,
        districts.name AS districtName,
        COUNT(governmentTeacherInformations.id) AS totalTeachers
        FROM 
            governmentTeacherInformations
        LEFT JOIN 
            districts ON governmentTeacherInformations.districtId = districts.id AND districts.deletedAt IS NULL
        WHERE 
            governmentTeacherInformations.deletedAt IS NULL
        GROUP BY 
            districts.id, districts.name
        ORDER BY 
        totalTeachers DESC;
        `, { type: QueryTypes.SELECT });
      return { teacherBydistrict, teacherByState, teacherByDisability,teacherByExperience,teacherByPresent,teacherByNumberTraining,teacherByTraining,teacherBySubject, teacherByGrades, teacherByShift, teacherByToughtLevel, teacherByEdacutionLevel, teacherByGender};
  }
  static async stateReport(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
) {
    const tenant = SequelizeRepository.getCurrentTenant(options);
    const transaction = SequelizeRepository.getTransaction(options);
    const currentUser = SequelizeRepository.getCurrentUser(options);

    if (currentUser?.type === 'State') {
        const stateId = currentUser?.stateId; // Store the state ID in a variable

        const supervisionByDistrict = await options.database.sequelize.query(`
          SELECT district.id AS districtId, district.name AS districtName, COUNT(schoolSupervision.id) AS totalSupervisions
          FROM schoolSupervisions AS schoolSupervision
          LEFT JOIN districts AS district ON schoolSupervision.districtId = district.id AND district.deletedAt IS NULL
          WHERE schoolSupervision.deletedAt IS NULL AND schoolSupervision.stateId = :stateId
          GROUP BY district.id, district.name
          ORDER BY totalSupervisions DESC;
      `, { replacements: { stateId }, type: QueryTypes.SELECT });
      
        const supervisionByOwnership = await options.database.sequelize.query(`
            SELECT school.schoolType, COUNT(schoolSupervision.id) AS totalSupervisions
            FROM schoolSupervisions AS schoolSupervision
            LEFT JOIN schools AS school ON schoolSupervision.schoolId = school.id AND school.deletedAt IS NULL
            WHERE schoolSupervision.deletedAt IS NULL AND schoolSupervision.stateId = :stateId
            GROUP BY school.schoolType
            ORDER BY totalSupervisions DESC;
        `, { replacements: { stateId }, type: QueryTypes.SELECT });

        const teacherByGender = await options.database.sequelize.query(`
            SELECT gender, COUNT(*) AS totalTeachers
            FROM governmentTeacherInformations
            WHERE deletedAt IS NULL AND stateId = :stateId
            GROUP BY gender
            ORDER BY totalTeachers DESC;
        `, { replacements: { stateId }, type: QueryTypes.SELECT });

        const teacherByEducationLevel = await options.database.sequelize.query(`
            SELECT educationLevel, COUNT(*) AS totalTeachers
            FROM governmentTeacherInformations
            WHERE deletedAt IS NULL AND stateId = :stateId
            GROUP BY educationLevel
            ORDER BY totalTeachers DESC;
        `, { replacements: { stateId }, type: QueryTypes.SELECT });

        const teacherByTraining = await options.database.sequelize.query(`
            SELECT teacherTraining, COUNT(*) AS totalTeachers
            FROM governmentTeacherInformations
            WHERE deletedAt IS NULL AND stateId = :stateId
            GROUP BY teacherTraining
            ORDER BY totalTeachers DESC;
        `, { replacements: { stateId }, type: QueryTypes.SELECT });

        const teacherByNumberTraining = await options.database.sequelize.query(`
            SELECT trainingNo, COUNT(*) AS totalTeachers
            FROM governmentTeacherInformations
            WHERE deletedAt IS NULL AND stateId = :stateId
            GROUP BY trainingNo
            ORDER BY totalTeachers DESC;
        `, { replacements: { stateId }, type: QueryTypes.SELECT });

        const teacherByPresent = await options.database.sequelize.query(`
            SELECT present, COUNT(*) AS totalTeachers
            FROM governmentTeacherInformations
            WHERE deletedAt IS NULL AND stateId = :stateId
            GROUP BY present
            ORDER BY totalTeachers DESC;
        `, { replacements: { stateId }, type: QueryTypes.SELECT });

        const teacherByExperience = await options.database.sequelize.query(`
            SELECT experience, COUNT(*) AS totalTeachers
            FROM governmentTeacherInformations
            WHERE deletedAt IS NULL AND stateId = :stateId
            GROUP BY experience
            ORDER BY totalTeachers DESC;
        `, { replacements: { stateId }, type: QueryTypes.SELECT });

        const teacherByDisability = await options.database.sequelize.query(`
            SELECT disablity, COUNT(*) AS totalTeachers
            FROM governmentTeacherInformations
            WHERE deletedAt IS NULL AND stateId = :stateId
            GROUP BY disablity
            ORDER BY totalTeachers DESC;
        `, { replacements: { stateId }, type: QueryTypes.SELECT });

        const teacherByDistrict = await options.database.sequelize.query(`
            SELECT districts.id AS districtId, districts.name AS districtName, COUNT(governmentTeacherInformations.id) AS totalTeachers
            FROM governmentTeacherInformations
            LEFT JOIN districts ON governmentTeacherInformations.districtId = districts.id AND districts.deletedAt IS NULL
            WHERE governmentTeacherInformations.deletedAt IS NULL AND governmentTeacherInformations.stateId = :stateId
            GROUP BY districts.id, districts.name
            ORDER BY totalTeachers DESC;
        `, { replacements: { stateId }, type: QueryTypes.SELECT });
        const teacherByToughtLevel = await  options.database.sequelize.query(`
          SELECT 
           taughtLevel,
           COUNT(*) AS totalTeachers
           FROM 
               governmentTeacherInformations
           WHERE 
               deletedAt IS NULL AND stateId = :stateId
           GROUP BY 
               taughtLevel
           ORDER BY 
           totalTeachers DESC;
           `, {replacements: { stateId }, type: QueryTypes.SELECT });
        return {
            supervisionByDistrict,
            supervisionByOwnership,
            teacherByDistrict,
            teacherByDisability,
            teacherByExperience,
            teacherByPresent,
            teacherByNumberTraining,
            teacherByTraining,
            teacherByEducationLevel,
            teacherByGender,
            teacherByToughtLevel
        };
    }

    return;
}

  static async activities(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
     
    return { };
  }
}
export default DashboardRepository;
