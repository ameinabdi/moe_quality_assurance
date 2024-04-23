import Roles from 'src/security/roles';
import Plans from 'src/security/plans';
import Storage from 'src/security/storage';

const storage = Storage.values;
const roles = Roles.values;
const plans = Plans.values;

class Permissions {
  static get values() {
    return {
      dashboardRead: {
        id: 'dashboardRead',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      reportRead: {
        id: 'reportRead',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantEdit: {
        id: 'tenantEdit',
        allowedRoles: [roles.admin,],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      tenantDestroy: {
        id: 'tenantDestroy',
        allowedRoles: [roles.admin, roles.school],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planEdit: {
        id: 'planEdit',
        allowedRoles: [roles.admin, roles.school],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      planRead: {
        id: 'planRead',
        allowedRoles: [roles.admin, roles.school],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userEdit: {
        id: 'userEdit',
        allowedRoles: [roles.admin, roles.school],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userDestroy: {
        id: 'userDestroy',
        allowedRoles: [roles.admin, roles.school],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userCreate: {
        id: 'userCreate',
        allowedRoles: [roles.admin, roles.school],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userImport: {
        id: 'userImport',
        allowedRoles: [roles.admin, roles.school],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userRead: {
        id: 'userRead',
        allowedRoles: [roles.admin, roles.school],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      userAutocomplete: {
        id: 'userAutocomplete',
        allowedRoles: [roles.admin,],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.admin, roles.school],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.admin, roles.school],
         allowedPlans: [
          plans.free,
          plans.growth,
          plans.enterprise,
        ],
        allowedStorage: [
          storage.settingsBackgroundImages,
          storage.settingsLogos,
        ],
      },

      schoolImport: {
        id: 'schoolImport',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      schoolCreate: {
        id: 'schoolCreate',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      schoolEdit: {
        id: 'schoolEdit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      schoolDestroy: {
        id: 'schoolDestroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      schoolRead: {
        id: 'schoolRead',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      schoolAutocomplete: {
        id: 'schoolAutocomplete',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      sSASurveyImport: {
        id: 'sSASurveyImport',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      sSASurveyCreate: {
        id: 'sSASurveyCreate',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.sSASurveySignatureofprincipal,
          storage.sSASurveySchoolStamp,
          storage.sSASurveySchoolImprovement,
        ],
      },
      sSASurveyEdit: {
        id: 'sSASurveyEdit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.sSASurveySignatureofprincipal,
          storage.sSASurveySchoolStamp,
          storage.sSASurveySchoolImprovement,
        ],
      },
      sSASurveyDestroy: {
        id: 'sSASurveyDestroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [
          storage.sSASurveySignatureofprincipal,
          storage.sSASurveySchoolStamp,
          storage.sSASurveySchoolImprovement,
        ],
      },
      sSASurveyRead: {
        id: 'sSASurveyRead',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      sSASurveyAutocomplete: {
        id: 'sSASurveyAutocomplete',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      dimension1Import: {
        id: 'dimension1Import',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      dimension1Create: {
        id: 'dimension1Create',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      dimension1Edit: {
        id: 'dimension1Edit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      dimension1Destroy: {
        id: 'dimension1Destroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      dimension1Read: {
        id: 'dimension1Read',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      dimension1Autocomplete: {
        id: 'dimension1Autocomplete',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      deminsion2Import: {
        id: 'deminsion2Import',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      deminsion2Create: {
        id: 'deminsion2Create',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      deminsion2Edit: {
        id: 'deminsion2Edit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      deminsion2Destroy: {
        id: 'deminsion2Destroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      deminsion2Read: {
        id: 'deminsion2Read',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      deminsion2Autocomplete: {
        id: 'deminsion2Autocomplete',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      dimension3Import: {
        id: 'dimension3Import',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      dimension3Create: {
        id: 'dimension3Create',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      dimension3Edit: {
        id: 'dimension3Edit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      dimension3Destroy: {
        id: 'dimension3Destroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      dimension3Read: {
        id: 'dimension3Read',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      dimension3Autocomplete: {
        id: 'dimension3Autocomplete',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      dimension4Import: {
        id: 'dimension4Import',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      dimension4Create: {
        id: 'dimension4Create',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      dimension4Edit: {
        id: 'dimension4Edit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      dimension4Destroy: {
        id: 'dimension4Destroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      dimension4Read: {
        id: 'dimension4Read',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      dimension4Autocomplete: {
        id: 'dimension4Autocomplete',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      dimension5Import: {
        id: 'dimension5Import',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      dimension5Create: {
        id: 'dimension5Create',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      dimension5Edit: {
        id: 'dimension5Edit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      dimension5Destroy: {
        id: 'dimension5Destroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      dimension5Read: {
        id: 'dimension5Read',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      dimension5Autocomplete: {
        id: 'dimension5Autocomplete',
        allowedRoles: [roles.admin, roles.federal, roles.state, roles.district, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      assessmentImport: {
        id: 'assessmentImport',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      assessmentCreate: {
        id: 'assessmentCreate',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      assessmentEdit: {
        id: 'assessmentEdit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      assessmentDestroy: {
        id: 'assessmentDestroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      assessmentRead: {
        id: 'assessmentRead',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      assessmentAutocomplete: {
        id: 'assessmentAutocomplete',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      questionSectionImport: {
        id: 'questionSectionImport',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      questionSectionCreate: {
        id: 'questionSectionCreate',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      questionSectionEdit: {
        id: 'questionSectionEdit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      questionSectionDestroy: {
        id: 'questionSectionDestroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      questionSectionRead: {
        id: 'questionSectionRead',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      questionSectionAutocomplete: {
        id: 'questionSectionAutocomplete',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      questionImport: {
        id: 'questionImport',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      questionCreate: {
        id: 'questionCreate',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      questionEdit: {
        id: 'questionEdit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      questionDestroy: {
        id: 'questionDestroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      questionRead: {
        id: 'questionRead',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      questionAutocomplete: {
        id: 'questionAutocomplete',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      subQuestionImport: {
        id: 'subQuestionImport',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      subQuestionCreate: {
        id: 'subQuestionCreate',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      subQuestionEdit: {
        id: 'subQuestionEdit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      subQuestionDestroy: {
        id: 'subQuestionDestroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      subQuestionRead: {
        id: 'subQuestionRead',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      subQuestionAutocomplete: {
        id: 'subQuestionAutocomplete',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      assessmentAnswerImport: {
        id: 'assessmentAnswerImport',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      assessmentAnswerCreate: {
        id: 'assessmentAnswerCreate',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      assessmentAnswerEdit: {
        id: 'assessmentAnswerEdit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      assessmentAnswerDestroy: {
        id: 'assessmentAnswerDestroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      assessmentAnswerRead: {
        id: 'assessmentAnswerRead',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      assessmentAnswerAutocomplete: {
        id: 'assessmentAnswerAutocomplete',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      answerImport: {
        id: 'answerImport',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      answerCreate: {
        id: 'answerCreate',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      answerEdit: {
        id: 'answerEdit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      answerDestroy: {
        id: 'answerDestroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      answerRead: {
        id: 'answerRead',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      answerAutocomplete: {
        id: 'answerAutocomplete',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },

      subAnswerImport: {
        id: 'subAnswerImport',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      subAnswerCreate: {
        id: 'subAnswerCreate',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      subAnswerEdit: {
        id: 'subAnswerEdit',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      subAnswerDestroy: {
        id: 'subAnswerDestroy',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
        allowedStorage: [

        ],
      },
      subAnswerRead: {
        id: 'subAnswerRead',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
      subAnswerAutocomplete: {
        id: 'subAnswerAutocomplete',
        allowedRoles: [roles.admin, roles.school],
        allowedPlans: [plans.free, plans.growth, plans.enterprise],
      },
    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
