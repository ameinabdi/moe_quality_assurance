import list from 'src/modules/dimensionSsv2/list/dimensionSsv2ListReducers';
import form from 'src/modules/dimensionSsv2/form/dimensionSsv2FormReducers';
import view from 'src/modules/dimensionSsv2/view/dimensionSsv2ViewReducers';
import destroy from 'src/modules/dimensionSsv2/destroy/dimensionSsv2DestroyReducers';
import importerReducer from 'src/modules/dimensionSsv2/importer/dimensionSsv2ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
