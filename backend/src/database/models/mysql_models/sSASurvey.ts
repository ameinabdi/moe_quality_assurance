import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const sSASurvey = sequelize.define(
    'sSASurvey',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      finalizedDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('finalizedDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('finalizedDate'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      principal: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      district: {
        type: DataTypes.TEXT,
      },
      state: {
        type: DataTypes.TEXT,
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
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
        {
          unique: true,
          fields: ['dimension5Id', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  sSASurvey.associate = (models) => {
    models.sSASurvey.belongsTo(models.school, {
      as: 'school',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.sSASurvey.belongsTo(models.dimension1, {
      as: 'dimension1',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.sSASurvey.belongsTo(models.deminsion2, {
      as: 'dimension2',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.sSASurvey.belongsTo(models.dimension3, {
      as: 'dimension3',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.sSASurvey.belongsTo(models.dimension4, {
      as: 'dimension4',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.sSASurvey.belongsTo(models.dimension5, {
      as: 'dimension5',
      constraints: false,
    });

    models.sSASurvey.hasMany(models.file, {
      as: 'signatureofprincipal',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.sSASurvey.getTableName(),
        belongsToColumn: 'signatureofprincipal',
      },
    });

    models.sSASurvey.hasMany(models.file, {
      as: 'schoolStamp',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.sSASurvey.getTableName(),
        belongsToColumn: 'schoolStamp',
      },
    });
    models.sSASurvey.hasMany(models.file, {
      as: 'schoolImprovement',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.sSASurvey.getTableName(),
        belongsToColumn: 'schoolImprovement',
      },
    });
    
    models.sSASurvey.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.sSASurvey.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.sSASurvey.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return sSASurvey;
}
