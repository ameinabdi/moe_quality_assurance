import listActions from 'src/modules/subQuestion/list/subQuestionListActions';
import SubQuestionService from 'src/modules/subQuestion/subQuestionService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SUBQUESTION_DESTROY';

const subQuestionDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: subQuestionDestroyActions.DESTROY_STARTED,
      });

      await SubQuestionService.destroyAll([id]);

      dispatch({
        type: subQuestionDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.subQuestion.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/sub-question');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: subQuestionDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: subQuestionDestroyActions.DESTROY_ALL_STARTED,
      });

      await SubQuestionService.destroyAll(ids);

      dispatch({
        type: subQuestionDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.subQuestion.destroyAll.success'),
      );

      getHistory().push('/sub-question');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: subQuestionDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default subQuestionDestroyActions;
