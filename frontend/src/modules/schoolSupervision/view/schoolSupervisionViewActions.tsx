import SchoolSupervisionService from 'src/modules/schoolSupervision/schoolSupervisionService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SCHOOLSUPERVISION_VIEW';

const schoolSupervisionViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: schoolSupervisionViewActions.FIND_STARTED,
      });

      const record = await SchoolSupervisionService.find(id);

      dispatch({
        type: schoolSupervisionViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: schoolSupervisionViewActions.FIND_ERROR,
      });

      getHistory().push('/school-supervision');
    }
  },
};

export default schoolSupervisionViewActions;
