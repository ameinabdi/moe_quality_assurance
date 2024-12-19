import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const toolTypes = sequelize.define(
    'toolTypes',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
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

  toolTypes.associate = (models) => {



    
    models.toolTypes.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.toolTypes.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.toolTypes.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return toolTypes;
}
