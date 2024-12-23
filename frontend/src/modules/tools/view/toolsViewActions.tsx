import ToolsService from 'src/modules/tools/toolsService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'TOOLS_VIEW';

const toolsViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: toolsViewActions.FIND_STARTED,
      });

      const record = await ToolsService.find(id);

      dispatch({
        type: toolsViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: toolsViewActions.FIND_ERROR,
      });

      getHistory().push('/tools');
    }
  },
};

export default toolsViewActions;
