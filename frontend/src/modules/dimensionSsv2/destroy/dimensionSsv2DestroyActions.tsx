import listActions from 'src/modules/dimensionSsv2/list/dimensionSsv2ListActions';
import DimensionSsv2Service from 'src/modules/dimensionSsv2/dimensionSsv2Service';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DIMENSIONSSV2_DESTROY';

const dimensionSsv2DestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionSsv2DestroyActions.DESTROY_STARTED,
      });

      await DimensionSsv2Service.destroyAll([id]);

      dispatch({
        type: dimensionSsv2DestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.dimensionSsv2.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/dimension-ssv2');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimensionSsv2DestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionSsv2DestroyActions.DESTROY_ALL_STARTED,
      });

      await DimensionSsv2Service.destroyAll(ids);

      dispatch({
        type: dimensionSsv2DestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doChangeSelected([]));
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.dimensionSsv2.destroyAll.success'),
      );

      getHistory().push('/dimension-ssv2');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: dimensionSsv2DestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default dimensionSsv2DestroyActions;
