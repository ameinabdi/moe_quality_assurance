import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const teacherGPE = sequelize.define(
    'teacherGPE',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      fullName: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      gender: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "Male",
            "Female"
          ]],
        }
      },
      subjectName: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
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
          ]],
        }
      },
      teachingLevel: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "Primary",
            "Secondary"
          ]],
        }
      },
      grade: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
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
            "Class 12",
            ""
          ]],
        }
      },
      totalStudent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      maleStudents: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
      },
      femaleStudent: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

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

  teacherGPE.associate = (models) => {
    models.teacherGPE.belongsTo(models.school, {
      as: 'school',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });
    models.teacherGPE.belongsTo(models.state, {
      as: 'state',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });
    models.teacherGPE.belongsTo(models.region, {
      as: 'region',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.teacherGPE.belongsTo(models.district, {
      as: 'district',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    models.teacherGPE.hasOne(models.dimensionGPE5, {
      as: "dimension5",
      foreignKey: 'teacherId',
      constraints: false,
    });
    models.teacherGPE.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.teacherGPE.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.teacherGPE.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return teacherGPE;
}
