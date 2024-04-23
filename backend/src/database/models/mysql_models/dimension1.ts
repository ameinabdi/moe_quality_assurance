import { DataTypes } from 'sequelize';
import SequelizeArrayUtils from '../../utils/sequelizeArrayUtils';

export default function (sequelize) {
  const dimension1 = sequelize.define(
    'dimension1',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      indicator11: {
        type: DataTypes.TEXT,
       
      },
      indicator12: {
       type: DataTypes.TEXT,
      },
      indicator13: {
       type: DataTypes.TEXT,
      },
      indicator14: {
       type: DataTypes.TEXT,
      },
      indicator15: {
       type: DataTypes.TEXT,
      },
      indicator16: {
       type: DataTypes.TEXT,
      },
      indicator17: {
       type: DataTypes.TEXT,
      },
      indicator18: {
       type: DataTypes.TEXT,
      },
      indicator19: {
       type: DataTypes.TEXT,
      },
      indicator110: {
       type: DataTypes.TEXT,
      },
      indicator111: {
       type: DataTypes.TEXT,
      },
      indicator112: {
       type: DataTypes.TEXT,
      },
      indicator113: {
       type: DataTypes.TEXT,
      },
      indicator114: {
       type: DataTypes.TEXT,
      },
      dimension1Challenge: {
        type: DataTypes.TEXT,
       },
       dimension1Rate: {
        type: DataTypes.TEXT,
       },
       dimension1Solution: {
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

  dimension1.associate = (models) => {
    models.dimension1.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });


    
    models.dimension1.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.dimension1.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.dimension1.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return dimension1;
}
