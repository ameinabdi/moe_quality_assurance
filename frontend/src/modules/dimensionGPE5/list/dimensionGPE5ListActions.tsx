import DimensionGPE5Service from 'src/modules/dimensionGPE5/dimensionGPE5Service';
import selectors from 'src/modules/dimensionGPE5/list/dimensionGPE5ListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/dimensionGPE5/list/dimensionGPE5ListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'DIMENSIONGPE5_LIST';

const dimensionGPE5ListActions = {
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
      type: dimensionGPE5ListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: dimensionGPE5ListActions.RESETED,
    });

    dispatch(dimensionGPE5ListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: dimensionGPE5ListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await DimensionGPE5Service.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.dimensionGPE5.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: dimensionGPE5ListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE5ListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePaginationAndSort: (pagination, sorter) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: dimensionGPE5ListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch({
      type: dimensionGPE5ListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(dimensionGPE5ListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(dimensionGPE5ListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: dimensionGPE5ListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await DimensionGPE5Service.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: dimensionGPE5ListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: dimensionGPE5ListActions.FETCH_ERROR,
      });
    }
  },
};

export default dimensionGPE5ListActions;
