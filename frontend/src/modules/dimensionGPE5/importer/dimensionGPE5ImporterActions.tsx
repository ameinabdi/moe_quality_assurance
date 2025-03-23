import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dimensionGPE5/importer/dimensionGPE5ImporterSelectors';
import DimensionGPE5Service from 'src/modules/dimensionGPE5/dimensionGPE5Service';
import fields from 'src/modules/dimensionGPE5/importer/dimensionGPE5ImporterFields';
import { i18n } from 'src/i18n';

const dimensionGPE5ImporterActions = importerActions(
  'DIMENSIONGPE5_IMPORTER',
  selectors,
  DimensionGPE5Service.import,
  fields,
  i18n('entities.dimensionGPE5.importer.fileName'),
);

export default dimensionGPE5ImporterActions;