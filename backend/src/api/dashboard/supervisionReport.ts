import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
// import DiscountService from '../../services/discountService';
import dashboardService from '../../services/dashboardService';

export default async (req, res, next) => {
  try {
    // new PermissionChecker(req).validateHas(Permissions.values.dashboardRead);
    const payload = await new dashboardService(req).supervisionReport(req.query);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
