import { DataTypes } from 'sequelize';

export default function (sequelize) {
  const dimensionGPE5 = sequelize.define(
    'dimensionGPE5',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      indicator51: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator52: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator53: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator54: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator55: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator56: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator57: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator58: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator59: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator510: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator511: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator512: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator513: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator514: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator515: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator516: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator517: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator518: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator519: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator520: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator521: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator522: {
        type: DataTypes.TEXT,
        validate: {
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator523: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      indicator524: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [[
            "1",
            "2",
            "3",
            "4",
            "5"
          ]],
        }
      },
      dimension5Rate: {
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

  dimensionGPE5.associate = (models) => {
    models.dimensionGPE5.belongsTo(models.teacherGPE, {
      as: 'teacher',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });

    models.dimensionGPE5.belongsTo(models.school, {
      as: 'school',
      constraints: false,
      foreignKey: {
        allowNull: false,
      },
    });


    
    models.dimensionGPE5.belongsTo(models.tenant, {
      as: 'tenant',
      foreignKey: {
        allowNull: true,
      },
    });

    models.dimensionGPE5.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.dimensionGPE5.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return dimensionGPE5;
}
