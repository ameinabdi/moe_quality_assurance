import DimensionGPE5Service from 'src/modules/dimensionGPE5/dimensionGPE5Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIMENSIONGPE5_VIEW';

const dimensionGPE5ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE5ViewActions.FIND_STARTED,
      });

      const record = await DimensionGPE5Service.find(id);

      dispatch({
        type: dimensionGPE5ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE5ViewActions.FIND_ERROR,
      });

      getHistory().push('/dimension-g-p-e5');
    }
  },
};

export default dimensionGPE5ViewActions;
