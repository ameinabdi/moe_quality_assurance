import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/deminsion2/importer/deminsion2ImporterSelectors';
import Deminsion2Service from 'src/modules/deminsion2/deminsion2Service';
import fields from 'src/modules/deminsion2/importer/deminsion2ImporterFields';
import { i18n } from 'src/i18n';

const deminsion2ImporterActions = importerActions(
  'DEMINSION2_IMPORTER',
  selectors,
  Deminsion2Service.import,
  fields,
  i18n('entities.deminsion2.importer.fileName'),
);

export default deminsion2ImporterActions;