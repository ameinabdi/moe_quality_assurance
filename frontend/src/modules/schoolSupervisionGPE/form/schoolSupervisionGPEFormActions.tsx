import SchoolSupervisionGPEService from 'src/modules/schoolSupervisionGPE/schoolSupervisionGPEService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SCHOOLSUPERVISIONGPE_FORM';

const schoolSupervisionGPEFormActions = {
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
        type: schoolSupervisionGPEFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SchoolSupervisionGPEService.find(id);
      }

      dispatch({
        type: schoolSupervisionGPEFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: schoolSupervisionGPEFormActions.INIT_ERROR,
      });

      getHistory().push('/school-supervision-g-p-e');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: schoolSupervisionGPEFormActions.CREATE_STARTED,
      });

      await SchoolSupervisionGPEService.create(values);

      dispatch({
        type: schoolSupervisionGPEFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.schoolSupervisionGPE.create.success'),
      );

      getHistory().push('/school-supervision-g-p-e');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: schoolSupervisionGPEFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: schoolSupervisionGPEFormActions.UPDATE_STARTED,
      });

      await SchoolSupervisionGPEService.update(id, values);

      dispatch({
        type: schoolSupervisionGPEFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.schoolSupervisionGPE.update.success'),
      );

      getHistory().push('/school-supervision-g-p-e');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: schoolSupervisionGPEFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default schoolSupervisionGPEFormActions;
