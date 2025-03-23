import { DataTypes } from 'sequelize';
import SequelizeArrayUtils from '../../utils/sequelizeArrayUtils';

export default function (sequelize) {
  const dimensionGPE3 = sequelize.define(
    'dimensionGPE3',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      indicator31: {
      type: DataTypes.TEXT,
      },
      indicator32: {
      type: DataTypes.TEXT,
      },
      indicator33: {
      type: DataTypes.TEXT,
      },
      indicator34: {
      type: DataTypes.TEXT,
      },
      indicator35: {
      type: DataTypes.TEXT,
      },
      indicator36: {
      type: DataTypes.TEXT,
      },
      indicator37: {
      type: DataTypes.TEXT,
      },
      indicator38: {
      type: DataTypes.TEXT,
      },
      indicator39: {
      type: DataTypes.TEXT,
      },
      indicator310: {
      type: DataTypes.TEXT,
      },
      indicator311: {
      type: DataTypes.TEXT,
      },
      indicator312: {
      type: DataTypes.TEXT,
      },
      indicator313: {
      type: DataTypes.TEXT,
      },
      indicator314: {
      type: DataTypes.TEXT,
      },
      indicator315: {
      type: DataTypes.TEXT,
      },
      dimension3Challenge: {
        type: DataTypes.TEXT,
       },
       dimension3Rate: {
        type: DataTypes.TEXT,
       },
       dimension3Solution: {
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

  dimensionGPE3.associate = (models) => {
    models.dimensionGPE3.belongsTo(models.school, {
      as: 'school',
      constraints: false,
    });


    
    models.dimensionGPE3.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.dimensionGPE3.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.dimensionGPE3.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return dimensionGPE3;
}
