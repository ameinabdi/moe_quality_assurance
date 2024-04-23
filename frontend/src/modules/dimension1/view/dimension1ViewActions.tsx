import Dimension1Service from 'src/modules/dimension1/dimension1Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIMENSION1_VIEW';

const dimension1ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimension1ViewActions.FIND_STARTED,
      });

      const record = await Dimension1Service.find(id);

      dispatch({
        type: dimension1ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimension1ViewActions.FIND_ERROR,
      });

      getHistory().push('/dimension1');
    }
  },
};

export default dimension1ViewActions;
