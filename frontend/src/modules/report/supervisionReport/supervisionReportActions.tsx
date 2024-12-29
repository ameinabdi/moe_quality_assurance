import ReportService from 'src/modules/report/reportService';
import selectors from 'src/modules/report/supervisionReport/supervisionReportSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/dashboard/view/dashboardViewExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'SUPERVISON';

const reportActions = {
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
      type: reportActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: reportActions.RESETED,
    });

    dispatch(reportActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: reportActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await ReportService.ssaReport(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.examcenter.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: reportActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: reportActions.EXPORT_ERROR,
      });
    }
  },

  doChangePaginationAndSort: (pagination, sorter) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: reportActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch({
      type: reportActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(reportActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(reportActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: reportActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });
      const response = await ReportService.supervisionReport(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );
      dispatch({
        type: reportActions.FETCH_SUCCESS,
        payload: {
          rows: response,
          count: response.length,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: reportActions.FETCH_ERROR,
      });
    }
  },
};

export default reportActions;
