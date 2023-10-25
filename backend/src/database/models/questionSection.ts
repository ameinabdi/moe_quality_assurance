import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const questionSection = sequelize.define(
    'questionSection',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      description: {
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

  questionSection.associate = (models) => {



    
    models.questionSection.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.questionSection.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.questionSection.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return questionSection;
}
