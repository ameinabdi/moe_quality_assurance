import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dimensionGPE4/importer/dimensionGPE4ImporterSelectors';
import DimensionGPE4Service from 'src/modules/dimensionGPE4/dimensionGPE4Service';
import fields from 'src/modules/dimensionGPE4/importer/dimensionGPE4ImporterFields';
import { i18n } from 'src/i18n';

const dimensionGPE4ImporterActions = importerActions(
  'DIMENSIONGPE4_IMPORTER',
  selectors,
  DimensionGPE4Service.import,
  fields,
  i18n('entities.dimensionGPE4.importer.fileName'),
);

export default dimensionGPE4ImporterActions;