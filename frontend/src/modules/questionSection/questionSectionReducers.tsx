import list from 'src/modules/questionSection/list/questionSectionListReducers';
import form from 'src/modules/questionSection/form/questionSectionFormReducers';
import view from 'src/modules/questionSection/view/questionSectionViewReducers';
import destroy from 'src/modules/questionSection/destroy/questionSectionDestroyReducers';
import importerReducer from 'src/modules/questionSection/importer/questionSectionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
