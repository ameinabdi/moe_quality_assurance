import { DataTypes } from 'sequelize';import moment from 'moment';
import SequelizeArrayUtils from '../../utils/sequelizeArrayUtils';

export default function (sequelize) {
  const governmentTeacherInformation = sequelize.define(
    'governmentTeacherInformation',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      fullName: {
        type: DataTypes.TEXT,
      },
      gender: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Male",
            "Female"
          ]],
        }
      },
      teacherIDNumber: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      niraID: {
        type: DataTypes.TEXT,
      },
      reason: {
        type: DataTypes.TEXT,
      },
      educationLevel: {
        type: DataTypes.TEXT,
      },
      graduationYear: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('graduationYear')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('graduationYear'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      taughtLevel: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            'Primary',
    'Secondary',
    'Primary/Seconday',
    'ABE',
            "Both"
          ]],
        }
      },
      teachingShift: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Morning",
            "Afternoon",
            "Both"
          ]],
        }
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
      teachertraining: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Yes",
            "No"
          ]],
        }
      },
      trainingNo: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Once",
            "Twice",
            "Three times",
            "More than three times"
          ]],
        }
      },
      present: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Yes",
            "No"
          ]],
        }
      },
      contactNumber: {
        type: DataTypes.TEXT,
      },
      experience: {
        type: DataTypes.INTEGER,
      },
      joinedYear: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('joinedYear')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('joinedYear'))
                .format('YYYY-MM-DD')
            : null;
        },
      },
      disablity: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "None",
            "Blindness",
            "Hearing",
            "Legs",
            "Arms"
          ]],
        }
      },
      gPSLocation: {
        type: DataTypes.JSON,
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

  governmentTeacherInformation.associate = (models) => {
    models.governmentTeacherInformation.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });

    models.governmentTeacherInformation.belongsTo(models.region, {
      as: 'region',
      constraints: false,
    });

    models.governmentTeacherInformation.belongsTo(models.district, {
      as: 'district',
      constraints: false,
    });

    models.governmentTeacherInformation.belongsTo(models.state, {
      as: 'state',
      constraints: false,
    });
    models.governmentTeacherInformation.hasMany(models.file, {
      as: 'teacherPhoto',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.governmentTeacherInformation.getTableName(),
        belongsToColumn: 'teacherPhoto',
      },
    });

    models.governmentTeacherInformation.hasMany(models.file, {
      as: 'teacherSignature',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.governmentTeacherInformation.getTableName(),
        belongsToColumn: 'teacherSignature',
      },
    });
    
    models.governmentTeacherInformation.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.governmentTeacherInformation.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.governmentTeacherInformation.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return governmentTeacherInformation;
}
