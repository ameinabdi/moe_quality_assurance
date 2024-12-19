import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const district = sequelize.define(
    'district',
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

  district.associate = (models) => {
    models.district.belongsTo(models.region, {
      as: 'region',
      constraints: false,
    });
    models.district.belongsTo(models.state, {
      as: 'state',
      constraints: false,
    });


    
    models.district.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.district.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.district.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return district;
}
