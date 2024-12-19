import ToolsService from 'src/modules/tools/toolsService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'TOOLS_FORM';

const toolsFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: toolsFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ToolsService.find(id);
      }

      dispatch({
        type: toolsFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: toolsFormActions.INIT_ERROR,
      });

      getHistory().push('/tools');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: toolsFormActions.CREATE_STARTED,
      });

      await ToolsService.create(values);

      dispatch({
        type: toolsFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.tools.create.success'),
      );

      getHistory().push('/tools');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: toolsFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: toolsFormActions.UPDATE_STARTED,
      });

      await ToolsService.update(id, values);

      dispatch({
        type: toolsFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.tools.update.success'),
      );

      getHistory().push('/tools');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: toolsFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default toolsFormActions;
