import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dimension4/importer/dimension4ImporterSelectors';
import Dimension4Service from 'src/modules/dimension4/dimension4Service';
import fields from 'src/modules/dimension4/importer/dimension4ImporterFields';
import { i18n } from 'src/i18n';

const dimension4ImporterActions = importerActions(
  'DIMENSION4_IMPORTER',
  selectors,
  Dimension4Service.import,
  fields,
  i18n('entities.dimension4.importer.fileName'),
);

export default dimension4ImporterActions;