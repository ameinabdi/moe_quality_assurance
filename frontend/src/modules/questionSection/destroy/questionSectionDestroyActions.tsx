import listActions from 'src/modules/questionSection/list/questionSectionListActions';
import QuestionSectionService from 'src/modules/questionSection/questionSectionService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'QUESTIONSECTION_DESTROY';

const questionSectionDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: questionSectionDestroyActions.DESTROY_STARTED,
      });

      await QuestionSectionService.destroyAll([id]);

      dispatch({
        type: questionSectionDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.questionSection.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/question-section');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: questionSectionDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: questionSectionDestroyActions.DESTROY_ALL_STARTED,
      });

      await QuestionSectionService.destroyAll(ids);

      dispatch({
        type: questionSectionDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.questionSection.destroyAll.success'),
      );

      getHistory().push('/question-section');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: questionSectionDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default questionSectionDestroyActions;
