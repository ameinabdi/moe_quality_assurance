import Dimension1Service from 'src/modules/dimension1/dimension1Service';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DIMENSION1_FORM';

const dimension1FormActions = {
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
        type: dimension1FormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await Dimension1Service.find(id);
      }

      dispatch({
        type: dimension1FormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimension1FormActions.INIT_ERROR,
      });

      getHistory().push('/dimension1');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: dimension1FormActions.CREATE_STARTED,
      });

      await Dimension1Service.create(values);

      dispatch({
        type: dimension1FormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.dimension1.create.success'),
      );

      getHistory().push('/dimension1');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimension1FormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: dimension1FormActions.UPDATE_STARTED,
      });

      await Dimension1Service.update(id, values);

      dispatch({
        type: dimension1FormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.dimension1.update.success'),
      );

      getHistory().push('/dimension1');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimension1FormActions.UPDATE_ERROR,
      });
    }
  },
};

export default dimension1FormActions;
