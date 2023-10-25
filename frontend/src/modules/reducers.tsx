import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import assessment from 'src/modules/assessment/assessmentReducers';
import questionSection from 'src/modules/questionSection/questionSectionReducers';
import question from 'src/modules/question/questionReducers';
import subQuestion from 'src/modules/subQuestion/subQuestionReducers';
import assessmentAnswer from 'src/modules/assessmentAnswer/assessmentAnswerReducers';
import answer from 'src/modules/answer/answerReducers';
import subAnswer from 'src/modules/subAnswer/subAnswerReducers';
import dashboard from 'src/modules/dashboard/dashboardReducers';
import report from 'src/modules/report/reportReducers';

import plan from 'src/modules/plan/planReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    assessment,
    questionSection,
    question,
    subQuestion,
    assessmentAnswer,
    answer,
    subAnswer,
    dashboard,
    report
  });
