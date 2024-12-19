import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/governmentTeacherInformation/importer/governmentTeacherInformationImporterSelectors';
import GovernmentTeacherInformationService from 'src/modules/governmentTeacherInformation/governmentTeacherInformationService';
import fields from 'src/modules/governmentTeacherInformation/importer/governmentTeacherInformationImporterFields';
import { i18n } from 'src/i18n';

const governmentTeacherInformationImporterActions = importerActions(
  'GOVERNMENTTEACHERINFORMATION_IMPORTER',
  selectors,
  GovernmentTeacherInformationService.import,
  fields,
  i18n('entities.governmentTeacherInformation.importer.fileName'),
);

export default governmentTeacherInformationImporterActions;