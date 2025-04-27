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
  async supervisionReport(args) {
    return DashboardRepository.supervisionReport(
      args,
      this.options,
    );
  }

  async teacherReport(args) {
    return DashboardRepository.teacherReport(
      args,
      this.options,
    );
  }

  async supervisionReportGPE(args) {
    return DashboardRepository.supervisionReportGPE(
      args,
      this.options,
    );
  }

  async teacherReportGPE(args) {
    return DashboardRepository.teacherReportGPE(
      args,
      this.options,
    );
  }

  async stateReport(args) {
    return DashboardRepository.stateReport(
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
