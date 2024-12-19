/**
 * Storage permissions.
 *
 * @id - Used to identify the rule on permissions and upload.
 * @folder - Folder where the files will be saved
 * @maxSizeInBytes - Max allowed size in bytes
 * @bypassWritingPermissions - Does not validate if the user has permission to write
 * @publicRead - The file can be publicly accessed via the URL without the need for a signed token
 */
export default class Storage {
  static get values() {
    return {
      sSASurveySignatureofprincipal: {
        id: 'sSASurveySignatureofprincipal',
        folder: 'tenant/:tenantId/sSASurvey/signatureofprincipal',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      sSASurveySchoolStamp: {
        id: 'sSASurveySchoolStamp',
        folder: 'tenant/:tenantId/sSASurvey/schoolStamp',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      sSASurveyTeacherAttedance: {
        id: 'sSASurveyTeacherAttedance',
        folder: 'tenant/:tenantId/sSASurvey/teacherAttedance',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      sSASurveySchoolImprovement: {
        id: 'sSASurveySchoolImprovement',
        folder: 'tenant/:tenantId/sSASurvey/schoolImprovement',
        maxSizeInBytes: 100 * 1024 * 1024,
      },

      schoolSupervisionSignatureofprincipal: {
        id: 'schoolSupervisionSignatureofprincipal',
        folder: 'tenant/:tenantId/schoolSupervision/signatureofprincipal',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      schoolSupervisionSchoolStamp: {
        id: 'schoolSupervisionSchoolStamp',
        folder: 'tenant/:tenantId/schoolSupervision/schoolStamp',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      governmentTeacherInformationTeacherPhoto: {
        id: 'governmentTeacherInformationTeacherPhoto',
        folder: 'tenant/:tenantId/governmentTeacherInformation/teacherPhoto',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      governmentTeacherInformationTeacherSignature: {
        id: 'governmentTeacherInformationTeacherSignature',
        folder: 'tenant/:tenantId/governmentTeacherInformation/teacherSignature',
        maxSizeInBytes: 100 * 1024 * 1024,
      },
      toolsAttachment: {
        id: 'toolsAttachment',
        folder: 'tenant/:tenantId/tools/attachment',
        maxSizeInBytes: 100 * 1024 * 1024,
      },

      settingsLogos: {
        id: 'settingsLogos',
        folder: 'tenant/:tenantId/settings/logos',
        maxSizeInBytes: 10 * 1024 * 1024,
        publicRead: true,
      },
      settingsBackgroundImages: {
        id: 'settingsBackgroundImages',
        folder:
          'tenant/:tenantId/settings/backgroundImages',
        maxSizeInBytes: 10 * 1024 * 1024,
        publicRead: true,
      },
      userAvatarsProfiles: {
        id: 'userAvatarsProfiles',
        folder: 'user/avatars/profile/:userId',
        maxSizeInBytes: 10 * 1024 * 1024,
        bypassWritingPermissions: true,
        publicRead: true,
      },
    };
  }
}
