import list from 'src/modules/sSASurvey/list/sSASurveyListReducers';
import form from 'src/modules/sSASurvey/form/sSASurveyFormReducers';
import view from 'src/modules/sSASurvey/view/sSASurveyViewReducers';
import destroy from 'src/modules/sSASurvey/destroy/sSASurveyDestroyReducers';
import importerReducer from 'src/modules/sSASurvey/importer/sSASurveyImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
