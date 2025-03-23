import listActions from 'src/modules/dimensionGPE4/list/dimensionGPE4ListActions';
import DimensionGPE4Service from 'src/modules/dimensionGPE4/dimensionGPE4Service';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DIMENSIONGPE4_DESTROY';

const dimensionGPE4DestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE4DestroyActions.DESTROY_STARTED,
      });

      await DimensionGPE4Service.destroyAll([id]);

      dispatch({
        type: dimensionGPE4DestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.dimensionGPE4.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/dimension-g-p-e4');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimensionGPE4DestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE4DestroyActions.DESTROY_ALL_STARTED,
      });

      await DimensionGPE4Service.destroyAll(ids);

      dispatch({
        type: dimensionGPE4DestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.dimensionGPE4.destroyAll.success'),
      );

      getHistory().push('/dimension-g-p-e4');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimensionGPE4DestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default dimensionGPE4DestroyActions;
