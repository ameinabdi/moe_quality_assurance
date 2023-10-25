import list from 'src/modules/assessment/list/assessmentListReducers';
import form from 'src/modules/assessment/form/assessmentFormReducers';
import view from 'src/modules/assessment/view/assessmentViewReducers';
import destroy from 'src/modules/assessment/destroy/assessmentDestroyReducers';
import importerReducer from 'src/modules/assessment/importer/assessmentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
