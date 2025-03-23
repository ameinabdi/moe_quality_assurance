import listActions from 'src/modules/schoolSupervisionGPE/list/schoolSupervisionGPEListActions';
import SchoolSupervisionGPEService from 'src/modules/schoolSupervisionGPE/schoolSupervisionGPEService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SCHOOLSUPERVISIONGPE_DESTROY';

const schoolSupervisionGPEDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: schoolSupervisionGPEDestroyActions.DESTROY_STARTED,
      });

      await SchoolSupervisionGPEService.destroyAll([id]);

      dispatch({
        type: schoolSupervisionGPEDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.schoolSupervisionGPE.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/school-supervision-g-p-e');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: schoolSupervisionGPEDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: schoolSupervisionGPEDestroyActions.DESTROY_ALL_STARTED,
      });

      await SchoolSupervisionGPEService.destroyAll(ids);

      dispatch({
        type: schoolSupervisionGPEDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.schoolSupervisionGPE.destroyAll.success'),
      );

      getHistory().push('/school-supervision-g-p-e');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: schoolSupervisionGPEDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default schoolSupervisionGPEDestroyActions;
