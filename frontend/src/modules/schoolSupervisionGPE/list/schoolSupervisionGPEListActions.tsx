import SchoolSupervisionGPEService from 'src/modules/schoolSupervisionGPE/schoolSupervisionGPEService';
import selectors from 'src/modules/schoolSupervisionGPE/list/schoolSupervisionGPEListSelectors';
import { i18n } from 'src/i18n';
import exporterFields from 'src/modules/schoolSupervisionGPE/list/schoolSupervisionGPEListExporterFields';
import Errors from 'src/modules/shared/error/errors';
import Exporter from 'src/modules/shared/exporter/exporter';
import _  from 'lodash';

const prefix = 'SCHOOLSUPERVISIONGPE_LIST';

const schoolSupervisionGPEListActions = {
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
      type: schoolSupervisionGPEListActions.SELECTEDS_CHANGED,
      payload,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: schoolSupervisionGPEListActions.RESETED,
    });

    dispatch(schoolSupervisionGPEListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: schoolSupervisionGPEListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await SchoolSupervisionGPEService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

 // Find the row with the largest dimension3s array
      const sampleDimension3s = response.rows.reduce((largest, row) => {
        return Array.isArray(row.dimension3s) && row.dimension3s.length > (largest.length || 0)
          ? row.dimension3s
          : largest;
      }, []);
  
      // Dynamically generate dimension3s fields based on the largest array
      const dimension3sFields:any = [];
      sampleDimension3s.forEach((_, index) => {
        const fieldIndex = index + 1;
        dimension3sFields.push(
          ...[
            'indicator51',
            'indicator52',
            'indicator53',
            'indicator54',
            'indicator55',
            'indicator56',
            'indicator57',
            'indicator58',
            'indicator59',
            'indicator510',
            'indicator511',
            'indicator512',
            'indicator513',
            'indicator514',
            'indicator515',
            'indicator516',
            'indicator517',
            'indicator518',
            'indicator519',
            'indicator520',
          ].map((indicator) => ({
            name: `dimension3_${fieldIndex}_${indicator}`,
            label: `${i18n(`entities.dimension5.fields.${indicator}`)}_${fieldIndex}`,
          }))
        );
      });
  
      const NewExportFields = [...exporterFields, ...dimension3sFields];
  
      // Prepare export data
      const exportData = _.map(response.rows, (item) => {
        return {
          ...item,
          ...item?.school,
          ...item?.dimension1,
          ...item?.dimension2,
          ...item?.dimension3,
          ...item?.dimension4,
        };
      });
  

      new Exporter(
        NewExportFields,
        i18n('entities.schoolSupervisionGPE.exporterFileName'),
      ).transformAndExportAsExcelFile(exportData);

      dispatch({
        type: schoolSupervisionGPEListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: schoolSupervisionGPEListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePaginationAndSort: (pagination, sorter) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: schoolSupervisionGPEListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch({
      type: schoolSupervisionGPEListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(schoolSupervisionGPEListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(schoolSupervisionGPEListActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: schoolSupervisionGPEListActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await SchoolSupervisionGPEService.list(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: schoolSupervisionGPEListActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: schoolSupervisionGPEListActions.FETCH_ERROR,
      });
    }
  },
};

export default schoolSupervisionGPEListActions;
