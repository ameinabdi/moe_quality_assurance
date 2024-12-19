import list from 'src/modules/schoolSupervision/list/schoolSupervisionListReducers';
import form from 'src/modules/schoolSupervision/form/schoolSupervisionFormReducers';
import view from 'src/modules/schoolSupervision/view/schoolSupervisionViewReducers';
import destroy from 'src/modules/schoolSupervision/destroy/schoolSupervisionDestroyReducers';
import importerReducer from 'src/modules/schoolSupervision/importer/schoolSupervisionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
