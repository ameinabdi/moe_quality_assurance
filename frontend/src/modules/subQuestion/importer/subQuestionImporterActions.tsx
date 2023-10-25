import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/subQuestion/importer/subQuestionImporterSelectors';
import SubQuestionService from 'src/modules/subQuestion/subQuestionService';
import fields from 'src/modules/subQuestion/importer/subQuestionImporterFields';
import { i18n } from 'src/i18n';

const subQuestionImporterActions = importerActions(
  'SUBQUESTION_IMPORTER',
  selectors,
  SubQuestionService.import,
  fields,
  i18n('entities.subQuestion.importer.fileName'),
);

export default subQuestionImporterActions;