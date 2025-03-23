import DimensionGPE4Service from 'src/modules/dimensionGPE4/dimensionGPE4Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIMENSIONGPE4_VIEW';

const dimensionGPE4ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE4ViewActions.FIND_STARTED,
      });

      const record = await DimensionGPE4Service.find(id);

      dispatch({
        type: dimensionGPE4ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE4ViewActions.FIND_ERROR,
      });

      getHistory().push('/dimension-g-p-e4');
    }
  },
};

export default dimensionGPE4ViewActions;
