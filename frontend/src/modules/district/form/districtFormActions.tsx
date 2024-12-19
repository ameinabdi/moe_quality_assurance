import DistrictService from 'src/modules/district/districtService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DISTRICT_FORM';

const districtFormActions = {
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
        type: districtFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DistrictService.find(id);
      }

      dispatch({
        type: districtFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: districtFormActions.INIT_ERROR,
      });

      getHistory().push('/district');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: districtFormActions.CREATE_STARTED,
      });

      await DistrictService.create(values);

      dispatch({
        type: districtFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.district.create.success'),
      );

      getHistory().push('/district');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: districtFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: districtFormActions.UPDATE_STARTED,
      });

      await DistrictService.update(id, values);

      dispatch({
        type: districtFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.district.update.success'),
      );

      getHistory().push('/district');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: districtFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default districtFormActions;
