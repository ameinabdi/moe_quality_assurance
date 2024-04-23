import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/dimension1/importer/dimension1ImporterSelectors';
import Dimension1Service from 'src/modules/dimension1/dimension1Service';
import fields from 'src/modules/dimension1/importer/dimension1ImporterFields';
import { i18n } from 'src/i18n';

const dimension1ImporterActions = importerActions(
  'DIMENSION1_IMPORTER',
  selectors,
  Dimension1Service.import,
  fields,
  i18n('entities.dimension1.importer.fileName'),
);

export default dimension1ImporterActions;