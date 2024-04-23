import { DataTypes } from 'sequelize';import SequelizeArrayUtils from '../../utils/sequelizeArrayUtils';

export default function (sequelize) {
  const subQuestion = sequelize.define(
    'subQuestion',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      type: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "Text",
            "Enum",
            "Multi_Enum",
            "Rate",
            "Boolean",
            ""
          ]],
        }
      },
      hint: {
        type: DataTypes.TEXT,
      },
      validation: {
        type: SequelizeArrayUtils.DataType,
        validate: {
          isValidOption: function (value) {
            if (!value || !value.length) {
              return value;
            }

            const validOptions: any = [
        "Required",
        "Lower_Case",
        "Upper_Case"
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
      answerValue: {
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

  subQuestion.associate = (models) => {



    
    models.subQuestion.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: false,
      },
    });

    models.subQuestion.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.subQuestion.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return subQuestion;
}
