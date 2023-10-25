import list from 'src/modules/question/list/questionListReducers';
import form from 'src/modules/question/form/questionFormReducers';
import view from 'src/modules/question/view/questionViewReducers';
import destroy from 'src/modules/question/destroy/questionDestroyReducers';
import importerReducer from 'src/modules/question/importer/questionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
