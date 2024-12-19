import list from 'src/modules/toolTypes/list/toolTypesListReducers';
import form from 'src/modules/toolTypes/form/toolTypesFormReducers';
import view from 'src/modules/toolTypes/view/toolTypesViewReducers';
import destroy from 'src/modules/toolTypes/destroy/toolTypesDestroyReducers';
import importerReducer from 'src/modules/toolTypes/importer/toolTypesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
