import authAxios from 'src/modules/shared/axios/authAxios';
import AuthCurrentTenant from 'src/modules/auth/authCurrentTenant';

export default class ExamcenterService {
  static async view(filter) {
    const params = {
      filter,
    };

    const tenantId = AuthCurrentTenant.get();

    const response = await authAxios.get(
      `/tenant/${tenantId}/dashboard`,
      {
        params,
      },
    );

    return response.data;
  }

}
