import list from 'src/modules/tools/list/toolsListReducers';
import form from 'src/modules/tools/form/toolsFormReducers';
import view from 'src/modules/tools/view/toolsViewReducers';
import destroy from 'src/modules/tools/destroy/toolsDestroyReducers';
import importerReducer from 'src/modules/tools/importer/toolsImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
