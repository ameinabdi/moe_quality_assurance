import listActions from 'src/modules/dimension5/list/dimension5ListActions';
import Dimension5Service from 'src/modules/dimension5/dimension5Service';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DIMENSION5_DESTROY';

const dimension5DestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimension5DestroyActions.DESTROY_STARTED,
      });

      await Dimension5Service.destroyAll([id]);

      dispatch({
        type: dimension5DestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.dimension5.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/dimension5');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimension5DestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: dimension5DestroyActions.DESTROY_ALL_STARTED,
      });

      await Dimension5Service.destroyAll(ids);

      dispatch({
        type: dimension5DestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.dimension5.destroyAll.success'),
      );

      getHistory().push('/dimension5');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimension5DestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default dimension5DestroyActions;
