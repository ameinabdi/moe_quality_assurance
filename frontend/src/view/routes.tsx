import config from 'src/config';
import Permissions from 'src/security/permissions';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: permissions.dashboardRead,
    exact: true,
  },

  {
    path: '/report',
    loader: () =>
      import('src/view/report/ReportPage'),
    permissionRequired: permissions.reportRead,
    exact: true,
  },

  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },

  config.isPlanEnabled && {
    path: '/plan',
    loader: () => import('src/view/plan/PlanPage'),
    permissionRequired: permissions.planRead,
    exact: true,
  },

  {
    path: '/user',
    loader: () => import('src/view/user/list/UserPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/user/new',
    loader: () => import('src/view/user/new/UserNewPage'),
    permissionRequired: permissions.userCreate,
    exact: true,
  },

  {
    path: '/user/importer',
    loader: () =>
      import('src/view/user/importer/UserImporterPage'),
    permissionRequired: permissions.userImport,
    exact: true,
  },
  {
    path: '/user/:id/edit',
    loader: () => import('src/view/user/edit/UserEditPage'),
    permissionRequired: permissions.userEdit,
    exact: true,
  },
  {
    path: '/user/:id',
    loader: () => import('src/view/user/view/UserViewPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },

  {
    path: '/audit-logs',
    loader: () => import('src/view/auditLog/AuditLogPage'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    loader: () =>
      import('src/view/settings/SettingsFormPage'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/assessment',
    loader: () =>
      import('src/view/assessment/list/AssessmentListPage'),
    permissionRequired: permissions.assessmentRead,
    exact: true,
  },
  {
    path: '/assessment/new',
    loader: () =>
      import('src/view/assessment/form/AssessmentFormPage'),
    permissionRequired: permissions.assessmentCreate,
    exact: true,
  },
  {
    path: '/assessment/importer',
    loader: () =>
      import(
        'src/view/assessment/importer/AssessmentImporterPage'
      ),
    permissionRequired: permissions.assessmentImport,
    exact: true,
  },
  {
    path: '/assessment/:id/edit',
    loader: () =>
      import('src/view/assessment/form/AssessmentFormPage'),
    permissionRequired: permissions.assessmentEdit,
    exact: true,
  },
  {
    path: '/assessment/:id',
    loader: () =>
      import('src/view/assessment/view/AssessmentViewPage'),
    permissionRequired: permissions.assessmentRead,
    exact: true,
  },

  {
    path: '/question-section',
    loader: () =>
      import('src/view/questionSection/list/QuestionSectionListPage'),
    permissionRequired: permissions.questionSectionRead,
    exact: true,
  },
  {
    path: '/question-section/new',
    loader: () =>
      import('src/view/questionSection/form/QuestionSectionFormPage'),
    permissionRequired: permissions.questionSectionCreate,
    exact: true,
  },
  {
    path: '/question-section/importer',
    loader: () =>
      import(
        'src/view/questionSection/importer/QuestionSectionImporterPage'
      ),
    permissionRequired: permissions.questionSectionImport,
    exact: true,
  },
  {
    path: '/question-section/:id/edit',
    loader: () =>
      import('src/view/questionSection/form/QuestionSectionFormPage'),
    permissionRequired: permissions.questionSectionEdit,
    exact: true,
  },
  {
    path: '/question-section/:id',
    loader: () =>
      import('src/view/questionSection/view/QuestionSectionViewPage'),
    permissionRequired: permissions.questionSectionRead,
    exact: true,
  },

  {
    path: '/question',
    loader: () =>
      import('src/view/question/list/QuestionListPage'),
    permissionRequired: permissions.questionRead,
    exact: true,
  },
  {
    path: '/question/new',
    loader: () =>
      import('src/view/question/form/QuestionFormPage'),
    permissionRequired: permissions.questionCreate,
    exact: true,
  },
  {
    path: '/question/importer',
    loader: () =>
      import(
        'src/view/question/importer/QuestionImporterPage'
      ),
    permissionRequired: permissions.questionImport,
    exact: true,
  },
  {
    path: '/question/:id/edit',
    loader: () =>
      import('src/view/question/form/QuestionFormPage'),
    permissionRequired: permissions.questionEdit,
    exact: true,
  },
  {
    path: '/question/:id',
    loader: () =>
      import('src/view/question/view/QuestionViewPage'),
    permissionRequired: permissions.questionRead,
    exact: true,
  },

  {
    path: '/sub-question',
    loader: () =>
      import('src/view/subQuestion/list/SubQuestionListPage'),
    permissionRequired: permissions.subQuestionRead,
    exact: true,
  },
  {
    path: '/sub-question/new',
    loader: () =>
      import('src/view/subQuestion/form/SubQuestionFormPage'),
    permissionRequired: permissions.subQuestionCreate,
    exact: true,
  },
  {
    path: '/sub-question/importer',
    loader: () =>
      import(
        'src/view/subQuestion/importer/SubQuestionImporterPage'
      ),
    permissionRequired: permissions.subQuestionImport,
    exact: true,
  },
  {
    path: '/sub-question/:id/edit',
    loader: () =>
      import('src/view/subQuestion/form/SubQuestionFormPage'),
    permissionRequired: permissions.subQuestionEdit,
    exact: true,
  },
  {
    path: '/sub-question/:id',
    loader: () =>
      import('src/view/subQuestion/view/SubQuestionViewPage'),
    permissionRequired: permissions.subQuestionRead,
    exact: true,
  },

  {
    path: '/assessment-answer',
    loader: () =>
      import('src/view/assessmentAnswer/list/AssessmentAnswerListPage'),
    permissionRequired: permissions.assessmentAnswerRead,
    exact: true,
  },
  {
    path: '/assessment-answer/new',
    loader: () =>
      import('src/view/assessmentAnswer/form/AssessmentAnswerFormPage'),
    permissionRequired: permissions.assessmentAnswerCreate,
    exact: true,
  },
  {
    path: '/assessment-answer/importer',
    loader: () =>
      import(
        'src/view/assessmentAnswer/importer/AssessmentAnswerImporterPage'
      ),
    permissionRequired: permissions.assessmentAnswerImport,
    exact: true,
  },
  {
    path: '/assessment-answer/:id/edit',
    loader: () =>
      import('src/view/assessmentAnswer/form/AssessmentAnswerFormPage'),
    permissionRequired: permissions.assessmentAnswerEdit,
    exact: true,
  },
  {
    path: '/assessment-answer/:id',
    loader: () =>
      import('src/view/assessmentAnswer/view/AssessmentAnswerViewPage'),
    permissionRequired: permissions.assessmentAnswerRead,
    exact: true,
  },

  {
    path: '/answer',
    loader: () =>
      import('src/view/answer/list/AnswerListPage'),
    permissionRequired: permissions.answerRead,
    exact: true,
  },
  {
    path: '/answer/new',
    loader: () =>
      import('src/view/answer/form/AnswerFormPage'),
    permissionRequired: permissions.answerCreate,
    exact: true,
  },
  {
    path: '/answer/importer',
    loader: () =>
      import(
        'src/view/answer/importer/AnswerImporterPage'
      ),
    permissionRequired: permissions.answerImport,
    exact: true,
  },
  {
    path: '/answer/:id/edit',
    loader: () =>
      import('src/view/answer/form/AnswerFormPage'),
    permissionRequired: permissions.answerEdit,
    exact: true,
  },
  {
    path: '/answer/:id',
    loader: () =>
      import('src/view/answer/view/AnswerViewPage'),
    permissionRequired: permissions.answerRead,
    exact: true,
  },

  {
    path: '/sub-answer',
    loader: () =>
      import('src/view/subAnswer/list/SubAnswerListPage'),
    permissionRequired: permissions.subAnswerRead,
    exact: true,
  },
  {
    path: '/sub-answer/new',
    loader: () =>
      import('src/view/subAnswer/form/SubAnswerFormPage'),
    permissionRequired: permissions.subAnswerCreate,
    exact: true,
  },
  {
    path: '/sub-answer/importer',
    loader: () =>
      import(
        'src/view/subAnswer/importer/SubAnswerImporterPage'
      ),
    permissionRequired: permissions.subAnswerImport,
    exact: true,
  },
  {
    path: '/sub-answer/:id/edit',
    loader: () =>
      import('src/view/subAnswer/form/SubAnswerFormPage'),
    permissionRequired: permissions.subAnswerEdit,
    exact: true,
  },
  {
    path: '/sub-answer/:id',
    loader: () =>
      import('src/view/subAnswer/view/SubAnswerViewPage'),
    permissionRequired: permissions.subAnswerRead,
    exact: true,
  },

  {
    path: '/school',
    loader: () =>
      import('src/view/school/list/SchoolListPage'),
    permissionRequired: permissions.schoolRead,
    exact: true,
  },
  {
    path: '/school/new',
    loader: () =>
      import('src/view/school/form/SchoolFormPage'),
    permissionRequired: permissions.schoolCreate,
    exact: true,
  },
  {
    path: '/school/importer',
    loader: () =>
      import(
        'src/view/school/importer/SchoolImporterPage'
      ),
    permissionRequired: permissions.schoolImport,
    exact: true,
  },
  {
    path: '/school/:id/edit',
    loader: () =>
      import('src/view/school/form/SchoolFormPage'),
    permissionRequired: permissions.schoolEdit,
    exact: true,
  },
  {
    path: '/school/:id',
    loader: () =>
      import('src/view/school/view/SchoolViewPage'),
    permissionRequired: permissions.schoolRead,
    exact: true,
  },

  {
    path: '/s-s-a-survey',
    loader: () =>
      import('src/view/sSASurvey/list/SSASurveyListPage'),
    permissionRequired: permissions.sSASurveyRead,
    exact: true,
  },
  {
    path: '/s-s-a-survey/new',
    loader: () =>
      import('src/view/sSASurvey/form/SSASurveyFormPage'),
    permissionRequired: permissions.sSASurveyCreate,
    exact: true,
  },
  {
    path: '/s-s-a-survey/importer',
    loader: () =>
      import(
        'src/view/sSASurvey/importer/SSASurveyImporterPage'
      ),
    permissionRequired: permissions.sSASurveyImport,
    exact: true,
  },
  {
    path: '/s-s-a-survey/:id/edit',
    loader: () =>
      import('src/view/sSASurvey/form/SSASurveyFormPage'),
    permissionRequired: permissions.sSASurveyEdit,
    exact: true,
  },
  {
    path: '/s-s-a-survey/:id',
    loader: () =>
      import('src/view/sSASurvey/view/SSASurveyViewPage'),
    permissionRequired: permissions.sSASurveyRead,
    exact: true,
  },

  {
    path: '/dimension1',
    loader: () =>
      import('src/view/dimension1/list/Dimension1ListPage'),
    permissionRequired: permissions.dimension1Read,
    exact: true,
  },
  {
    path: '/dimension1/new',
    loader: () =>
      import('src/view/dimension1/form/Dimension1FormPage'),
    permissionRequired: permissions.dimension1Create,
    exact: true,
  },
  {
    path: '/dimension1/importer',
    loader: () =>
      import(
        'src/view/dimension1/importer/Dimension1ImporterPage'
      ),
    permissionRequired: permissions.dimension1Import,
    exact: true,
  },
  {
    path: '/dimension1/:id/edit',
    loader: () =>
      import('src/view/dimension1/form/Dimension1FormPage'),
    permissionRequired: permissions.dimension1Edit,
    exact: true,
  },
  {
    path: '/dimension1/:id',
    loader: () =>
      import('src/view/dimension1/view/Dimension1ViewPage'),
    permissionRequired: permissions.dimension1Read,
    exact: true,
  },

  {
    path: '/deminsion2',
    loader: () =>
      import('src/view/deminsion2/list/Deminsion2ListPage'),
    permissionRequired: permissions.deminsion2Read,
    exact: true,
  },
  {
    path: '/deminsion2/new',
    loader: () =>
      import('src/view/deminsion2/form/Deminsion2FormPage'),
    permissionRequired: permissions.deminsion2Create,
    exact: true,
  },
  {
    path: '/deminsion2/importer',
    loader: () =>
      import(
        'src/view/deminsion2/importer/Deminsion2ImporterPage'
      ),
    permissionRequired: permissions.deminsion2Import,
    exact: true,
  },
  {
    path: '/deminsion2/:id/edit',
    loader: () =>
      import('src/view/deminsion2/form/Deminsion2FormPage'),
    permissionRequired: permissions.deminsion2Edit,
    exact: true,
  },
  {
    path: '/deminsion2/:id',
    loader: () =>
      import('src/view/deminsion2/view/Deminsion2ViewPage'),
    permissionRequired: permissions.deminsion2Read,
    exact: true,
  },

  {
    path: '/dimension3',
    loader: () =>
      import('src/view/dimension3/list/Dimension3ListPage'),
    permissionRequired: permissions.dimension3Read,
    exact: true,
  },
  {
    path: '/dimension3/new',
    loader: () =>
      import('src/view/dimension3/form/Dimension3FormPage'),
    permissionRequired: permissions.dimension3Create,
    exact: true,
  },
  {
    path: '/dimension3/importer',
    loader: () =>
      import(
        'src/view/dimension3/importer/Dimension3ImporterPage'
      ),
    permissionRequired: permissions.dimension3Import,
    exact: true,
  },
  {
    path: '/dimension3/:id/edit',
    loader: () =>
      import('src/view/dimension3/form/Dimension3FormPage'),
    permissionRequired: permissions.dimension3Edit,
    exact: true,
  },
  {
    path: '/dimension3/:id',
    loader: () =>
      import('src/view/dimension3/view/Dimension3ViewPage'),
    permissionRequired: permissions.dimension3Read,
    exact: true,
  },

  {
    path: '/dimension4',
    loader: () =>
      import('src/view/dimension4/list/Dimension4ListPage'),
    permissionRequired: permissions.dimension4Read,
    exact: true,
  },
  {
    path: '/dimension4/new',
    loader: () =>
      import('src/view/dimension4/form/Dimension4FormPage'),
    permissionRequired: permissions.dimension4Create,
    exact: true,
  },
  {
    path: '/dimension4/importer',
    loader: () =>
      import(
        'src/view/dimension4/importer/Dimension4ImporterPage'
      ),
    permissionRequired: permissions.dimension4Import,
    exact: true,
  },
  {
    path: '/dimension4/:id/edit',
    loader: () =>
      import('src/view/dimension4/form/Dimension4FormPage'),
    permissionRequired: permissions.dimension4Edit,
    exact: true,
  },
  {
    path: '/dimension4/:id',
    loader: () =>
      import('src/view/dimension4/view/Dimension4ViewPage'),
    permissionRequired: permissions.dimension4Read,
    exact: true,
  },

  {
    path: '/dimension5',
    loader: () =>
      import('src/view/dimension5/list/Dimension5ListPage'),
    permissionRequired: permissions.dimension5Read,
    exact: true,
  },
  {
    path: '/dimension5/new',
    loader: () =>
      import('src/view/dimension5/form/Dimension5FormPage'),
    permissionRequired: permissions.dimension5Create,
    exact: true,
  },
  {
    path: '/dimension5/importer',
    loader: () =>
      import(
        'src/view/dimension5/importer/Dimension5ImporterPage'
      ),
    permissionRequired: permissions.dimension5Import,
    exact: true,
  },
  {
    path: '/dimension5/:id/edit',
    loader: () =>
      import('src/view/dimension5/form/Dimension5FormPage'),
    permissionRequired: permissions.dimension5Edit,
    exact: true,
  },
  {
    path: '/dimension5/:id',
    loader: () =>
      import('src/view/dimension5/view/Dimension5ViewPage'),
    permissionRequired: permissions.dimension5Read,
    exact: true,
  },
].filter(Boolean);

const accountCenterRoutes = [
  {
    path: '/profile',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/password-change',
    loader: () =>
      import('src/view/auth/PasswordChangeFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/account-center',
    loader: () => import('src/view/auth/ProfileFormPage'),
    permissionRequired: null,
    exact: true,
  },

  {
    path: '/tenant',
    loader: () =>
      import('src/view/tenant/list/TenantListPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/new',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/tenant/:id/edit',
    loader: () =>
      import('src/view/tenant/form/TenantFormPage'),
    permissionRequired: null,
    exact: true,
  },
  {
    path: '/admin-area',
    loader: () => import('src/view/admin/AdminPage'),
    permissionRequired: permissions.userRead,
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: '/auth/signin',
    loader: () => import('src/view/auth/SigninPage'),
  },
  {
    path: '/auth/forgot-password',
    loader: () =>
      import('src/view/auth/ForgotPasswordPage'),
  },
].filter(Boolean);

const emptyTenantRoutes = [
  {
    path: '/auth/tenant',
    loader: () => import('src/view/auth/TenantPage'),
  },
].filter(Boolean);

const emptyPermissionsRoutes = [
  {
    path: '/auth/empty-permissions',
    loader: () =>
      import('src/view/auth/EmptyPermissionsPage'),
  },
].filter(Boolean);
const deactiveTenant = [
  {
    path: '/auth/tenant-deactive',
    loader: () =>
      import('src/view/auth/DeactiveTenantPage'),
  },
].filter(Boolean);

const emailUnverifiedRoutes = [
  {
    path: '/auth/email-unverified',
    loader: () =>
      import('src/view/auth/EmailUnverifiedPage'),
  },
].filter(Boolean);

const twoFA = [
  {
    path: '/auth/two-factor-authentication',
    loader: () =>
      import('src/view/auth/TwoFAPage'),
  },
].filter(Boolean);

const simpleRoutes = [
  {
    path: '/auth/password-reset',
    loader: () => import('src/view/auth/PasswordResetPage'),
  },
  {
    path: '/auth/invitation',
    loader: () => import('src/view/auth/InvitationPage'),
  },
  {
    path: '/auth/verify-email',
    loader: () => import('src/view/auth/VerifyEmailPage'),
  },
  {
    path: '/403',
    loader: () =>
      import('src/view/shared/errors/Error403Page'),
  },
  {
    path: '/500',
    loader: () =>
      import('src/view/shared/errors/Error500Page'),
  },
  {
    path: '**',
    loader: () =>
      import('src/view/shared/errors/Error404Page'),
  },
].filter(Boolean);

export default {
  twoFA,
  accountCenterRoutes,
  privateRoutes,
  publicRoutes,
  emptyTenantRoutes,
  emptyPermissionsRoutes,
  emailUnverifiedRoutes,
  deactiveTenant,
  simpleRoutes,
};
