import list from 'src/modules/dimensionSsv3/list/dimensionSsv3ListReducers';
import form from 'src/modules/dimensionSsv3/form/dimensionSsv3FormReducers';
import view from 'src/modules/dimensionSsv3/view/dimensionSsv3ViewReducers';
import destroy from 'src/modules/dimensionSsv3/destroy/dimensionSsv3DestroyReducers';
import importerReducer from 'src/modules/dimensionSsv3/importer/dimensionSsv3ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
