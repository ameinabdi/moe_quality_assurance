import ssareport from 'src/modules/report/ssaReport/ssaReportReducers';
import supervisionreport from 'src/modules/report/supervisionReport/supervisionReportReducers';
import teacherreport from 'src/modules/report/teacherReport/teacherReportReducers';
import statereport from 'src/modules/report/stateReport/stateReportReducers';

import { combineReducers } from 'redux';

export default combineReducers({
  ssareport,
  supervisionreport,
  teacherreport,
  statereport
});
