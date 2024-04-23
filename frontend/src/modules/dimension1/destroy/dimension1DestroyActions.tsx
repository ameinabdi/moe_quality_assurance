import listActions from 'src/modules/dimension1/list/dimension1ListActions';
import Dimension1Service from 'src/modules/dimension1/dimension1Service';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DIMENSION1_DESTROY';

const dimension1DestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimension1DestroyActions.DESTROY_STARTED,
      });

      await Dimension1Service.destroyAll([id]);

      dispatch({
        type: dimension1DestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.dimension1.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/dimension1');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimension1DestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: dimension1DestroyActions.DESTROY_ALL_STARTED,
      });

      await Dimension1Service.destroyAll(ids);

      dispatch({
        type: dimension1DestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.dimension1.destroyAll.success'),
      );

      getHistory().push('/dimension1');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimension1DestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default dimension1DestroyActions;
