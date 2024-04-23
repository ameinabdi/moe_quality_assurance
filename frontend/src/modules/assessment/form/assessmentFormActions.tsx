import AssessmentService from 'src/modules/assessment/assessmentService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'ASSESSMENT_FORM';

const assessmentFormActions = {
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
        type: assessmentFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await AssessmentService.find(id);
      }

      dispatch({
        type: assessmentFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assessmentFormActions.INIT_ERROR,
      });

      getHistory().push('/assessment');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: assessmentFormActions.CREATE_STARTED,
      });

      await AssessmentService.create(values);

      dispatch({
        type: assessmentFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.assessment.create.success'),
      );

      getHistory().push('/assessment');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assessmentFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: assessmentFormActions.UPDATE_STARTED,
      });

      await AssessmentService.update(id, values);

      dispatch({
        type: assessmentFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.assessment.update.success'),
      );

      getHistory().push('/assessment');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assessmentFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default assessmentFormActions;
