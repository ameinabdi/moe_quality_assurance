import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/schoolSupervision/importer/schoolSupervisionImporterSelectors';
import SchoolSupervisionService from 'src/modules/schoolSupervision/schoolSupervisionService';
import fields from 'src/modules/schoolSupervision/importer/schoolSupervisionImporterFields';
import { i18n } from 'src/i18n';

const schoolSupervisionImporterActions = importerActions(
  'SCHOOLSUPERVISION_IMPORTER',
  selectors,
  SchoolSupervisionService.import,
  fields,
  i18n('entities.schoolSupervision.importer.fileName'),
);

export default schoolSupervisionImporterActions;