import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/schoolSupervisionGPE/importer/schoolSupervisionGPEImporterSelectors';
import SchoolSupervisionGPEService from 'src/modules/schoolSupervisionGPE/schoolSupervisionGPEService';
import fields from 'src/modules/schoolSupervisionGPE/importer/schoolSupervisionGPEImporterFields';
import { i18n } from 'src/i18n';

const schoolSupervisionGPEImporterActions = importerActions(
  'SCHOOLSUPERVISIONGPE_IMPORTER',
  selectors,
  SchoolSupervisionGPEService.import,
  fields,
  i18n('entities.schoolSupervisionGPE.importer.fileName'),
);

export default schoolSupervisionGPEImporterActions;