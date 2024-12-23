import listActions from 'src/modules/governmentTeacherInformation/list/governmentTeacherInformationListActions';
import GovernmentTeacherInformationService from 'src/modules/governmentTeacherInformation/governmentTeacherInformationService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'GOVERNMENTTEACHERINFORMATION_DESTROY';

const governmentTeacherInformationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: governmentTeacherInformationDestroyActions.DESTROY_STARTED,
      });

      await GovernmentTeacherInformationService.destroyAll([id]);

      dispatch({
        type: governmentTeacherInformationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.governmentTeacherInformation.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/government-teacher-information');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: governmentTeacherInformationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: governmentTeacherInformationDestroyActions.DESTROY_ALL_STARTED,
      });

      await GovernmentTeacherInformationService.destroyAll(ids);

      dispatch({
        type: governmentTeacherInformationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.governmentTeacherInformation.destroyAll.success'),
      );

      getHistory().push('/government-teacher-information');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: governmentTeacherInformationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default governmentTeacherInformationDestroyActions;
