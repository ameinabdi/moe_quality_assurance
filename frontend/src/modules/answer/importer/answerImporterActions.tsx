import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/answer/importer/answerImporterSelectors';
import AnswerService from 'src/modules/answer/answerService';
import fields from 'src/modules/answer/importer/answerImporterFields';
import { i18n } from 'src/i18n';

const answerImporterActions = importerActions(
  'ANSWER_IMPORTER',
  selectors,
  AnswerService.import,
  fields,
  i18n('entities.answer.importer.fileName'),
);

export default answerImporterActions;