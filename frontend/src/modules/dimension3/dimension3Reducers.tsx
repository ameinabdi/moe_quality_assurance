import list from 'src/modules/dimension3/list/dimension3ListReducers';
import form from 'src/modules/dimension3/form/dimension3FormReducers';
import view from 'src/modules/dimension3/view/dimension3ViewReducers';
import destroy from 'src/modules/dimension3/destroy/dimension3DestroyReducers';
import importerReducer from 'src/modules/dimension3/importer/dimension3ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
