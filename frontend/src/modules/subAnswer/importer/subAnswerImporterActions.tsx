import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/subAnswer/importer/subAnswerImporterSelectors';
import SubAnswerService from 'src/modules/subAnswer/subAnswerService';
import fields from 'src/modules/subAnswer/importer/subAnswerImporterFields';
import { i18n } from 'src/i18n';

const subAnswerImporterActions = importerActions(
  'SUBANSWER_IMPORTER',
  selectors,
  SubAnswerService.import,
  fields,
  i18n('entities.subAnswer.importer.fileName'),
);

export default subAnswerImporterActions;