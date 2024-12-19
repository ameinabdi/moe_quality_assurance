import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const tools = sequelize.define(
    'tools',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
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

  tools.associate = (models) => {
    models.tools.belongsTo(models.toolTypes, {
      as: 'type',
      constraints: false,
    });

    models.tools.hasMany(models.file, {
      as: 'attachment',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.tools.getTableName(),
        belongsToColumn: 'attachment',
      },
    });
    
    models.tools.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.tools.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.tools.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return tools;
}
