import TeacherGPEService from 'src/modules/teacherGPE/teacherGPEService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'TEACHERGPE_FORM';

const teacherGPEFormActions = {
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
        type: teacherGPEFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await TeacherGPEService.find(id);
      }

      dispatch({
        type: teacherGPEFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: teacherGPEFormActions.INIT_ERROR,
      });

      getHistory().push('/teacher-g-p-e');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: teacherGPEFormActions.CREATE_STARTED,
      });

      await TeacherGPEService.create(values);

      dispatch({
        type: teacherGPEFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.teacherGPE.create.success'),
      );

      getHistory().push('/teacher-g-p-e');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: teacherGPEFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: teacherGPEFormActions.UPDATE_STARTED,
      });

      await TeacherGPEService.update(id, values);

      dispatch({
        type: teacherGPEFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.teacherGPE.update.success'),
      );

      getHistory().push('/teacher-g-p-e');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: teacherGPEFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default teacherGPEFormActions;
