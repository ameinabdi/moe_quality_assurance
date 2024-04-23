import SSASurveyService from 'src/modules/sSASurvey/sSASurveyService';
import selectors from 'src/modules/sSASurvey/list/sSASurveyListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/sSASurvey/list/sSASurveyListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';
import _  from 'lodash';


const prefix = 'SSASURVEY_LIST';

const sSASurveyListActions = {
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
      type: sSASurveyListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: sSASurveyListActions.RESETED,
    });

    dispatch(sSASurveyListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: sSASurveyListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await SSASurveyService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );
     const exportData =  _.map(response.rows, (item)=>({
      ...item,
      ...item?.school,
      ...item?.dimension1,
      ...item?.dimension2,
      ...item?.dimension3,
      ...item?.dimension4,
      ...item?.dimension5,
     }))

      new Exporter(
        exporterFields,
        i18n('entities.sSASurvey.exporterFileName'),
      ).transformAndExportAsExcelFile(exportData);

      dispatch({
        type: sSASurveyListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sSASurveyListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePaginationAndSort: (pagination, sorter) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: sSASurveyListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch({
      type: sSASurveyListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(sSASurveyListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(sSASurveyListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: sSASurveyListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await SSASurveyService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: sSASurveyListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: sSASurveyListActions.FETCH_ERROR,
      });
    }
  },
};

export default sSASurveyListActions;
