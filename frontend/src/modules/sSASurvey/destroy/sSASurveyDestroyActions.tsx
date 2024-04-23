import listActions from 'src/modules/sSASurvey/list/sSASurveyListActions';
import SSASurveyService from 'src/modules/sSASurvey/sSASurveyService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SSASURVEY_DESTROY';

const sSASurveyDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: sSASurveyDestroyActions.DESTROY_STARTED,
      });

      await SSASurveyService.destroyAll([id]);

      dispatch({
        type: sSASurveyDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.sSASurvey.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/s-s-a-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: sSASurveyDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: sSASurveyDestroyActions.DESTROY_ALL_STARTED,
      });

      await SSASurveyService.destroyAll(ids);

      dispatch({
        type: sSASurveyDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.sSASurvey.destroyAll.success'),
      );

      getHistory().push('/s-s-a-survey');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: sSASurveyDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default sSASurveyDestroyActions;
