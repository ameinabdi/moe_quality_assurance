import DimensionGPE1Service from 'src/modules/dimensionGPE1/dimensionGPE1Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIMENSIONGPE1_VIEW';

const dimensionGPE1ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE1ViewActions.FIND_STARTED,
      });

      const record = await DimensionGPE1Service.find(id);

      dispatch({
        type: dimensionGPE1ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE1ViewActions.FIND_ERROR,
      });

      getHistory().push('/dimension-g-p-e1');
    }
  },
};

export default dimensionGPE1ViewActions;
