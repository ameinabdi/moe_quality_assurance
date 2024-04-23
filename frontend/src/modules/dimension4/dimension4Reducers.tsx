import list from 'src/modules/dimension4/list/dimension4ListReducers';
import form from 'src/modules/dimension4/form/dimension4FormReducers';
import view from 'src/modules/dimension4/view/dimension4ViewReducers';
import destroy from 'src/modules/dimension4/destroy/dimension4DestroyReducers';
import importerReducer from 'src/modules/dimension4/importer/dimension4ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
