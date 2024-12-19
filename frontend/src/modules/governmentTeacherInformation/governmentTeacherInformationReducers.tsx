import list from 'src/modules/governmentTeacherInformation/list/governmentTeacherInformationListReducers';
import form from 'src/modules/governmentTeacherInformation/form/governmentTeacherInformationFormReducers';
import view from 'src/modules/governmentTeacherInformation/view/governmentTeacherInformationViewReducers';
import destroy from 'src/modules/governmentTeacherInformation/destroy/governmentTeacherInformationDestroyReducers';
import importerReducer from 'src/modules/governmentTeacherInformation/importer/governmentTeacherInformationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
