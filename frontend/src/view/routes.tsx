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
    path: '/supervision-report',
    loader: () =>
      import('src/view/report/SupervisionReportPage'),
    permissionRequired: permissions.reportRead,
    exact: true,
  },
  {
    path: '/teacher-report',
    loader: () =>
      import('src/view/report/TeacherReportPage'),
    permissionRequired: permissions.reportRead,
    exact: true,
  },

  {
    path: '/supervision-report-gpe',
    loader: () =>
      import('src/view/report/SupervisionReportPageGPE'),
    permissionRequired: permissions.reportRead,
    exact: true,
  },
  {
    path: '/teacher-report-gpe',
    loader: () =>
      import('src/view/report/TeacherReportPageGPE'),
    permissionRequired: permissions.reportRead,
    exact: true,
  },

  {
    path: '/state-report',
    loader: () =>
      import('src/view/report/StateReportPage'),
    permissionRequired: permissions.stateReportRead,
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
    path: '/school-supervision-g-p-e',
    loader: () =>
      import('src/view/schoolSupervisionGPE/list/SchoolSupervisionGPEListPage'),
    permissionRequired: permissions.schoolSupervisionGPERead,
    exact: true,
  },
  {
    path: '/school-supervision-g-p-e/new',
    loader: () =>
      import('src/view/schoolSupervisionGPE/form/SchoolSupervisionGPEFormPage'),
    permissionRequired: permissions.schoolSupervisionGPECreate,
    exact: true,
  },
  {
    path: '/school-supervision-g-p-e/importer',
    loader: () =>
      import(
        'src/view/schoolSupervisionGPE/importer/SchoolSupervisionGPEImporterPage'
      ),
    permissionRequired: permissions.schoolSupervisionGPEImport,
    exact: true,
  },
  {
    path: '/school-supervision-g-p-e/:id/edit',
    loader: () =>
      import('src/view/schoolSupervisionGPE/form/SchoolSupervisionGPEFormPage'),
    permissionRequired: permissions.schoolSupervisionGPEEdit,
    exact: true,
  },
  {
    path: '/school-supervision-g-p-e/:id',
    loader: () =>
      import('src/view/schoolSupervisionGPE/view/SchoolSupervisionGPEViewPage'),
    permissionRequired: permissions.schoolSupervisionGPERead,
    exact: true,
  },

  {
    path: '/dimension-g-p-e1',
    loader: () =>
      import('src/view/dimensionGPE1/list/DimensionGPE1ListPage'),
    permissionRequired: permissions.dimensionGPE1Read,
    exact: true,
  },
  {
    path: '/dimension-g-p-e1/new',
    loader: () =>
      import('src/view/dimensionGPE1/form/DimensionGPE1FormPage'),
    permissionRequired: permissions.dimensionGPE1Create,
    exact: true,
  },
  {
    path: '/dimension-g-p-e1/importer',
    loader: () =>
      import(
        'src/view/dimensionGPE1/importer/DimensionGPE1ImporterPage'
      ),
    permissionRequired: permissions.dimensionGPE1Import,
    exact: true,
  },
  {
    path: '/dimension-g-p-e1/:id/edit',
    loader: () =>
      import('src/view/dimensionGPE1/form/DimensionGPE1FormPage'),
    permissionRequired: permissions.dimensionGPE1Edit,
    exact: true,
  },
  {
    path: '/dimension-g-p-e1/:id',
    loader: () =>
      import('src/view/dimensionGPE1/view/DimensionGPE1ViewPage'),
    permissionRequired: permissions.dimensionGPE1Read,
    exact: true,
  },

  {
    path: '/dimension-g-p-e2',
    loader: () =>
      import('src/view/dimensionGPE2/list/DimensionGPE2ListPage'),
    permissionRequired: permissions.dimensionGPE2Read,
    exact: true,
  },
  {
    path: '/dimension-g-p-e2/new',
    loader: () =>
      import('src/view/dimensionGPE2/form/DimensionGPE2FormPage'),
    permissionRequired: permissions.dimensionGPE2Create,
    exact: true,
  },
  {
    path: '/dimension-g-p-e2/importer',
    loader: () =>
      import(
        'src/view/dimensionGPE2/importer/DimensionGPE2ImporterPage'
      ),
    permissionRequired: permissions.dimensionGPE2Import,
    exact: true,
  },
  {
    path: '/dimension-g-p-e2/:id/edit',
    loader: () =>
      import('src/view/dimensionGPE2/form/DimensionGPE2FormPage'),
    permissionRequired: permissions.dimensionGPE2Edit,
    exact: true,
  },
  {
    path: '/dimension-g-p-e2/:id',
    loader: () =>
      import('src/view/dimensionGPE2/view/DimensionGPE2ViewPage'),
    permissionRequired: permissions.dimensionGPE2Read,
    exact: true,
  },

  {
    path: '/dimension-g-p-e3',
    loader: () =>
      import('src/view/dimensionGPE3/list/DimensionGPE3ListPage'),
    permissionRequired: permissions.dimensionGPE3Read,
    exact: true,
  },
  {
    path: '/dimension-g-p-e3/new',
    loader: () =>
      import('src/view/dimensionGPE3/form/DimensionGPE3FormPage'),
    permissionRequired: permissions.dimensionGPE3Create,
    exact: true,
  },
  {
    path: '/dimension-g-p-e3/importer',
    loader: () =>
      import(
        'src/view/dimensionGPE3/importer/DimensionGPE3ImporterPage'
      ),
    permissionRequired: permissions.dimensionGPE3Import,
    exact: true,
  },
  {
    path: '/dimension-g-p-e3/:id/edit',
    loader: () =>
      import('src/view/dimensionGPE3/form/DimensionGPE3FormPage'),
    permissionRequired: permissions.dimensionGPE3Edit,
    exact: true,
  },
  {
    path: '/dimension-g-p-e3/:id',
    loader: () =>
      import('src/view/dimensionGPE3/view/DimensionGPE3ViewPage'),
    permissionRequired: permissions.dimensionGPE3Read,
    exact: true,
  },

  {
    path: '/dimension-g-p-e4',
    loader: () =>
      import('src/view/dimensionGPE4/list/DimensionGPE4ListPage'),
    permissionRequired: permissions.dimensionGPE4Read,
    exact: true,
  },
  {
    path: '/dimension-g-p-e4/new',
    loader: () =>
      import('src/view/dimensionGPE4/form/DimensionGPE4FormPage'),
    permissionRequired: permissions.dimensionGPE4Create,
    exact: true,
  },
  {
    path: '/dimension-g-p-e4/importer',
    loader: () =>
      import(
        'src/view/dimensionGPE4/importer/DimensionGPE4ImporterPage'
      ),
    permissionRequired: permissions.dimensionGPE4Import,
    exact: true,
  },
  {
    path: '/dimension-g-p-e4/:id/edit',
    loader: () =>
      import('src/view/dimensionGPE4/form/DimensionGPE4FormPage'),
    permissionRequired: permissions.dimensionGPE4Edit,
    exact: true,
  },
  {
    path: '/dimension-g-p-e4/:id',
    loader: () =>
      import('src/view/dimensionGPE4/view/DimensionGPE4ViewPage'),
    permissionRequired: permissions.dimensionGPE4Read,
    exact: true,
  },

  {
    path: '/teacher-g-p-e',
    loader: () =>
      import('src/view/teacherGPE/list/TeacherGPEListPage'),
    permissionRequired: permissions.teacherGPERead,
    exact: true,
  },
  {
    path: '/teacher-g-p-e/new',
    loader: () =>
      import('src/view/teacherGPE/form/TeacherGPEFormPage'),
    permissionRequired: permissions.teacherGPECreate,
    exact: true,
  },
  {
    path: '/teacher-g-p-e/importer',
    loader: () =>
      import(
        'src/view/teacherGPE/importer/TeacherGPEImporterPage'
      ),
    permissionRequired: permissions.teacherGPEImport,
    exact: true,
  },
  {
    path: '/teacher-g-p-e/:id/edit',
    loader: () =>
      import('src/view/teacherGPE/form/TeacherGPEFormPage'),
    permissionRequired: permissions.teacherGPEEdit,
    exact: true,
  },
  {
    path: '/teacher-g-p-e/:id',
    loader: () =>
      import('src/view/teacherGPE/view/TeacherGPEViewPage'),
    permissionRequired: permissions.teacherGPERead,
    exact: true,
  },

  {
    path: '/dimension-g-p-e5',
    loader: () =>
      import('src/view/dimensionGPE5/list/DimensionGPE5ListPage'),
    permissionRequired: permissions.dimensionGPE5Read,
    exact: true,
  },
  {
    path: '/dimension-g-p-e5/new',
    loader: () =>
      import('src/view/dimensionGPE5/form/DimensionGPE5FormPage'),
    permissionRequired: permissions.dimensionGPE5Create,
    exact: true,
  },
  {
    path: '/dimension-g-p-e5/importer',
    loader: () =>
      import(
        'src/view/dimensionGPE5/importer/DimensionGPE5ImporterPage'
      ),
    permissionRequired: permissions.dimensionGPE5Import,
    exact: true,
  },
  {
    path: '/dimension-g-p-e5/:id/edit',
    loader: () =>
      import('src/view/dimensionGPE5/form/DimensionGPE5FormPage'),
    permissionRequired: permissions.dimensionGPE5Edit,
    exact: true,
  },
  {
    path: '/dimension-g-p-e5/:id',
    loader: () =>
      import('src/view/dimensionGPE5/view/DimensionGPE5ViewPage'),
    permissionRequired: permissions.dimensionGPE5Read,
    exact: true,
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
    permissionRequired: permissions.schoolRead,
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

  {
    path: '/school-supervision',
    loader: () =>
      import('src/view/schoolSupervision/list/SchoolSupervisionListPage'),
    permissionRequired: permissions.schoolSupervisionRead,
    exact: true,
  },
  {
    path: '/school-supervision/new',
    loader: () =>
      import('src/view/schoolSupervision/form/SchoolSupervisionFormPage'),
    permissionRequired: permissions.schoolSupervisionCreate,
    exact: true,
  },
  {
    path: '/school-supervision/importer',
    loader: () =>
      import(
        'src/view/schoolSupervision/importer/SchoolSupervisionImporterPage'
      ),
    permissionRequired: permissions.schoolSupervisionImport,
    exact: true,
  },
  {
    path: '/school-supervision/:id/edit',
    loader: () =>
      import('src/view/schoolSupervision/form/SchoolSupervisionFormPage'),
    permissionRequired: permissions.schoolSupervisionEdit,
    exact: true,
  },
  {
    path: '/school-supervision/:id',
    loader: () =>
      import('src/view/schoolSupervision/view/SchoolSupervisionViewPage'),
    permissionRequired: permissions.schoolSupervisionRead,
    exact: true,
  },

  {
    path: '/dimension-ssv1',
    loader: () =>
      import('src/view/dimensionSsv1/list/DimensionSsv1ListPage'),
    permissionRequired: permissions.dimensionSsv1Read,
    exact: true,
  },
  {
    path: '/dimension-ssv1/new',
    loader: () =>
      import('src/view/dimensionSsv1/form/DimensionSsv1FormPage'),
    permissionRequired: permissions.dimensionSsv1Create,
    exact: true,
  },
  {
    path: '/dimension-ssv1/importer',
    loader: () =>
      import(
        'src/view/dimensionSsv1/importer/DimensionSsv1ImporterPage'
      ),
    permissionRequired: permissions.dimensionSsv1Import,
    exact: true,
  },
  {
    path: '/dimension-ssv1/:id/edit',
    loader: () =>
      import('src/view/dimensionSsv1/form/DimensionSsv1FormPage'),
    permissionRequired: permissions.dimensionSsv1Edit,
    exact: true,
  },
  {
    path: '/dimension-ssv1/:id',
    loader: () =>
      import('src/view/dimensionSsv1/view/DimensionSsv1ViewPage'),
    permissionRequired: permissions.dimensionSsv1Read,
    exact: true,
  },

  {
    path: '/dimension-ssv2',
    loader: () =>
      import('src/view/dimensionSsv2/list/DimensionSsv2ListPage'),
    permissionRequired: permissions.dimensionSsv2Read,
    exact: true,
  },
  {
    path: '/dimension-ssv2/new',
    loader: () =>
      import('src/view/dimensionSsv2/form/DimensionSsv2FormPage'),
    permissionRequired: permissions.dimensionSsv2Create,
    exact: true,
  },
  {
    path: '/dimension-ssv2/importer',
    loader: () =>
      import(
        'src/view/dimensionSsv2/importer/DimensionSsv2ImporterPage'
      ),
    permissionRequired: permissions.dimensionSsv2Import,
    exact: true,
  },
  {
    path: '/dimension-ssv2/:id/edit',
    loader: () =>
      import('src/view/dimensionSsv2/form/DimensionSsv2FormPage'),
    permissionRequired: permissions.dimensionSsv2Edit,
    exact: true,
  },
  {
    path: '/dimension-ssv2/:id',
    loader: () =>
      import('src/view/dimensionSsv2/view/DimensionSsv2ViewPage'),
    permissionRequired: permissions.dimensionSsv2Read,
    exact: true,
  },

  {
    path: '/dimension-ssv3',
    loader: () =>
      import('src/view/dimensionSsv3/list/DimensionSsv3ListPage'),
    permissionRequired: permissions.dimensionSsv3Read,
    exact: true,
  },
  {
    path: '/dimension-ssv3/new',
    loader: () =>
      import('src/view/dimensionSsv3/form/DimensionSsv3FormPage'),
    permissionRequired: permissions.dimensionSsv3Create,
    exact: true,
  },
  {
    path: '/dimension-ssv3/importer',
    loader: () =>
      import(
        'src/view/dimensionSsv3/importer/DimensionSsv3ImporterPage'
      ),
    permissionRequired: permissions.dimensionSsv3Import,
    exact: true,
  },
  {
    path: '/dimension-ssv3/:id/edit',
    loader: () =>
      import('src/view/dimensionSsv3/form/DimensionSsv3FormPage'),
    permissionRequired: permissions.dimensionSsv3Edit,
    exact: true,
  },
  {
    path: '/dimension-ssv3/:id',
    loader: () =>
      import('src/view/dimensionSsv3/view/DimensionSsv3ViewPage'),
    permissionRequired: permissions.dimensionSsv3Read,
    exact: true,
  },

  {
    path: '/government-teacher-information',
    loader: () =>
      import('src/view/governmentTeacherInformation/list/GovernmentTeacherInformationListPage'),
    permissionRequired: permissions.governmentTeacherInformationRead,
    exact: true,
  },
  {
    path: '/government-teacher-information/new',
    loader: () =>
      import('src/view/governmentTeacherInformation/form/GovernmentTeacherInformationFormPage'),
    permissionRequired: permissions.governmentTeacherInformationCreate,
    exact: true,
  },
  {
    path: '/government-teacher-information/importer',
    loader: () =>
      import(
        'src/view/governmentTeacherInformation/importer/GovernmentTeacherInformationImporterPage'
      ),
    permissionRequired: permissions.governmentTeacherInformationImport,
    exact: true,
  },
  {
    path: '/government-teacher-information/:id/edit',
    loader: () =>
      import('src/view/governmentTeacherInformation/form/GovernmentTeacherInformationFormPage'),
    permissionRequired: permissions.governmentTeacherInformationEdit,
    exact: true,
  },
  {
    path: '/government-teacher-information/:id',
    loader: () =>
      import('src/view/governmentTeacherInformation/view/GovernmentTeacherInformationViewPage'),
    permissionRequired: permissions.governmentTeacherInformationRead,
    exact: true,
  },

  {
    path: '/state',
    loader: () =>
      import('src/view/state/list/StateListPage'),
    permissionRequired: permissions.stateRead,
    exact: true,
  },
  {
    path: '/state/new',
    loader: () =>
      import('src/view/state/form/StateFormPage'),
    permissionRequired: permissions.stateCreate,
    exact: true,
  },
  {
    path: '/state/importer',
    loader: () =>
      import(
        'src/view/state/importer/StateImporterPage'
      ),
    permissionRequired: permissions.stateImport,
    exact: true,
  },
  {
    path: '/state/:id/edit',
    loader: () =>
      import('src/view/state/form/StateFormPage'),
    permissionRequired: permissions.stateEdit,
    exact: true,
  },
  {
    path: '/state/:id',
    loader: () =>
      import('src/view/state/view/StateViewPage'),
    permissionRequired: permissions.stateRead,
    exact: true,
  },

  {
    path: '/region',
    loader: () =>
      import('src/view/region/list/RegionListPage'),
    permissionRequired: permissions.regionRead,
    exact: true,
  },
  {
    path: '/region/new',
    loader: () =>
      import('src/view/region/form/RegionFormPage'),
    permissionRequired: permissions.regionCreate,
    exact: true,
  },
  {
    path: '/region/importer',
    loader: () =>
      import(
        'src/view/region/importer/RegionImporterPage'
      ),
    permissionRequired: permissions.regionImport,
    exact: true,
  },
  {
    path: '/region/:id/edit',
    loader: () =>
      import('src/view/region/form/RegionFormPage'),
    permissionRequired: permissions.regionEdit,
    exact: true,
  },
  {
    path: '/region/:id',
    loader: () =>
      import('src/view/region/view/RegionViewPage'),
    permissionRequired: permissions.regionRead,
    exact: true,
  },

  {
    path: '/district',
    loader: () =>
      import('src/view/district/list/DistrictListPage'),
    permissionRequired: permissions.districtRead,
    exact: true,
  },
  {
    path: '/district/new',
    loader: () =>
      import('src/view/district/form/DistrictFormPage'),
    permissionRequired: permissions.districtCreate,
    exact: true,
  },
  {
    path: '/district/importer',
    loader: () =>
      import(
        'src/view/district/importer/DistrictImporterPage'
      ),
    permissionRequired: permissions.districtImport,
    exact: true,
  },
  {
    path: '/district/:id/edit',
    loader: () =>
      import('src/view/district/form/DistrictFormPage'),
    permissionRequired: permissions.districtEdit,
    exact: true,
  },
  {
    path: '/district/:id',
    loader: () =>
      import('src/view/district/view/DistrictViewPage'),
    permissionRequired: permissions.districtRead,
    exact: true,
  },

  {
    path: '/tools',
    loader: () =>
      import('src/view/tools/list/ToolsListPage'),
    permissionRequired: permissions.toolsRead,
    exact: true,
  },
  {
    path: '/tools/new',
    loader: () =>
      import('src/view/tools/form/ToolsFormPage'),
    permissionRequired: permissions.toolsCreate,
    exact: true,
  },
  {
    path: '/tools/importer',
    loader: () =>
      import(
        'src/view/tools/importer/ToolsImporterPage'
      ),
    permissionRequired: permissions.toolsImport,
    exact: true,
  },
  {
    path: '/tools/:id/edit',
    loader: () =>
      import('src/view/tools/form/ToolsFormPage'),
    permissionRequired: permissions.toolsEdit,
    exact: true,
  },
  {
    path: '/tools/:id',
    loader: () =>
      import('src/view/tools/view/ToolsViewPage'),
    permissionRequired: permissions.toolsRead,
    exact: true,
  },

  {
    path: '/tool-types',
    loader: () =>
      import('src/view/toolTypes/list/ToolTypesListPage'),
    permissionRequired: permissions.toolTypesRead,
    exact: true,
  },
  {
    path: '/tool-types/new',
    loader: () =>
      import('src/view/toolTypes/form/ToolTypesFormPage'),
    permissionRequired: permissions.toolTypesCreate,
    exact: true,
  },
  {
    path: '/tool-types/importer',
    loader: () =>
      import(
        'src/view/toolTypes/importer/ToolTypesImporterPage'
      ),
    permissionRequired: permissions.toolTypesImport,
    exact: true,
  },
  {
    path: '/tool-types/:id/edit',
    loader: () =>
      import('src/view/toolTypes/form/ToolTypesFormPage'),
    permissionRequired: permissions.toolTypesEdit,
    exact: true,
  },
  {
    path: '/tool-types/:id',
    loader: () =>
      import('src/view/toolTypes/view/ToolTypesViewPage'),
    permissionRequired: permissions.toolTypesRead,
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
