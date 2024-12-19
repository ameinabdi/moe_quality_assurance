import listActions from 'src/modules/tools/list/toolsListActions';
import ToolsService from 'src/modules/tools/toolsService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TOOLS_DESTROY';

const toolsDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: toolsDestroyActions.DESTROY_STARTED,
      });

      await ToolsService.destroyAll([id]);

      dispatch({
        type: toolsDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.tools.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/tools');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: toolsDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: toolsDestroyActions.DESTROY_ALL_STARTED,
      });

      await ToolsService.destroyAll(ids);

      dispatch({
        type: toolsDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.tools.destroyAll.success'),
      );

      getHistory().push('/tools');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: toolsDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default toolsDestroyActions;
