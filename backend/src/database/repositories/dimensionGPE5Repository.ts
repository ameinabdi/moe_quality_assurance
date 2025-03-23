import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

class DimensionGPE5Repository {

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

    const record = await options.database.dimensionGPE5.create(
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
        teacherId: data.teacher || null,
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

    let record = await options.database.dimensionGPE5.findOne(      
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
        teacherId: data.teacher || null,
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

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let record = await options.database.dimensionGPE5.findOne(
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
        model: options.database.teacherGPE,
        as: 'teacher',
      },
      {
        model: options.database.school,
        as: 'school',
      },
    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const record = await options.database.dimensionGPE5.findOne(
      {
        where: {
          id,
          tenantId: currentTenant.id,
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

    const records = await options.database.dimensionGPE5.findAll(
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

    return options.database.dimensionGPE5.count(
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

    let whereAnd: Array<any> = [];
    let include = [
      {
        model: options.database.teacherGPE,
        as: 'teacher',
      },
      {
        model: options.database.school,
        as: 'school',
      },      
    ];

    whereAnd.push({
      tenantId: tenant.id,
    });

    if (filter) {
      if (filter.id) {
        whereAnd.push({
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        });
      }

      if (filter.indicator51) {
        whereAnd.push({
          indicator51: filter.indicator51,
        });
      }

      if (filter.indicator52) {
        whereAnd.push({
          indicator52: filter.indicator52,
        });
      }

      if (filter.indicator53) {
        whereAnd.push({
          indicator53: filter.indicator53,
        });
      }

      if (filter.indicator54) {
        whereAnd.push({
          indicator54: filter.indicator54,
        });
      }

      if (filter.indicator55) {
        whereAnd.push({
          indicator55: filter.indicator55,
        });
      }

      if (filter.indicator56) {
        whereAnd.push({
          indicator56: filter.indicator56,
        });
      }

      if (filter.indicator57) {
        whereAnd.push({
          indicator57: filter.indicator57,
        });
      }

      if (filter.indicator58) {
        whereAnd.push({
          indicator58: filter.indicator58,
        });
      }

      if (filter.indicator59) {
        whereAnd.push({
          indicator59: filter.indicator59,
        });
      }

      if (filter.indicator510) {
        whereAnd.push({
          indicator510: filter.indicator510,
        });
      }

      if (filter.indicator511) {
        whereAnd.push({
          indicator511: filter.indicator511,
        });
      }

      if (filter.indicator512) {
        whereAnd.push({
          indicator512: filter.indicator512,
        });
      }

      if (filter.indicator513) {
        whereAnd.push({
          indicator513: filter.indicator513,
        });
      }

      if (filter.indicator514) {
        whereAnd.push({
          indicator514: filter.indicator514,
        });
      }

      if (filter.indicator515) {
        whereAnd.push({
          indicator515: filter.indicator515,
        });
      }

      if (filter.indicator516) {
        whereAnd.push({
          indicator516: filter.indicator516,
        });
      }

      if (filter.indicator517) {
        whereAnd.push({
          indicator517: filter.indicator517,
        });
      }

      if (filter.indicator518) {
        whereAnd.push({
          indicator518: filter.indicator518,
        });
      }

      if (filter.indicator519) {
        whereAnd.push({
          indicator519: filter.indicator519,
        });
      }

      if (filter.indicator520) {
        whereAnd.push({
          indicator520: filter.indicator520,
        });
      }

      if (filter.indicator521) {
        whereAnd.push({
          indicator521: filter.indicator521,
        });
      }

      if (filter.indicator522) {
        whereAnd.push({
          indicator522: filter.indicator522,
        });
      }

      if (filter.indicator523) {
        whereAnd.push({
          indicator523: filter.indicator523,
        });
      }

      if (filter.indicator524) {
        whereAnd.push({
          indicator524: filter.indicator524,
        });
      }

      if (filter.teacher) {
        whereAnd.push({
          ['teacherId']: SequelizeFilterUtils.uuid(
            filter.teacher,
          ),
        });
      }

      if (filter.school) {
        whereAnd.push({
          ['schoolId']: SequelizeFilterUtils.uuid(
            filter.school,
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
    } = await options.database.dimensionGPE5.findAndCountAll({
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

    const records = await options.database.dimensionGPE5.findAll(
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

      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'dimensionGPE5',
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

export default DimensionGPE5Repository;
