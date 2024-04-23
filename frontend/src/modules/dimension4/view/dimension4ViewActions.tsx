import Dimension4Service from 'src/modules/dimension4/dimension4Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIMENSION4_VIEW';

const dimension4ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimension4ViewActions.FIND_STARTED,
      });

      const record = await Dimension4Service.find(id);

      dispatch({
        type: dimension4ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimension4ViewActions.FIND_ERROR,
      });

      getHistory().push('/dimension4');
    }
  },
};

export default dimension4ViewActions;
