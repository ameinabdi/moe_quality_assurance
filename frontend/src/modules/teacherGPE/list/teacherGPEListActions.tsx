import TeacherGPEService from 'src/modules/teacherGPE/teacherGPEService';
import selectors from 'src/modules/teacherGPE/list/teacherGPEListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/teacherGPE/list/teacherGPEListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'TEACHERGPE_LIST';

const teacherGPEListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  SELECTEDS_CHANGED: `${prefix}_SELECTEDS_CHANGED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doChangeSelected(payload) {
    return {
      type: teacherGPEListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: teacherGPEListActions.RESETED,
    });

    dispatch(teacherGPEListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: teacherGPEListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await TeacherGPEService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.teacherGPE.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: teacherGPEListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: teacherGPEListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePaginationAndSort: (pagination, sorter) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: teacherGPEListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch({
      type: teacherGPEListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(teacherGPEListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(teacherGPEListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: teacherGPEListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await TeacherGPEService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: teacherGPEListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: teacherGPEListActions.FETCH_ERROR,
      });
    }
  },
};

export default teacherGPEListActions;
