import { DataTypes } from 'sequelize';
import SequelizeArrayUtils from '../../utils/sequelizeArrayUtils';

export default function (sequelize) {
  const dimension4 = sequelize.define(
    'dimension4',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      indicator41: {
       type: DataTypes.TEXT,
      },
      indicator42: {
       type: DataTypes.TEXT,
      },
      indicator43: {
       type: DataTypes.TEXT,
      },
      indicator44: {
       type: DataTypes.TEXT,
      },
      dimension4Challenge: {
        type: DataTypes.TEXT,
       },
       dimension4Rate: {
        type: DataTypes.TEXT,
       },
       dimension4Solution: {
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

  dimension4.associate = (models) => {
    models.dimension4.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });


    
    models.dimension4.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.dimension4.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.dimension4.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return dimension4;
}
