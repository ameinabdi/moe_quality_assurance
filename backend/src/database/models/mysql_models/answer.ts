import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const answer = sequelize.define(
    'answer',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      answer: {
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

  answer.associate = (models) => {
    models.answer.belongsTo(models.assessment, {
      as: 'assessment',
      constraints: false,
    });

    models.answer.belongsTo(models.question, {
      as: 'question',
      constraints: false,
    });


    
    models.answer.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.answer.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.answer.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return answer;
}
