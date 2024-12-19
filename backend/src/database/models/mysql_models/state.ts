import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const state = sequelize.define(
    'state',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
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

  state.associate = (models) => {



    
    models.state.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.state.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.state.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return state;
}
