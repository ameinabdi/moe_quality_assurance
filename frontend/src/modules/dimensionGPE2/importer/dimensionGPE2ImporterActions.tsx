import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dimensionGPE2/importer/dimensionGPE2ImporterSelectors';
import DimensionGPE2Service from 'src/modules/dimensionGPE2/dimensionGPE2Service';
import fields from 'src/modules/dimensionGPE2/importer/dimensionGPE2ImporterFields';
import { i18n } from 'src/i18n';

const dimensionGPE2ImporterActions = importerActions(
  'DIMENSIONGPE2_IMPORTER',
  selectors,
  DimensionGPE2Service.import,
  fields,
  i18n('entities.dimensionGPE2.importer.fileName'),
);

export default dimensionGPE2ImporterActions;