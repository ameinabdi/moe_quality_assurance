import { DataTypes } from 'sequelize';import moment from 'moment';

export default function (sequelize) {
  const schoolSupervisionGPE = sequelize.define(
    'schoolSupervisionGPE',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      introduction: {
        type: DataTypes.TEXT,
      },
      guidelines: {
        type: DataTypes.TEXT,
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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  schoolSupervisionGPE.associate = (models) => {
    models.schoolSupervisionGPE.belongsTo(models.school, {
      as: 'school',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });
    models.schoolSupervisionGPE.belongsTo(models.district, {
      as: 'district',
      constraints: false,
    });

    models.schoolSupervisionGPE.belongsTo(models.state, {
      as: 'state',
      constraints: false,
    });
    models.schoolSupervisionGPE.belongsTo(models.dimensionGPE1, {
      as: 'dimension1',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.schoolSupervisionGPE.belongsTo(models.dimensionGPE2, {
      as: 'dimension2',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.schoolSupervisionGPE.belongsTo(models.dimensionGPE3, {
      as: 'dimension3',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.schoolSupervisionGPE.belongsTo(models.dimensionGPE4, {
      as: 'dimension4',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.schoolSupervisionGPE.hasMany(models.file, {
      as: 'signatureofprincipal',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.schoolSupervisionGPE.getTableName(),
        belongsToColumn: 'signatureofprincipal',
      },
    });

    models.schoolSupervisionGPE.hasMany(models.file, {
      as: 'schoolStamp',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.schoolSupervisionGPE.getTableName(),
        belongsToColumn: 'schoolStamp',
      },
    });
    
    models.schoolSupervisionGPE.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.schoolSupervisionGPE.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.schoolSupervisionGPE.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return schoolSupervisionGPE;
}
