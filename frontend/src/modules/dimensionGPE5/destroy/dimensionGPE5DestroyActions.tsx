import listActions from 'src/modules/dimensionGPE5/list/dimensionGPE5ListActions';
import DimensionGPE5Service from 'src/modules/dimensionGPE5/dimensionGPE5Service';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DIMENSIONGPE5_DESTROY';

const dimensionGPE5DestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE5DestroyActions.DESTROY_STARTED,
      });

      await DimensionGPE5Service.destroyAll([id]);

      dispatch({
        type: dimensionGPE5DestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.dimensionGPE5.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/dimension-g-p-e5');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimensionGPE5DestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE5DestroyActions.DESTROY_ALL_STARTED,
      });

      await DimensionGPE5Service.destroyAll(ids);

      dispatch({
        type: dimensionGPE5DestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.dimensionGPE5.destroyAll.success'),
      );

      getHistory().push('/dimension-g-p-e5');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimensionGPE5DestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default dimensionGPE5DestroyActions;
