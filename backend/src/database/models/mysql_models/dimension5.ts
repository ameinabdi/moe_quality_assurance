import { DataTypes } from 'sequelize';
import SequelizeArrayUtils from '../../utils/sequelizeArrayUtils';

export default function (sequelize) {
  const dimension5 = sequelize.define(
    'dimension5',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      indicator51: {
      type: DataTypes.TEXT,
      },
      indicator52: {
      type: DataTypes.TEXT,
      },
      indicator53: {
      type: DataTypes.TEXT,
      },
      indicator54: {
      type: DataTypes.TEXT,
      },
      indicator55: {
      type: DataTypes.TEXT,
      },
      indicator56: {
      type: DataTypes.TEXT,
      },
      indicator57: {
      type: DataTypes.TEXT,
      },
      indicator58: {
      type: DataTypes.TEXT,
      },
      indicator59: {
      type: DataTypes.TEXT,
      },
      indicator510: {
      type: DataTypes.TEXT,
      },
      indicator511: {
      type: DataTypes.TEXT,
      },
      indicator512: {
       type: DataTypes.TEXT,
      },
      indicator513: {
      type: DataTypes.TEXT,
      },
      indicator514: {
      type: DataTypes.TEXT,
      },
      indicator515: {
      type: DataTypes.TEXT,
      },
      indicator516: {
      type: DataTypes.TEXT,
      },
      indicator517: {
      type: DataTypes.TEXT,
      },
      indicator518: {
      type: DataTypes.TEXT,
      },
      indicator519: {
      type: DataTypes.TEXT,
      },
      indicator520: {
      type: DataTypes.TEXT,
      },
      dimension5Challenge: {
        type: DataTypes.TEXT,
       },
       dimension5Rate: {
        type: DataTypes.TEXT,
       },
       dimension5Solution: {
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

  dimension5.associate = (models) => {
    models.dimension5.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });


    
    models.dimension5.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.dimension5.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.dimension5.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return dimension5;
}
