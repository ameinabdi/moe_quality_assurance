import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dimensionGPE1/importer/dimensionGPE1ImporterSelectors';
import DimensionGPE1Service from 'src/modules/dimensionGPE1/dimensionGPE1Service';
import fields from 'src/modules/dimensionGPE1/importer/dimensionGPE1ImporterFields';
import { i18n } from 'src/i18n';

const dimensionGPE1ImporterActions = importerActions(
  'DIMENSIONGPE1_IMPORTER',
  selectors,
  DimensionGPE1Service.import,
  fields,
  i18n('entities.dimensionGPE1.importer.fileName'),
);

export default dimensionGPE1ImporterActions;