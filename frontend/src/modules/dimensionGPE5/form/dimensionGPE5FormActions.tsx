import DimensionGPE5Service from 'src/modules/dimensionGPE5/dimensionGPE5Service';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DIMENSIONGPE5_FORM';

const dimensionGPE5FormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE5FormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DimensionGPE5Service.find(id);
      }

      dispatch({
        type: dimensionGPE5FormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE5FormActions.INIT_ERROR,
      });

      getHistory().push('/dimension-g-p-e5');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE5FormActions.CREATE_STARTED,
      });

      await DimensionGPE5Service.create(values);

      dispatch({
        type: dimensionGPE5FormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.dimensionGPE5.create.success'),
      );

      getHistory().push('/dimension-g-p-e5');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE5FormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: dimensionGPE5FormActions.UPDATE_STARTED,
      });

      await DimensionGPE5Service.update(id, values);

      dispatch({
        type: dimensionGPE5FormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.dimensionGPE5.update.success'),
      );

      getHistory().push('/dimension-g-p-e5');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE5FormActions.UPDATE_ERROR,
      });
    }
  },
};

export default dimensionGPE5FormActions;
