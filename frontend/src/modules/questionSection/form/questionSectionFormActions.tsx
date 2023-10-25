import QuestionSectionService from 'src/modules/questionSection/questionSectionService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'QUESTIONSECTION_FORM';

const questionSectionFormActions = {
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
        type: questionSectionFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await QuestionSectionService.find(id);
      }

      dispatch({
        type: questionSectionFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: questionSectionFormActions.INIT_ERROR,
      });

      getHistory().push('/question-section');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: questionSectionFormActions.CREATE_STARTED,
      });

      await QuestionSectionService.create(values);

      dispatch({
        type: questionSectionFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.questionSection.create.success'),
      );

      getHistory().push('/question-section');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: questionSectionFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: questionSectionFormActions.UPDATE_STARTED,
      });

      await QuestionSectionService.update(id, values);

      dispatch({
        type: questionSectionFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.questionSection.update.success'),
      );

      getHistory().push('/question-section');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: questionSectionFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default questionSectionFormActions;
