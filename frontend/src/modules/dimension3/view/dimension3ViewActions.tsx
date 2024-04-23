import Dimension3Service from 'src/modules/dimension3/dimension3Service';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIMENSION3_VIEW';

const dimension3ViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimension3ViewActions.FIND_STARTED,
      });

      const record = await Dimension3Service.find(id);

      dispatch({
        type: dimension3ViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimension3ViewActions.FIND_ERROR,
      });

      getHistory().push('/dimension3');
    }
  },
};

export default dimension3ViewActions;
