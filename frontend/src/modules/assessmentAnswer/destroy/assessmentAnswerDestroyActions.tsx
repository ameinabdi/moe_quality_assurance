import listActions from 'src/modules/assessmentAnswer/list/assessmentAnswerListActions';
import AssessmentAnswerService from 'src/modules/assessmentAnswer/assessmentAnswerService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ASSESSMENTANSWER_DESTROY';

const assessmentAnswerDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: assessmentAnswerDestroyActions.DESTROY_STARTED,
      });

      await AssessmentAnswerService.destroyAll([id]);

      dispatch({
        type: assessmentAnswerDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.assessmentAnswer.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/assessment-answer');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: assessmentAnswerDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: assessmentAnswerDestroyActions.DESTROY_ALL_STARTED,
      });

      await AssessmentAnswerService.destroyAll(ids);

      dispatch({
        type: assessmentAnswerDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.assessmentAnswer.destroyAll.success'),
      );

      getHistory().push('/assessment-answer');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: assessmentAnswerDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default assessmentAnswerDestroyActions;
