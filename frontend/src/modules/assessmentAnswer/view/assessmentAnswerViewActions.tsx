import AssessmentAnswerService from 'src/modules/assessmentAnswer/assessmentAnswerService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ASSESSMENTANSWER_VIEW';

const assessmentAnswerViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: assessmentAnswerViewActions.FIND_STARTED,
      });

      const record = await AssessmentAnswerService.find(id);

      dispatch({
        type: assessmentAnswerViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assessmentAnswerViewActions.FIND_ERROR,
      });

      getHistory().push('/assessment-answer');
    }
  },
};

export default assessmentAnswerViewActions;
