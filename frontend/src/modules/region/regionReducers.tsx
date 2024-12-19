import list from 'src/modules/region/list/regionListReducers';
import form from 'src/modules/region/form/regionFormReducers';
import view from 'src/modules/region/view/regionViewReducers';
import destroy from 'src/modules/region/destroy/regionDestroyReducers';
import importerReducer from 'src/modules/region/importer/regionImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
