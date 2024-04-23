import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/sSASurvey/importer/sSASurveyImporterSelectors';
import SSASurveyService from 'src/modules/sSASurvey/sSASurveyService';
import fields from 'src/modules/sSASurvey/importer/sSASurveyImporterFields';
import { i18n } from 'src/i18n';

const sSASurveyImporterActions = importerActions(
  'SSASURVEY_IMPORTER',
  selectors,
  SSASurveyService.import,
  fields,
  i18n('entities.sSASurvey.importer.fileName'),
);

export default sSASurveyImporterActions;