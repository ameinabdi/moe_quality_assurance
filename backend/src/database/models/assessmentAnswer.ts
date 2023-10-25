import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const assessmentAnswer = sequelize.define(
    'assessmentAnswer',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      status: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "Created",
            "Draft",
            "Submitted"
          ]],
        }
      },
      submitDate: {
        type: DataTypes.DATE,
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

  assessmentAnswer.associate = (models) => {
    models.assessmentAnswer.belongsTo(models.assessment, {
      as: 'assessment',
      constraints: false,
    });


    
    models.assessmentAnswer.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.assessmentAnswer.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.assessmentAnswer.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return assessmentAnswer;
}
