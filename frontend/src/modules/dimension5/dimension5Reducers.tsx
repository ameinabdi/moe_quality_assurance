import list from 'src/modules/dimension5/list/dimension5ListReducers';
import form from 'src/modules/dimension5/form/dimension5FormReducers';
import view from 'src/modules/dimension5/view/dimension5ViewReducers';
import destroy from 'src/modules/dimension5/destroy/dimension5DestroyReducers';
import importerReducer from 'src/modules/dimension5/importer/dimension5ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
