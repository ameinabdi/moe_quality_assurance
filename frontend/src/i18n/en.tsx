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
    print:'Print',
    actions:'Actions'
  },

  app: {
    title: 'EMIS: QAS DEPARTMENT',
    name: 'QUALITY ASSURANCE',
  },

  api: {
    menu: 'API',
  },
  report: {
    menu: 'Report',
  },
  setup: {
    menu: 'Setup',
  },
  teacherReport: {
    menu: 'Teacher Report 2024/2025',
  },
  supervisionReport: {
    menu: 'Supervision Report 2024/2025',
  },

  teacherReportGPE: {
    menu: 'Teacher Report GPE',
  },
  supervisionReportGPE: {
    menu: 'Supervision Report GPE',
  },

  stateReport: {
    menu: 'State Report',
  },
  entities: {
    schoolSupervisionGPE: {
      name: 'school Supervision GPE',
      label: 'School Supervision GPES',
      menu: 'School Supervision GPES',
      exporterFileName: 'school Supervision GPE_export',
      list: {
        menu: 'School Supervision GPES',
        title: 'School Supervision GPES',
      },
      create: {
        success: 'School Supervision GPE successfully saved',
      },
      update: {
        success: 'School Supervision GPE successfully saved',
      },
      destroy: {
        success: 'School Supervision GPE successfully deleted',
      },
      destroyAll: {
        success: 'School Supervision GPE(s) successfully deleted',
      },
      edit: {
        title: 'Edit School Supervision GPE',
      },
      fields: {
        id: 'Id',
        'introduction': 'Introduction',
        'guidelines': 'Guidelines',
        'finalizedDateRange': 'Finalized Date',
        'finalizedDate': 'Finalized Date',
        'principal': 'Name of principal/Deputy',
        'signatureofprincipal': 'Signature of principal',
        'school': 'School',
        'dimension1': 'Dimension 1',
        'dimension2': 'Dimension 2',
        'dimension3': 'Dimension 3',
        'dimension4': 'Dimension 4',
        'dimensionGPE1': 'Dimension1',
        'dimensionGPE2': 'Dimension2',
        'dimensionGPE3': 'Dimension3',
        'dimensionGPE4': 'Dimension4',
        'schoolStamp': 'School Stamp',
        'schoolinfo':'School Information',
        'finalize':'Finalize',
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
        title: 'New School Supervision GPE',
        "sectionC": "Section C",
        'sectiona':'SECTION A: INTRODUCTION',
        'introduction':' School SUPERVISION tool is a support tool for the school management and designed to asses of the schools performance and identify areas forimprovement. This tool helps schools to evaluate their own practices and processes against predetermined standards without any pressures from external evaluators. By conducting regular self-assessment, schools can take proactive steps to enhance their practices, align with standards, and improve educational outcomes for students. The tool consists of five dimensions: School leadership and governance, School environment and safety, Curriculum implementation, Community relations and participation, and also Teaching and learning.',
        'note':'<h3><strong>Note:</strong></h3><br/>  1. School management is required to undertake a realistic and evidence-based assessment of their school against the criteria withi the five areas of the evaluation.<br/> 2. After completion of the SSA, the school should use the data from this SSA activity to craft a School Improvement Plan (SIP).<br/> 3. The tool will be digitalized in order to ease the data collection process, updating and expansion of quality assurance system. <br/><br/>',
        'sectionb':'SECTION B: GUIDELINES ON RATING',
        'basic':'Basic information about the school:',
        'dimension1':'DIMENSION 1: SCHOOL LEADERSHIP AND GOVERNANCE',
        'dimension2':'DIMENSION 2: CURRICULUM IMPLEMENTATION',
        'dimension3':'DIMENSION 3: TEACHING AND LEARNING',
        'sectionc':'SECTION C: SCHOOL NEEDS PRIORITIZATION FRAMEWORK'
      },
      view: {
        title: 'View SchoolSupervisionGPE',
      },
      importer: {
        title: 'Import SchoolSupervisionGPES',
        fileName: 'schoolSupervisionGPE_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  dimensionGPE1: {
      name: 'dimensionGPE1',
      label: 'DimensionGPE1s',
      menu: 'DimensionGPE1s',
      exporterFileName: 'dimensionGPE1_export',
      list: {
        menu: 'DimensionGPE1s',
        title: 'DimensionGPE1s',
      },
      create: {
        success: 'DimensionGPE1 successfully saved',
      },
      update: {
        success: 'DimensionGPE1 successfully saved',
      },
      destroy: {
        success: 'DimensionGPE1 successfully deleted',
      },
      destroyAll: {
        success: 'DimensionGPE1(s) successfully deleted',
      },
      edit: {
        title: 'Edit DimensionGPE1',
      },
      fields: {
        id: 'Id',
        'indicator11': 'The principal has a university degree.',
        'indicator12': 'The principal has the required experience according to the policies and the Education Law of the country.',
        'indicator13': 'The school has a written vision and mission that is consistent with the general education of the country',
        'indicator14': 'The school\'s open accounting system allows the parent committee to access financial records',
        'indicator15': 'The school has an active student feeding program.',
        'indicator16': 'The school has a student discipline program.',
        'indicator17': 'The school has a plan to encourage life skills, such as problem- solving, communication, and conflict resolution.',
        'indicator18': 'The principal guides the teachers in preparing a scheme of work',
        'indicator19': 'The school maintains accurate records of student transfers and implements EMIS.',
        'indicator110': 'The school participates in the preparation of the annual budget of the school CEC and financial staff.',
        'indicator111': 'The school enforces teachers\' attendance procedures',
        'indicator112': 'The school has a School Improvement Plan (SIP) that is based on the results of the school assessment',
        'indicator113': 'The education policies of the country can be found in the school.',
        'indicator114': 'The school presents the test results to the students',
        'school': 'School',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'indicator11': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator12': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator13': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator14': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator15': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator16': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator17': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator18': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator19': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator110': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator111': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator112': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator113': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator114': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New DimensionGPE1',
      },
      view: {
        title: 'View DimensionGPE1',
      },
      importer: {
        title: 'Import DimensionGPE1s',
        fileName: 'dimensionGPE1_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  dimensionGPE2: {
      name: 'dimensionGPE2',
      label: 'DimensionGPE2s',
      menu: 'DimensionGPE2s',
      exporterFileName: 'dimensionGPE2_export',
      list: {
        menu: 'DimensionGPE2s',
        title: 'DimensionGPE2s',
      },
      create: {
        success: 'DimensionGPE2 successfully saved',
      },
      update: {
        success: 'DimensionGPE2 successfully saved',
      },
      destroy: {
        success: 'DimensionGPE2 successfully deleted',
      },
      destroyAll: {
        success: 'DimensionGPE2(s) successfully deleted',
      },
      edit: {
        title: 'Edit DimensionGPE2',
      },
      fields: {
        id: 'Id',
        'indicator31': 'Copies of the syllabus are available in the principal\'s office.',
        'indicator32': 'The principal regularly monitors the use of the syllabus.',
        'indicator33': 'The school operates 6 days a week',
        'indicator34': 'The school teaches all subjects (9 in primary).',
        'indicator35': 'The school teaches all subjects (13 in secondary).',
        'indicator36': 'period time for primary is (40 minutes).',
        'indicator37': 'period time for Secondary is (45 minutes)',
        'indicator38': 'Indicator38',
        'indicator39': 'The school teachers are regularly trained in a curriculum implementation process',
        'indicator310': 'The tests conducted on the students are designed to assess and differentiate their mental abilities (low, medium, and high).',
        'indicator311': 'The school has met the standard for a student of textbook ratio 1:1',
        'indicator312': 'The school has a laboratory',
        'indicator313': 'The school has a library',
        'indicator314': 'The school has ICT system',
        'indicator315': 'All teachers keep a copy of the approved Scheme of work for every subject.',
        'school': 'School',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'indicator31': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator32': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator33': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator34': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator35': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator36': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator37': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator38': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator39': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator310': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator311': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator312': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator313': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator314': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator315': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New DimensionGPE2',
      },
      view: {
        title: 'View DimensionGPE2',
      },
      importer: {
        title: 'Import DimensionGPE2s',
        fileName: 'dimensionGPE2_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  dimensionGPE3: {
      name: 'dimensionGPE3',
      label: 'DimensionGPE3s',
      menu: 'DimensionGPE3s',
      exporterFileName: 'dimensionGPE3_export',
      list: {
        menu: 'DimensionGPE3s',
        title: 'DimensionGPE3s',
      },
      create: {
        success: 'DimensionGPE3 successfully saved',
      },
      update: {
        success: 'DimensionGPE3 successfully saved',
      },
      destroy: {
        success: 'DimensionGPE3 successfully deleted',
      },
      destroyAll: {
        success: 'DimensionGPE3(s) successfully deleted',
      },
      edit: {
        title: 'Edit DimensionGPE3',
      },
      fields: {
        id: 'Id',
        'indicator31': 'The teacher has a scheme of work, a lesson plan developed from the syllabus, and align with the Ministry approved standard',
        'indicator32': 'The teacher has access to various learning materials, including books, teacher\'s guides, and supplementary resources.',
        'indicator33': 'Teacher is able to identify student /learners’ ability, capacities, experience, skills, and link lesson to previous lessons or student /learners’ daily lives',
        'indicator34': 'He teacher uses variety of age/ability-appropriate teaching method/strategy 5. The teacher asses',
        'indicator35': 'The teacher assesses student understanding throughout the lesson',
        'indicator36': 'Students actively participate in the lesson.',
        'indicator37': 'Classroom is suitable for teaching and learning',
        'indicator38': 'The teacher employs positive discipline techniques to maintain a well-structured and supportive classroom environment.',
        'indicator39': 'The teacher follows child protection and code of conduct standard',
        'indicator310': 'The teacher moves around the classroom and makes eye contact',
        'indicator311': 'The teacher respects students/learners and provide everyone with equal opportunities to learn',
        'indicator312': 'The teacher used Class attendance twice daily – (first and last period)',
        'indicator313': 'Teacher arouses the student /learner’s interest and motivation level. The lesson introduction captured the learner’s attention and interest as well as linked the learner’s knowledge/ experiences to new content',
        'indicator314': 'The teacher communicates effectively to all the student /learners in class',
        'indicator315': 'The teacher demonstrates good knowledge of the subject and can teach',
        'indicator316': 'Teacher evaluates behavior, knowledge, skills, values, and attitudes during the teaching process using a range of formative assessment techniques (recap, quizzes, questions in groups and individually)',
        'indicator317': 'Learners receive clear and timely feedback on their progress and results are used to support learners and set targets',
        'indicator318': 'Students receive guidance on how to improve their areas of weakness.',
        'indicator319': 'the student\'s poor academic performance is communicated to their parents.',
        'indicator320': 'School based assessments are standardized, address the different cognitive abilities and all aligned with the learning outcomes of the syllabus',
        'school': 'School',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'indicator51': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator52': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator53': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator54': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator55': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator56': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator57': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator58': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator59': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator510': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator511': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator512': {
          'The teacher used Class attendance twice daily – (first and last period)': 'The teacher used Class attendance twice daily – (first and last period)',
        },
        'indicator513': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator514': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator515': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator516': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator517': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator518': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator519': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator520': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New DimensionGPE3',
      },
      view: {
        title: 'View DimensionGPE3',
      },
      importer: {
        title: 'Import DimensionGPE3s',
        fileName: 'dimensionGPE3_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  dimensionGPE4: {
      name: 'dimensionGPE4',
      label: 'DimensionGPE4s',
      menu: 'DimensionGPE4s',
      exporterFileName: 'dimensionGPE4_export',
      list: {
        menu: 'DimensionGPE4s',
        title: 'DimensionGPE4s',
      },
      create: {
        success: 'DimensionGPE4 successfully saved',
      },
      update: {
        success: 'DimensionGPE4 successfully saved',
      },
      destroy: {
        success: 'DimensionGPE4 successfully deleted',
      },
      destroyAll: {
        success: 'DimensionGPE4(s) successfully deleted',
      },
      edit: {
        title: 'Edit DimensionGPE4',
      },
      fields: {
        id: 'Id',
        'indicator41': 'The school has a functioning CEC',
        'indicator42': 'The CEC composition complies with the provisions of MOECHE’s CEC policy framework',
        'indicator43': 'The school CEC meets regularly and keeps records of their meetings and signed resolutions.',
        'indicator44': 'The principal ensures parent and local community are well-informed about school matters.',
        'school': 'School',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'indicator41': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator42': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator43': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator44': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New DimensionGPE4',
      },
      view: {
        title: 'View DimensionGPE4',
      },
      importer: {
        title: 'Import DimensionGPE4s',
        fileName: 'dimensionGPE4_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  teacherGPE: {
      name: 'teacher GPE',
      label: 'Teacher GPES',
      menu: 'Teacher GPES',
      exporterFileName: 'teacherGPE_export',
      list: {
        menu: 'Teacher GPES',
        title: 'Teacher GPES',
      },
      create: {
        success: 'TeacherGPE successfully saved',
      },
      update: {
        success: 'TeacherGPE successfully saved',
      },
      destroy: {
        success: 'TeacherGPE successfully deleted',
      },
      destroyAll: {
        success: 'TeacherGPE(s) successfully deleted',
      },
      edit: {
        title: 'Edit Teacher GPE',
      },
      fields: {
        id: 'Id',
        'school': 'School',
        'schoolEMISNo':'School EMISNo',
        'state': 'State',
        'region': 'Region',
        'district': 'District',
        'fullName': 'FullName',
        'gender': 'Gender',
        'subjectName': 'Subject Name',
        'teachingLevel': 'Level of the Teaching',
        'grade': 'Grade',
        'totalStudentRange': 'Total student in the class',
        'totalStudent': 'Total student in the class',
        'maleStudentsRange': 'MaleStudents',
        'maleStudents': 'MaleStudents',
        'femaleStudentRange': 'FemaleStudent',
        'femaleStudent': 'FemaleStudent',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'gender': {
          'Male': 'Male',
          'Female': 'Female',
        },
        'subjectName': {
          'Somali': 'Somali',
          'Saynis': 'Saynis',
          'Cilmiga-bulshada': 'Cilmiga-bulshada',
          'Xisaab': 'Xisaab',
          'English': 'English',
          'Technology': 'Technology',
          'Maths': 'Maths',
          'Biology': 'Biology',
          'Chemistry': 'Chemistry',
          'Physics': 'Physics',
          'Geography': 'Geography',
          'History': 'History',
          'Business': 'Business',
          'Carabi Tarbiyo': 'Carabi Tarbiyo',
        },
        'teachingLevel': {
          'Primary': 'Primary',
          'Secondary': 'Secondary',
        },
        'grade': {
          'Class 1': 'Class 1',
          'Class 2': 'Class 2',
          'Class 3': 'Class 3',
          'Class 4': 'Class 4',
          'Class 5': 'Class 5',
          'Class 6': 'Class 6',
          'Class 7': 'Class 7',
          'Class 8': 'Class 8',
          'Class 9': 'Class 9',
          'Class 10': 'Class 10',
          'Class 11': 'Class 11',
          'Class 12': 'Class 12',
          '': '',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Teacher GPE',
      },
      view: {
        title: 'View Teacher GPE',
      },
      importer: {
        title: 'Import Teacher GPES',
        fileName: 'teacherGPE_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  dimensionGPE5: {
      name: 'dimensionGPE5',
      label: 'DimensionGPE5s',
      menu: 'DimensionGPE5s',
      exporterFileName: 'dimensionGPE5_export',
      list: {
        menu: 'DimensionGPE5s',
        title: 'DimensionGPE5s',
      },
      create: {
        success: 'DimensionGPE5 successfully saved',
      },
      update: {
        success: 'DimensionGPE5 successfully saved',
      },
      destroy: {
        success: 'DimensionGPE5 successfully deleted',
      },
      destroyAll: {
        success: 'DimensionGPE5(s) successfully deleted',
      },
      edit: {
        title: 'Edit DimensionGPE5',
      },
      fields: {
        id: 'Id',
        'lesson':'Lesson Preparation',
        'classroom':'Classroom Management',
        'instruction':'Instruction',
        'Professionalism':'Teacher Professionalism',
        'learner':'Learner Assessment and Feedback',
        'indicator51': 'The teacher has a scheme of work, a lesson plan developed from the syllabus, and align with the Ministry approved standard',
        'indicator52': 'The teacher has access to various learning materials, including books, teacher\'s guides, and supplementary resources.',
        'indicator53': 'Teacher is able to identify student /learners’ ability, capacities, experience, skills, and link lesson to previous lessons or student /learners’ daily lives',
        'indicator54': 'He teacher uses variety of age/ability-appropriate teaching method/strategy',
        'indicator55': 'The teacher assesses student understanding throughout the lesson',
        'indicator56': 'The teacher implements the curriculum using a student-centered approach.',
        'indicator57': 'Students actively participate in the lesson.',
        'indicator58': 'Classroom is suitable for teaching and learning',
        'indicator59': 'The teacher employs positive discipline techniques to maintain a well-structured and supportive classroom environment.',
        'indicator510': 'The teacher follows child protection and code of conduct standard',
        'indicator511': 'The teacher moves around the classroom and makes eye contact',
        'indicator512': 'The teacher respects students/learners and provide everyone with equal opportunities to learn',
        'indicator513': 'The teacher used Class attendance twice daily – (first and last period)',
        'indicator514': 'Teacher arouses the student /learner’s interest and motivation level. The lesson introduction captured the learner’s attention and interest as well as linked the learner’s knowledge/ experiences to new content',
        'indicator515': 'The teacher communicates effectively to all the student /learners in class',
        'indicator516': 'The teacher demonstrates good knowledge of the subject and can teach',
        'indicator517': 'The teacher reports to school and class on time regularly.',
        'indicator518': 'The teacher maintains consistent attendance without excessive absences',
        'indicator519': 'The teacher shows a commitment to ongoing professional development (e.g., attending training, applying new techniques).',
        'indicator520': 'Teacher evaluates behavior, knowledge, skills, values, and attitudes during the teaching process using a range of formative assessment techniques (recap, quizzes, questions in groups and individually)',
        'indicator521': 'Learners receive clear and timely feedback on their progress and results are used to support learners and set targets',
        'indicator522': 'Students receive guidance on how to improve their areas of weakness.',
        'indicator523': 'The student\'s poor academic performance is communicated to their parents.',
        'indicator524': 'School based assessments are standardized, address the different cognitive abilities and all aligned with the learning outcomes of the syllabus',
        'teacher': 'Teacher',
        'school': 'School',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'indicator51': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator52': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator53': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator54': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator55': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator56': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator57': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator58': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator59': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator510': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator511': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator512': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator513': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator514': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator515': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator516': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator517': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator518': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator519': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator520': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator521': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator522': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator523': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
        'indicator524': {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New DimensionGPE5',
      },
      view: {
        title: 'View DimensionGPE5',
      },
      importer: {
        title: 'Import DimensionGPE5s',
        fileName: 'dimensionGPE5_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  schoolSupervision: {
      name: 'school Supervision',
      label: 'School Supervisions',
      menu: 'School Supervisions',
      exporterFileName: 'school Supervision_export',
      list: {
        menu: 'School Supervisions',
        title: 'School Supervisions',
      },
      create: {
        success: 'School Supervision successfully saved',
      },
      update: {
        success: 'School Supervision successfully saved',
      },
      destroy: {
        success: 'School Supervision successfully deleted',
      },
      destroyAll: {
        success: 'School Supervision(s) successfully deleted',
      },
      edit: {
        title: 'Edit School Supervision',
      },
      fields: {
        id: 'Id',
        'finalizedDateRange': 'Finalized Date',
        'finalizedDate': 'Finalized Date',
        'principal': 'Name of principal/Deputy',
        'signatureofprincipal': 'Signature of principal',
        'introduction': 'Introduction',
        'guidelines': 'Guidelines',
        'school': 'School',
        'finalize':'Finalize',
        'schoolinfo': 'School Information',
        'dimension1': 'Dimension 1',
        'dimension2': 'Dimension 2',
        'dimension3': 'Dimension 3',
        'dimension4': 'Dimension4',
        'dimension5': 'Dimension5',
        'district':'District',
        'schoolStamp': 'School Stamp',
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
        title: 'SCHOOL SUPERVISION TOOL',
        'sectiona':'SECTION A: INTRODUCTION',
        'introduction':' School SUPERVISION tool is a support tool for the school management and designed to asses of the schools performance and identify areas forimprovement. This tool helps schools to evaluate their own practices and processes against predetermined standards without any pressures from external evaluators. By conducting regular self-assessment, schools can take proactive steps to enhance their practices, align with standards, and improve educational outcomes for students. The tool consists of five dimensions: School leadership and governance, School environment and safety, Curriculum implementation, Community relations and participation, and also Teaching and learning.',
        'note':'<h3><strong>Note:</strong></h3><br/>  1. School management is required to undertake a realistic and evidence-based assessment of their school against the criteria withi the five areas of the evaluation.<br/> 2. After completion of the SSA, the school should use the data from this SSA activity to craft a School Improvement Plan (SIP).<br/> 3. The tool will be digitalized in order to ease the data collection process, updating and expansion of quality assurance system. <br/><br/>',
        'sectionb':'SECTION B: GUIDELINES ON RATING',
        'basic':'Basic information about the school:',
        'dimension1':'DIMENSION 1: SCHOOL LEADERSHIP AND GOVERNANCE',
        'dimension2':'DIMENSION 2: CURRICULUM IMPLEMENTATION',
        'dimension3':'DIMENSION 3: TEACHING AND LEARNING',
        'sectionc':'SECTION C: SCHOOL NEEDS PRIORITIZATION FRAMEWORK'

      },
      view: {
        title: 'View School Supervision',
      },
      importer: {
        title: 'Import School Supervisions',
        fileName: 'school Supervision_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  school: {
      name: 'school',
      label: 'Schools',
      menu: 'Schools',
      exporterFileName: 'school_export',
      list: {
        menu: 'Schools',
        title: 'Schools',
      },
      create: {
        success: 'School successfully saved',
      },
      update: {
        success: 'School successfully saved',
      },
      destroy: {
        success: 'School successfully deleted',
      },
      destroyAll: {
        success: 'School(s) successfully deleted',
      },
      edit: {
        title: 'Edit School',
      },
      fields: {
        id: 'Id',
        'schoolName': 'School Name',
        'schoolLevel': 'School Level',
        'schoolType': 'School Type',
        'schoolPhone': 'School Phone',
        'schoolEmail': 'School Email',
        'schoolLocation': 'School Location',
        'schoolEMISNumber': 'EMIS Number',
        'classes': 'Classes',
        'toiletsRange': 'Toilets',
        'toilets': 'Toilets',
        'maleStaffRange': 'Male Staff',
        'maleStaff': 'Male Staff',
        'femaleStaffRange': 'Female Staff',
        'femaleStaff': 'Female Staff',
        'nonTeachingFemaleStaffRange': 'Non Teaching Female Staff',
        'nonTeachingFemaleStaff': 'Non Teaching Female Staff',
        'nonTeachingMaleStaffRange': 'Non Teaching Male Staff',
        'nonTeachingMaleStaff': 'Non  Teaching Male Staff', 
        'headTeacher': 'Head Teacher',
        'headsex': 'sex',
        'teacherAttedance':'Teacher Attedance',
        'headTeacherPhone': 'Head Teacher Phone',
        'headTeacherLevelEduction': 'Head Teacher Level Eduction',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'schoolLevel': {
          'Primary': 'Primary',
          'Intermediate': 'Intermediate',
          'Secondary': 'Secondary',
          'Lower/Upper Primary':'Lower/Upper Primary',
          'Sare':'Sare',
          "Lower Primary": "Lower Primary",
          "Upper Primary":"Upper Primary",
          "H/Dhexe iyo Sare":"H/Dhexe iyo Sare",
          "ABE":"ABE"
        },
        'schoolType': {
          'Private': 'Private',
          'Public': 'Public',
          'Community': 'Community',
        },
        'headsex': {
          'Male': 'Male',
          'Female': 'Female',
        },
      },
      placeholders: {

      },
      hints: {
        'classes': 'The total number of classes',
        'toilets': 'Number of Toilets',
        'maleStaff': 'Number of management male staff',
        'femaleStaff': 'Number of management female staff',
        'headTeacher': 'Name of head teacher/deputy head teacher',
      },
      new: {
        title: 'New School',
      },
      view: {
        title: 'View School',
      },
      importer: {
        title: 'Import Schools',
        fileName: 'school_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  sSASurvey: {
      name: 'SSA Tool',
      label: 'SSA Tools',
      menu: 'SSA Tools',
      exporterFileName: 'sSASurvey_export',
      list: {
        menu: 'SSA Tools',
        title: 'SSA Tools',
      },
      create: {
        success: 'SSA Tool successfully saved',
      },
      update: {
        success: 'SSA Tool successfully saved',
      },
      destroy: {
        success: 'SSA Tool successfully deleted',
      },
      destroyAll: {
        success: 'SSA Tool(s) successfully deleted',
      },
      edit: {
        title: 'SCHOOL SELF-ASSESSMENT TOOL'
      },
      fields: {
        id: 'Id',
        'finalizedDateRange': 'Finalized Date',
        'finalizedDate': 'Finalized Date',
        'principal': 'Name of principal/Deputy',
        'signatureofprincipal': 'Signature of principal',
        'introduction': 'Introduction',
        'guidelines': 'Guidelines',
        'dimension_1':'School leadership and governance',
        'dimension_2':'School Environment and its safety',
        'dimension_3':'Curriculum implementation',
        'dimension_4':'Community Relations and participation',
        'dimension_5':'Teaching and learning',
        'school': 'School ',
        'schoolinfo': 'School Information',
        'total':'Total',
        'dimension1': 'Dimension 1',
        'dimension2': 'Dimension 2',
        'dimension3': 'Dimension 3',
        'dimension4': 'Dimension 4',
        'dimension5': 'Dimension 5',
        'schoolStamp': 'School Stamp',
        'schoolImprovement':'School Improvement Plan',
        'teacherAttedance':'Teacher Attedance',
        'No':'No',
        'DIMENSIONS':'DIMENSIONS',
        'Indicators':'Indicators',
        'value':"Indicator’s value",
        'Indicator':'Indicator',
        'answer':'answer',
        'indicatorDesc':'Place a cross in the appropriate inbox See guidelines on Rating Scale',
        '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        'aspect':'SCHOOL ASPECTS',
        'challenge':'CHALLENGES IDENTIFIED',
        'rating':'RATINGS (SCALE OF 1-5) THE  HIGHEST REPRESENTS THE KEY PRIORITY 1: Needs urgent support \n 2: Needs improvement \n 3: Acceptable \n 4: Good \n 5: Outstanding ',
        'solution':'IDENTIFIED SOLUTIONS',
        'dimension1Challenge':'dimension1Challenge',
        'dimension1Solution':'dimension1Solution',
        'finalize':'Finalize',
        'dimension2Challenge':'dimension2Challenge',
        'dimension2Solution':'dimension2Solution',
        'dimension3Challenge':'dimension3Challenge',
        'dimension3Solution':'dimension3Solution',
        'dimension4Challenge':'dimension4Challenge',
        'dimension4Solution':'dimension4Solution',
        'dimension5Challenge':'dimension5Challenge',
        'dimension5Solution':'dimension5Solution',
        'ratingAwarded':'Rating to be awarded',
        'descriptor':'Descriptor',
        'looking':'Look at the indicator and ask the following QUESTION',
        'evidence':'What is the prevailing scenario in theschool after examining? available EVIDENCE',
        'interpretation':'Interpretation',
        'descriptor_1':'Needs urgent support',
        'looking_1':'Is it available?',
        'evidence_1':'It is not available is not done, does not exist, does not occur.',
        'interpretation_1':'1. It also means “Does it exist? Is it done? Does it occur?”  To answer this question, the evaluator must look at documentary evidence or evidence gathered through interviews, lesson and other observations,etc. and may also refer to a particular practice or occurrence that is happening at the school. <br/>  1. Non-compliance, not appropriate, notavailable, not adhered to, not implemented. There are major weaknesses that require immediate remedial intervention and action. Province/District need to intervene urgently.',
        'descriptor_2':'Needs improvement',
        'looking_2':'Is it appropriate?',
        'evidence_2':'It is available. Some of the aspects are appropriate, with some that are not',
        'interpretation_2':'1. Everything that happens at a school or that is documented should be tested against all relevant legislation applicable to education, e.g. Education act, Department of quality assurance and standards policies and regulations, Gender policy for Somali education and privet school policy.<br /> 2. Non-compliance with a significant numberof minimum requirements for a particular indicator, there are some strengths but it is outweighed by areas for development (weaknesses). The school needs structured and planned action to provide learners with basic education. Implementation is not effective andassisted by all stakeholders',
        'descriptor_3':'Acceptable',
        'looking_3':'Is it implemented?',
        'evidence_3':'It is available and appropriate. Majority of the aspects are implemented, comply with legislation and add value to school operations.',
        'interpretation_3':'1. Policies, procedures, practices and planning at school are implemented. Evidence may be gathered through observations, registers, written communication, interviews with stakeholders, questionnaires etc. Implementation must also be appropriateand in line with legislation.<br /> 2. Adequate, compliance with most minimum requirements, strengths just outweigh areas for development, policies, plans and procedures are fully implemented. Quality of teaching is',
        'descriptor_4':'Good',
        'looking_4':'Is it effective ?',
        'evidence_4':'It is available, appropriate and implemented. All the aspects are implemented, comply with legislation and add value to school operations.',
        'interpretation_4':'1. The policy, plan, procedure, conduct, occurrence adds most possible value to school operations, it works and is cost- effective; School complies with all legislative, regulatory and policy requirements, quality of teaching is characterizing by major strengths that clearly outweigh any areas for development, learners’ experiences and achievement is above average expectation, the schools’ policies, plans and procedures are fully effective.',
        'descriptor_5':'Outstanding',
        'looking_5':'Is there innovation ?',
        'evidence_5':'It is available, appropriate, implemented and effective. All the aspects are implemented, comply with legislation and add value to school operations, with clear evidence of innovative practice.',
        'interpretation_5':'1. Exceptional, very best practice that inspires other schools, exceptional effective implementation, exceptional quality of learning and teaching, learners’ experiences and achievements are of very high quality as a result of innovative practices.',
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
        title: 'SCHOOL SELF-ASSESSMENT TOOL',
        'sectiona':'SECTION A: INTRODUCTION',
        'introduction':' School self-assessment tool is a support tool for the school management and designed to asses of the schools performance and identify areas forimprovement. This tool helps schools to evaluate their own practices and processes against predetermined standards without any pressures from external evaluators. By conducting regular self-assessment, schools can take proactive steps to enhance their practices, align with standards, and improve educational outcomes for students. The tool consists of five dimensions: School leadership and governance, School environment and safety, Curriculum implementation, Community relations and participation, and also Teaching and learning.',
        'note':'<h3><strong>Note:</strong></h3><br/>  1. School management is required to undertake a realistic and evidence-based assessment of their school against the criteria withi the five areas of the evaluation.<br/> 2. After completion of the SSA, the school should use the data from this SSA activity to craft a School Improvement Plan (SIP).<br/> 3. The tool will be digitalized in order to ease the data collection process, updating and expansion of quality assurance system. <br/><br/>',
        'sectionb':'SECTION B: GUIDELINES ON RATING',
        'basic':'Basic information about the school:',
        'dimension1':'DIMENSION 1: SCHOOL LEADERSHIP AND GOVERNANCE',
        'dimension2':'DIMENSION 2: SCHOOL ENVIRONMENT AND SAFETY',
        'dimension3':'DIMENSION 3: CURRICULUM IMPLEMENTATION',
        'dimension4':'DIMENSION 4: COMMUNITY RELATIONS AND PARTICIPATION',
        'dimension5':'DIMENSION 5: TEACHING AND LEARNING',
        'sectionc':'SECTION C: SCHOOL NEEDS PRIORITIZATION FRAMEWORK'

      },
      view: {
        title: 'View SSA Tool',
      },
      importer: {
        title: 'Import SSA Tools',
        fileName: 'sSASurvey_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  dimension1: {
      name: 'dimension1',
      label: 'SCHOOL LEADERSHIP AND GOVERNANCES',
      menu: 'SCHOOL LEADERSHIP AND GOVERNANCES',
      exporterFileName: 'dimension1_export',
      list: {
        menu: 'SCHOOL LEADERSHIP AND GOVERNANCES',
        title: 'SCHOOL LEADERSHIP AND GOVERNANCES',
      },
      create: {
        success: 'SCHOOL LEADERSHIP AND GOVERNANCE  successfully saved',
      },
      update: {
        success: 'SCHOOL LEADERSHIP AND GOVERNANCE  successfully saved',
      },
      destroy: {
        success: 'SCHOOL LEADERSHIP AND GOVERNANCE  successfully deleted',
      },
      destroyAll: {
        success: 'SCHOOL LEADERSHIP AND GOVERNANCE (s) successfully deleted',
      },
      edit: {
        title: 'Edit SCHOOL LEADERSHIP AND GOVERNANCE ',
      },
      fields: {
        id: 'Id',
        'indicator11': 'The principal has a university degree.',
        'indicator12': 'The principal has the required experience according to the policies and the Education Law of the country.',
        'indicator13': 'The school has a written vision and mission that is consistent with the general education of the country',
        'indicator14': 'The school\'s open accounting system allows the parent committee to access financial records',
        'indicator15': 'The school has an active student feeding program.',
        'indicator16': 'The school has a student discipline program.',
        'indicator17': 'The school has a plan to encourage life skills, such as problem- solving, communication, and conflict resolution.',
        'indicator18': 'The principal guides the teachers in preparing a scheme of work',
        'indicator19': 'The school maintains accurate records of student transfers and implements EMIS.',
        'indicator110': 'The school participates in the preparation of the annual budget of the school CEC and financial staff.',
        'indicator111': 'The school enforces teachers\' attendance procedures',
        'indicator112': 'The school has a School Improvement Plan (SIP) that is based on the results of the school assessment',
        'indicator113': 'The education policies of the country can be found in the school.',
        'indicator114': 'The school presents the test results to the students',
        'school': 'School',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'indicator11': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator12': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator13': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator14': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator15': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator16': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator17': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator18': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator19': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator110': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator111': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator112': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator113': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator114': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New SCHOOL LEADERSHIP AND GOVERNANCE ',
      },
      view: {
        title: 'View SCHOOL LEADERSHIP AND GOVERNANCE ',
      },
      importer: {
        title: 'Import SCHOOL LEADERSHIP AND GOVERNANCES',
        fileName: 'dimension1_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  deminsion2: {
      name: 'deminsion2',
      label: 'SCHOOL ENVIRONMENT AND SAFETIES',
      menu: 'SCHOOL ENVIRONMENT AND SAFETIES',
      exporterFileName: 'deminsion2_export',
      list: {
        menu: 'SCHOOL ENVIRONMENT AND SAFETIES',
        title: 'SCHOOL ENVIRONMENT AND SAFETIES',
      },
      create: {
        success: 'SCHOOL ENVIRONMENT AND SAFETY successfully saved',
      },
      update: {
        success: 'SCHOOL ENVIRONMENT AND SAFETY successfully saved',
      },
      destroy: {
        success: 'SCHOOL ENVIRONMENT AND SAFETY successfully deleted',
      },
      destroyAll: {
        success: 'SCHOOL ENVIRONMENT AND SAFETY(s) successfully deleted',
      },
      edit: {
        title: 'Edit SCHOOL ENVIRONMENT AND SAFETY',
      },
      fields: {
        id: 'Id',
        'indicator21': 'The school has a fence',
        'indicator22': 'All classrooms have adequate windows and doors in accordance with school building standards and regulations',
        'indicator23': 'The school environment is clean.',
        'indicator24': 'The school has first aid kits',
        'indicator25': 'The school buildings meet the safety requirements',
        'indicator26': 'The school has a place for prayer (Masjid)',
        'indicator27': 'The school has separate toilets (male and female), with adequate water and sanitation facilities.',
        'indicator28': 'All classrooms and other school buildings are accessible to people with special needs.',
        'school': 'School',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'indicator21': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator22': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator23': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator24': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator25': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator26': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator27': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator28': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New SCHOOL ENVIRONMENT AND SAFETY',
      },
      view: {
        title: 'View SCHOOL ENVIRONMENT AND SAFETY',
      },
      importer: {
        title: 'Import SCHOOL ENVIRONMENT AND SAFETIES',
        fileName: 'deminsion2_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  dimension3: {
      name: 'dimension3',
      label: 'CURRICULUM IMPLEMENTATIONS',
      menu: 'CURRICULUM IMPLEMENTATIONS',
      exporterFileName: 'dimension3_export',
      list: {
        menu: 'CURRICULUM IMPLEMENTATIONS',
        title: 'CURRICULUM IMPLEMENTATIONS',
      },
      create: {
        success: 'CURRICULUM IMPLEMENTATION successfully saved',
      },
      update: {
        success: 'CURRICULUM IMPLEMENTATION successfully saved',
      },
      destroy: {
        success: 'CURRICULUM IMPLEMENTATION successfully deleted',
      },
      destroyAll: {
        success: 'CURRICULUM IMPLEMENTATION(s) successfully deleted',
      },
      edit: {
        title: 'Edit CURRICULUM IMPLEMENTATION',
      },
      fields: {
        id: 'Id',
        'indicator31': 'Copies of the syllabus are available in the principal\'s office.',
        'indicator32': 'The principal regularly monitors the use of the syllabus.',
        'indicator33': 'The school operates 6 days a week',
        'indicator34': 'The school teaches all subjects (9 in primary).',
        'indicator35': 'The school teaches all subjects (13 in secondary).',
        'indicator36': 'period time for primary is (40 minutes).',
        'indicator37': 'period time for Secondary is (45 minutes)',
        'indicator38': 'The teachers use the subject syllabus correctly',
        'indicator39': 'The school teachers are regularly trained in a curriculum implementation process',
        'indicator310': 'The tests conducted on the students are designed to assess and differentiate their mental abilities (low, medium, and high).',
        'indicator311': 'The school has met the standard for a student of textbook ratio 1:1',
        'indicator312': 'The school has a laboratory',
        'indicator313': 'The school has a library',
        'indicator314': 'The school has ICT system',
        'indicator315': 'All teachers keep a copy of the approved Scheme of work for every subject.',
        'school': 'School',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'indicator31': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator32': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator33': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator34': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator35': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator36': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator37': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator38': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator39': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator310': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator311': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator312': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator313': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator314': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator315': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New CURRICULUM IMPLEMENTATION',
      },
      view: {
        title: 'View CURRICULUM IMPLEMENTATION',
      },
      importer: {
        title: 'Import CURRICULUM IMPLEMENTATIONS',
        fileName: 'dimension3_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  dimension4: {
      name: 'dimension4',
      label: 'Dimension4s',
      menu: 'Dimension4s',
      exporterFileName: 'dimension4_export',
      list: {
        menu: 'Dimension4s',
        title: 'Dimension4s',
      },
      create: {
        success: 'Dimension4 successfully saved',
      },
      update: {
        success: 'Dimension4 successfully saved',
      },
      destroy: {
        success: 'Dimension4 successfully deleted',
      },
      destroyAll: {
        success: 'Dimension4(s) successfully deleted',
      },
      edit: {
        title: 'Edit Dimension4',
      },
      fields: {
        id: 'Id',
        'indicator41': 'The school has a functioning CEC',
        'indicator42': 'The CEC composition complies with the provisions of MOECHE’s CEC policy framework',
        'indicator43': 'The school CEC meets regularly and keeps records of their meetings and signed resolutions.',
        'indicator44': 'The principal ensures parent and local community are well-informed about school matters.',
        'school': 'School',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'indicator41': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator42': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator43': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator44': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New Dimension4',
      },
      view: {
        title: 'View Dimension4',
      },
      importer: {
        title: 'Import Dimension4s',
        fileName: 'dimension4_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  dimension5: {
      name: 'dimension5',
      label: 'TEACHING AND LEARNINGS',
      menu: 'TEACHING AND LEARNINGS',
      exporterFileName: 'dimension5_export',
      list: {
        menu: 'TEACHING AND LEARNINGS',
        title: 'TEACHING AND LEARNINGS',
      },
      create: {
        success: 'TEACHING AND LEARNING successfully saved',
      },
      update: {
        success: 'TEACHING AND LEARNING successfully saved',
      },
      destroy: {
        success: 'TEACHING AND LEARNING successfully deleted',
      },
      destroyAll: {
        success: 'TEACHING AND LEARNING(s) successfully deleted',
      },
      edit: {
        title: 'Edit TEACHING AND LEARNING',
      },
      fields: {
        id: 'Id',
        'indicator51': 'The teacher has a scheme of work, a lesson plan developed from the syllabus, and align with the Ministry approved standard',
        'indicator52': 'The teacher has access to various learning materials, including books, teacher\'s guides, and supplementary resources.',
        'indicator53': 'Teacher is able to identify student /learners’ ability, capacities, experience, skills, and link lesson to previous lessons or student /learners’ daily lives',
        'indicator54': 'The teacher uses variety of age/ability-appropriate teaching method/strategy.',
        'indicator55': 'The teacher assesses student understanding throughout the lesson',
        'indicator56': 'Students actively participate in the lesson.',
        'indicator57': 'Classroom is suitable for teaching and learning',
        'indicator58': 'The teacher employs positive discipline techniques to maintain a well-structured and supportive classroom environment.',
        'indicator59': 'The teacher follows child protection and code of conduct standard',
        'indicator510': 'The teacher moves around the classroom and makes eye contact',
        'indicator511': 'The teacher respects students/learners and provide everyone with equal opportunities to learn',
        'indicator512': 'The teacher used Class attendance twice daily – (first and last period)',
        'indicator513': 'Teacher arouses the student /learner’s interest and motivation level. The lesson introduction captured the learner’s attention and interest as well as linked the learner’s knowledge/ experiences to new content',
        'indicator514': 'The teacher communicates effectively to all the student /learners in class',
        'indicator515': 'The teacher demonstrates good knowledge of the subject and can teach',
        'indicator516': 'Teacher evaluates behavior, knowledge, skills, values, and attitudes during the teaching process using a range of formative assessment techniques (recap, quizzes, questions in groups and individually)',
        'indicator517': 'Learners receive clear and timely feedback on their progress and results are used to support learners and set targets',
        'indicator518': 'Students receive guidance on how to improve their areas of weakness.',
        'indicator519': 'the student\'s poor academic performance is communicated to their parents.',
        'indicator520': 'School based assessments are standardized, address the different cognitive abilities and all aligned with the learning outcomes of the syllabus',
        'school': 'School',
        'lesson':'Lesson Preparation',
        'classroom':'Classroom Management',
        'instruction':'Instruction',
        'learner':'Learner Assessment and Feedback',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'indicator51': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator52': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator53': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator54': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator55': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator56': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator57': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator58': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator59': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator510': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator511': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator512': {
          'The teacher used Class attendance twice daily – (first and last period)': 'The teacher used Class attendance twice daily – (first and last period)',
        },
        'indicator513': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator514': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator515': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator516': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator517': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator518': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator519': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
        'indicator520': {
         '1':'Needs urgent support',
        '2':'Needs improvement',
        '3':'Acceptable',
        '4':'Good',
        '5':'Outstanding',
        },
      },
      placeholders: {

      },
      hints: {

      },
      new: {
        title: 'New TEACHING AND LEARNING',
      },
      view: {
        title: 'View TEACHING AND LEARNING',
      },
      importer: {
        title: 'Import TEACHING AND LEARNINGS',
        fileName: 'dimension5_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    
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

  dimensionSsv1: {
        name: 'dimensionSsv1',
        label: 'SCHOOL LEADERSHIP AND MANAGEMENTS',
        menu: 'SCHOOL LEADERSHIP AND MANAGEMENTS',
        exporterFileName: 'dimensionSsv1_export',
        list: {
          menu: 'SCHOOL LEADERSHIP AND MANAGEMENTS',
          title: 'SCHOOL LEADERSHIP AND MANAGEMENTS',
        },
        create: {
          success: 'SCHOOL LEADERSHIP AND MANAGEMENT successfully saved',
        },
        update: {
          success: 'SCHOOL LEADERSHIP AND MANAGEMENT successfully saved',
        },
        destroy: {
          success: 'SCHOOL LEADERSHIP AND MANAGEMENT successfully deleted',
        },
        destroyAll: {
          success: 'SCHOOL LEADERSHIP AND MANAGEMENT(s) successfully deleted',
        },
        edit: {
          title: 'Edit SCHOOL LEADERSHIP AND MANAGEMENT',
        },
        fields: {
          id: 'Id',
          'indicator11': 'The principal has a university degree.',
          'indicator12': 'The principal has the required experience according to the policies and the Education Law of the country.',
          'indicator13': 'The school has a written vision and mission that is consistent with the general education of the country',
          'indicator14': 'The school\'s open accounting system allows the parent committee to access financial records',
          'indicator15': 'The school has an active student feeding program.',
          'indicator16': 'The school has a student discipline program.',
          'indicator17': 'The school has a plan to encourage life skills, such as problem- solving, communication, and conflict resolution.',
          'indicator18': 'The principal guides the teachers in preparing a scheme of work',
          'indicator19': 'The school maintains accurate records of student transfers and implements EMIS.',
          'indicator110': 'The school participates in the preparation of the annual budget of the school CEC and financial staff.',
          'indicator111': 'The school enforces teachers\' attendance procedures',
          'indicator112': 'The school has a School Improvement Plan (SIP) that is based on the results of the school assessment',
          'indicator113': 'The education policies of the country can be found in the school.',
          'indicator114': 'The school presents the test results to the students',
          'school': 'School',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'indicator11': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator12': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator13': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator14': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator15': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator16': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator17': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator18': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator19': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator110': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator111': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator112': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator113': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator114': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New SCHOOL LEADERSHIP AND MANAGEMENT',
        },
        view: {
          title: 'View SCHOOL LEADERSHIP AND MANAGEMENT',
        },
        importer: {
          title: 'Import SCHOOL LEADERSHIP AND MANAGEMENTS',
          fileName: 'dimensionSsv1_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

  dimensionSsv2: {
        name: 'dimensionSsv2',
        label: 'CURRICULUM IMPLEMENTATIONS',
        menu: 'CURRICULUM IMPLEMENTATIONS',
        exporterFileName: 'dimensionSsv2_export',
        list: {
          menu: 'CURRICULUM IMPLEMENTATIONS',
          title: 'CURRICULUM IMPLEMENTATIONS',
        },
        create: {
          success: 'CURRICULUM IMPLEMENTATION successfully saved',
        },
        update: {
          success: 'CURRICULUM IMPLEMENTATION successfully saved',
        },
        destroy: {
          success: 'CURRICULUM IMPLEMENTATION successfully deleted',
        },
        destroyAll: {
          success: 'CURRICULUM IMPLEMENTATION(s) successfully deleted',
        },
        edit: {
          title: 'Edit CURRICULUM IMPLEMENTATION',
        },
        fields: {
          id: 'Id',
          'indicator31': 'Copies of the syllabus are available in the principal\'s office.',
          'indicator32': 'The principal regularly monitors the use of the syllabus.',
          'indicator33': 'The school operates 6 days a week',
          'indicator34': 'The school teaches all subjects (9 in primary).',
          'indicator35': 'The school teaches all subjects (13 in secondary).',
          'indicator36': 'period time for primary is (40 minutes).',
          'indicator37': 'period time for Secondary is (45 minutes)',
          'indicator38': 'Indicator38',
          'indicator39': 'The school teachers are regularly trained in a curriculum implementation process',
          'indicator310': 'The tests conducted on the students are designed to assess and differentiate their mental abilities (low, medium, and high).',
          'indicator311': 'The school has met the standard for a student of textbook ratio 1:1',
          'indicator312': 'The school has a laboratory',
          'indicator313': 'The school has a library',
          'indicator314': 'The school has ICT system',
          'indicator315': 'All teachers keep a copy of the approved Scheme of work for every subject.',
          'school': 'School',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'indicator31': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator32': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator33': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator34': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator35': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator36': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator37': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator38': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator39': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator310': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator311': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator312': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator313': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator314': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator315': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New CURRICULUM IMPLEMENTATION',
        },
        view: {
          title: 'View CURRICULUM IMPLEMENTATION',
        },
        importer: {
          title: 'Import CURRICULUM IMPLEMENTATIONS',
          fileName: 'dimensionSsv2_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

  dimensionSsv3: {
        name: 'dimensionSsv3',
        label: 'TEACHING AND LEARNING',
        menu: 'TEACHING AND LEARNING',
        exporterFileName: 'dimensionSsv3_export',
        list: {
          menu: 'TEACHING AND LEARNING',
          title: 'TEACHING AND LEARNING',
        },
        create: {
          success: 'TEACHING AND LEARNING successfully saved',
        },
        update: {
          success: 'TEACHING AND LEARNING successfully saved',
        },
        destroy: {
          success: 'TEACHING AND LEARNING successfully deleted',
        },
        destroyAll: {
          success: 'TEACHING AND LEARNING(s) successfully deleted',
        },
        edit: {
          title: 'Edit TEACHING AND LEARNING',
        },
        fields: {
          id: 'Id',
          'indicator51': 'The teacher has a scheme of work, a lesson plan developed from the syllabus, and align with the Ministry approved standard',
          'indicator52': 'The teacher has access to various learning materials, including books, teacher\'s guides, and supplementary resources.',
          'indicator53': 'Teacher is able to identify student /learners’ ability, capacities, experience, skills, and link lesson to previous lessons or student /learners’ daily lives',
          'indicator54': 'He teacher uses variety of age/ability-appropriate teaching method/strategy 5. The teacher asses',
          'indicator55': 'The teacher assesses student understanding throughout the lesson',
          'indicator56': 'Students actively participate in the lesson.',
          'indicator57': 'Classroom is suitable for teaching and learning',
          'indicator58': 'The teacher employs positive discipline techniques to maintain a well-structured and supportive classroom environment.',
          'indicator59': 'The teacher follows child protection and code of conduct standard',
          'indicator510': 'The teacher moves around the classroom and makes eye contact',
          'indicator511': 'The teacher respects students/learners and provide everyone with equal opportunities to learn',
          'indicator512': 'The teacher used Class attendance twice daily – (first and last period)',
          'indicator513': 'Teacher arouses the student /learner’s interest and motivation level. The lesson introduction captured the learner’s attention and interest as well as linked the learner’s knowledge/ experiences to new content',
          'indicator514': 'The teacher communicates effectively to all the student /learners in class',
          'indicator515': 'The teacher demonstrates good knowledge of the subject and can teach',
          'indicator516': 'Teacher evaluates behavior, knowledge, skills, values, and attitudes during the teaching process using a range of formative assessment techniques (recap, quizzes, questions in groups and individually)',
          'indicator517': 'Learners receive clear and timely feedback on their progress and results are used to support learners and set targets',
          'indicator518': 'Students receive guidance on how to improve their areas of weakness.',
          'indicator519': 'the student\'s poor academic performance is communicated to their parents.',
          'indicator520': 'School based assessments are standardized, address the different cognitive abilities and all aligned with the learning outcomes of the syllabus',
          'school': 'School',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'indicator51': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator52': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator53': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator54': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator55': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator56': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator57': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator58': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator59': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator510': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator511': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator512': {
            'The teacher used Class attendance twice daily – (first and last period)': 'The teacher used Class attendance twice daily – (first and last period)',
          },
          'indicator513': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator514': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator515': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator516': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator517': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator518': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator519': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
          'indicator520': {
            '1': '1',
            '2': '2',
            '3': '3',
            '4': '4',
            '5': '5',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New TEACHING AND LEARNING',
        },
        view: {
          title: 'View TEACHING AND LEARNING',
        },
        importer: {
          title: 'Import TEACHING AND LEARNING',
          fileName: 'dimensionSsv3_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

  governmentTeacherInformation: {
        name: 'Teacher',
        label: 'Teachers',
        menu: 'Teachers',
        exporterFileName: 'Teacher_export',
        list: {
          menu: 'Teachers',
          title: 'Teachers',
        },
        create: {
          success: 'Teacher successfully saved',
        },
        update: {
          success: 'Teacher successfully saved',
        },
        destroy: {
          success: 'Teacher successfully deleted',
        },
        destroyAll: {
          success: 'Teacher(s) successfully deleted',
        },
        edit: {
          title: 'Edit Teacher',
        },
        fields: {
          id: 'Id',
          'school': 'School',
          'state': 'State',
          'region': 'Region',
          'district': 'District',
          'fullName': 'FullName',
          'gender': 'Gender',
          'teacherIDNumber': 'Teacher ID Number',
          'niraID': 'Nira ID',
          'educationLevel': 'Education Level',
          'graduationYearRange': 'Graduation Year (University)',
          'graduationYear': 'Graduation Year (University)',
          'taughtLevel': 'TaughtLevel',
          'teachingShift': 'TeachingShift',
          'gradesTaught': 'GradesTaught',
          'subjectsTaught': 'SubjectsTaught',
          'teachertraining': 'Have you received professional teacher training?',
          'trainingNo': 'If "Yes," how many times have you received training?',
          'present': 'Is the teacher currently present at the school ?',
          'contactNumber': 'Contact Number',
          'experienceRange': 'Years of Teaching Experience',
          'experience': 'Years of Teaching Experience',
          'joinedYearRange': 'Year Joined the Government Teaching Service?',
          'joinedYear': 'Year Joined the Government Teaching Service?',
          'disablity': 'Does the teacher have any special needs',
          'gPSLocation': 'GPSLocation',
          'teacherPhoto': 'TeacherPhoto',
          'teacherSignature': 'TeacherSignature',
          'reason':'Reason',

          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'gender': {
            'Male': 'Male',
            'Female': 'Female',
          },
          'taughtLevel': {
            'Primary': 'Primary',
            'Secondary': 'Secondary',
            'Primary/Seconday': 'Primary/Seconday',
            'ABE': 'ABE',
          },
          'teachingShift': {
            'Morning': 'Morning',
            'Afternoon': 'Afternoon',
            'Both': 'Both',
          },
          'gradesTaught': {
            'Class 1': 'Class 1',
            'Class 2': 'Class 2',
            'Class 3': 'Class 3',
            'Class 4': 'Class 4',
            'Class 5': 'Class 5',
            'Class 6': 'Class 6',
            'Class 7': 'Class 7',
            'Class 8': 'Class 8',
            'Class 9': 'Class 9',
            'Class 10': 'Class 10',
            'Class 11': 'Class 11',
            'Class 12': 'Class 12',
          },
          'subjectsTaught': {
            'Somali': 'Somali',
            'Saynis': 'Saynis',
            'Cilmiga-bulshada': 'Cilmiga-bulshada',
            'Xisaab': 'Xisaab',
            'English': 'English',
            'Technology': 'Technology',
            'Maths': 'Maths',
            'Biology': 'Biology',
            'Chemistry': 'Chemistry',
            'Physics': 'Physics',
            'Geography': 'Geography',
            'History': 'History',
            'Business': 'Business',
            'Carabi Tarbiyo': 'Carabi Tarbiyo',
          },
          'teachertraining': {
            'Yes': 'Yes',
            'No': 'No',
          },
          'trainingNo': {
            'Once': 'Once',
            'Twice': 'Twice',
            'Three times': 'Three times',
            'More than three times': 'More than three times',
          },
          'present': {
            'Yes': 'Yes',
            'No': 'No',
          },
          'disablity': {
            'None': 'None',
            'Blindness': 'Blindness',
            'Hearing': 'Hearing',
            'Legs': 'Legs',
            'Arms': 'Arms',
          },
          'educationLevel':{
            "Bachelor":"Bachelor",
            "Master":"Master",
            "PhD":"PhD",
            "None":"None"
          }
        },
        placeholders: {

        },
        hints: {
          'reason':'Reason of Absent',
        },
        new: {
          title: 'New Teacher',
        },
        view: {
          title: 'View Teacher',
        },
        importer: {
          title: 'Import Teachers',
          fileName: 'Teacher_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    state: {
        name: 'state',
        label: 'States',
        menu: 'States',
        exporterFileName: 'state_export',
        list: {
          menu: 'States',
          title: 'States',
        },
        create: {
          success: 'State successfully saved',
        },
        update: {
          success: 'State successfully saved',
        },
        destroy: {
          success: 'State successfully deleted',
        },
        destroyAll: {
          success: 'State(s) successfully deleted',
        },
        edit: {
          title: 'Edit State',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
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
          title: 'New State',
        },
        view: {
          title: 'View State',
        },
        importer: {
          title: 'Import States',
          fileName: 'state_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    region: {
        name: 'region',
        label: 'Regions',
        menu: 'Regions',
        exporterFileName: 'region_export',
        list: {
          menu: 'Regions',
          title: 'Regions',
        },
        create: {
          success: 'Region successfully saved',
        },
        update: {
          success: 'Region successfully saved',
        },
        destroy: {
          success: 'Region successfully deleted',
        },
        destroyAll: {
          success: 'Region(s) successfully deleted',
        },
        edit: {
          title: 'Edit Region',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'state': 'State',
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
          title: 'New Region',
        },
        view: {
          title: 'View Region',
        },
        importer: {
          title: 'Import Regions',
          fileName: 'region_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    district: {
        name: 'district',
        label: 'Districts',
        menu: 'Districts',
        exporterFileName: 'district_export',
        list: {
          menu: 'Districts',
          title: 'Districts',
        },
        create: {
          success: 'District successfully saved',
        },
        update: {
          success: 'District successfully saved',
        },
        destroy: {
          success: 'District successfully deleted',
        },
        destroyAll: {
          success: 'District(s) successfully deleted',
        },
        edit: {
          title: 'Edit District',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'region': 'Region',
          'state': 'State',
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
          title: 'New District',
        },
        view: {
          title: 'View District',
        },
        importer: {
          title: 'Import Districts',
          fileName: 'district_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    tools: {
        name: 'tools',
        label: 'Tools',
        menu: 'Tools',
        exporterFileName: 'tools_export',
        list: {
          menu: 'Tools',
          title: 'Tools',
        },
        create: {
          success: 'Tools successfully saved',
        },
        update: {
          success: 'Tools successfully saved',
        },
        destroy: {
          success: 'Tools successfully deleted',
        },
        destroyAll: {
          success: 'Tools(s) successfully deleted',
        },
        edit: {
          title: 'Edit Tools',
        },
        fields: {
          id: 'Id',
          'type': 'Type',
          'name': 'Name',
          'description': 'Description',
          'attachment': 'Attachment',
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
          title: 'New Tools',
        },
        view: {
          title: 'View Tools',
        },
        importer: {
          title: 'Import Tools',
          fileName: 'tools_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    toolTypes: {
        name: 'toolTypes',
        label: 'ToolTypes',
        menu: 'ToolTypes',
        exporterFileName: 'toolTypes_export',
        list: {
          menu: 'ToolTypes',
          title: 'ToolTypes',
        },
        create: {
          success: 'ToolTypes successfully saved',
        },
        update: {
          success: 'ToolTypes successfully saved',
        },
        destroy: {
          success: 'ToolTypes successfully deleted',
        },
        destroyAll: {
          success: 'ToolTypes(s) successfully deleted',
        },
        edit: {
          title: 'Edit ToolTypes',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
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
          title: 'New ToolTypes',
        },
        view: {
          title: 'View ToolTypes',
        },
        importer: {
          title: 'Import ToolTypes',
          fileName: 'toolTypes_import_template',
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
      type:'Type',
      state:'State',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      district:'District',
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
    enumerators:{
      type:{
        'admin':'Admin',
        'Federal':'Federal',
        'State':'State',
        'District':'District',
        'School':'School'
      }
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
