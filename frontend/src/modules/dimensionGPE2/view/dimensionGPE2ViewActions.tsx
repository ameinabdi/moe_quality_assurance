import DimensionGPE2Service from 'src/modules/dimensionGPE2/dimensionGPE2Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIMENSIONGPE2_VIEW';

const dimensionGPE2ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE2ViewActions.FIND_STARTED,
      });

      const record = await DimensionGPE2Service.find(id);

      dispatch({
        type: dimensionGPE2ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE2ViewActions.FIND_ERROR,
      });

      getHistory().push('/dimension-g-p-e2');
    }
  },
};

export default dimensionGPE2ViewActions;
