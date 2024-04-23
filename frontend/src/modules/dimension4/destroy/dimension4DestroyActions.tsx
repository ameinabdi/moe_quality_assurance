import listActions from 'src/modules/dimension4/list/dimension4ListActions';
import Dimension4Service from 'src/modules/dimension4/dimension4Service';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DIMENSION4_DESTROY';

const dimension4DestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimension4DestroyActions.DESTROY_STARTED,
      });

      await Dimension4Service.destroyAll([id]);

      dispatch({
        type: dimension4DestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.dimension4.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/dimension4');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimension4DestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: dimension4DestroyActions.DESTROY_ALL_STARTED,
      });

      await Dimension4Service.destroyAll(ids);

      dispatch({
        type: dimension4DestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.dimension4.destroyAll.success'),
      );

      getHistory().push('/dimension4');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimension4DestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default dimension4DestroyActions;
