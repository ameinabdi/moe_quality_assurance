import listActions from 'src/modules/schoolSupervision/list/schoolSupervisionListActions';
import SchoolSupervisionService from 'src/modules/schoolSupervision/schoolSupervisionService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SCHOOLSUPERVISION_DESTROY';

const schoolSupervisionDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: schoolSupervisionDestroyActions.DESTROY_STARTED,
      });

      await SchoolSupervisionService.destroyAll([id]);

      dispatch({
        type: schoolSupervisionDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.schoolSupervision.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/school-supervision');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: schoolSupervisionDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: schoolSupervisionDestroyActions.DESTROY_ALL_STARTED,
      });

      await SchoolSupervisionService.destroyAll(ids);

      dispatch({
        type: schoolSupervisionDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.schoolSupervision.destroyAll.success'),
      );

      getHistory().push('/school-supervision');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: schoolSupervisionDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default schoolSupervisionDestroyActions;
