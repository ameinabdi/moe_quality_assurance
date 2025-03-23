import DimensionGPE3Service from 'src/modules/dimensionGPE3/dimensionGPE3Service';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DIMENSIONGPE3_FORM';

const dimensionGPE3FormActions = {
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
        type: dimensionGPE3FormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DimensionGPE3Service.find(id);
      }

      dispatch({
        type: dimensionGPE3FormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE3FormActions.INIT_ERROR,
      });

      getHistory().push('/dimension-g-p-e3');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: dimensionGPE3FormActions.CREATE_STARTED,
      });

      await DimensionGPE3Service.create(values);

      dispatch({
        type: dimensionGPE3FormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.dimensionGPE3.create.success'),
      );

      getHistory().push('/dimension-g-p-e3');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE3FormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: dimensionGPE3FormActions.UPDATE_STARTED,
      });

      await DimensionGPE3Service.update(id, values);

      dispatch({
        type: dimensionGPE3FormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.dimensionGPE3.update.success'),
      );

      getHistory().push('/dimension-g-p-e3');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE3FormActions.UPDATE_ERROR,
      });
    }
  },
};

export default dimensionGPE3FormActions;
