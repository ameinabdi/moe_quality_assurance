import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
// import DiscountService from '../../services/discountService';
import ssaReportService from '../../services/ssaReportService';

export default async (req, res, next) => {
  try {
    // new PermissionChecker(req).validateHas(Permissions.values.ssaReportRead);
    const payload = await new ssaReportService(req).ssaReport(req.query);

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    await ApiResponseHandler.error(req, res, error);
  }
};
