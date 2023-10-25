import list from 'src/modules/subQuestion/list/subQuestionListReducers';
import form from 'src/modules/subQuestion/form/subQuestionFormReducers';
import view from 'src/modules/subQuestion/view/subQuestionViewReducers';
import destroy from 'src/modules/subQuestion/destroy/subQuestionDestroyReducers';
import importerReducer from 'src/modules/subQuestion/importer/subQuestionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
