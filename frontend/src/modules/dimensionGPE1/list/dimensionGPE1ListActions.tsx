import DimensionGPE1Service from 'src/modules/dimensionGPE1/dimensionGPE1Service';
import selectors from 'src/modules/dimensionGPE1/list/dimensionGPE1ListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/dimensionGPE1/list/dimensionGPE1ListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'DIMENSIONGPE1_LIST';

const dimensionGPE1ListActions = {
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
      type: dimensionGPE1ListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: dimensionGPE1ListActions.RESETED,
    });

    dispatch(dimensionGPE1ListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: dimensionGPE1ListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await DimensionGPE1Service.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.dimensionGPE1.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: dimensionGPE1ListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE1ListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePaginationAndSort: (pagination, sorter) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: dimensionGPE1ListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch({
      type: dimensionGPE1ListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(dimensionGPE1ListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(dimensionGPE1ListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: dimensionGPE1ListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await DimensionGPE1Service.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: dimensionGPE1ListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE1ListActions.FETCH_ERROR,
      });
    }
  },
};

export default dimensionGPE1ListActions;
