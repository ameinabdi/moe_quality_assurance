import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import SchoolSupervisionRepository from '../database/repositories/schoolSupervisionRepository';
import SchoolRepository from '../database/repositories/schoolRepository';
import Dimension1Repository from '../database/repositories/dimension1Repository';
import Deminsion2Repository from '../database/repositories/deminsion2Repository';
import Dimension3Repository from '../database/repositories/dimension3Repository';
import Dimension4Repository from '../database/repositories/dimension4Repository';
import Dimension5Repository from '../database/repositories/dimension5Repository';

export default class SchoolSupervisionService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      const record = await SchoolSupervisionRepository.create(data, {
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
        'schoolSupervision',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.school = await SchoolRepository.filterIdInTenant(data.school, { ...this.options, transaction });
      data.dimension1 = await Dimension1Repository.filterIdInTenant(data.dimension1, { ...this.options, transaction });
      data.dimension2 = await Deminsion2Repository.filterIdInTenant(data.dimension2, { ...this.options, transaction });
      data.dimension3 = await Dimension3Repository.filterIdInTenant(data.dimension3, { ...this.options, transaction });
      data.dimension4 = await Dimension4Repository.filterIdInTenant(data.dimension4, { ...this.options, transaction });
      data.dimension5 = await Dimension5Repository.filterIdInTenant(data.dimension5, { ...this.options, transaction });

      const record = await SchoolSupervisionRepository.update(
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
        'schoolSupervision',
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
        await SchoolSupervisionRepository.destroy(id, {
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
    return SchoolSupervisionRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return SchoolSupervisionRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return SchoolSupervisionRepository.findAndCountAll(
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
    const count = await SchoolSupervisionRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
