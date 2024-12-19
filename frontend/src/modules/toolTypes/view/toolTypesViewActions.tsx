import ToolTypesService from 'src/modules/toolTypes/toolTypesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TOOLTYPES_VIEW';

const toolTypesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: toolTypesViewActions.FIND_STARTED,
      });

      const record = await ToolTypesService.find(id);

      dispatch({
        type: toolTypesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: toolTypesViewActions.FIND_ERROR,
      });

      getHistory().push('/tool-types');
    }
  },
};

export default toolTypesViewActions;
