import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';import FileRepository from './fileRepository';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class SchoolSupervisionRepository {

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

    const school = await options.database.school.create(
      {
        ...lodash.pick(data, [
          'schoolName',
          'schoolLevel',
          'schoolType',
          'schoolPhone',
          'schoolEmail',
          'schoolLocation',
          'schoolEMISNumber',
          'classes',
          'toilets',
          'maleStaff',
          'femaleStaff',
          'nonTeachingFemaleStaff',
          'nonTeachingMaleStaff',
          'headTeacher',
          'headsex',
          'headTeacherPhone',
          'headTeacherLevelEduction',          
          'importHash',
        ]),
        districtId: data.district || null,
        stateId:district?.stateId || currentUser?.stateId,
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );
    const dimension1 = await options.database.dimensionSsv1.create(
      {
        ...lodash.pick(data, [
          'indicator11',
          'indicator12',
          'indicator13',
          'indicator14',
          'indicator15',
          'indicator16',
          'indicator17',
          'indicator18',
          'indicator19',
          'indicator110',
          'indicator111',
          'indicator112',
          'indicator113',
          'indicator114',
          'dimension1Challenge',
          'dimension1Rate',
          'dimension1Solution',          
          'importHash',
        ]),
        schoolId: data.school || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    const dimension2 = await options.database.dimensionSsv2.create(
      {
        ...lodash.pick(data, [
          'indicator31',
          'indicator32',
          'indicator33',
          'indicator34',
          'indicator35',
          'indicator36',
          'indicator37',
          'indicator38',
          'indicator39',
          'indicator310',
          'indicator311',
          'indicator312',
          'indicator313',
          'indicator314',
          'indicator315',   
          'dimension3Challenge',
          'dimension3Rate',
          'dimension3Solution',        
          'importHash',
        ]),
        schoolId: data.school || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );
  
    const record = await options.database.schoolSupervision.create(
      {
        ...lodash.pick(data, [
          'finalizedDate',
          'principal',
          'introduction',
          'guidelines',          
          'importHash',
        ]),
        districtId: data.district || null,
        stateId:district?.stateId || currentUser?.stateId,
        schoolId: school.id || null,
        dimension1Id: dimension1.id || null,
        dimension2Id: dimension2.id || null,
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
        belongsTo: options.database.schoolSupervision.getTableName(),
        belongsToColumn: 'signatureofprincipal',
        belongsToId: record.id,
      },
      data.signatureofprincipal,
      options,
    );
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.schoolSupervision.getTableName(),
        belongsToColumn: 'schoolStamp',
        belongsToId: record.id,
      },
      data.schoolStamp,
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

    let record = await options.database.schoolSupervision.findOne(      
      {
        where: {
          id,
        },
        transaction,
      },
    );

    let school = await options.database.school.findOne(      
      {
        where: {
          id:record?.schoolId,
        },
        transaction,
      },
    );
    
    let dimension1 = await options.database.dimensionSsv1.findOne(      
      {
        where: {
          id:record?.dimension1Id,
        },
        transaction,
      },
    );
    let dimension2 = await options.database.dimensionSsv2.findOne(      
      {
        where: {
          id:record?.dimension2Id,
        },
        transaction,
      },
    );
   
    

    if (!record && !school &&!dimension1 &&!dimension2 ) {
      throw new Error404();
    }

    school = await school.update(
      {
        ...lodash.pick(data, [
          'schoolName',
          'schoolLevel',
          'schoolType',
          'schoolPhone',
          'schoolEmail',
          'schoolLocation',
          'schoolEMISNumber',
          'classes',
          'toilets',
          'maleStaff',
          'femaleStaff',
          'nonTeachingFemaleStaff',
          'nonTeachingMaleStaff',
          'headTeacher',
          'headsex',
          'headTeacherPhone',
          'headTeacherLevelEduction',          
          'importHash',
        ]),
        stateId:district?.stateId || currentUser?.stateId,
        districtId: data.district ,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    dimension1 = await dimension1.update(
      {
        ...lodash.pick(data, [
          'indicator11',
          'indicator12',
          'indicator13',
          'indicator14',
          'indicator15',
          'indicator16',
          'indicator17',
          'indicator18',
          'indicator19',
          'indicator110',
          'indicator111',
          'indicator112',
          'indicator113',
          'indicator114',  
          'dimension1Challenge',
          'dimension1Rate',
          'dimension1Solution',        
          'importHash',
        ]),
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    dimension2 = await dimension2.update(
      {
        ...lodash.pick(data, [
          'indicator31',
          'indicator32',
          'indicator33',
          'indicator34',
          'indicator35',
          'indicator36',
          'indicator37',
          'indicator38',
          'indicator39',
          'indicator310',
          'indicator311',
          'indicator312',
          'indicator313',
          'indicator314',
          'indicator315', 
          'dimension3Challenge',
          'dimension3Rate',
          'dimension3Solution',         
          'importHash',
        ]),
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    record = await record.update(
      {
        ...lodash.pick(data, [
          'finalizedDate',
          'principal',
          'importHash',
        ]),
        stateId:district?.stateId || currentUser?.stateId,
        districtId: data.district ,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );



    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.schoolSupervision.getTableName(),
        belongsToColumn: 'signatureofprincipal',
        belongsToId: record.id,
      },
      data.signatureofprincipal,
      options,
    );
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.schoolSupervision.getTableName(),
        belongsToColumn: 'schoolStamp',
        belongsToId: record.id,
      },
      data.schoolStamp,
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

    let record = await options.database.schoolSupervision.findOne(
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
        model: options.database.dimensionSsv1,
        as: 'dimension1',
      },
      {
        model: options.database.dimensionSsv2,
        as: 'dimension2',
      },
      {
        model: options.database.dimensionSsv3,
        as: 'dimension3',
      },
      
    ];

    const record = await options.database.schoolSupervision.findOne(
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

    const records = await options.database.schoolSupervision.findAll(
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

    return options.database.schoolSupervision.count(
      {
        where: {
          ...filter,
          tenantId: tenant.id,
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
        model: options.database.dimensionSsv1,
        as: 'dimension1',
      },
      {
        model: options.database.dimensionSsv2,
        as: 'dimension2',
      },
      {
        model: options.database.dimensionSsv3,
        as: 'dimension3',
      },
      {
        model: options.database.dimensionSsv3,
        as: 'dimension3s',
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

     if(currentUser?.school?.RegNo){
          whereAnd.push(
            SequelizeFilterUtils.ilikeIncludes(
              'schoolSupervision',
              'schoolEMISNumber',
              currentUser?.school?.RegNo,
            ),
          );
          
        }else if(currentUser?.type == 'District'){
          whereAnd.push(
            SequelizeFilterUtils.ilikeIncludes(
              'schoolSupervision',
              'districtId',
              currentUser?.districtId ,
            ),
          );
        }
       
        else if(currentUser?.type === 'State'){
          whereAnd.push(
            SequelizeFilterUtils.ilikeIncludes(
              'schoolSupervision',
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

      if (filter.district) {
        whereAnd.push({
          ['districtId']: filter.district,
        });
      }

      if (filter.finalizedDateRange) {
        const [start, end] = filter.finalizedDateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            finalizedDate: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            finalizedDate: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.principal) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'schoolSupervision',
            'principal',
            filter.principal,
          ),
        );
      }

      if (filter.introduction) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'schoolSupervision',
            'introduction',
            filter.introduction,
          ),
        );
      }

      if (filter.guidelines) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'schoolSupervision',
            'guidelines',
            filter.guidelines,
          ),
        );
      }

      if (filter.school) {
        whereAnd.push({
          ['schoolId']: SequelizeFilterUtils.uuid(
            filter.school,
          ),
        });
      }

      if (filter.dimension1) {
        whereAnd.push({
          ['dimension1Id']: SequelizeFilterUtils.uuid(
            filter.dimension1,
          ),
        });
      }

      if (filter.dimension2) {
        whereAnd.push({
          ['dimension2Id']: SequelizeFilterUtils.uuid(
            filter.dimension2,
          ),
        });
      }

      if (filter.dimension3) {
        whereAnd.push({
          ['dimension3Id']: SequelizeFilterUtils.uuid(
            filter.dimension3,
          ),
        });
      }

      if (filter.dimension4) {
        whereAnd.push({
          ['dimension4Id']: SequelizeFilterUtils.uuid(
            filter.dimension4,
          ),
        });
      }

      if (filter.dimension5) {
        whereAnd.push({
          ['dimension5Id']: SequelizeFilterUtils.uuid(
            filter.dimension5,
          ),
        });
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
    } = await options.database.schoolSupervision.findAndCountAll({
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
      distinct:true
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
              'schoolSupervision',
              'principal',
              query,
            ),
          },
        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    const records = await options.database.schoolSupervision.findAll(
      {
        attributes: ['id', 'principal'],
        where,
        limit: limit ? Number(limit) : undefined,
        order: [['principal', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.principal,
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
        signatureofprincipal: data.signatureofprincipal,
        schoolStamp: data.schoolStamp,
      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'schoolSupervision',
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

    output.signatureofprincipal = await FileRepository.fillDownloadUrl(
      await record.getSignatureofprincipal({
        transaction,
      }),
    );

    output.schoolStamp = await FileRepository.fillDownloadUrl(
      await record.getSchoolStamp({
        transaction,
      }),
    );

    return output;
  }
}

export default SchoolSupervisionRepository;
