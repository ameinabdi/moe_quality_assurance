import listActions from 'src/modules/dimensionGPE3/list/dimensionGPE3ListActions';
import DimensionGPE3Service from 'src/modules/dimensionGPE3/dimensionGPE3Service';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DIMENSIONGPE3_DESTROY';

const dimensionGPE3DestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE3DestroyActions.DESTROY_STARTED,
      });

      await DimensionGPE3Service.destroyAll([id]);

      dispatch({
        type: dimensionGPE3DestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.dimensionGPE3.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/dimension-g-p-e3');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimensionGPE3DestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE3DestroyActions.DESTROY_ALL_STARTED,
      });

      await DimensionGPE3Service.destroyAll(ids);

      dispatch({
        type: dimensionGPE3DestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.dimensionGPE3.destroyAll.success'),
      );

      getHistory().push('/dimension-g-p-e3');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimensionGPE3DestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default dimensionGPE3DestroyActions;
