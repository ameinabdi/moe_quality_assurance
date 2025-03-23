import list from 'src/modules/schoolSupervisionGPE/list/schoolSupervisionGPEListReducers';
import form from 'src/modules/schoolSupervisionGPE/form/schoolSupervisionGPEFormReducers';
import view from 'src/modules/schoolSupervisionGPE/view/schoolSupervisionGPEViewReducers';
import destroy from 'src/modules/schoolSupervisionGPE/destroy/schoolSupervisionGPEDestroyReducers';
import importerReducer from 'src/modules/schoolSupervisionGPE/importer/schoolSupervisionGPEImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
