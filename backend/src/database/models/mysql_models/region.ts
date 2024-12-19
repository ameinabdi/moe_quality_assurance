import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const region = sequelize.define(
    'region',
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

  region.associate = (models) => {
    models.region.belongsTo(models.state, {
      as: 'state',
      constraints: false,
    });


    
    models.region.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.region.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.region.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return region;
}
