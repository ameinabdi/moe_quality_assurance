import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/assessment/importer/assessmentImporterSelectors';
import AssessmentService from 'src/modules/assessment/assessmentService';
import fields from 'src/modules/assessment/importer/assessmentImporterFields';
import { i18n } from 'src/i18n';

const assessmentImporterActions = importerActions(
  'ASSESSMENT_IMPORTER',
  selectors,
  AssessmentService.import,
  fields,
  i18n('entities.assessment.importer.fileName'),
);

export default assessmentImporterActions;