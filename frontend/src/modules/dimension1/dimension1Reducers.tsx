import list from 'src/modules/dimension1/list/dimension1ListReducers';
import form from 'src/modules/dimension1/form/dimension1FormReducers';
import view from 'src/modules/dimension1/view/dimension1ViewReducers';
import destroy from 'src/modules/dimension1/destroy/dimension1DestroyReducers';
import importerReducer from 'src/modules/dimension1/importer/dimension1ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
