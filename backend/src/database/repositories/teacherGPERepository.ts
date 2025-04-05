import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class TeacherGPERepository {

  static async create(data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );
    let district = await options.database.district.findOne(      
      {
        where: {
          id:data?.district,
        },
        transaction,
      },
    );

    const record = await options.database.teacherGPE.create(
      {
        ...lodash.pick(data, [
          'fullName',
          'school',
          'schoolEMISNo',
          'gender',
          'subjectName',
          'teachingLevel',
          'grade',
          'totalStudent',
          'maleStudents',
          'femaleStudent',          
          'importHash',
        ]),
        stateId:district?.stateId || currentUser?.stateId,
        regionId: district?.regionId || null,
        districtId: data.district || null,
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );
const dimenion = await options.database.dimensionGPE5.create(
      {
        ...lodash.pick(data, [
          'indicator51',
          'indicator52',
          'indicator53',
          'indicator54',
          'indicator55',
          'indicator56',
          'indicator57',
          'indicator58',
          'indicator59',
          'indicator510',
          'indicator511',
          'indicator512',
          'indicator513',
          'indicator514',
          'indicator515',
          'indicator516',
          'indicator517',
          'indicator518',
          'indicator519',
          'indicator520',
          'indicator521',
          'indicator522',
          'indicator523',
          'indicator524',          
          'importHash',
        ]),
        dimension5Rate:data.dimensionRate || 0,
        teacherId: record.id || null,
        schoolId: data.school || null,
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    
  
    
  

  
    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  static async update(id, data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );


    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let record = await options.database.teacherGPE.findOne(      
      {
        where: {
          id,
        },
        transaction,
      },
    );


    if (!record) {
      throw new Error404();
    }

    let district = await options.database.district.findOne(      
      {
        where: {
          id:data?.district,
        },
        transaction,
      },
    );


    let dimension5 = await options.database.dimensionGPE5.findOne(      
      {
        where: {
          teacherId:record?.id,
        },
        transaction,
      },
    );

    if (!dimension5) {
      throw new Error404();
    }

    record = await record.update(
      {
        ...lodash.pick(data, [
          'fullName',
          'school',
          'schoolEMISNo',
          'gender',
          'subjectName',
          'teachingLevel',
          'grade',
          'totalStudent',
          'maleStudents',
          'femaleStudent',          
          'importHash',
        ]),
        districtId: data.district || null,
        stateId:district?.stateId || currentUser?.stateId,
        regionId: district?.regionId || null,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );
    dimension5 = await dimension5.update(
      {
        ...lodash.pick(data, [
          'indicator51',
          'indicator52',
          'indicator53',
          'indicator54',
          'indicator55',
          'indicator56',
          'indicator57',
          'indicator58',
          'indicator59',
          'indicator510',
          'indicator511',
          'indicator512',
          'indicator513',
          'indicator514',
          'indicator515',
          'indicator516',
          'indicator517',
          'indicator518',
          'indicator519',
          'indicator520',
          'indicator521',
          'indicator522',
          'indicator523',
          'indicator524',          
          'importHash',
        ]),
        schoolId: data.school || null,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );




    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  static async destroy(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.teacherGPE.findOne(
      {
        where: {
          id,
        },
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      record,
      options,
    );
  }

  static async findById(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const include = [
      {
        model: options.database.state,
        as: 'state',
      },
      {
        model: options.database.region,
        as: 'region',
      },
      {
        model: options.database.district,
        as: 'district',
      },
      {
        model: options.database.dimensionGPE5,
        as: 'dimension5',
      },
    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.teacherGPE.findOne(
      {
        where: {
          id,
        },
        include,
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    return this._fillWithRelationsAndFiles(record, options);
  }

  static async filterIdInTenant(
    id,
    options: IRepositoryOptions,
  ) {
    return lodash.get(
      await this.filterIdsInTenant([id], options),
      '[0]',
      null,
    );
  }

  static async filterIdsInTenant(
    ids,
    options: IRepositoryOptions,
  ) {
    if (!ids || !ids.length) {
      return [];
    }

    const currentTenant =
      SequelizeRepository.getCurrentTenant(options);

    const where = {
      id: {
        [Op.in]: ids,
      },
      tenantId: currentTenant.id,
    };

    const records = await options.database.teacherGPE.findAll(
      {
        attributes: ['id'],
        where,
      },
    );

    return records.map((record) => record.id);
  }

  static async count(filter, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    return options.database.teacherGPE.count(
      {
        where: {
          ...filter,
        },
        transaction,
      },
    );
  }

  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );
   const currentUser = SequelizeRepository.getCurrentUser(
     options,
    );

    let whereAnd: Array<any> = [];
    let include = [
      {
        model: options.database.state,
        as: 'state',
      },
      {
        model: options.database.region,
        as: 'region',
      },
      {
        model: options.database.district,
        as: 'district',
      },    
      {
        model: options.database.dimensionGPE5,
        as: 'dimension5',
      },  
    ];

    whereAnd.push({
    });

     if(currentUser?.type == 'District'){
                  whereAnd.push(
                    SequelizeFilterUtils.ilikeIncludes(
                      'teacherGPE',
                      'districtId',
                      currentUser?.districtId ,
                    ),
                  );
        }
               
        else if(currentUser?.type === 'State'){
                  whereAnd.push(
                    SequelizeFilterUtils.ilikeIncludes(
                      'teacherGPE',
                      'stateId',
                      currentUser?.stateId ,
                    ),
                  );
        }

    if (filter) {
      if (filter.id) {
        whereAnd.push({
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        });
      }

      if (filter.school) {
        whereAnd.push({
          ['schoolId']: SequelizeFilterUtils.uuid(
            filter.school,
          ),
        });
      }

      if (filter.state) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'teacherGPE',
            'state',
            filter.state,
          ),
        );
      }

      if (filter.region) {
        whereAnd.push({
          ['regionId']: SequelizeFilterUtils.uuid(
            filter.region,
          ),
        });
      }

      if (filter.district) {
        whereAnd.push({
          ['districtId']: SequelizeFilterUtils.uuid(
            filter.district,
          ),
        });
      }

      if (filter.fullName) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'teacherGPE',
            'fullName',
            filter.fullName,
          ),
        );
      }

      if (filter.gender) {
        whereAnd.push({
          gender: filter.gender,
        });
      }

      if (filter.subjectName) {
        whereAnd.push({
          subjectName: filter.subjectName,
        });
      }

      if (filter.teachingLevel) {
        whereAnd.push({
          teachingLevel: filter.teachingLevel,
        });
      }

      if (filter.grade) {
        whereAnd.push({
          grade: filter.grade,
        });
      }

      if (filter.totalStudentRange) {
        const [start, end] = filter.totalStudentRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            totalStudent: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            totalStudent: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.maleStudentsRange) {
        const [start, end] = filter.maleStudentsRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            maleStudents: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            maleStudents: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.femaleStudentRange) {
        const [start, end] = filter.femaleStudentRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            femaleStudent: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            femaleStudent: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.gte]: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.lte]: end,
            },
          });
        }
      }
    }

    const where = { [Op.and]: whereAnd };

    let {
      rows,
      count,
    } = await options.database.teacherGPE.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy
        ? [orderBy.split('_')]
        : [['createdAt', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );

    return { rows, count };
  }

  static async findAllAutocomplete(query, limit, options: IRepositoryOptions) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [{
      tenantId: tenant.id,
    }];

    if (query) {
      whereAnd.push({
        [Op.or]: [
          { ['id']: SequelizeFilterUtils.uuid(query) },
          {
            [Op.and]: SequelizeFilterUtils.ilikeIncludes(
              'teacherGPE',
              'fullName',
              query,
            ),
          },
        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.teacherGPE.findAll(
      {
        attributes: ['id', 'fullName'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['fullName', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.fullName,
    }));
  }

  static async _createAuditLog(
    action,
    record,
    data,
    options: IRepositoryOptions,
  ) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),

      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'teacherGPE',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  static async _fillWithRelationsAndFilesForRows(
    rows,
    options: IRepositoryOptions,
  ) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillWithRelationsAndFiles(record, options),
      ),
    );
  }

  static async _fillWithRelationsAndFiles(record, options: IRepositoryOptions) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction = SequelizeRepository.getTransaction(
      options,
    );



    return output;
  }
}

export default TeacherGPERepository;
