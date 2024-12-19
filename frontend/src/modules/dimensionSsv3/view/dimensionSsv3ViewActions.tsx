import DimensionSsv3Service from 'src/modules/dimensionSsv3/dimensionSsv3Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIMENSIONSSV3_VIEW';

const dimensionSsv3ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionSsv3ViewActions.FIND_STARTED,
      });

      const record = await DimensionSsv3Service.find(id);

      dispatch({
        type: dimensionSsv3ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionSsv3ViewActions.FIND_ERROR,
      });

      getHistory().push('/dimension-ssv3');
    }
  },
};

export default dimensionSsv3ViewActions;
