import listActions from 'src/modules/teacherGPE/list/teacherGPEListActions';
import TeacherGPEService from 'src/modules/teacherGPE/teacherGPEService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'TEACHERGPE_DESTROY';

const teacherGPEDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: teacherGPEDestroyActions.DESTROY_STARTED,
      });

      await TeacherGPEService.destroyAll([id]);

      dispatch({
        type: teacherGPEDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.teacherGPE.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/teacher-g-p-e');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: teacherGPEDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: teacherGPEDestroyActions.DESTROY_ALL_STARTED,
      });

      await TeacherGPEService.destroyAll(ids);

      dispatch({
        type: teacherGPEDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.teacherGPE.destroyAll.success'),
      );

      getHistory().push('/teacher-g-p-e');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: teacherGPEDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default teacherGPEDestroyActions;
