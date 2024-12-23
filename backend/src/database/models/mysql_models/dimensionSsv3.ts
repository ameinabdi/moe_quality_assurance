import { DataTypes } from 'sequelize';
import SequelizeArrayUtils from '../../utils/sequelizeArrayUtils';

export default function (sequelize) {
  const dimensionSsv3 = sequelize.define(
    'dimensionSsv3',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      indicator51: {
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
      indicator52: {
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
      indicator53: {
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
      indicator54: {
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
      indicator55: {
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
      indicator56: {
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
      indicator57: {
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
      indicator58: {
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
      indicator59: {
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
      indicator510: {
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
      indicator511: {
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
      indicator512: {
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
      indicator513: {
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
      indicator514: {
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
      indicator515: {
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
      indicator516: {
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
      indicator517: {
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
      indicator518: {
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
      indicator519: {
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
      indicator520: {
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
      dimension5Challenge: {
        type: DataTypes.TEXT,
       },
       dimension5Rate: {
        type: DataTypes.TEXT,
       },
       dimension5Solution: {
        type: DataTypes.TEXT,
       },
       totalpercentage: {
        type: DataTypes.VIRTUAL,
        get() {
          const rateEachIndicator = 40 / 20;
          const rateEachRate1 = rateEachIndicator / 5;
          const indicators = [
            this.getDataValue('indicator51'),
            this.getDataValue('indicator52'),
            this.getDataValue('indicator53'),
            this.getDataValue('indicator54'),
            this.getDataValue('indicator55'),
            this.getDataValue('indicator56'),
            this.getDataValue('indicator57'),
            this.getDataValue('indicator58'),
            this.getDataValue('indicator59'),
            this.getDataValue('indicator510'),
            this.getDataValue('indicator511'),
            this.getDataValue('indicator512'),
            this.getDataValue('indicator513'),
            this.getDataValue('indicator514'),
            this.getDataValue('indicator515'),
            this.getDataValue('indicator516'),
            this.getDataValue('indicator517'),
            this.getDataValue('indicator518'),
            this.getDataValue('indicator519'),
            this.getDataValue('indicator520'),
          ];

          return indicators.reduce((total, value) => {
            return total + (Number(value) || 0) * rateEachRate1;
          }, 0);
        },
      },
        gradesTaught: {
               type: SequelizeArrayUtils.DataType,
               validate: {
                 isValidOption: function (value) {
                   if (!value || !value.length) {
                     return value;
                   }
       
                   const validOptions: any = [
               "Class 1",
               "Class 2",
               "Class 3",
               "Class 4",
               "Class 5",
               "Class 6",
               "Class 7",
               "Class 8",
               "Class 9",
               "Class 10",
               "Class 11",
               "Class 12"
             ];
       
                   if (
                     value.some(
                       (item) => !validOptions.includes(item),
                     )
                   ) {
                     throw new Error(
                       `${value} is not a valid option`,
                     );
                   }
       
                   return value;
                 },
               },
             },
             subjectsTaught: {
               type: SequelizeArrayUtils.DataType,
               validate: {
                 isValidOption: function (value) {
                   if (!value || !value.length) {
                     return value;
                   }
       
                   const validOptions: any = [
               "Somali",
               "Saynis",
               "Cilmiga-bulshada",
               "Xisaab",
               "English",
               "Technology",
               "Maths",
               "Biology",
               "Chemistry",
               "Physics",
               "Geography",
               "History",
               "Business",
               "Carabi Tarbiyo"
             ];
       
                   if (
                     value.some(
                       (item) => !validOptions.includes(item),
                     )
                   ) {
                     throw new Error(
                       `${value} is not a valid option`,
                     );
                   }
       
                   return value;
                 },
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

  dimensionSsv3.associate = (models) => {
    models.dimensionSsv3.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });
    models.dimensionSsv3.belongsTo(models.schoolSupervision, {
      as: 'schoolSupervision',
      constraints: false,
    });


    
    models.dimensionSsv3.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.dimensionSsv3.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.dimensionSsv3.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return dimensionSsv3;
}
