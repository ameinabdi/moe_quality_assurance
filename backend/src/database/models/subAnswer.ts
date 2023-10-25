import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const subAnswer = sequelize.define(
    'subAnswer',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      subAnswer: {
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

  subAnswer.associate = (models) => {
    models.subAnswer.belongsTo(models.assessment, {
      as: 'assessment',
      constraints: false,
    });

    models.subAnswer.belongsTo(models.question, {
      as: 'question',
      constraints: false,
    });

    models.subAnswer.belongsTo(models.subQuestion, {
      as: 'subQuestion',
      constraints: false,
    });

    models.subAnswer.belongsTo(models.answer, {
      as: 'answer',
      constraints: false,
    });


    
    models.subAnswer.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.subAnswer.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.subAnswer.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return subAnswer;
}
