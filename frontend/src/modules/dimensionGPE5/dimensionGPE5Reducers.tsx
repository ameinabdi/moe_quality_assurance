import list from 'src/modules/dimensionGPE5/list/dimensionGPE5ListReducers';
import form from 'src/modules/dimensionGPE5/form/dimensionGPE5FormReducers';
import view from 'src/modules/dimensionGPE5/view/dimensionGPE5ViewReducers';
import destroy from 'src/modules/dimensionGPE5/destroy/dimensionGPE5DestroyReducers';
import importerReducer from 'src/modules/dimensionGPE5/importer/dimensionGPE5ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
