import TeacherGPEService from 'src/modules/teacherGPE/teacherGPEService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TEACHERGPE_VIEW';

const teacherGPEViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: teacherGPEViewActions.FIND_STARTED,
      });

      const record = await TeacherGPEService.find(id);

      dispatch({
        type: teacherGPEViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: teacherGPEViewActions.FIND_ERROR,
      });

      getHistory().push('/teacher-g-p-e');
    }
  },
};

export default teacherGPEViewActions;
