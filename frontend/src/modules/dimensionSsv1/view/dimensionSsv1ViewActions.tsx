import DimensionSsv1Service from 'src/modules/dimensionSsv1/dimensionSsv1Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIMENSIONSSV1_VIEW';

const dimensionSsv1ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionSsv1ViewActions.FIND_STARTED,
      });

      const record = await DimensionSsv1Service.find(id);

      dispatch({
        type: dimensionSsv1ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionSsv1ViewActions.FIND_ERROR,
      });

      getHistory().push('/dimension-ssv1');
    }
  },
};

export default dimensionSsv1ViewActions;
