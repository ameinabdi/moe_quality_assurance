import list from 'src/modules/district/list/districtListReducers';
import form from 'src/modules/district/form/districtFormReducers';
import view from 'src/modules/district/view/districtViewReducers';
import destroy from 'src/modules/district/destroy/districtDestroyReducers';
import importerReducer from 'src/modules/district/importer/districtImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
