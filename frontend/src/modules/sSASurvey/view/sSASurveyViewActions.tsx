import SSASurveyService from 'src/modules/sSASurvey/sSASurveyService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SSASURVEY_VIEW';

const sSASurveyViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sSASurveyViewActions.FIND_STARTED,
      });

      const record = await SSASurveyService.find(id);

      dispatch({
        type: sSASurveyViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sSASurveyViewActions.FIND_ERROR,
      });

      getHistory().push('/s-s-a-survey');
    }
  },
};

export default sSASurveyViewActions;
