import list from 'src/modules/dimensionSsv1/list/dimensionSsv1ListReducers';
import form from 'src/modules/dimensionSsv1/form/dimensionSsv1FormReducers';
import view from 'src/modules/dimensionSsv1/view/dimensionSsv1ViewReducers';
import destroy from 'src/modules/dimensionSsv1/destroy/dimensionSsv1DestroyReducers';
import importerReducer from 'src/modules/dimensionSsv1/importer/dimensionSsv1ImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
