import Dimension5Service from 'src/modules/dimension5/dimension5Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIMENSION5_VIEW';

const dimension5ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimension5ViewActions.FIND_STARTED,
      });

      const record = await Dimension5Service.find(id);

      dispatch({
        type: dimension5ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimension5ViewActions.FIND_ERROR,
      });

      getHistory().push('/dimension5');
    }
  },
};

export default dimension5ViewActions;
