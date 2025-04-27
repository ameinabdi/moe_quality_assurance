import authAxios from 'src/modules/shared/axios/authAxios';

export default class ExamcenterService {
  static async ssaReport(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };


    const response = await authAxios.get(
      `report/ssa-report`,
      {
        params,
      },
    );

    return response.data;
  }

  static async supervisionReport(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };


    const response = await authAxios.get(
      `/supervision-report`,
      {
        params,
      },
    );

    return response.data;
  }


  static async teacherReport(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };


    const response = await authAxios.get(
      `/teacher-report`,
      {
        params,
      },
    );

    return response.data;
  }

  static async supervisionReportGPE(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };


    const response = await authAxios.get(
      `/supervision-report-gpe`,
      {
        params,
      },
    );

    return response.data;
  }


  static async teacherReportGPE(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };


    const response = await authAxios.get(
      `/teacher-report-gpe`,
      {
        params,
      },
    );

    return response.data;
  }

  static async stateReport(filter, orderBy, limit, offset) {
    const params = {
      filter,
      orderBy,
      limit,
      offset,
    };


    const response = await authAxios.get(
      `/state-report`,
      {
        params,
      },
    );

    return response.data;
  }

}
