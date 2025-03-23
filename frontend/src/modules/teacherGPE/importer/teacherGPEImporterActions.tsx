import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/teacherGPE/importer/teacherGPEImporterSelectors';
import TeacherGPEService from 'src/modules/teacherGPE/teacherGPEService';
import fields from 'src/modules/teacherGPE/importer/teacherGPEImporterFields';
import { i18n } from 'src/i18n';

const teacherGPEImporterActions = importerActions(
  'TEACHERGPE_IMPORTER',
  selectors,
  TeacherGPEService.import,
  fields,
  i18n('entities.teacherGPE.importer.fileName'),
);

export default teacherGPEImporterActions;