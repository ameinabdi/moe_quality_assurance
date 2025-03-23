import { DataTypes } from 'sequelize';
import SequelizeArrayUtils from '../../utils/sequelizeArrayUtils';


export default function (sequelize) {
  const dimensionGPE2 = sequelize.define(
    'dimensionGPE2',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      indicator21: {
       type: DataTypes.TEXT,
      },
      indicator22: {
       type: DataTypes.TEXT,
      },
      indicator23: {
       type: DataTypes.TEXT,
      },
      indicator24: {
       type: DataTypes.TEXT,
      },
      indicator25: {
       type: DataTypes.TEXT,
      },
      indicator26: {
       type: DataTypes.TEXT,
      },
      indicator27: {
       type: DataTypes.TEXT,
      },
      indicator28: {
       type: DataTypes.TEXT,
      },
      dimension2Challenge: {
        type: DataTypes.TEXT,
       },
       dimension2Rate: {
        type: DataTypes.TEXT,
       },
       dimension2Solution: {
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

  dimensionGPE2.associate = (models) => {
    models.dimensionGPE2.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });


    
    models.dimensionGPE2.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.dimensionGPE2.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.dimensionGPE2.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return dimensionGPE2;
}
