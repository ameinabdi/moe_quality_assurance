import GovernmentTeacherInformationService from 'src/modules/governmentTeacherInformation/governmentTeacherInformationService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'GOVERNMENTTEACHERINFORMATION_VIEW';

const governmentTeacherInformationViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: governmentTeacherInformationViewActions.FIND_STARTED,
      });

      const record = await GovernmentTeacherInformationService.find(id);

      dispatch({
        type: governmentTeacherInformationViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: governmentTeacherInformationViewActions.FIND_ERROR,
      });

      getHistory().push('/government-teacher-information');
    }
  },
};

export default governmentTeacherInformationViewActions;
