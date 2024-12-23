import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const schoolSupervision = sequelize.define(
    'schoolSupervision',
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
      introduction: {
        type: DataTypes.TEXT,
      },
      guidelines: {
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

  schoolSupervision.associate = (models) => {
    models.schoolSupervision.belongsTo(models.school, {
      as: 'school',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.schoolSupervision.belongsTo(models.district, {
      as: 'district',
      constraints: false,
    });

    models.schoolSupervision.belongsTo(models.state, {
      as: 'state',
      constraints: false,
    });

    models.schoolSupervision.belongsTo(models.dimensionSsv1, {
      as: 'dimension1',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.schoolSupervision.belongsTo(models.dimensionSsv2, {
      as: 'dimension2',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.schoolSupervision.belongsTo(models.dimensionSsv3, {
      as: 'dimension3',
      constraints: false,
      foreignKey: {
        allowNull: true,
      },
    });
 

    models.schoolSupervision.hasMany(models.file, {
      as: 'signatureofprincipal',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.schoolSupervision.getTableName(),
        belongsToColumn: 'signatureofprincipal',
      },
    });

    models.schoolSupervision.hasMany(models.file, {
      as: 'schoolStamp',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.schoolSupervision.getTableName(),
        belongsToColumn: 'schoolStamp',
      },
    });
    
    models.schoolSupervision.hasMany(models.dimensionSsv3, {
      as: 'dimension3s',
      foreignKey: 'schoolSupervisionId',
      constraints: false,
    });
    models.schoolSupervision.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.schoolSupervision.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.schoolSupervision.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return schoolSupervision;
}
