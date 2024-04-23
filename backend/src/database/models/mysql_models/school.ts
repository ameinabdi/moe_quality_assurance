import { DataTypes } from 'sequelize';import SequelizeArrayUtils from '../../utils/sequelizeArrayUtils';

export default function (sequelize) {
  const school = sequelize.define(
    'school',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      schoolName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      schoolLevel: {
        type: SequelizeArrayUtils.DataType,
        validate: {
          isValidOption: function (value) {
            if (!value || !value.length) {
              return value;
            }

            const validOptions: any = [
        "Primary",
        "Intermediate",
        "Secondary"
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
      schoolType: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Private",
            "Public",
            "Community"
          ]],
        }
      },
      schoolPhone: {
        type: DataTypes.TEXT,
      },
      schoolEmail: {
        type: DataTypes.TEXT,
      },
      schoolLocation: {
        type: DataTypes.TEXT,
      },
      schoolEMISNumber: {
        type: DataTypes.TEXT,
      },
      classes: {
        type: DataTypes.TEXT,
      },
      toilets: {
        type: DataTypes.INTEGER,
      },
      maleStaff: {
        type: DataTypes.INTEGER,
      },
      femaleStaff: {
        type: DataTypes.INTEGER,
      },
      nonTeachingFemaleStaff: {
        type: DataTypes.INTEGER,
      },
      nonTeachingMaleStaff: {
        type: DataTypes.INTEGER,
      },
      headTeacher: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      headsex: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Male",
            "Female"
          ]],
        }
      },
      headTeacherPhone: {
        type: DataTypes.TEXT,
      },
      headTeacherLevelEduction: {
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

  school.associate = (models) => {



    
    models.school.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.school.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.school.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return school;
}
