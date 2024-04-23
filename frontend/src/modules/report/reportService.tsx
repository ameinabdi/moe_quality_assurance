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

}
