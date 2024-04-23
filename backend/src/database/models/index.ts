/**
 * This module creates the Sequelize to the database and
 * exports all the models.
 */
import fs from 'fs';
import path from 'path';
import Sequelize, { DataTypes } from 'sequelize';
import { getConfig } from '../../config';
const highlight = require('cli-highlight').highlight;

const basename = path.basename(module.filename);

function models() {
  const dirPath = path.join(__dirname, '/mysql_models');
  const dirPath2 = path.join(__dirname, '/mssql_models');

  const database = {} as any;
  const database2 = {} as any;

  let sequelize = new (<any>Sequelize)(
    getConfig().DATABASE_DATABASE,
    getConfig().DATABASE_USERNAME,
    getConfig().DATABASE_PASSWORD,
    {
      host: getConfig().DATABASE_HOST,
      dialect: getConfig().DATABASE_DIALECT,
      logging:
        getConfig().DATABASE_LOGGING === 'true'
          ? (log) =>
              console.log(
                highlight(log, {
                  language: 'sql',
                  ignoreIllegals: true,
                }),
              )
          : false,
    },
  );

  let sequelize2 = new (<any>Sequelize)(
    getConfig().DATABASE2_DATABASE,
    getConfig().DATABASE2_USERNAME,
    getConfig().DATABASE2_PASSWORD,
    {
      dialectOptions: {
        options: {
          encrypt: true,
          enableArithAbort: true,
          cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
          }
        }
      },
      host: getConfig().DATABASE2_HOST,
      dialect: getConfig().DATABASE2_DIALECT,
      logging:
        getConfig().DATABASE2_LOGGING === 'true'
          ? (log) =>
              console.log(
                highlight(log, {
                  language: 'sql',
                  ignoreIllegals: true,
                }),
              )
          : false,
    },
  );

  fs.readdirSync(dirPath)
    .filter(function (file) {
      return (
        file.indexOf('.') !== 0 &&
        file !== basename &&
        (file.slice(-3) === '.js' ||
          file.slice(-3) === '.ts')
      );
    })
    .forEach(function (file) {
      const model = require(path.join(dirPath, file)).default(sequelize, DataTypes);
      database[model.name] = model;
    });

  Object.keys(database).forEach(function (modelName) {
    if (database[modelName].associate) {
      database[modelName].associate(database);
    }
  });


  fs.readdirSync(dirPath2)
    .filter(function (file) {
      return (
        file.indexOf('.') !== 0 &&
        file !== basename &&
        (file.slice(-3) === '.js' ||
          file.slice(-3) === '.ts')
      );
    })
    .forEach(function (file) {
      const model = require(path.join(dirPath2, file)).default(sequelize2, DataTypes);
      database2[model.name] = model;
    });

  Object.keys(database2).forEach(function (modelName) {
    if (database2[modelName].associate) {
      database2[modelName].associate(database2);
    }
  });

  database.sequelize = sequelize;
  database.Sequelize = Sequelize;

  database2.sequelize2 = sequelize2;
  database2.Sequelize = Sequelize;


  return {database, database2};
}

export default models;