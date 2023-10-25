import config from 'src/config';
import Permissions from 'src/security/permissions';

const permissions = Permissions.values;

const privateRoutes = [
  {
    path: '/',
    loader: () =>
      import('src/view/dashboard/DashboardPage'),
    permissionRequired: null,
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
