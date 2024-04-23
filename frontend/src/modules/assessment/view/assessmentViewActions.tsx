import AssessmentService from 'src/modules/assessment/assessmentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'ASSESSMENT_VIEW';

const assessmentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: assessmentViewActions.FIND_STARTED,
      });

      const record = await AssessmentService.find(id);

      dispatch({
        type: assessmentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assessmentViewActions.FIND_ERROR,
      });

      getHistory().push('/assessment');
    }
  },
};

export default assessmentViewActions;
