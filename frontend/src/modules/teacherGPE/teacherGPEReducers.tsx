import list from 'src/modules/teacherGPE/list/teacherGPEListReducers';
import form from 'src/modules/teacherGPE/form/teacherGPEFormReducers';
import view from 'src/modules/teacherGPE/view/teacherGPEViewReducers';
import destroy from 'src/modules/teacherGPE/destroy/teacherGPEDestroyReducers';
import importerReducer from 'src/modules/teacherGPE/importer/teacherGPEImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
