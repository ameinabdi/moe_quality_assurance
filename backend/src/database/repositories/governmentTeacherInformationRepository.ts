import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';import FileRepository from './fileRepository';
import SequelizeArrayUtils from '../utils/sequelizeArrayUtils';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class GovernmentTeacherInformationRepository {

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

    const record = await options.database.governmentTeacherInformation.create(
      {
        ...lodash.pick(data, [
          'state',
          'fullName',
          'gender',
          'teacherIDNumber',
          'niraID',
          'educationLevel',
          'graduationYear',
          'taughtLevel',
          'teachingShift',
          'gradesTaught',
          'subjectsTaught',
          'teachertraining',
          'trainingNo',
          'present',
          'contactNumber',
          'experience',
          'joinedYear',
          'disablity',
          'gPSLocation',  
          'reason',       
          'importHash',
        ]),
        schoolId: data.school || null,
        stateId:district?.stateId || currentUser?.stateId,
        districtId: data.district || null,
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    
  
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.governmentTeacherInformation.getTableName(),
        belongsToColumn: 'teacherPhoto',
        belongsToId: record.id,
      },
      data.teacherPhoto,
      options,
    );
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.governmentTeacherInformation.getTableName(),
        belongsToColumn: 'teacherSignature',
        belongsToId: record.id,
      },
      data.teacherSignature,
      options,
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

    let district = await options.database.district.findOne(      
      {
        where: {
          id:data?.district,
        },
        transaction,
      },
    );
    
    let record = await options.database.governmentTeacherInformation.findOne(      
      {
        where: {
          id,
          tenantId: currentTenant.id,
        },
        transaction,
      },
    );

    if (!record) {
      throw new Error404();
    }

    record = await record.update(
      {
        ...lodash.pick(data, [
          'state',
          'fullName',
          'gender',
          'teacherIDNumber',
          'niraID',
          'educationLevel',
          'graduationYear',
          'taughtLevel',
          'teachingShift',
          'gradesTaught',
          'subjectsTaught',
          'teachertraining',
          'trainingNo',
          'present',
          'contactNumber',
          'experience',
          'joinedYear',
          'disablity',
          'gPSLocation',  
          'reason',        
          'importHash',
        ]),
        schoolId: data.school || null,
        stateId:district?.stateId || currentUser?.stateId,
        districtId: data.district || null,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );



    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.governmentTeacherInformation.getTableName(),
        belongsToColumn: 'teacherPhoto',
        belongsToId: record.id,
      },
      data.teacherPhoto,
      options,
    );
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.governmentTeacherInformation.getTableName(),
        belongsToColumn: 'teacherSignature',
        belongsToId: record.id,
      },
      data.teacherSignature,
      options,
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

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let record = await options.database.governmentTeacherInformation.findOne(
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
        model: options.database.school,
        as: 'school',
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
        model: options.database.state,
        as: 'state',
      },
    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.governmentTeacherInformation.findOne(
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
    };

    const records = await options.database.governmentTeacherInformation.findAll(
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

    return options.database.governmentTeacherInformation.count(
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
        model: options.database.school,
        as: 'school',
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
        model: options.database.state,
        as: 'state',
      },    
    ];

    whereAnd.push({
    });

    if(currentUser?.type == 'District'){
              whereAnd.push(
                SequelizeFilterUtils.ilikeIncludes(
                  'governmentTeacherInformation',
                  'districtId',
                  currentUser?.districtId ,
                ),
              );
    }
           
    else if(currentUser?.type === 'State'){
              whereAnd.push(
                SequelizeFilterUtils.ilikeIncludes(
                  'governmentTeacherInformation',
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
            'governmentTeacherInformation',
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
            'governmentTeacherInformation',
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

      if (filter.teacherIDNumber) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'governmentTeacherInformation',
            'teacherIDNumber',
            filter.teacherIDNumber,
          ),
        );
      }

      if (filter.niraID) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'governmentTeacherInformation',
            'niraID',
            filter.niraID,
          ),
        );
      }

      if (filter.educationLevel) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'governmentTeacherInformation',
            'educationLevel',
            filter.educationLevel,
          ),
        );
      }

      if (filter.graduationYearRange) {
        const [start, end] = filter.graduationYearRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            graduationYear: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            graduationYear: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.taughtLevel) {
        whereAnd.push({
          taughtLevel: filter.taughtLevel,
        });
      }

      if (filter.teachingShift) {
        whereAnd.push({
          teachingShift: filter.teachingShift,
        });
      }

      if (filter.gradesTaught) {
        whereAnd.push(
          SequelizeArrayUtils.filter(
            'governmentTeacherInformation',
            'gradesTaught',
            filter.gradesTaught,
          ),
        );
      }

      if (filter.subjectsTaught) {
        whereAnd.push(
          SequelizeArrayUtils.filter(
            'governmentTeacherInformation',
            'subjectsTaught',
            filter.subjectsTaught,
          ),
        );
      }

      if (filter.teachertraining) {
        whereAnd.push({
          teachertraining: filter.teachertraining,
        });
      }

      if (filter.trainingNo) {
        whereAnd.push({
          trainingNo: filter.trainingNo,
        });
      }

      if (filter.present) {
        whereAnd.push({
          present: filter.present,
        });
      }

      if (filter.contactNumber) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'governmentTeacherInformation',
            'contactNumber',
            filter.contactNumber,
          ),
        );
      }

      if (filter.experienceRange) {
        const [start, end] = filter.experienceRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            experience: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            experience: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.joinedYearRange) {
        const [start, end] = filter.joinedYearRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            joinedYear: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            joinedYear: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.disablity) {
        whereAnd.push({
          disablity: filter.disablity,
        });
      }

      if (filter.gPSLocation) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'governmentTeacherInformation',
            'gPSLocation',
            filter.gPSLocation,
          ),
        );
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
    } = await options.database.governmentTeacherInformation.findAndCountAll({
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

        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.governmentTeacherInformation.findAll(
      {
        attributes: ['id', 'id'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['id', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.id,
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
        teacherPhoto: data.teacherPhoto,
        teacherSignature: data.teacherSignature,
      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'governmentTeacherInformation',
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

    output.teacherPhoto = await FileRepository.fillDownloadUrl(
      await record.getTeacherPhoto({
        transaction,
      }),
    );

    output.teacherSignature = await FileRepository.fillDownloadUrl(
      await record.getTeacherSignature({
        transaction,
      }),
    );

    return output;
  }
}

export default GovernmentTeacherInformationRepository;
