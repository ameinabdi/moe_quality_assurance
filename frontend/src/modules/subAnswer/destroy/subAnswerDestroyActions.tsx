import listActions from 'src/modules/subAnswer/list/subAnswerListActions';
import SubAnswerService from 'src/modules/subAnswer/subAnswerService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SUBANSWER_DESTROY';

const subAnswerDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: subAnswerDestroyActions.DESTROY_STARTED,
      });

      await SubAnswerService.destroyAll([id]);

      dispatch({
        type: subAnswerDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.subAnswer.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/sub-answer');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: subAnswerDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: subAnswerDestroyActions.DESTROY_ALL_STARTED,
      });

      await SubAnswerService.destroyAll(ids);

      dispatch({
        type: subAnswerDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.subAnswer.destroyAll.success'),
      );

      getHistory().push('/sub-answer');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: subAnswerDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default subAnswerDestroyActions;
