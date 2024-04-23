import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import SSAReportRepository from '../database/repositories/ssaReportRepository';

export default class InvigilatorService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async ssaReport(args) {
    return SSAReportRepository.ssaReport(
      args,
      this.options,
    );
  }

  
}
