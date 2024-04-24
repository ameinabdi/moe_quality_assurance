const so = {
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
    language:'Language',
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

  entities: {

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
          'schoolName': 'Magaca dugsiga',
          'schoolLevel': 'Heerka dugsiga',
          'schoolType': 'Nuuca dugsiga',
          'schoolPhone': 'Telefoonka Dugsiga',
          'schoolEmail': 'Email ka Dugsiga',
          'schoolLocation': 'Goobta uu ku yaalo:',
          'schoolEMISNumber': 'Tira taxanaha dugsiga',
          'classes': 'Fasalada',
          'toiletsRange': 'Suuliyada',
          'toilets': 'Suuliaya',
          'maleStaffRange': 'Shaqalaha Lab',
          'maleStaff': 'Shaqalaha Lab',
          'femaleStaffRange': 'Shaqalaha Dhedig',
          'femaleStaff': 'Shaqalaha Dhedig',
          'nonTeachingFemaleStaffRange': 'Shaqalaha Waxba Dhigin Dhedig',
          'nonTeachingFemaleStaff': 'Shaqalaha Waxba Dhigin Dhedig',
          'nonTeachingMaleStaffRange': 'Shaqalaha Waxba Dhigin Lab',
          'nonTeachingMaleStaff': 'Shaqalaha Waxba Dhigin Lab', 
          'headTeacher': 'Maamulaha',
          'headsex': 'Jinsiga',
          'headTeacherPhone': 'Taleefoon Maamulaha',
          'headTeacherLevelEduction': 'Heerka waxbarasho ee Maamulaha',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'schoolLevel': {
            'Primary': 'Hoose',
            'Intermediate': 'Dhexe',
            'Secondary': 'Sare',
          },
          'schoolType': {
            'Private': 'Gaara',
            'Public': 'Dowli ',
            'Community': 'Bulsho',
          },
          'headsex': {
            'Male': 'Lab',
            'Female': 'Dhedig',
          },
        },
        placeholders: {
  
        },
        hints: {
          'classes': 'Tirada Fasalada',
          'toilets': 'Tirada Suuliyada',
          'maleStaff': 'Tirada Shaqalaha Ee Lab ah',
          'femaleStaff': 'Tirada Shaqalaha Ee Dhedig ah',
          'headTeacher': 'Magaca Maamulaha/Maamule ku xigeen',
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
        name: 'sSASurvey',
        label: 'SSASurveys',
        menu: 'SSASurveys',
        exporterFileName: 'sSASurvey_export',
        list: {
          menu: 'SSASurveys',
          title: 'SSASurveys',
        },
        create: {
          success: 'SSASurvey successfully saved',
        },
        update: {
          success: 'SSASurvey successfully saved',
        },
        destroy: {
          success: 'SSASurvey successfully deleted',
        },
        destroyAll: {
          success: 'SSASurvey(s) successfully deleted',
        },
        edit: {
          title: 'SCHOOL SELF-ASSESSMENT TOOL'
        },
        fields: {
          id: 'Id',
          'finalizedDateRange': 'Finalized Date',
          'finalizedDate': 'Wakhtiga La Gudbiyey',
          'principal': 'Magaca Maamulah/Maamule Ku Xigeenka',
          'signatureofprincipal': 'Saxeexa Maamulaha',
          'introduction': 'Horidhac',
          'guidelines': 'Hage',
          'school': 'Dugsi',
          'dimension1': 'Dimension1',
          'dimension2': 'Dimension2',
          'dimension3': 'Dimension3',
          'dimension4': 'Dimension4',
          'dimension5': 'Dimension5',
          'schoolStamp': 'Shaanbada Dugsiga',
          'schoolinfo': 'Warbixinta Dugsiga',
          'total':'Total',
          'No':'Tirada',
          'DIMENSIONS':'Halbeegyada',
          'Indicators':'Titlmaameyaasha',
          'value':"Qiimaha Titlmaameyaasha",
          'Indicator':'Titlmaame',
          'answer':'Jawaab',
          'indicatorDesc':'Qalad Goobta Ku Haboon Sida Ku Xusan Hagaha Kore',
          '1':'U baahan taageero degdeg ah',
          '2':'U baahan horumarin',
          '3':'La aqbali karo',
          '4':'Wanaagsan',
          '5':'Heer sare',
          'aspect':'QAYBAHA DUGSIGA',
          'challenge':'CAQABADAHA LA TILMAAMEY',
          'rating':'QIIMEYNTA (MIISAANKA 1-5) KAN UGU SAREEYA WUXUU MATALEYSAA MUHIIMADDA UGU SAREEYA 1: Waxay u baahan tahay taageero degdeg ah \n 2: Waxay u baahan tahay horumar \n 3: La aqbali karo \n 4: Wanaagsan \n 5: Heer sare',
          'solution':'XALALKA LA TILMAAMEY',
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
          title: 'Agabka Isqiimaynta Dugsiyada',
          'sectiona':'QAYBTA A: HOR DHAC',
          'introduction':'Qalabka is-qiimeynta iskuulka waa qalab taageero u ah maamulka iskuulka oo loogu talagalay in lagu qiimeeyo waxqabadka iskuulada isla markaana lagu aqoonsado meelaha u baahan horumarin. Qalabkani wuxuu ka caawiyaa iskuulada inay qiimeeyaan hab-dhaqankooda iyo geedi socodkooda iyagoo ku salaynaya heerar hore loo dejiyey iyagoon wax cadaadis ah ka helin qiimeeyayaasha dibadda. Iyadoo si joogto ah loo sameeyo is-qiimeyn, iskuuladu waxay qaadi karaan tillaabooyin horudhac ah si ay u hagaajiyaan hab-dhaqankooda, ay ula jaanqaadaan heerarka, una hagaajiyaan natiijooyinka waxbarasho ee ardayda. Qalabku wuxuu ka kooban yahay shan qaybood: Hoggaaminta iyo maamulka iskuulka, Deegaanka iyo badqabka iskuulka, Hirgelinta manhajka, Xiriirka bulshada iyo ka qaybgalka, iyo sidoo kale Waxbarashada iyo baridda.',
          'note':'1.Waxaa looga baahan yahay maamulka iskuulka inay sameeyaan qiimeyn ku saleysan xaqiiqo iyo caddeyn oo ku saabsan iskuulkooda iyadoo la eegayo shuruudaha ku jira shanta qaybood ee qiimeynta <br/> 2.Marka la dhammeeyo SSA, iskuulku waa inuu adeegsadaa xogta ka soo baxday hawshan SSA si uu u diyaariyo Qorshe Hagaajin Iskuul (SIP). <br/> 3.Qalabka waxaa loo dijitalayn doonaa si loo fududeeyo habka ururinta xogta, cusbooneysiinta iyo ballaarinta nidaamka hubinta tayada.',
          'sectionb':'QAYBTA B: TILMAAMAHA QIIMEYNTA',
          'basic':'WARBIXINTA AASAASIGA EE DUGSIGA:',
          'dimension1':'TILMAAMAHA 1: MAAMULKA IYO HOGGAANKA DUGSIGA',
          'dimension2':'TILMAAMAHA 2: DEEGAANKA DUGSIGA IYO BAD-QABKIISA',
          'dimension3':'TILMAAMAHA 3: FULINTA MANHAJKA',
          'dimension4':'TILMAAMAHA 4: BARIDDA IYO BARASHADA',
          'dimension5':'TILMAAMAHA 5: XIRIIRKA BULSHADA IYO DUGSIGA'
        },
        view: {
          title: 'View SSASurvey',
        },
        importer: {
          title: 'Import SSASurveys',
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
          'indicator11': 'Maamulahu waxa uu heystaa shahaado jaamacadeed.',
          'indicator12': 'Maamulahu waxa uu leeyahay khibrada looga baahnaa sida ku xusan siyaasadaha iyo Sharciga Waxbarashada Dalka.',
          'indicator13': 'Dugsigu waxa uu leeyahay hiigsi iyo himilo qoran oo waafaqsan midda guud ee waxbarashada dalka. ',
          'indicator14': 'Dugsigu waxa uu leeyahay nidaam xisaabeed daah furan',
          'indicator15': 'Dugsigu waxa uu leeyahay barnaamij quudinta ardayda oo shaqeynaya.',
          'indicator16': 'Dugsigu waxa uu leeyahay barnaamij toosinta asluubta ardayda.',
          'indicator17': 'Dugsigu waxa uu leeyahay qorshe lagu dhiiri geliyo xirfada nolosha.',
          'indicator18': 'Maamuluhu waxa uu ku hagaa macallimiinta diyaarinta Qorshe howleedka (scheme of work)',
          'indicator19': 'Dugisgu waxa uu hayaa diiwaanka saxda ah ee badalka ardayda waxaa uuna uu kudiraa EMIS.',
          'indicator110': 'Dugsiga waxa uu ka-qayb geliyaa diyaarinta miisaaniyad sanadeedka gudiga Waalidiinta dugsiga iyo shaqaalaha xilalka maaliyadeed haya.',
          'indicator111': 'Dugsigu wuxuu dhaqan geliyaa hababka xaadirinta macalmiinta',
          'indicator112': 'TDugsiga waxaa uu leeyahay Qorshaha Hormarinta Dugsiga (QHD) kaas oo ku salaysan natiijada kasoo baxdey qiimaynta dugsiga.',
          'indicator113': 'Dugsiga waxa laga heli karaa siyaasadaha waxbarashada dalka.',
          'indicator114': 'Dugsigu wuu soo bandhigaa natiijooyinka imtixaanka ardayda',
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
          'indicator21': 'Dugsiga waxa uu leeyahay Deyr',
          'indicator22': 'Dhismaha dugsigu wuxuu ku salaysan yahay Halbeega WWHT&',
          'indicator23': 'Deegaanka dugsigu waa mid nadiif ah.',
          'indicator24': 'Dugsiga waxa uu leyahay qalabka gargaarka deg-dega.',
          'indicator25': 'Dhismayaashu dugsiga waxey buuxiyeen shuruudaha badqabka.',
          'indicator26': 'Dugsigu waxa uu leeyaay goob loogu talagalay salaadda (Masjid)',
          'indicator27': 'Dugsiga waxa uu leyahay musqulo kala soocan(lab iyo Dheddig),lehna biyo iyo agab nadafadeed oo ku filan.',
          'indicator28': 'Dhammaan fasalada iyo dhismayaasha kale ee dugsigu waa kuwa lafal gali karaa dadka baahiyaha gaarka qaba.',
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
          'indicator31': 'Xafiiska maaamulaha dugsiga waxaa yaala nuqullo koobi oo muqararka ((Syllabus).',
          'indicator32': 'Maamulaha dugsigu waxa uu si joogta ah u hubiyaa adeegsiga muqararka (Syllabus).',
          'indicator33': 'Dugsigu waxa uu shaqeeyaa 6 maalin todobaadkii',
          'indicator34': 'Dugsiga waxa lagu dhigaa maaddooyinka manhajka oo dhan (9 h/dhexe ).',
          'indicator35': 'Dugsiga waxa lagu dhigaa maaddooyinka manhajka oo dhan (13 Sare).',
          'indicator36': 'Waqtiga xisadahu waa (40 daqiiqo h/dhexe ).',
          'indicator37': 'Waqtiga xisadahu waa (45 daqiiqo sare)',
          'indicator38': 'Barayaashu waxa ay si sax ah u adeegsadaan Muqararka (Syllabus)',
          'indicator39': 'Dhammaan Macalimiinta dugsiga waxaa lagu tababarey fulinta manhajka',
          'indicator310': 'Imtixaanka ardayda laga qaado waxa ay yihiin kuwa kala sooci kara karti-maaneedka ardayda (heer hoose, dhexe iyo sare)..',
          'indicator311': 'Dugsigu waxa uu haleelay saamigalka buugta iyo ardayda ee 1:1(ratio 1:1).',
          'indicator312': 'Dugsiga waxuu leeyahay shaybaar',
          'indicator313': 'Dugsiga wuxuu leeyahay maktabad ',
          'indicator314': 'TDugsiga waxa uu leeyahay ICT Lab',
          'indicator315': 'Dhammaan barayaashu waxa ay haystaan nuqul ansaxsan ee qorshe howled (scheme of work).',
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
          'indicator41': 'Dugsigu waxaa uu leeyahay Guddiga Walidiinta Degaanka (GWD) oo shaqaynaya',
          'indicator42': 'Guddiga Walidiinta degaanka (GWD) dhismihiisu waxa uu waafaqsan yahay habraaca siyaasadda ee WWH&TS',
          'indicator43': 'TGuddiga waxbarashada degaanka (GWD) si joogto ah ayuu u kulmaa wuuna xafidaa shirqaadyada(minutes) kulamadooda iyo go aanada la gaaray.',
          'indicator44': 'Maamuluhu waxa uu hubiyaa in waalidiinta iyo bulshadu ay si fiican uga war hayaan arrimaha dugsiga.',
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
          'indicator51': 'Macallinku waxa uu leeyahay qorshe cashar. ',
          'indicator52': 'Macallinku waxa uu haystaa agabka waxbarashada sida: (Buugaag, hagaha macallinka iyo kaabayaasha waxbarashada).',
          'indicator53': 'Macallinku waa uu awoodaa inuu aqoonsado awooda, kartida, waayo-aragnimada, xirfadaha ardayga/baraha, isla markaana uu xiriiriyo casharka casharadii hore ama nolol maalmeedka ardayga/baraha.',
          'indicator54': 'Macallinku wuxuu adeegsadaa noocyo kala duwan oo habab/stratejiyad waxbarid oo ku habboon da da/awoodda ardayga',
          'indicator55': 'Macallinku waxa uu hubiyaa fahamka ardayga inta casharku socdo',
          'indicator56': 'Ardayda ayaa si firfircoon uga qayb qaadanaya casharka.',
          'indicator57': 'Faladu waa kuwa ku haboon wax dhigista iyo barashada',
          'indicator58': 'Macallinku waxa uu adeegsadaa xeelado edbin togan si uu u maareeyo Fasalka.',
          'indicator59': 'Macallinku wuxuu raacaa heerarka ilaalinta carruurta iyo xeerka anshaxa',
          'indicator510': 'Macallinku waxa uu sameeyaa socsocod fasalka(class moves around) gudihiisa ah si uu ulasocdo dhaq-dhaqaaqa ardaydada (eye contact)',
          'indicator511': 'Macallinku wuxuu ixtiraamaa ardayda/barayaasha wuxuuna siiyaa qof walba fursado siman oo ay wax ku bartaan.',
          'indicator512': 'Macallinku waxa uu xaadiriyaa ardayda biloowga iyo dhammaadka xiisada',
          'indicator513': 'Macallinku wuxuu kiciyaa xiisaha iyo heerka dhiirrigelinta ardayga/baraha. Hordhaca casharka wuxuu soo jiitay dareenka iyo xiisaha baraha isagoo isku xira aqoonta/waayo-aragnimada baraha ee hore iyo waxyaabaha cusub',
          'indicator514': 'Macallinku si wax ku ool ah ayuu ula xiriiraa dhammaan ardayda/barayaasha fasalka',
          'indicator515': 'Macallinku waxa uu aqoon wanaagsan u leyahay maadada',
          'indicator516': 'Macallinku wuxuu qiimeeyaa dabeecadda, aqoonta, xirfadaha, qiimaha, iyo dabeecadaha inta lagu jiro hannaanka waxbaridda isagoo adeegsanaya noocyo kala duwan oo farsamooyin qiimeyn ah oo horumarsan (dib u eegis, imtixaanno gaagaaban, su aalo kooxeed iyo shaqsi ahaan).',
          'indicator517': 'Barayaashu waxay helaan jawaab celin cad oo waqtigeeda ku habboon ku saabsan horumarkooda waxaana natiijooyinka loo adeegsadaa in lagu taageero barayaasha loona dejiyo yoolal.',
          'indicator518': 'Ardayda waxaa lasiiyaa talooyin eey ku-hagaajiyaan meelaha eey kuliitaan.',
          'indicator519': 'Ardayga ku liito waxbarashada waxaa lala wadaagaa waalidkiis.',
          'indicator520': 'Qiimeynta ku saleysan iskuulka waa mid la standard-gareeyay, waxayna la xiriirtaa awoodaha kala duwan ee garashada waxayna dhammaantood waafaqsan yihiin natiijooyinka waxbarasho ee manhajka.',
          'school': 'School',
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
    },
  

  auth: {
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

export default so;
