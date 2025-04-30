import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const dimensionSsv1 = sequelize.define(
    'dimensionSsv1',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      indicator11: {
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
      indicator12: {
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
      indicator13: {
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
      indicator14: {
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
      indicator15: {
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
      indicator16: {
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
      indicator17: {
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
      indicator18: {
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
      indicator19: {
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
      indicator110: {
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
      indicator111: {
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
      indicator112: {
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
      indicator113: {
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
      indicator114: {
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
      dimension1Challenge: {
        type: DataTypes.TEXT,
       },
       dimension1Rate: {
        type: DataTypes.TEXT,
       },
       dimension1Solution: {
        type: DataTypes.TEXT,
       },
       dimension1Percentage: {
        type: DataTypes.VIRTUAL,
        get(this: any) {
          const indicators = [
            this.getDataValue('indicator11'),
            this.getDataValue('indicator12'),
            this.getDataValue('indicator13'),
            this.getDataValue('indicator14'),
            this.getDataValue('indicator15'),
            this.getDataValue('indicator16'),
            this.getDataValue('indicator17'),
            this.getDataValue('indicator18'),
            this.getDataValue('indicator19'),
            this.getDataValue('indicator110'),
            this.getDataValue('indicator111'),
            this.getDataValue('indicator112'),
            this.getDataValue('indicator113'),
            this.getDataValue('indicator114'),
          ];
      
          const validIndicators = indicators
            .map(i => parseFloat(i))
            .filter(i => !isNaN(i));
      
          const dimension1RateEachIndicator = 20 / 14;
          const dimension1RateEachRate = dimension1RateEachIndicator / 5;
      
          const total = validIndicators.reduce(
            (sum, val) => sum + (val * dimension1RateEachRate),
            0
          );
      
          return total.toFixed(2);
        },
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

  dimensionSsv1.associate = (models) => {
    models.dimensionSsv1.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });


    
    models.dimensionSsv1.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.dimensionSsv1.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.dimensionSsv1.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return dimensionSsv1;
}
