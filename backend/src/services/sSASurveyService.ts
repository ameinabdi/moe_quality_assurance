import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import SSASurveyRepository from '../database/repositories/sSASurveyRepository';
import SchoolRepository from '../database/repositories/schoolRepository';
import Dimension1Repository from '../database/repositories/dimension1Repository';
import Deminsion2Repository from '../database/repositories/deminsion2Repository';
import Dimension3Repository from '../database/repositories/dimension3Repository';
import Dimension4Repository from '../database/repositories/dimension4Repository';
import Dimension5Repository from '../database/repositories/dimension5Repository';

export default class SSASurveyService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      
      const record = await SSASurveyRepository.create(data, {
        ...this.options,
        transaction,
      });

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'sSASurvey',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
     
      const record = await SSASurveyRepository.update(
        id,
        data,
        {
          ...this.options,
          transaction,
        },
      );

      await SequelizeRepository.commitTransaction(
        transaction,
      );

      return record;
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );

      SequelizeRepository.handleUniqueFieldError(
        error,
        this.options.language,
        'sSASurvey',
      );

      throw error;
    }
  }

  async destroyAll(ids) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      for (const id of ids) {
        await SSASurveyRepository.destroy(id, {
          ...this.options,
          transaction,
        });
      }

      await SequelizeRepository.commitTransaction(
        transaction,
      );
    } catch (error) {
      await SequelizeRepository.rollbackTransaction(
        transaction,
      );
      throw error;
    }
  }

  async findById(id) {
    return SSASurveyRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return SSASurveyRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }
  async check(args) {
    return SSASurveyRepository.check(
      args,
      this.options,
    );
  }
  
  async findAndCountAll(args) {
    return SSASurveyRepository.findAndCountAll(
      args,
      this.options,
    );
  }

  async import(data, importHash) {
    if (!importHash) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashRequired',
      );
    }

    if (await this._isImportHashExistent(importHash)) {
      throw new Error400(
        this.options.language,
        'importer.errors.importHashExistent',
      );
    }

    const dataToCreate = {
      ...data,
      importHash,
    };

    return this.create(dataToCreate);
  }

  async _isImportHashExistent(importHash) {
    const count = await SSASurveyRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
