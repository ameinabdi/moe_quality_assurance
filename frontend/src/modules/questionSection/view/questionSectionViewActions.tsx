import QuestionSectionService from 'src/modules/questionSection/questionSectionService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'QUESTIONSECTION_VIEW';

const questionSectionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: questionSectionViewActions.FIND_STARTED,
      });

      const record = await QuestionSectionService.find(id);

      dispatch({
        type: questionSectionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: questionSectionViewActions.FIND_ERROR,
      });

      getHistory().push('/question-section');
    }
  },
};

export default questionSectionViewActions;
