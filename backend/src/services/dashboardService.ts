import Error400 from '../errors/Error400';
import SequelizeRepository from '../database/repositories/sequelizeRepository';
import { IServiceOptions } from './IServiceOptions';
import DashboardRepository from '../database/repositories/dashboardRepository';

export default class InvigilatorService {
  options: IServiceOptions;

  constructor(options) {
    this.options = options;
  }

  async dashboard(args) {
    return DashboardRepository.dashboard(
      args,
      this.options,
    );
  }

  async activities(args) {
    return DashboardRepository.activities(
      args,
      this.options,
    );
  }
  
}
