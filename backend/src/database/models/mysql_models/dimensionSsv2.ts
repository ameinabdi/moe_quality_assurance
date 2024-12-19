import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const dimensionSsv2 = sequelize.define(
    'dimensionSsv2',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      indicator31: {
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
      indicator32: {
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
      indicator33: {
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
      indicator34: {
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
      indicator35: {
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
      indicator36: {
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
      indicator37: {
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
      indicator38: {
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
      indicator39: {
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
      indicator310: {
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
      indicator311: {
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
      indicator312: {
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
      indicator313: {
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
      indicator314: {
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
      indicator315: {
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
      dimension3Challenge: {
        type: DataTypes.TEXT,
       },
       dimension3Rate: {
        type: DataTypes.TEXT,
       },
       dimension3Solution: {
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

  dimensionSsv2.associate = (models) => {
    models.dimensionSsv2.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });


    
    models.dimensionSsv2.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.dimensionSsv2.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.dimensionSsv2.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return dimensionSsv2;
}
