const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    filters: 'Filters',
  },

  app: {
    title: 'EMIS',
    name: 'SOMALIA',
  },

  api: {
    menu: 'API',
  },

  entities: {
    assessment: {
        name: 'assessment',
        label: 'Assessments',
        menu: 'Assessments',
        exporterFileName: 'assessment_export',
        list: {
          menu: 'Assessments',
          title: 'Assessments',
        },
        create: {
          success: 'Assessment successfully saved',
        },
        update: {
          success: 'Assessment successfully saved',
        },
        destroy: {
          success: 'Assessment successfully deleted',
        },
        destroyAll: {
          success: 'Assessment(s) successfully deleted',
        },
        edit: {
          title: 'Edit Assessment',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'description': 'Description',
          'level': 'Level',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'level': {
            'Federal': 'Federal',
            'State': 'State',
            'Region': 'Region',
            'District': 'District',
            'School': 'School',
            'Teacher': 'Teacher',
            'Student': 'Student',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Assessment',
        },
        view: {
          title: 'View Assessment',
        },
        importer: {
          title: 'Import Assessments',
          fileName: 'assessment_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    questionSection: {
        name: 'questionSection',
        label: 'Question Sections',
        menu: 'Question Sections',
        exporterFileName: 'questionSection_export',
        list: {
          menu: 'Question Sections',
          title: 'Question Sections',
        },
        create: {
          success: 'Question Section successfully saved',
        },
        update: {
          success: 'Question Section successfully saved',
        },
        destroy: {
          success: 'Question Section successfully deleted',
        },
        destroyAll: {
          success: 'Question Section(s) successfully deleted',
        },
        edit: {
          title: 'Edit Question Section',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'description': 'Description',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Question Section',
        },
        view: {
          title: 'View Question Section',
        },
        importer: {
          title: 'Import Question Sections',
          fileName: 'questionSection_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    question: {
        name: 'question',
        label: 'Questions',
        menu: 'Questions',
        exporterFileName: 'question_export',
        list: {
          menu: 'Questions',
          title: 'Questions',
        },
        create: {
          success: 'Question successfully saved',
        },
        update: {
          success: 'Question successfully saved',
        },
        destroy: {
          success: 'Question successfully deleted',
        },
        destroyAll: {
          success: 'Question(s) successfully deleted',
        },
        edit: {
          title: 'Edit Question',
        },
        fields: {
          id: 'Id',
          'question': 'Question',
          'type': 'Type',
          'hint': 'Hint',
          'validation': 'Validation',
          'answerValue': 'Answer Value',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type': {
            'Text': 'Text',
            'Enum': 'Enum',
            'Multi_Enum': 'Multi_Enum',
            'Rate': 'Rate',
            'Boolean': 'Boolean',
            '': '',
          },
          'validation': {
            'Required': 'Required',
            'Lower_Case': 'Lower_Case',
            'Upper_Case': 'Upper_Case',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Question',
        },
        view: {
          title: 'View Question',
        },
        importer: {
          title: 'Import Questions',
          fileName: 'question_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    subQuestion: {
        name: 'subQuestion',
        label: 'SubQuestions',
        menu: 'SubQuestions',
        exporterFileName: 'subQuestion_export',
        list: {
          menu: 'SubQuestions',
          title: 'SubQuestions',
        },
        create: {
          success: 'SubQuestion successfully saved',
        },
        update: {
          success: 'SubQuestion successfully saved',
        },
        destroy: {
          success: 'SubQuestion successfully deleted',
        },
        destroyAll: {
          success: 'SubQuestion(s) successfully deleted',
        },
        edit: {
          title: 'Edit SubQuestion',
        },
        fields: {
          id: 'Id',
          'question': 'Question',
          'type': 'Type',
          'hint': 'Hint',
          'validation': 'Validation',
          'answerValue': 'Answer Value',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type': {
            'Text': 'Text',
            'Enum': 'Enum',
            'Multi_Enum': 'Multi_Enum',
            'Rate': 'Rate',
            'Boolean': 'Boolean',
            '': '',
          },
          'validation': {
            'Required': 'Required',
            'Lower_Case': 'Lower_Case',
            'Upper_Case': 'Upper_Case',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New SubQuestion',
        },
        view: {
          title: 'View SubQuestion',
        },
        importer: {
          title: 'Import SubQuestions',
          fileName: 'subQuestion_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    assessmentAnswer: {
        name: 'assessmentAnswer',
        label: 'AssessmentAnswers',
        menu: 'AssessmentAnswers',
        exporterFileName: 'assessmentAnswer_export',
        list: {
          menu: 'AssessmentAnswers',
          title: 'AssessmentAnswers',
        },
        create: {
          success: 'Assessment Answer successfully saved',
        },
        update: {
          success: 'Assessment Answer successfully saved',
        },
        destroy: {
          success: 'Assessment Answer successfully deleted',
        },
        destroyAll: {
          success: 'Assessment Answer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Assessment Answer',
        },
        fields: {
          id: 'Id',
          'assessment': 'Assessment',
          'status': 'Status',
          'submitDateRange': 'Submit Date',
          'submitDate': 'Submit Date',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'Created': 'Created',
            'Draft': 'Draft',
            'Submitted': 'Submitted',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Assessment Answer',
        },
        view: {
          title: 'View Assessment Answer',
        },
        importer: {
          title: 'Import AssessmentAnswers',
          fileName: 'assessmentAnswer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    answer: {
        name: 'answer',
        label: 'Answers',
        menu: 'Answers',
        exporterFileName: 'answer_export',
        list: {
          menu: 'Answers',
          title: 'Answers',
        },
        create: {
          success: 'Answer successfully saved',
        },
        update: {
          success: 'Answer successfully saved',
        },
        destroy: {
          success: 'Answer successfully deleted',
        },
        destroyAll: {
          success: 'Answer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Answer',
        },
        fields: {
          id: 'Id',
          'assessment': 'Assessment',
          'question': 'Question',
          'answer': 'Answer',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Answer',
        },
        view: {
          title: 'View Answer',
        },
        importer: {
          title: 'Import Answers',
          fileName: 'answer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    subAnswer: {
        name: 'subAnswer',
        label: 'SubAnswers',
        menu: 'SubAnswers',
        exporterFileName: 'subAnswer_export',
        list: {
          menu: 'SubAnswers',
          title: 'SubAnswers',
        },
        create: {
          success: 'SubAnswer successfully saved',
        },
        update: {
          success: 'SubAnswer successfully saved',
        },
        destroy: {
          success: 'SubAnswer successfully deleted',
        },
        destroyAll: {
          success: 'SubAnswer(s) successfully deleted',
        },
        edit: {
          title: 'Edit SubAnswer',
        },
        fields: {
          id: 'Id',
          'assessment': 'Assessment',
          'question': 'Question',
          'subQuestion': 'SubQuestion',
          'answer': 'Answer',
          'subAnswer': 'Sub Answer',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New SubAnswer',
        },
        view: {
          title: 'View SubAnswer',
        },
        importer: {
          title: 'Import SubAnswers',
          fileName: 'subAnswer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    title:'Login into your account',
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    deactiveTenant: {
      message: ` <h2>{0}</h2> <br/> Your account <strong> is not  active </strong> or <strong> not yet approved</strong>, <br/> Please check your email we will send you email to approve it. <br/> if didn't get yet contact us .`,
      submit: `Resend email verification`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom access to resources',
    },
  },

  user: {
    invite: 'Invite',
    title: 'Users',
    menu: 'Users',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
    },
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    disable: 'Disable',
    enable: 'Enable',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'User(s) successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
    },
    colors: {
      default: 'Default',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
  },

  imagesViewer: {
    noImage: 'No image',
  },
};

export default en;
