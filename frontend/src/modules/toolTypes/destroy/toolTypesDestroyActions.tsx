import listActions from 'src/modules/toolTypes/list/toolTypesListActions';
import ToolTypesService from 'src/modules/toolTypes/toolTypesService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TOOLTYPES_DESTROY';

const toolTypesDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: toolTypesDestroyActions.DESTROY_STARTED,
      });

      await ToolTypesService.destroyAll([id]);

      dispatch({
        type: toolTypesDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.toolTypes.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/tool-types');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: toolTypesDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: toolTypesDestroyActions.DESTROY_ALL_STARTED,
      });

      await ToolTypesService.destroyAll(ids);

      dispatch({
        type: toolTypesDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.toolTypes.destroyAll.success'),
      );

      getHistory().push('/tool-types');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: toolTypesDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default toolTypesDestroyActions;
