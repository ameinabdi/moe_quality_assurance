import DimensionSsv2Service from 'src/modules/dimensionSsv2/dimensionSsv2Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIMENSIONSSV2_VIEW';

const dimensionSsv2ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionSsv2ViewActions.FIND_STARTED,
      });

      const record = await DimensionSsv2Service.find(id);

      dispatch({
        type: dimensionSsv2ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionSsv2ViewActions.FIND_ERROR,
      });

      getHistory().push('/dimension-ssv2');
    }
  },
};

export default dimensionSsv2ViewActions;
