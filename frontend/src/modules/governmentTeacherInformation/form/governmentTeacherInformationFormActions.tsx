import GovernmentTeacherInformationService from 'src/modules/governmentTeacherInformation/governmentTeacherInformationService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'GOVERNMENTTEACHERINFORMATION_FORM';

const governmentTeacherInformationFormActions = {
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
        type: governmentTeacherInformationFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await GovernmentTeacherInformationService.find(id);
      }

      dispatch({
        type: governmentTeacherInformationFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: governmentTeacherInformationFormActions.INIT_ERROR,
      });

      getHistory().push('/government-teacher-information');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: governmentTeacherInformationFormActions.CREATE_STARTED,
      });

      await GovernmentTeacherInformationService.create(values);

      dispatch({
        type: governmentTeacherInformationFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.governmentTeacherInformation.create.success'),
      );

      getHistory().push('/government-teacher-information');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: governmentTeacherInformationFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: governmentTeacherInformationFormActions.UPDATE_STARTED,
      });

      await GovernmentTeacherInformationService.update(id, values);

      dispatch({
        type: governmentTeacherInformationFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.governmentTeacherInformation.update.success'),
      );

      getHistory().push('/government-teacher-information');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: governmentTeacherInformationFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default governmentTeacherInformationFormActions;
