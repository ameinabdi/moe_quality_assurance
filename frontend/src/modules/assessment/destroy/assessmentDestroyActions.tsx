import listActions from 'src/modules/assessment/list/assessmentListActions';
import AssessmentService from 'src/modules/assessment/assessmentService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'ASSESSMENT_DESTROY';

const assessmentDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: assessmentDestroyActions.DESTROY_STARTED,
      });

      await AssessmentService.destroyAll([id]);

      dispatch({
        type: assessmentDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.assessment.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/assessment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: assessmentDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: assessmentDestroyActions.DESTROY_ALL_STARTED,
      });

      await AssessmentService.destroyAll(ids);

      dispatch({
        type: assessmentDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.assessment.destroyAll.success'),
      );

      getHistory().push('/assessment');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: assessmentDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default assessmentDestroyActions;
