import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dimension5/importer/dimension5ImporterSelectors';
import Dimension5Service from 'src/modules/dimension5/dimension5Service';
import fields from 'src/modules/dimension5/importer/dimension5ImporterFields';
import { i18n } from 'src/i18n';

const dimension5ImporterActions = importerActions(
  'DIMENSION5_IMPORTER',
  selectors,
  Dimension5Service.import,
  fields,
  i18n('entities.dimension5.importer.fileName'),
);

export default dimension5ImporterActions;