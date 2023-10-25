import list from 'src/modules/answer/list/answerListReducers';
import form from 'src/modules/answer/form/answerFormReducers';
import view from 'src/modules/answer/view/answerViewReducers';
import destroy from 'src/modules/answer/destroy/answerDestroyReducers';
import importerReducer from 'src/modules/answer/importer/answerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
