import AnswerService from 'src/modules/answer/answerService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ANSWER_VIEW';

const answerViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: answerViewActions.FIND_STARTED,
      });

      const record = await AnswerService.find(id);

      dispatch({
        type: answerViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: answerViewActions.FIND_ERROR,
      });

      getHistory().push('/answer');
    }
  },
};

export default answerViewActions;
