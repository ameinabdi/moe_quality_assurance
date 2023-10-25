import list from 'src/modules/subAnswer/list/subAnswerListReducers';
import form from 'src/modules/subAnswer/form/subAnswerFormReducers';
import view from 'src/modules/subAnswer/view/subAnswerViewReducers';
import destroy from 'src/modules/subAnswer/destroy/subAnswerDestroyReducers';
import importerReducer from 'src/modules/subAnswer/importer/subAnswerImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
