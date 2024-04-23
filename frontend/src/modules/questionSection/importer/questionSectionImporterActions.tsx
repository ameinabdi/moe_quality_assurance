import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/questionSection/importer/questionSectionImporterSelectors';
import QuestionSectionService from 'src/modules/questionSection/questionSectionService';
import fields from 'src/modules/questionSection/importer/questionSectionImporterFields';
import { i18n } from 'src/i18n';

const questionSectionImporterActions = importerActions(
  'QUESTIONSECTION_IMPORTER',
  selectors,
  QuestionSectionService.import,
  fields,
  i18n('entities.questionSection.importer.fileName'),
);

export default questionSectionImporterActions;