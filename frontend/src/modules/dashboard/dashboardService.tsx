import authAxios from 'src/modules/shared/axios/authAxios';

export default class ExamcenterService {
  static async view(filter) {
    const params = {
      filter,
    };


    const response = await authAxios.get(
      `/dashboard`,
      {
        params,
      },
    );

    return response.data;
  }

}
