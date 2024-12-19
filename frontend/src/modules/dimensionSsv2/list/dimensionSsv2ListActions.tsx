import DimensionSsv2Service from 'src/modules/dimensionSsv2/dimensionSsv2Service';
import selectors from 'src/modules/dimensionSsv2/list/dimensionSsv2ListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/dimensionSsv2/list/dimensionSsv2ListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'DIMENSIONSSV2_LIST';

const dimensionSsv2ListActions = {
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
      type: dimensionSsv2ListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: dimensionSsv2ListActions.RESETED,
    });

    dispatch(dimensionSsv2ListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: dimensionSsv2ListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await DimensionSsv2Service.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.dimensionSsv2.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: dimensionSsv2ListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionSsv2ListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePaginationAndSort: (pagination, sorter) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: dimensionSsv2ListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch({
      type: dimensionSsv2ListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(dimensionSsv2ListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(dimensionSsv2ListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: dimensionSsv2ListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await DimensionSsv2Service.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: dimensionSsv2ListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionSsv2ListActions.FETCH_ERROR,
      });
    }
  },
};

export default dimensionSsv2ListActions;
