import SubQuestionService from 'src/modules/subQuestion/subQuestionService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SUBQUESTION_FORM';

const subQuestionFormActions = {
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
        type: subQuestionFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SubQuestionService.find(id);
      }

      dispatch({
        type: subQuestionFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: subQuestionFormActions.INIT_ERROR,
      });

      getHistory().push('/sub-question');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: subQuestionFormActions.CREATE_STARTED,
      });

      await SubQuestionService.create(values);

      dispatch({
        type: subQuestionFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.subQuestion.create.success'),
      );

      getHistory().push('/sub-question');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: subQuestionFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: subQuestionFormActions.UPDATE_STARTED,
      });

      await SubQuestionService.update(id, values);

      dispatch({
        type: subQuestionFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.subQuestion.update.success'),
      );

      getHistory().push('/sub-question');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: subQuestionFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default subQuestionFormActions;
