import listActions from 'src/modules/district/list/districtListActions';
import DistrictService from 'src/modules/district/districtService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DISTRICT_DESTROY';

const districtDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: districtDestroyActions.DESTROY_STARTED,
      });

      await DistrictService.destroyAll([id]);

      dispatch({
        type: districtDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.district.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/district');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: districtDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: districtDestroyActions.DESTROY_ALL_STARTED,
      });

      await DistrictService.destroyAll(ids);

      dispatch({
        type: districtDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.district.destroyAll.success'),
      );

      getHistory().push('/district');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: districtDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default districtDestroyActions;
