import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/assessmentAnswer/importer/assessmentAnswerImporterSelectors';
import AssessmentAnswerService from 'src/modules/assessmentAnswer/assessmentAnswerService';
import fields from 'src/modules/assessmentAnswer/importer/assessmentAnswerImporterFields';
import { i18n } from 'src/i18n';

const assessmentAnswerImporterActions = importerActions(
  'ASSESSMENTANSWER_IMPORTER',
  selectors,
  AssessmentAnswerService.import,
  fields,
  i18n('entities.assessmentAnswer.importer.fileName'),
);

export default assessmentAnswerImporterActions;