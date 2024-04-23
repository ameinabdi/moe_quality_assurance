import SubQuestionService from 'src/modules/subQuestion/subQuestionService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SUBQUESTION_VIEW';

const subQuestionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: subQuestionViewActions.FIND_STARTED,
      });

      const record = await SubQuestionService.find(id);

      dispatch({
        type: subQuestionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: subQuestionViewActions.FIND_ERROR,
      });

      getHistory().push('/sub-question');
    }
  },
};

export default subQuestionViewActions;
