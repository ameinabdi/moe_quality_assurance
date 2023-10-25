import QuestionService from 'src/modules/question/questionService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'QUESTION_FORM';

const questionFormActions = {
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
        type: questionFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await QuestionService.find(id);
      }

      dispatch({
        type: questionFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: questionFormActions.INIT_ERROR,
      });

      getHistory().push('/question');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: questionFormActions.CREATE_STARTED,
      });

      await QuestionService.create(values);

      dispatch({
        type: questionFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.question.create.success'),
      );

      getHistory().push('/question');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: questionFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: questionFormActions.UPDATE_STARTED,
      });

      await QuestionService.update(id, values);

      dispatch({
        type: questionFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.question.update.success'),
      );

      getHistory().push('/question');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: questionFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default questionFormActions;
