export default function (sequelize, DataTypes) {
  const user = sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      type: {
        type: DataTypes.TEXT,
      },
      status: {
        type: DataTypes.TEXT,
      },
      fullName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [0, 255],
        },
      },
      firstName: {
        type: DataTypes.STRING(80),
        allowNull: true,
        validate: {
          len: [0, 80],
        },
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [0, 255],
        },
        get() {
          return undefined;
        },
      },
      emailVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      emailVerificationToken: {
        type: DataTypes.STRING(255),
        allowNull: true,
        get() {
          return undefined;
        },
      },
      emailVerificationTokenExpiresAt: {
        type: DataTypes.DATE,
      },
      provider: {
        type: DataTypes.STRING(255),
        validate: {
          len: [0, 255],
        },
      },
      providerId: {
        type: DataTypes.STRING(2024),
        validate: {
          len: [0, 2024],
        },
      },
      passwordResetToken: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [0, 255],
        },
        get() {
          return undefined;
        },
      },
      passwordResetTokenExpiresAt: { type: DataTypes.DATE },
      lastName: {
        type: DataTypes.STRING(175),
        allowNull: true,
        validate: {
          len: [0, 175],
        },
      },
      phoneNumber: {
        type: DataTypes.STRING(24),
        allowNull: true,
        validate: {
          len: [0, 24],
        },
      },
      userName: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          isEmail: true,
          notEmpty: true,
          len: [0, 255],
        },
      },
      groupid: {
        type: DataTypes.TEXT,
      },
      districts: {
        type: DataTypes.TEXT,
      },
      location: {
        type: DataTypes.TEXT,
      },
      userpic: {
        type: DataTypes.JSON,
        allowNull: true
      },
      school: { type: DataTypes.JSON, allowNull: true },
      jwtTokenInvalidBefore: {
        type: DataTypes.DATE,
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
          len: [0, 255],
        },
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['email'],
          where: {
            deletedAt: null,
          },
        },
        {
          unique: true,
          fields: ['importHash'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  user.associate = (models) => {
    models.user.hasMany(models.tenantUser, {
      as: 'tenants',
    });

    models.user.hasMany(models.file, {
      as: { singular: 'avatar', plural: 'avatars' },
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.user.getTableName(),
        belongsToColumn: 'avatars',
      },
    });
    models.user.belongsTo(models.district, {
      as: 'district',
    });
    models.user.belongsTo(models.state, {
      as: 'state',
    });
    models.user.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.user.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  user.beforeCreate((user, options) => {
    user = trimStringFields(user);
    user.fullName = buildFullName(
      user.firstName,
      user.lastName,
    );
  });

  user.beforeUpdate((user, options) => {
    user = trimStringFields(user);
    user.fullName = buildFullName(
      user.firstName,
      user.lastName,
    );
  });

  return user;
}

function buildFullName(firstName, lastName) {
  if (!firstName && !lastName) {
    return null;
  }

  return `${(firstName || '').trim()} ${(
    lastName || ''
  ).trim()}`.trim();
}

function trimStringFields(user) {
  user.email = user.email.trim();

  user.firstName = user.firstName
    ? user.firstName.trim()
    : null;

  user.lastName = user.lastName
    ? user.lastName.trim()
    : null;

  return user;
}
