import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dimension3/importer/dimension3ImporterSelectors';
import Dimension3Service from 'src/modules/dimension3/dimension3Service';
import fields from 'src/modules/dimension3/importer/dimension3ImporterFields';
import { i18n } from 'src/i18n';

const dimension3ImporterActions = importerActions(
  'DIMENSION3_IMPORTER',
  selectors,
  Dimension3Service.import,
  fields,
  i18n('entities.dimension3.importer.fileName'),
);

export default dimension3ImporterActions;