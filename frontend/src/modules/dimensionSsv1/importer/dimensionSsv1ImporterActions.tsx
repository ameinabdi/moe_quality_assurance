import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dimensionSsv1/importer/dimensionSsv1ImporterSelectors';
import DimensionSsv1Service from 'src/modules/dimensionSsv1/dimensionSsv1Service';
import fields from 'src/modules/dimensionSsv1/importer/dimensionSsv1ImporterFields';
import { i18n } from 'src/i18n';

const dimensionSsv1ImporterActions = importerActions(
  'DIMENSIONSSV1_IMPORTER',
  selectors,
  DimensionSsv1Service.import,
  fields,
  i18n('entities.dimensionSsv1.importer.fileName'),
);

export default dimensionSsv1ImporterActions;