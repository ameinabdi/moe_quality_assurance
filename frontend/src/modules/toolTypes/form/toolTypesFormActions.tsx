import ToolTypesService from 'src/modules/toolTypes/toolTypesService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'TOOLTYPES_FORM';

const toolTypesFormActions = {
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
        type: toolTypesFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await ToolTypesService.find(id);
      }

      dispatch({
        type: toolTypesFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: toolTypesFormActions.INIT_ERROR,
      });

      getHistory().push('/tool-types');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: toolTypesFormActions.CREATE_STARTED,
      });

      await ToolTypesService.create(values);

      dispatch({
        type: toolTypesFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.toolTypes.create.success'),
      );

      getHistory().push('/tool-types');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: toolTypesFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: toolTypesFormActions.UPDATE_STARTED,
      });

      await ToolTypesService.update(id, values);

      dispatch({
        type: toolTypesFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.toolTypes.update.success'),
      );

      getHistory().push('/tool-types');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: toolTypesFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default toolTypesFormActions;
