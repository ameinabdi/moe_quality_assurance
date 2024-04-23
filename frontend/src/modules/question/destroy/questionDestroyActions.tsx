import listActions from 'src/modules/question/list/questionListActions';
import QuestionService from 'src/modules/question/questionService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'QUESTION_DESTROY';

const questionDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: questionDestroyActions.DESTROY_STARTED,
      });

      await QuestionService.destroyAll([id]);

      dispatch({
        type: questionDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.question.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/question');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: questionDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: questionDestroyActions.DESTROY_ALL_STARTED,
      });

      await QuestionService.destroyAll(ids);

      dispatch({
        type: questionDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.question.destroyAll.success'),
      );

      getHistory().push('/question');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: questionDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default questionDestroyActions;
