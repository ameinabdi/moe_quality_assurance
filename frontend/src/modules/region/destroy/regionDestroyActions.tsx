import listActions from 'src/modules/region/list/regionListActions';
import RegionService from 'src/modules/region/regionService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'REGION_DESTROY';

const regionDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: regionDestroyActions.DESTROY_STARTED,
      });

      await RegionService.destroyAll([id]);

      dispatch({
        type: regionDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.region.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/region');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: regionDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: regionDestroyActions.DESTROY_ALL_STARTED,
      });

      await RegionService.destroyAll(ids);

      dispatch({
        type: regionDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.region.destroyAll.success'),
      );

      getHistory().push('/region');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: regionDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default regionDestroyActions;
