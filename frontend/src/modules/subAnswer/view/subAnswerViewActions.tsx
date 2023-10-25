import SubAnswerService from 'src/modules/subAnswer/subAnswerService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SUBANSWER_VIEW';

const subAnswerViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: subAnswerViewActions.FIND_STARTED,
      });

      const record = await SubAnswerService.find(id);

      dispatch({
        type: subAnswerViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: subAnswerViewActions.FIND_ERROR,
      });

      getHistory().push('/sub-answer');
    }
  },
};

export default subAnswerViewActions;
