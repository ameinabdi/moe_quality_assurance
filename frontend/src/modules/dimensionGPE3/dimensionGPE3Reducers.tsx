import list from 'src/modules/dimensionGPE3/list/dimensionGPE3ListReducers';
import form from 'src/modules/dimensionGPE3/form/dimensionGPE3FormReducers';
import view from 'src/modules/dimensionGPE3/view/dimensionGPE3ViewReducers';
import destroy from 'src/modules/dimensionGPE3/destroy/dimensionGPE3DestroyReducers';
import importerReducer from 'src/modules/dimensionGPE3/importer/dimensionGPE3ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
