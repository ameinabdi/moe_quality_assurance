import list from 'src/modules/deminsion2/list/deminsion2ListReducers';
import form from 'src/modules/deminsion2/form/deminsion2FormReducers';
import view from 'src/modules/deminsion2/view/deminsion2ViewReducers';
import destroy from 'src/modules/deminsion2/destroy/deminsion2DestroyReducers';
import importerReducer from 'src/modules/deminsion2/importer/deminsion2ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
