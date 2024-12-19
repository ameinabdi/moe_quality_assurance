import DistrictService from 'src/modules/district/districtService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DISTRICT_VIEW';

const districtViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: districtViewActions.FIND_STARTED,
      });

      const record = await DistrictService.find(id);

      dispatch({
        type: districtViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: districtViewActions.FIND_ERROR,
      });

      getHistory().push('/district');
    }
  },
};

export default districtViewActions;
