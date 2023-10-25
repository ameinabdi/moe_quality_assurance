import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import SubAnswerRepository from '../database/repositories/subAnswerRepository';
import AssessmentRepository from '../database/repositories/assessmentRepository';
import QuestionRepository from '../database/repositories/questionRepository';
import SubQuestionRepository from '../database/repositories/subQuestionRepository';
import AnswerRepository from '../database/repositories/answerRepository';

export default class SubAnswerService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async create(data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.assessment = await AssessmentRepository.filterIdInTenant(data.assessment, { ...this.options, transaction });
      data.question = await QuestionRepository.filterIdInTenant(data.question, { ...this.options, transaction });
      data.subQuestion = await SubQuestionRepository.filterIdInTenant(data.subQuestion, { ...this.options, transaction });
      data.answer = await AnswerRepository.filterIdInTenant(data.answer, { ...this.options, transaction });

      const record = await SubAnswerRepository.create(data, {
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
        'subAnswer',
      );

      throw error;
    }
  }

  async update(id, data) {
    const transaction = await SequelizeRepository.createTransaction(
      this.options.database,
    );

    try {
      data.assessment = await AssessmentRepository.filterIdInTenant(data.assessment, { ...this.options, transaction });
      data.question = await QuestionRepository.filterIdInTenant(data.question, { ...this.options, transaction });
      data.subQuestion = await SubQuestionRepository.filterIdInTenant(data.subQuestion, { ...this.options, transaction });
      data.answer = await AnswerRepository.filterIdInTenant(data.answer, { ...this.options, transaction });

      const record = await SubAnswerRepository.update(
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
        'subAnswer',
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
        await SubAnswerRepository.destroy(id, {
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
    return SubAnswerRepository.findById(id, this.options);
  }

  async findAllAutocomplete(search, limit) {
    return SubAnswerRepository.findAllAutocomplete(
      search,
      limit,
      this.options,
    );
  }

  async findAndCountAll(args) {
    return SubAnswerRepository.findAndCountAll(
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
    const count = await SubAnswerRepository.count(
      {
        importHash,
      },
      this.options,
    );

    return count > 0;
  }
}
