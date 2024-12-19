import RegionService from 'src/modules/region/regionService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'REGION_VIEW';

const regionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: regionViewActions.FIND_STARTED,
      });

      const record = await RegionService.find(id);

      dispatch({
        type: regionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: regionViewActions.FIND_ERROR,
      });

      getHistory().push('/region');
    }
  },
};

export default regionViewActions;
