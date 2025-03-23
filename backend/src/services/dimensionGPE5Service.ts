import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import DimensionGPE5Repository from '../database/repositories/dimensionGPE5Repository';
import TeacherGPERepository from '../database/repositories/teacherGPERepository';
import SchoolRepository from '../database/repositories/schoolRepository';

export default class DimensionGPE5Service {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.teacher = await TeacherGPERepository.filterIdInTenant(data.teacher, { ...this.options, transaction });
      data.school = await SchoolRepository.filterIdInTenant(data.school, { ...this.options, transaction });

      const record = await DimensionGPE5Repository.create(data, {
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
        'dimensionGPE5',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.teacher = await TeacherGPERepository.filterIdInTenant(data.teacher, { ...this.options, transaction });
      data.school = await SchoolRepository.filterIdInTenant(data.school, { ...this.options, transaction });

      const record = await DimensionGPE5Repository.update(
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
        'dimensionGPE5',
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
        await DimensionGPE5Repository.destroy(id, {
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
    return DimensionGPE5Repository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return DimensionGPE5Repository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return DimensionGPE5Repository.findAndCountAll(
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
    const count = await DimensionGPE5Repository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
