import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dimensionSsv2/importer/dimensionSsv2ImporterSelectors';
import DimensionSsv2Service from 'src/modules/dimensionSsv2/dimensionSsv2Service';
import fields from 'src/modules/dimensionSsv2/importer/dimensionSsv2ImporterFields';
import { i18n } from 'src/i18n';

const dimensionSsv2ImporterActions = importerActions(
  'DIMENSIONSSV2_IMPORTER',
  selectors,
  DimensionSsv2Service.import,
  fields,
  i18n('entities.dimensionSsv2.importer.fileName'),
);

export default dimensionSsv2ImporterActions;