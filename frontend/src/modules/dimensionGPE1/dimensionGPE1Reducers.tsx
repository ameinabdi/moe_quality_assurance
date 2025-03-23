import list from 'src/modules/dimensionGPE1/list/dimensionGPE1ListReducers';
import form from 'src/modules/dimensionGPE1/form/dimensionGPE1FormReducers';
import view from 'src/modules/dimensionGPE1/view/dimensionGPE1ViewReducers';
import destroy from 'src/modules/dimensionGPE1/destroy/dimensionGPE1DestroyReducers';
import importerReducer from 'src/modules/dimensionGPE1/importer/dimensionGPE1ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
