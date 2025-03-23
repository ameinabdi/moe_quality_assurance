import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const dimensionGPE4 = sequelize.define(
    'dimensionGPE4',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      indicator41: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator42: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator43: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator44: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      dimension4Challenge: {
        type: DataTypes.TEXT,
       },
       dimension4Rate: {
        type: DataTypes.TEXT,
       },
       dimension4Solution: {
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

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  dimensionGPE4.associate = (models) => {
    models.dimensionGPE4.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });


    
    models.dimensionGPE4.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.dimensionGPE4.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.dimensionGPE4.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return dimensionGPE4;
}
