import list from 'src/modules/assessmentAnswer/list/assessmentAnswerListReducers';
import form from 'src/modules/assessmentAnswer/form/assessmentAnswerFormReducers';
import view from 'src/modules/assessmentAnswer/view/assessmentAnswerViewReducers';
import destroy from 'src/modules/assessmentAnswer/destroy/assessmentAnswerDestroyReducers';
import importerReducer from 'src/modules/assessmentAnswer/importer/assessmentAnswerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
