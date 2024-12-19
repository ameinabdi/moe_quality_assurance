import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dimensionSsv3/importer/dimensionSsv3ImporterSelectors';
import DimensionSsv3Service from 'src/modules/dimensionSsv3/dimensionSsv3Service';
import fields from 'src/modules/dimensionSsv3/importer/dimensionSsv3ImporterFields';
import { i18n } from 'src/i18n';

const dimensionSsv3ImporterActions = importerActions(
  'DIMENSIONSSV3_IMPORTER',
  selectors,
  DimensionSsv3Service.import,
  fields,
  i18n('entities.dimensionSsv3.importer.fileName'),
);

export default dimensionSsv3ImporterActions;