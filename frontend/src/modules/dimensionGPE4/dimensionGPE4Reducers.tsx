import list from 'src/modules/dimensionGPE4/list/dimensionGPE4ListReducers';
import form from 'src/modules/dimensionGPE4/form/dimensionGPE4FormReducers';
import view from 'src/modules/dimensionGPE4/view/dimensionGPE4ViewReducers';
import destroy from 'src/modules/dimensionGPE4/destroy/dimensionGPE4DestroyReducers';
import importerReducer from 'src/modules/dimensionGPE4/importer/dimensionGPE4ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
