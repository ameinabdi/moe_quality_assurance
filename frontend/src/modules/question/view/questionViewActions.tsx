import QuestionService from 'src/modules/question/questionService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'QUESTION_VIEW';

const questionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: questionViewActions.FIND_STARTED,
      });

      const record = await QuestionService.find(id);

      dispatch({
        type: questionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: questionViewActions.FIND_ERROR,
      });

      getHistory().push('/question');
    }
  },
};

export default questionViewActions;
