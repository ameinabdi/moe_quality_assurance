import AssessmentAnswerService from 'src/modules/assessmentAnswer/assessmentAnswerService';
import selectors from 'src/modules/assessmentAnswer/list/assessmentAnswerListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/assessmentAnswer/list/assessmentAnswerListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';

const prefix = 'ASSESSMENTANSWER_LIST';

const assessmentAnswerListActions = {
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
      type: assessmentAnswerListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: assessmentAnswerListActions.RESETED,
    });

    dispatch(assessmentAnswerListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: assessmentAnswerListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await AssessmentAnswerService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.assessmentAnswer.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: assessmentAnswerListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assessmentAnswerListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePaginationAndSort: (pagination, sorter) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: assessmentAnswerListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch({
      type: assessmentAnswerListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(assessmentAnswerListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(assessmentAnswerListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: assessmentAnswerListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await AssessmentAnswerService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: assessmentAnswerListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assessmentAnswerListActions.FETCH_ERROR,
      });
    }
  },
};

export default assessmentAnswerListActions;
