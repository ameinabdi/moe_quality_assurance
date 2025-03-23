import DimensionGPE3Service from 'src/modules/dimensionGPE3/dimensionGPE3Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIMENSIONGPE3_VIEW';

const dimensionGPE3ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE3ViewActions.FIND_STARTED,
      });

      const record = await DimensionGPE3Service.find(id);

      dispatch({
        type: dimensionGPE3ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE3ViewActions.FIND_ERROR,
      });

      getHistory().push('/dimension-g-p-e3');
    }
  },
};

export default dimensionGPE3ViewActions;
