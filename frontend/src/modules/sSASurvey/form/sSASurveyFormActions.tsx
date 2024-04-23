import SSASurveyService from 'src/modules/sSASurvey/sSASurveyService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SSASURVEY_FORM';

const sSASurveyFormActions = {
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
        type: sSASurveyFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SSASurveyService.find(id);
      }

      dispatch({
        type: sSASurveyFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sSASurveyFormActions.INIT_ERROR,
      });

      getHistory().push('/s-s-a-survey');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: sSASurveyFormActions.CREATE_STARTED,
      });

      await SSASurveyService.create(values);

      dispatch({
        type: sSASurveyFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.sSASurvey.create.success'),
      );

      getHistory().push('/s-s-a-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sSASurveyFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: sSASurveyFormActions.UPDATE_STARTED,
      });

      await SSASurveyService.update(id, values);

      dispatch({
        type: sSASurveyFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.sSASurvey.update.success'),
      );

      getHistory().push('/s-s-a-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sSASurveyFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default sSASurveyFormActions;
