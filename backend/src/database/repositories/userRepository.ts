import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import FileRepository from './fileRepository';
import AuditLogRepository from './auditLogRepository';
import crypto from 'crypto';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize,{QueryTypes} from 'sequelize';
import { isUserInTenant } from '../utils/userTenantUtils';
import { getConfig } from '../../config';
import { IRepositoryOptions } from './IRepositoryOptions';
import SequelizeArrayUtils from '../utils/sequelizeArrayUtils';
import lodash from 'lodash';
import Error400 from '../../errors/Error400';

const Op = Sequelize.Op;

export default class UserRepository {
  static async create(data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const user = await options.database.user.create(
      {
        id: data.id || undefined,
        email: data.email,
        username:data.email,
        type: data.type,
        groupId:data.group,
        stateId:data.state,
        districtId:data.district,
        password:data.password,
        fullName: data.fullName,
        firstName: data.firstName ||  data.firstName,
        lastName: data.lastName || null,
        phoneNumber: data.phoneNumber || null,
        importHash: data.importHash || null,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.user.getTableName(),
        belongsToColumn: 'avatars',
        belongsToId: user.id,
      },
      data.avatars,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.CREATE,
        values: {
          ...user.get({ plain: true }),
          avatars: data.avatars,
        },
      },
      options,
    );

    return this.findById(user.id, {
      ...options,
      bypassPermissionValidation: true,
    });
  }

  static async createFromAuth(
    data,
    options: IRepositoryOptions,
  ) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const user = await options.database.user.create(
      {
        email: data.email,
        firstName: data.firstName,
        password: data.password,
      },
      { transaction },
    );

    delete user.password;
    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.CREATE,
        values: {
          ...user.get({ plain: true }),
          avatars: data.avatars,
        },
      },
      options,
    );

    return this.findById(user.id, {
      ...options,
      bypassPermissionValidation: true,
    });
  }

  static async updateProfile(
    id,
    data,
    options: IRepositoryOptions,
  ) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const user = await options.database.user.findByPk(id, {
      transaction,
    });

    await user.update(
      {
        firstName: data.firstName || null,
        lastName: data.lastName || null,
        phoneNumber: data.phoneNumber || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.user.getTableName(),
        belongsToColumn: 'avatars',
        belongsToId: user.id,
      },
      data.avatars,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.UPDATE,
        values: {
          ...user.get({ plain: true }),
          avatars: data.avatars,
        },
      },
      options,
    );

    return this.findById(user.id, options);
  }

  static async updatePassword(
    id,
    password,
    invalidateOldTokens: boolean,
    options: IRepositoryOptions,
  ) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const user = await options.database.user.findByPk(id, {
      transaction,
    });

    const data: any = {
      password,
      updatedById: currentUser.id,
    };

    if (invalidateOldTokens) {
      data.jwtTokenInvalidBefore = new Date();
    }

    await user.update(data, { transaction });

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.UPDATE,
        values: {
          id,
        },
      },
      options,
    );

    return this.findById(user.id, {
      ...options,
      bypassPermissionValidation: true,
    });
  }

  static async generateEmailVerificationToken(
    email,
    options: IRepositoryOptions,
  ) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const user = await options.database.user.findOne({
      where: { email },
      transaction,
    });

    const emailVerificationToken = crypto
      .randomBytes(20)
      .toString('hex');
    const emailVerificationTokenExpiresAt =
      Date.now() + 24 * 60 * 60 * 1000;

    await user.update(
      {
        emailVerificationToken,
        emailVerificationTokenExpiresAt,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.UPDATE,
        values: {
          id: user.id,
          emailVerificationToken,
          emailVerificationTokenExpiresAt,
        },
      },
      options,
    );

    return emailVerificationToken;
  }

  static async generatePasswordResetToken(
    email,
    options: IRepositoryOptions,
  ) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const user = await options.database.user.findOne({
      where: { email },
      transaction,
    });

    const passwordResetToken = crypto
      .randomBytes(20)
      .toString('hex');
    const passwordResetTokenExpiresAt =
      Date.now() + 24 * 60 * 60 * 1000;

    await user.update(
      {
        passwordResetToken,
        passwordResetTokenExpiresAt,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.UPDATE,
        values: {
          id: user.id,
          passwordResetToken,
          passwordResetTokenExpiresAt,
        },
      },
      options,
    );

    return passwordResetToken;
  }

  static async addtoDBUser(
    id,
    data,
    options: IRepositoryOptions,
  ) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const user = await options.database.user.findByPk(id, {
      transaction,
    });
    const password = data.password.slice(4)
  
  
    if(user){
      await user.update(
        {
          id: data.ID || undefined,
          email: data.email || data.userName+'@emis.gov.so',
          userName: data.username,
          password: '$2b$'+password,
          firstName: data.fullname || null,
          fullName:data.fullname || null,
          groupid:data.groupid || null,
          districts:data.districts || null,
          location:data.location || null,
          userpic:data.userpic || null,
          school:data.school || null,
          phoneNumber: data.phone || null,
          updatedById: currentUser.id,
        },
        { transaction },
      );
  
      
      await AuditLogRepository.log(
        {
          entityName: 'user',
          entityId: user.id,
          action: AuditLogRepository.UPDATE,
          values: {
            ...user.get({ plain: true }),
            avatars: data.avatars,
            roles: data.roles,
          },
        },
        options,
      );
      return this.findById(user.id, options);

    }else{
      const user = await options.database.user.create(
        {
          id: data.ID || undefined,
          email: data.email || data.userName+'@emis.gov.so',
          userName: data.username,
          password: '$2b$'+password,
          firstName: data.fullname || null,
          fullName:data.fullname || null,
          groupid:data.groupid || null,
          districts:data.districts || null,
          location:data.location || null,
          userpic:data.userpic || null,
          school:data.school || null,
          phoneNumber: data.phone || null,
          importHash: data.importHash || null,
          createdById: currentUser.id,
          updatedById: currentUser.id,
        },
        { transaction },
      );
  
      
      await AuditLogRepository.log(
        {
          entityName: 'user',
          entityId: user.id,
          action: AuditLogRepository.CREATE,
          values: {
            ...user.get({ plain: true }),
            avatars: data.avatars,
          },
        },
        options,
      );
  
      return this.findById(user.id, {
        ...options,
        bypassPermissionValidation: true,
      });

    }
  }

  static async update(
    id,
    data,
    options: IRepositoryOptions,
  ) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const user = await options.database.user.findByPk(id, {
      transaction,
    });

    await user.update(
      {
        firstName: data.firstName || null,
        lastName: data.lastName || null,
        phoneNumber: data.phoneNumber || null,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.user.getTableName(),
        belongsToColumn: 'avatars',
        belongsToId: user.id,
      },
      data.avatars,
      options,
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.UPDATE,
        values: {
          ...user.get({ plain: true }),
          avatars: data.avatars,
          roles: data.roles,
        },
      },
      options,
    );

    return this.findById(user.id, options);
  }

  static async findByEmail(
    email,
    options: IRepositoryOptions,
  ) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );
    const user = await options.database.user.findOne({
      where: {
        [Op.or]: [
          SequelizeFilterUtils.ilikeExact(
            'user',
            'email',
            email,
          ),
          SequelizeFilterUtils.ilikeExact(
            'user',
            'userName',
            email,
          ),
        ],
        [Op.and]:{
          status:null
        }
        },
        transaction,
    });
    if(!user){
      const [users] = await options.database2.sequelize2.query(
        "SELECT TOP 1 * FROM users WHERE username = :Email",
        {
          type: QueryTypes.SELECT,
          replacements: { Email: email },
        }
      );
      if(!users){
        throw new Error400(
          options.language,
          'auth.userNotFound',
        );
      }
      if (users?.groupid =='School') {
        const [school] = await options.database2.sequelize2.query(
          "SELECT TOP 1 * FROM [setups].[Institutions_Profile_list]  WHERE RegNo = :RegNo",
          {
            type: QueryTypes.SELECT,
            replacements: { RegNo: users?.districts },
          }
        );
        return {...users,school}
      }
  
      return users
    }
    return user;
  }

  static async findByEmailWithoutAvatar(
    email,
    options: IRepositoryOptions,
  ) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await options.database.user.findOne({
      where: {
        [Op.and]: SequelizeFilterUtils.ilikeExact(
          'user',
          'email',
          email,
        ),
      },
      transaction,
    });

    return this._fillWithRelationsAndFiles(record, options);
  }

  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let whereAnd: Array<any> = [];
    let include: any = [
      {
        model: options.database.state,
        as: 'state',
      },
    ];

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (!filter || (!filter.role && !filter.status)) {
      include.push({
        model: options.database.tenantUser,
        as: 'tenants',
        
      });
    }

    if (filter) {
      if (filter.id) {
        whereAnd.push({
          ['id']: filter.id,
        });
      }

      if (filter.fullName) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'user',
            'fullName',
            filter.fullName,
          ),
        );
      }

      if (filter.email) {
        whereAnd.push(
          SequelizeFilterUtils.ilikeIncludes(
            'user',
            'email',
            filter.email,
          ),
        );
      }

      if (filter.role) {
        const innerWhereAnd: Array<any> = [];

        innerWhereAnd.push({
          ['tenantId']: currentTenant.id,
        });

        innerWhereAnd.push(
          SequelizeArrayUtils.filter(
            `tenants`,
            `roles`,
            filter.role,
          ),
        );

        include.push({
          model: options.database.tenantUser,
          as: 'tenants',
          where: { [Op.and]: innerWhereAnd },
        });
      }

      if (filter.status) {
        include.push({
          model: options.database.tenantUser,
          as: 'tenants',
          where: {
            ['tenantId']: currentTenant.id,
            status: filter.status,
          },
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
    } = await options.database.user.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy
        ? [orderBy.split('_')]
        : [['email', 'ASC']],
      transaction,
    });

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );


    return { rows, count };
  }

  static async findAllAutocomplete(
    query,
    limit,
    options: IRepositoryOptions,
  ) {
    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [];
    let include = [
      {
        model: options.database.tenantUser,
        as: 'tenants',
        where: {
          ['tenantId']: currentTenant.id,
        },
      },
    ];

    if (query) {
      whereAnd.push({
        [Op.or]: [
          {
            ['id']: SequelizeFilterUtils.uuid(query),
          },
          SequelizeFilterUtils.ilikeIncludes(
            'user',
            'fullName',
            query,
          ),
          SequelizeFilterUtils.ilikeIncludes(
            'user',
            'email',
            query,
          ),
        ],
      });
    }

    const where = { [Op.and]: whereAnd };

    let users = await options.database.user.findAll({
      attributes: ['id', 'fullName', 'email'],
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      order: [['fullName', 'ASC']],
    });

    users = this._mapUserForTenantForRows(
      users,
      currentTenant,
    );

    const buildText = (user) => {
      if (!user.fullName) {
        return user.email;
      }

      return `${user.fullName} <${user.email}>`;
    };

    return users.map((user) => ({
      id: user.id,
      label: buildText(user),
    }));
  }

  static async findById(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );
 
    let record = await options.database.user.findByPk(id, {
      transaction,
    });

    if (!record || record?.status != null) {
      throw new Error404();
    }

   

    return record;
  }

  static async findByIdWithoutAvatar(
    id,
    options: IRepositoryOptions,
  ) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.user.findByPk(id, {
      transaction,
    });

    const currentTenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    record = await this._fillWithRelationsAndFiles(
      record,
      options,
    );

    if (!options || !options.bypassPermissionValidation) {
      if (!isUserInTenant(record, currentTenant)) {
        throw new Error404();
      }
    }

    return record;
  }

  static async findByPasswordResetToken(
    token,
    options: IRepositoryOptions,
  ) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await options.database.user.findOne({
      where: {
        passwordResetToken: token,
        // Find only not expired tokens
        passwordResetTokenExpiresAt: {
          [options.database.Sequelize.Op.gt]: Date.now(),
        },
      },
      transaction,
    });

    return this._fillWithRelationsAndFiles(record, options);
  }

  static async findByEmailVerificationToken(
    token,
    options: IRepositoryOptions,
  ) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await options.database.user.findOne({
      where: {
        emailVerificationToken: token,
        emailVerificationTokenExpiresAt: {
          [options.database.Sequelize.Op.gt]: Date.now(),
        },
      },
      transaction,
    });

    return this._fillWithRelationsAndFiles(record, options);
  }

  static async markEmailVerified(
    id,
    options: IRepositoryOptions,
  ) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const user = await options.database.user.findByPk(id, {
      transaction,
    });

    await user.update(
      {
        emailVerified: true,
        updatedById: currentUser.id,
      },
      { transaction },
    );

    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.UPDATE,
        values: {
          id,
          emailVerified: true,
        },
      },
      options,
    );

    return true;
  }

  static async count(filter, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    return options.database.user.count({
      where: filter,
      transaction,
    });
  }

  static async findPassword(
    id,
    options: IRepositoryOptions,
  ) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const user = await options.database.user.findByPk(
      id,
      {
        raw: true,
        transaction,
      },
    );
    if(!user){
      const [record] = await options.database2.sequelize2.query(
        "SELECT TOP 1 * FROM users WHERE ID = :ID",
        {
          type: QueryTypes.SELECT,
          replacements: { ID: id },
        }
      );
  
      if (!record) {
        return null;
      }
  
      const password = record.password.slice(4)
  
      return '$2b$'+password;
    }

    return user.password;
  }

  static async createFromSocial(
    provider,
    providerId,
    email,
    emailVerified,
    firstName,
    lastName,
    options,
  ) {
    let data = {
      email,
      emailVerified,
      providerId,
      provider,
      firstName,
      lastName,
    };

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const user = await options.database.user.create(data, {
      transaction,
    });

    delete user.password;
    await AuditLogRepository.log(
      {
        entityName: 'user',
        entityId: user.id,
        action: AuditLogRepository.CREATE,
        values: {
          ...user.get({ plain: true }),
        },
      },
      options,
    );

    return this.findById(user.id, {
      ...options,
      bypassPermissionValidation: true,
    });
  }

  static cleanupForRelationships(userOrUsers) {
    if (!userOrUsers) {
      return userOrUsers;
    }

    if (Array.isArray(userOrUsers)) {
      return userOrUsers.map((user) =>
        lodash.pick(user, [
          'id',
          'firstName',
          'lastName',
          'email',
        ]),
      );
    }

    return lodash.pick(userOrUsers, [
      'id',
      'firstName',
      'lastName',
      'email',
    ]);
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

    let include = [
      {
        model: options.database.tenantUser,
        as: 'tenants',
        where: {
          ['tenantId']: currentTenant.id,
        },
      },
    ];

    const records = await options.database.user.findAll({
      attributes: ['id'],
      where,
      include,
    });

    return records.map((record) => record.id);
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

  static async _fillWithRelationsAndFiles(
    record,
    options: IRepositoryOptions,
  ) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    output.avatars = await FileRepository.fillDownloadUrl(
      await record.getAvatars({
        transaction: SequelizeRepository.getTransaction(
          options,
        ),
      }),
    );

    output.tenants = await record.getTenants({
      include: [
        {
          model: options.database.tenant,
          as: 'tenant',
          required: true,
          include: ['settings'],
        },
      ],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    return output;
  }

  /**
   * Maps the users data to show only the current tenant related info
   */
  static _mapUserForTenantForRows(rows, tenant) {
    if (!rows) {
      return rows;
    }

    return rows.map((record) =>
      this._mapUserForTenant(record, tenant),
    );
  }

  /**
   * Maps the user data to show only the current tenant related info
   */
  static _mapUserForTenant(user, tenant) {
    if (!user || !user.tenants) {
      return user;
    }

    const tenantUser = user.tenants.find(
      (tenantUser) =>
        tenantUser &&
        tenantUser.tenant &&
        String(tenantUser.tenant.id) === String(tenant.id),
    );

    delete user.tenants;

    const status = tenantUser ? tenantUser.status : null;
    const roles = tenantUser ? tenantUser.roles : [];

    // If the user is only invited,
    // tenant members can only see its email
    const otherData = status === 'active' ? user : {};

    return {
      ...otherData,
      id: user.id,
      email: user.email,
      roles,
      status,
    };
  }
}
