import Deminsion2Service from 'src/modules/deminsion2/deminsion2Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DEMINSION2_VIEW';

const deminsion2ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: deminsion2ViewActions.FIND_STARTED,
      });

      const record = await Deminsion2Service.find(id);

      dispatch({
        type: deminsion2ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: deminsion2ViewActions.FIND_ERROR,
      });

      getHistory().push('/deminsion2');
    }
  },
};

export default deminsion2ViewActions;
