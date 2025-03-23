import SchoolSupervisionGPEService from 'src/modules/schoolSupervisionGPE/schoolSupervisionGPEService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SCHOOLSUPERVISIONGPE_VIEW';

const schoolSupervisionGPEViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: schoolSupervisionGPEViewActions.FIND_STARTED,
      });

      const record = await SchoolSupervisionGPEService.find(id);

      dispatch({
        type: schoolSupervisionGPEViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: schoolSupervisionGPEViewActions.FIND_ERROR,
      });

      getHistory().push('/school-supervision-g-p-e');
    }
  },
};

export default schoolSupervisionGPEViewActions;
