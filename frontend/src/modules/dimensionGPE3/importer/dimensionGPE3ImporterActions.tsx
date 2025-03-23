import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dimensionGPE3/importer/dimensionGPE3ImporterSelectors';
import DimensionGPE3Service from 'src/modules/dimensionGPE3/dimensionGPE3Service';
import fields from 'src/modules/dimensionGPE3/importer/dimensionGPE3ImporterFields';
import { i18n } from 'src/i18n';

const dimensionGPE3ImporterActions = importerActions(
  'DIMENSIONGPE3_IMPORTER',
  selectors,
  DimensionGPE3Service.import,
  fields,
  i18n('entities.dimensionGPE3.importer.fileName'),
);

export default dimensionGPE3ImporterActions;