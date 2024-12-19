import RegionService from 'src/modules/region/regionService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'REGION_FORM';

const regionFormActions = {
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
        type: regionFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await RegionService.find(id);
      }

      dispatch({
        type: regionFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: regionFormActions.INIT_ERROR,
      });

      getHistory().push('/region');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: regionFormActions.CREATE_STARTED,
      });

      await RegionService.create(values);

      dispatch({
        type: regionFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.region.create.success'),
      );

      getHistory().push('/region');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: regionFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: regionFormActions.UPDATE_STARTED,
      });

      await RegionService.update(id, values);

      dispatch({
        type: regionFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.region.update.success'),
      );

      getHistory().push('/region');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: regionFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default regionFormActions;
