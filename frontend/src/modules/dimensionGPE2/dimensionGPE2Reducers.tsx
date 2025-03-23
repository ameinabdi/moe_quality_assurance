import list from 'src/modules/dimensionGPE2/list/dimensionGPE2ListReducers';
import form from 'src/modules/dimensionGPE2/form/dimensionGPE2FormReducers';
import view from 'src/modules/dimensionGPE2/view/dimensionGPE2ViewReducers';
import destroy from 'src/modules/dimensionGPE2/destroy/dimensionGPE2DestroyReducers';
import importerReducer from 'src/modules/dimensionGPE2/importer/dimensionGPE2ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
