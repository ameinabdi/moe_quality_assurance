import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize,{ QueryTypes } from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';
import FileRepository from './fileRepository';


const Op = Sequelize.Op;

class SSAReportRepository {

static async ssaReport(
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
    const avarageState = await  options.database.sequelize.query("SELECT *  FROM ssa_avarege_state ", { type: QueryTypes.SELECT });
    const avarageRegion = await  options.database.sequelize.query("SELECT *  FROM ssa_avarage_region ", { type: QueryTypes.SELECT });
    const avarageDistrict = await  options.database.sequelize.query("SELECT *  FROM ssa_avarage_district ", { type: QueryTypes.SELECT });

    return { region, district, state,owrnership,avarageState, avarageRegion, avarageDistrict };
  }

 
 
  static async activities(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
     
    return { };
  }
}
export default SSAReportRepository;
