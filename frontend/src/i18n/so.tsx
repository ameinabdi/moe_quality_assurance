const so = {
  common: {
    or: 'ama',
    cancel: 'Jooji',
    reset: 'Dib u dejin',
    save: 'Kaydi',
    search: 'Raadi',
    edit: 'Tafatir',
    remove: 'Ka saar',
    new: 'Cusub',
    export: 'Minguuri Excel',
    noDataToExport: 'Xog ma leh oo la dhoofiyo',
    import: 'Soo dejin',
    discard: 'Tuur',
    yes: 'Haa',
    no: 'Maya',
    pause: 'Hakin',
    areYouSure: 'Ma hubtaa ?',
    view: 'Fiiri',
    destroy: 'Tirtir',
    mustSelectARow: 'Waa in aad xulataa saf',
    filters: 'Shaandhooyin',
    language: 'Luqad',
    actions:'ficillo',
    print:'Daabac'
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
    menu: 'Teacher Report',
  },
  supervisionReport: {
    menu: 'Supervision Report',
  },

  stateReport: {
    menu: 'State Report',
  },
  entities: {
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
        title: 'SCHOOL SUPERVISION TOOL'
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
        'district':'Degmo',
        'dimension1': 'Dimension 1',
        'dimension2': 'Dimension 2',
        'dimension3': 'Dimension 3',
        'dimension4': 'Dimension 4',
        'dimension5': 'Dimension 5',
        'dimension_1':'Maamulka Iyo Hoggaanka Dugsiga',
        'dimension_2':'Deegaanka Dugsiga Iyo Bad-qabkiisa',
        'dimension_3':'Fulinta Manhajka',
        'dimension_4':'Xariirka Bulshada Iyo Dugsiga',
        'dimension_5':'Baridda Iyo Barashada',
        'schoolStamp': 'Shaanbada Dugsiga',
        'schoolinfo': 'Warbixinta Dugsiga',
        'schoolImprovement':'Qorshaha Hormarineed Dugsiga',
        'teacherAttedance':'Xaadiriska Barayaasha',
        'total':'Total',
        'No':'T.T',
        'DIMENSIONS':'Waxyaabaha la Cabbirayo',
        'Indicators':'Dhibcaha  Cabbirka',
        'value':"Dhibcaha Guud ee Cabbirka",
        'Indicator':'Titlmaame',
        'answer':'Jawaab',
        'finalize':'DHAMAAD',
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
        'ratingAwarded':'Cabbirka Qiimaynta',
        'descriptor':'Sharraxaad',
        'looking':'Fiiri tilmaamaha oo weydii su aalaha soo socda ',
        'evidence':'Waa maxay xaaladda ka jirta dugsiga ka dib marka la eego? caddaymaha la heli karo',
        'interpretation':'Turjumaad',
        'descriptor_1':'Wuxuu u baahan yahay taageero degdeg ah',
        'looking_1':'Ma la heli karaa?',
        'evidence_1':'Lama heli karo.',
        'interpretation_1':'1. Wax kale oo ay la macno tahay Ma jiraan? Ma la sameeyay? ma dhacdaa? Si looga jawaabo su aashan, qiimeeyuhu waa in uu eego caddaynta dokumentiga ah ama caddaynta lagu soo ururiyey waraysiyada, casharrada iyo indha-indhaynta. sidoo kale waxa  uu tixraaci karaa dhaqan ama dhacdo gaar ah oo ka dhacday dugsiga. <br /> 2. U hoggaansanaan la aan, aan habboonayn, aan la heli karin, aan loo hoggaansamin, aan la hirgelin. Waxaa jira habacsanaan weyn oo u baahan faragelin degdeg ah iyo ficil sixitaan. Gobolka/Degmadu waxay u baahan yihiin in ay si degdeg ah u soo farageliyaan',
        'descriptor_2':'U baahan in la horumariyo',
        'looking_2':'Ma ku habboon tahay?',
        'evidence_2':'Waa la heli karaa. Dhinacyada qaarkood ayaa ku habboon, qaarna kuma habboona.',
        'interpretation_2':'1. Wax kasta oo ka dhaca dugsiga ama laga diiwaangeliyey waa in lagu tijaabiyaa in ay waafaqsan yihiin dhammaan sharciyada khuseeya waxbarashada, tusaale; xeerarka  iyo siyaasadaha waxbarashada dalka iyo siyaasadda dugsiyada gaarka ah. <br /> 2. Buuxin la’aanta shuruudaha ugu yaryar ee tilmaamayaal gaar ah, waxaa jira meelo uu ku xooganyahay laakiin waxaa ka miisaan culus  meelaha horumarka u baahan.  Dugsigu waxa uu u baahan yahay waxqabad habaysan oo qorshaysan si ardayda loo siiyo waxbarashada aasaasiga ah. Hirgelinta lagama qaybgelin saamileyda dugsiga. ',
        'descriptor_3':'La aqbali karo',
        'looking_3':'Ma la fuliyaa ?',
        'evidence_3':'Waa la heli karaa wayna ku habboon yihiin. Dhinacyada intooda badan waa la fuliyaa, waxayna waafaqsan yihiin sharciga oo hawlaha dugsiga ayey wax ku kordhiyaan.',
        'interpretation_3':'1. Siyaasadaha, nidaamyada, dhaqammada iyo qorshaha dugsiga waa la fuliyaa. Caddaymaha waxa lagu soo ururin karaa indha-indhayn, diiwaangelin, xiriir qoraal ah, waraysiyo lala yeesho saamileyda dugsiga, xogwaraysiyo iwm. Hirgelintu waa in ay sidoo kale noqotaa mid ku habboon oo waafaqsan sharciga. <br /> 2. Ku filan, buuxinaysa shuruudaha ugu yar, meelaha hagaagsan ayaa ka miisaan badan meelaha horumarinta u baahan, siyaasadaha, qorshayaasha iyo habraacyada si buuxda ayaa loo fuliyey. Tayada waxbaridda ayaa wanaagsan, dhibcaha qiimaynta qaranka sanadlaha ah ee ardayda fasalka 12aad waxay gaaraan celcelis ahaan (60% - 70%)   ardaydu waxa ay helaan xirfado asaasi ah, inta ugu yar filashooyinkana waa la dhamaystiray. ',
        'descriptor_4':'Wanaagsan',
        'looking_4':'waxtar ma leedahay?',
        'evidence_4':'Waa la heli karaa, weyna ku habboon tahay, waana la hirgeliyey. Dhinacyada oo dhan waa la fuliyay, waa la raacayaa sharciga waxayna wax ku ku kordhiyeen qiimaha hawlaha dugsiga.',
        'interpretation_4':'1. Siyaasadda, qorshaha, habraaca iyo habdhaqanku waxa ay kordhiyaan qiyamka  hawlaha dugsiga. Way shaqaysaa oo waa mid wax ku ool ah. Dugsigu waxa uu u hoggaansamay dhammaan shuruucda iyo siyaasadaha  looga baahan yahay, sharcidejinta iyo habraacyada kale ee la xiriira, tayada waxbariddana waxa lagu sifeeyaa awoodo waaweyn oo si cad uga miisaan culus horumar kasta. Waaya-aragnimada ardayda iyo guuluhu waxa ay ka sarreeyaan celceliska Filashada. Siyaasadaha qorshayaasha iyo habraacyada kale si buuxda ayey waxtar u leeyihiin.',
        'descriptor_5':'Heer sare ah',
        'looking_5':'Hal-abuur ma jiraa ?',
        'evidence_5':'Waa la heli karaa, waana kuwo ku habboon, lana hirgeliyay waxtarna leh. Dhammaan dhinacyadu waxa ay u hirgeliyeen qodobadan si waafaqsan sharciga waxbarashada dalka taas oo qiimo weyn ku soo kordhisay dugsiga, iyada oo leh caddeymo cad iyo waxqabadyo muuqda oo la arki karo. ',
        'interpretation_5':'1. Waxaa jira habdhaqan gaar ah, si wanaagsana loo dabaqay dhiirigelinayana dugsiyada kale. Nidaam hirgelineed oo wax ku ool ah, suurtageliyeyna waxbarid iyo barasho tayo sare leh, taas oo horumarisay waaya-aragnimada iyo guulaha ardayda, waxaana sidoo kale la dabaqay dhaqamo cusub oo hal abuurnimo. ',
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
        'introduction':"Agabka is-qiimeynta dugsigu waa agab loo adeegsado in lagu qiimeeyo hawlgudashada dugsiga ayada oo aysan jirin culeys ka imaanaya cid ka baxsan dugsiga ay maamulayaashu sameeyaan is- qiimeyn, ayna ogaadaan waxa u hagaagsan Dugsiga  iyo halka uu horumarinta uga baahan. <br /> Agabka is-qiimeynta dugsigu  waxa uu kakooban yahay 5 qayb,kuwaas oo kala ah: <br/> 1.	Hoggaaminta iyo maamulka dugsiga <br/> 2.	Degaanka dugsiga iyo badqabkiisa <br/> 3.	Fulinta iyo hirgelinta manhajka <br/> 4.	Ka qaybgalka waalidka iyo bulshada <br/> 5.	Baridda iyo barashada",
        'note':'<h3><strong>FIIRO GAAR AH:</strong></h3><br/> ✅	Maamulka dugsiga waxa looga baahan yahay in uu sameeyo is-qiimayn dhab,oo waafaqsan Agabka is-qiimeyn,Dugsiga. <br/> ✅ Kadib dhamaystirka Is-qiimeynta Dugsiga, dugsigu waa in uu isticmaalo xogta Is-qiimeynta si uu u sameeyo Qorshaha Horumarinta Dugsiga (QHD). <br/><br/>',
        'sectionb':'QAYBTA B: QIIMEYNTA TILMAAMAHA ',
        'basic':'WARBIXINTA AASAASIGA EE DUGSIGA:',
        'sectionc':'QAYBTA C: QAAB-DHISMEEDKA MUDNAANTA BAAHIYAHA ISKUULKA',
        'dimension1':'TILMAAMAHA 1: MAAMULKA IYO HOGGAANKA DUGSIGA',
        'dimension2':'TILMAAMAHA 2: DEEGAANKA DUGSIGA IYO BAD-QABKIISA',
        'dimension3':'TILMAAMAHA 3: FULINTA MANHAJKA',
        'dimension4':'TILMAAMAHA 4: XIRIIRKA BULSHADA IYO DUGSIGA ',
        'dimension5':'TILMAAMAHA 5: BARIDDA IYO BARASHADA'
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


    governmentTeacherInformation: {
      name: 'Macallin',
      label: 'Macallimiin',
      menu: 'Macallimiin',
      exporterFileName: 'Macallin_export',
      list: {
        menu: 'Macallimiin',
        title: 'Macallimiin',
      },
      create: {
        success: 'Macallin si guul ah ayaa loo keydiyay',
      },
      update: {
        success: 'Macallin si guul ah ayaa loo keydiyay',
      },
      destroy: {
        success: 'Macallin si guul ah ayaa loo tirtiray',
      },
      destroyAll: {
        success: 'Macallimiin si guul ah ayaa loo tirtiray',
      },
      edit: {
        title: 'Tafatir Macallin',
      },
      fields: {
        id: 'Id',
        school: 'Dugsi',
        state: 'Gobol',
        region: 'Degmo',
        district: 'Degmo',
        fullName: 'Magaca Buuxa',
        gender: 'Jinsiga',
        teacherIDNumber: 'Lambarka Aqoonsiga Macallinka',
        niraID: 'Lambarka NIRA',
        educationLevel: 'Heerka Waxbarashada',
        graduationYearRange: 'Sanadka Qalin-jabinta (Jaamacad)',
        graduationYear: 'Sanadka Qalin-jabinta (Jaamacad)',
        taughtLevel: 'Heerka Waxbaridda',
        teachingShift: 'Waqtiga Waxbaridda',
        gradesTaught: 'Fasalada La Baro',
        subjectsTaught: 'Maaddooyinka La Baro',
        teachertraining: 'Ma helay tababar xirfadeed oo macallinnimo?',
        trainingNo: 'Haddii "Haa," imisa jeer ayaad tababar heshay?',
        present: 'Ma jooga macallinka dugsiga?',
        contactNumber: 'Lambarka Taleefanka',
        experienceRange: 'Sanadaha Khibradda Waxbaridda',
        experience: 'Sanadaha Khibradda Waxbaridda',
        joinedYearRange: 'Sanadka Ku Biiray Adeegga Waxbarista Dawladda',
        joinedYear: 'Sanadka Ku Biiray Adeegga Waxbarista Dawladda',
        disablity: 'Macallinku ma leeyahay baahiyo gaar ah?',
        gPSLocation: 'Goobta GPS',
        teacherPhoto: 'Sawirka Macallinka',
        teacherSignature: 'Saxiixa Macallinka',
        reason: 'Sababta',
        createdAt: 'La abuuray',
        updatedAt: 'La cusboonaysiiyay',
        createdAtRange: 'La abuuray',
      },
      enumerators: {
        gender: {
          Male: 'Lab',
          Female: 'Dhedig',
        },
        taughtLevel: {
          Primary: 'Dugsiga Hoose',
          Secondary: 'Dugsiga Sare',
          Both: 'Labada',
        },
        teachingShift: {
          Morning: 'Subax',
          Afternoon: 'Galab',
          Both: 'Labada',
        },
        gradesTaught: {
          'Class 1': 'Fasalka 1aad',
          'Class 2': 'Fasalka 2aad',
          'Class 3': 'Fasalka 3aad',
          'Class 4': 'Fasalka 4aad',
          'Class 5': 'Fasalka 5aad',
          'Class 6': 'Fasalka 6aad',
          'Class 7': 'Fasalka 7aad',
          'Class 8': 'Fasalka 8aad',
          'Class 9': 'Fasalka 9aad',
          'Class 10': 'Fasalka 10aad',
          'Class 11': 'Fasalka 11aad',
          'Class 12': 'Fasalka 12aad',
        },
        subjectsTaught: {
          Somali: 'Af-Soomaali',
          Saynis: 'Saynis',
          'Cilmiga-bulshada': 'Cilmiga Bulshada',
          Xisaab: 'Xisaab',
          English: 'Ingiriis',
          Technology: 'Tignoolajiyada',
          Maths: 'Xisaabta',
          Biology: 'Bayooloji',
          Chemistry: 'Kiimiko',
          Physics: 'Fiisigis',
          Geography: 'Juquraafi',
          History: 'Taariikh',
          Business: 'Ganacsi',
          'Carabi Tarbiyo': 'Carabi & Tarbiyo',
        },
        teachertraining: {
          Yes: 'Haa',
          No: 'Maya',
        },
        trainingNo: {
          Once: 'Hal mar',
          Twice: 'Laba jeer',
          'Three times': 'Saddex jeer',
          'More than three times': 'Ka badan saddex jeer',
        },
        present: {
          Yes: 'Haa',
          No: 'Maya',
        },
        disablity: {
          None: 'Midna',
          Blindness: 'Indho la’aan',
          Hearing: 'Dhagoolnimo',
          Legs: 'Lugaha',
          Arms: 'Gacmaha',
        },
        educationLevel: {
          Bachelor: 'Shahaadada Koowaad',
          Master: 'Shahaadada Labaad',
          PhD: 'PhD',
          None: 'Midna',
        },
      },
      placeholders: {},
      hints: {
        reason: 'Sababta maqnaanshaha',
      },
      new: {
        title: 'Macallin Cusub',
      },
      view: {
        title: 'Eeg Macallin',
      },
      importer: {
        title: 'Soo Dhoofinta Macallimiinta',
        fileName: 'Macallin_import_template',
        hint: 'Khadadka Faylka/Sawirka waa inay ahaadaan URLs, oo kala soocan meel bannaan.',
      },
    },
    
    state: {
      name: 'gobol',
      label: 'Gobollada',
      menu: 'Gobollada',
      exporterFileName: 'gobol_export',
      list: {
        menu: 'Gobollada',
        title: 'Gobollada',
      },
      create: {
        success: 'Gobolka si guul ah ayaa loo keydiyay',
      },
      update: {
        success: 'Gobolka si guul ah ayaa loo keydiyay',
      },
      destroy: {
        success: 'Gobolka si guul ah ayaa loo tirtiray',
      },
      destroyAll: {
        success: 'Gobollada si guul ah ayaa loo tirtiray',
      },
      edit: {
        title: 'Tafatir Gobol',
      },
      fields: {
        id: 'ID',
        name: 'Magac',
        createdAt: 'La abuuray',
        updatedAt: 'La cusboonaysiiyay',
        createdAtRange: 'La abuuray',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Gobol Cusub',
      },
      view: {
        title: 'Eeg Gobol',
      },
      importer: {
        title: 'Soo Dhoofinta Gobollada',
        fileName: 'gobol_import_template',
        hint: 'Khadadka Faylka/Sawirka waa inay URLs yihiin, oo kala soocan meel bannaan.',
      },
    },
    region: {
      name: 'degmo',
      label: 'Degmooyinka',
      menu: 'Degmooyinka',
      exporterFileName: 'degmo_export',
      list: {
        menu: 'Degmooyinka',
        title: 'Degmooyinka',
      },
      create: {
        success: 'Degmada si guul ah ayaa loo keydiyay',
      },
      update: {
        success: 'Degmada si guul ah ayaa loo keydiyay',
      },
      destroy: {
        success: 'Degmada si guul ah ayaa loo tirtiray',
      },
      destroyAll: {
        success: 'Degmooyin si guul ah ayaa loo tirtiray',
      },
      edit: {
        title: 'Tafatir Degmo',
      },
      fields: {
        id: 'ID',
        name: 'Magac',
        state: 'Gobol',
        createdAt: 'La abuuray',
        updatedAt: 'La cusboonaysiiyay',
        createdAtRange: 'La abuuray',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Degmo Cusub',
      },
      view: {
        title: 'Eeg Degmo',
      },
      importer: {
        title: 'Soo Dhoofinta Degmooyinka',
        fileName: 'degmo_import_template',
        hint: 'Khadadka Faylka/Sawirka waa inay URLs yihiin, oo kala soocan meel bannaan.',
      },
    },
    district: {
      name: 'tuulo',
      label: 'Tuulooyinka',
      menu: 'Tuulooyinka',
      exporterFileName: 'tuulo_export',
      list: {
        menu: 'Tuulooyinka',
        title: 'Tuulooyinka',
      },
      create: {
        success: 'Tuulada si guul ah ayaa loo keydiyay',
      },
      update: {
        success: 'Tuulada si guul ah ayaa loo keydiyay',
      },
      destroy: {
        success: 'Tuulada si guul ah ayaa loo tirtiray',
      },
      destroyAll: {
        success: 'Tuulooyin si guul ah ayaa loo tirtiray',
      },
      edit: {
        title: 'Tafatir Tuulo',
      },
      fields: {
        id: 'ID',
        name: 'Magac',
        region: 'Degmo',
        state: 'Gobol',
        createdAt: 'La abuuray',
        updatedAt: 'La cusboonaysiiyay',
        createdAtRange: 'La abuuray',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Tuulo Cusub',
      },
      view: {
        title: 'Eeg Tuulo',
      },
      importer: {
        title: 'Soo Dhoofinta Tuulooyinka',
        fileName: 'tuulo_import_template',
        hint: 'Khadadka Faylka/Sawirka waa inay URLs yihiin, oo kala soocan meel bannaan.',
      },
    },
    tools: {
      name: 'qalab',
      label: 'Qalabka',
      menu: 'Qalabka',
      exporterFileName: 'qalab_export',
      list: {
        menu: 'Qalabka',
        title: 'Qalabka',
      },
      create: {
        success: 'Qalabka si guul ah ayaa loo keydiyay',
      },
      update: {
        success: 'Qalabka si guul ah ayaa loo keydiyay',
      },
      destroy: {
        success: 'Qalabka si guul ah ayaa loo tirtiray',
      },
      destroyAll: {
        success: 'Qalab si guul ah ayaa loo tirtiray',
      },
      edit: {
        title: 'Tafatir Qalab',
      },
      fields: {
        id: 'ID',
        type: 'Nooca',
        name: 'Magac',
        description: 'Sharaxaada',
        attachment: 'Ku-xiridda',
        createdAt: 'La abuuray',
        updatedAt: 'La cusboonaysiiyay',
        createdAtRange: 'La abuuray',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Qalab Cusub',
      },
      view: {
        title: 'Eeg Qalab',
      },
      importer: {
        title: 'Soo Dhoofinta Qalabka',
        fileName: 'qalab_import_template',
        hint: 'Khadadka Faylka/Sawirka waa inay URLs yihiin, oo kala soocan meel bannaan.',
      },
    },
    toolTypes: {
      name: 'noocyadaQalabka',
      label: 'Noocyada Qalabka',
      menu: 'Noocyada Qalabka',
      exporterFileName: 'noocyada_qalabka_export',
      list: {
        menu: 'Noocyada Qalabka',
        title: 'Noocyada Qalabka',
      },
      create: {
        success: 'Noocyada qalabka si guul ah ayaa loo keydiyay',
      },
      update: {
        success: 'Noocyada qalabka si guul ah ayaa loo keydiyay',
      },
      destroy: {
        success: 'Noocyada qalabka si guul ah ayaa loo tirtiray',
      },
      destroyAll: {
        success: 'Noocyo qalab si guul ah ayaa loo tirtiray',
      },
      edit: {
        title: 'Tafatir Noocyada Qalabka',
      },
      fields: {
        id: 'ID',
        name: 'Magac',
        createdAt: 'La abuuray',
        updatedAt: 'La cusboonaysiiyay',
        createdAtRange: 'La abuuray',
      },
      enumerators: {},
      placeholders: {},
      hints: {},
      new: {
        title: 'Nooc Cusub oo Qalab ah',
      },
      view: {
        title: 'Eeg Noocyada Qalabka',
      },
      importer: {
        title: 'Soo Dhoofinta Noocyada Qalabka',
        fileName: 'noocyada_qalabka_import_template',
        hint: 'Khadadka Faylka/Sawirka waa inay URLs yihiin, oo kala soocan meel bannaan.',
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
      name: 'SSA Tool',
      label: 'SSA Tools',
      menu: 'SSA Tools',
        exporterFileName: 'sSASurvey_export',
        list: {
          menu: 'SSA Tools',
          title: 'SSA Tools',
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
          'dimension1': 'Dimension 1',
          'dimension2': 'Dimension 2',
          'dimension3': 'Dimension 3',
          'dimension4': 'Dimension 4',
          'dimension5': 'Dimension 5',
          'dimension_1':'Maamulka Iyo Hoggaanka Dugsiga',
          'dimension_2':'Deegaanka Dugsiga Iyo Bad-qabkiisa',
          'dimension_3':'Fulinta Manhajka',
          'dimension_4':'Xariirka Bulshada Iyo Dugsiga',
          'dimension_5':'Baridda Iyo Barashada',
          'schoolStamp': 'Shaanbada Dugsiga',
          'schoolinfo': 'Warbixinta Dugsiga',
          'schoolImprovement':'Qorshaha Hormarineed Dugsiga',
          'teacherAttedance':'Xaadiriska Barayaasha',
          'total':'Total',
          'No':'T.T',
          'DIMENSIONS':'Waxyaabaha la Cabbirayo',
          'Indicators':'Dhibcaha  Cabbirka',
          'value':"Dhibcaha Guud ee Cabbirka",
          'Indicator':'Titlmaame',
          'answer':'Jawaab',
          'finalize':'DHAMAAD',
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
          'ratingAwarded':'Cabbirka Qiimaynta',
          'descriptor':'Sharraxaad',
          'looking':'Fiiri tilmaamaha oo weydii su aalaha soo socda ',
          'evidence':'Waa maxay xaaladda ka jirta dugsiga ka dib marka la eego? caddaymaha la heli karo',
          'interpretation':'Turjumaad',
          'descriptor_1':'Wuxuu u baahan yahay taageero degdeg ah',
          'looking_1':'Ma la heli karaa?',
          'evidence_1':'Lama heli karo.',
          'interpretation_1':'1. Wax kale oo ay la macno tahay Ma jiraan? Ma la sameeyay? ma dhacdaa? Si looga jawaabo su aashan, qiimeeyuhu waa in uu eego caddaynta dokumentiga ah ama caddaynta lagu soo ururiyey waraysiyada, casharrada iyo indha-indhaynta. sidoo kale waxa  uu tixraaci karaa dhaqan ama dhacdo gaar ah oo ka dhacday dugsiga. <br /> 2. U hoggaansanaan la aan, aan habboonayn, aan la heli karin, aan loo hoggaansamin, aan la hirgelin. Waxaa jira habacsanaan weyn oo u baahan faragelin degdeg ah iyo ficil sixitaan. Gobolka/Degmadu waxay u baahan yihiin in ay si degdeg ah u soo farageliyaan',
          'descriptor_2':'U baahan in la horumariyo',
          'looking_2':'Ma ku habboon tahay?',
          'evidence_2':'Waa la heli karaa. Dhinacyada qaarkood ayaa ku habboon, qaarna kuma habboona.',
          'interpretation_2':'1. Wax kasta oo ka dhaca dugsiga ama laga diiwaangeliyey waa in lagu tijaabiyaa in ay waafaqsan yihiin dhammaan sharciyada khuseeya waxbarashada, tusaale; xeerarka  iyo siyaasadaha waxbarashada dalka iyo siyaasadda dugsiyada gaarka ah. <br /> 2. Buuxin la’aanta shuruudaha ugu yaryar ee tilmaamayaal gaar ah, waxaa jira meelo uu ku xooganyahay laakiin waxaa ka miisaan culus  meelaha horumarka u baahan.  Dugsigu waxa uu u baahan yahay waxqabad habaysan oo qorshaysan si ardayda loo siiyo waxbarashada aasaasiga ah. Hirgelinta lagama qaybgelin saamileyda dugsiga. ',
          'descriptor_3':'La aqbali karo',
          'looking_3':'Ma la fuliyaa ?',
          'evidence_3':'Waa la heli karaa wayna ku habboon yihiin. Dhinacyada intooda badan waa la fuliyaa, waxayna waafaqsan yihiin sharciga oo hawlaha dugsiga ayey wax ku kordhiyaan.',
          'interpretation_3':'1. Siyaasadaha, nidaamyada, dhaqammada iyo qorshaha dugsiga waa la fuliyaa. Caddaymaha waxa lagu soo ururin karaa indha-indhayn, diiwaangelin, xiriir qoraal ah, waraysiyo lala yeesho saamileyda dugsiga, xogwaraysiyo iwm. Hirgelintu waa in ay sidoo kale noqotaa mid ku habboon oo waafaqsan sharciga. <br /> 2. Ku filan, buuxinaysa shuruudaha ugu yar, meelaha hagaagsan ayaa ka miisaan badan meelaha horumarinta u baahan, siyaasadaha, qorshayaasha iyo habraacyada si buuxda ayaa loo fuliyey. Tayada waxbaridda ayaa wanaagsan, dhibcaha qiimaynta qaranka sanadlaha ah ee ardayda fasalka 12aad waxay gaaraan celcelis ahaan (60% - 70%)   ardaydu waxa ay helaan xirfado asaasi ah, inta ugu yar filashooyinkana waa la dhamaystiray. ',
          'descriptor_4':'Wanaagsan',
          'looking_4':'waxtar ma leedahay?',
          'evidence_4':'Waa la heli karaa, weyna ku habboon tahay, waana la hirgeliyey. Dhinacyada oo dhan waa la fuliyay, waa la raacayaa sharciga waxayna wax ku ku kordhiyeen qiimaha hawlaha dugsiga.',
          'interpretation_4':'1. Siyaasadda, qorshaha, habraaca iyo habdhaqanku waxa ay kordhiyaan qiyamka  hawlaha dugsiga. Way shaqaysaa oo waa mid wax ku ool ah. Dugsigu waxa uu u hoggaansamay dhammaan shuruucda iyo siyaasadaha  looga baahan yahay, sharcidejinta iyo habraacyada kale ee la xiriira, tayada waxbariddana waxa lagu sifeeyaa awoodo waaweyn oo si cad uga miisaan culus horumar kasta. Waaya-aragnimada ardayda iyo guuluhu waxa ay ka sarreeyaan celceliska Filashada. Siyaasadaha qorshayaasha iyo habraacyada kale si buuxda ayey waxtar u leeyihiin.',
          'descriptor_5':'Heer sare ah',
          'looking_5':'Hal-abuur ma jiraa ?',
          'evidence_5':'Waa la heli karaa, waana kuwo ku habboon, lana hirgeliyay waxtarna leh. Dhammaan dhinacyadu waxa ay u hirgeliyeen qodobadan si waafaqsan sharciga waxbarashada dalka taas oo qiimo weyn ku soo kordhisay dugsiga, iyada oo leh caddeymo cad iyo waxqabadyo muuqda oo la arki karo. ',
          'interpretation_5':'1. Waxaa jira habdhaqan gaar ah, si wanaagsana loo dabaqay dhiirigelinayana dugsiyada kale. Nidaam hirgelineed oo wax ku ool ah, suurtageliyeyna waxbarid iyo barasho tayo sare leh, taas oo horumarisay waaya-aragnimada iyo guulaha ardayda, waxaana sidoo kale la dabaqay dhaqamo cusub oo hal abuurnimo. ',
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
          'introduction':"Agabka is-qiimeynta dugsigu waa agab loo adeegsado in lagu qiimeeyo hawlgudashada dugsiga ayada oo aysan jirin culeys ka imaanaya cid ka baxsan dugsiga ay maamulayaashu sameeyaan is- qiimeyn, ayna ogaadaan waxa u hagaagsan Dugsiga  iyo halka uu horumarinta uga baahan. <br /> Agabka is-qiimeynta dugsigu  waxa uu kakooban yahay 5 qayb,kuwaas oo kala ah: <br/> 1.	Hoggaaminta iyo maamulka dugsiga <br/> 2.	Degaanka dugsiga iyo badqabkiisa <br/> 3.	Fulinta iyo hirgelinta manhajka <br/> 4.	Ka qaybgalka waalidka iyo bulshada <br/> 5.	Baridda iyo barashada",
          'note':'<h3><strong>FIIRO GAAR AH:</strong></h3><br/> ✅	Maamulka dugsiga waxa looga baahan yahay in uu sameeyo is-qiimayn dhab,oo waafaqsan Agabka is-qiimeyn,Dugsiga. <br/> ✅ Kadib dhamaystirka Is-qiimeynta Dugsiga, dugsigu waa in uu isticmaalo xogta Is-qiimeynta si uu u sameeyo Qorshaha Horumarinta Dugsiga (QHD). <br/><br/>',
          'sectionb':'QAYBTA B: QIIMEYNTA TILMAAMAHA ',
          'basic':'WARBIXINTA AASAASIGA EE DUGSIGA:',
          'sectionc':'QAYBTA C: QAAB-DHISMEEDKA MUDNAANTA BAAHIYAHA ISKUULKA',
          'dimension1':'TILMAAMAHA 1: MAAMULKA IYO HOGGAANKA DUGSIGA',
          'dimension2':'TILMAAMAHA 2: DEEGAANKA DUGSIGA IYO BAD-QABKIISA',
          'dimension3':'TILMAAMAHA 3: FULINTA MANHAJKA',
          'dimension4':'TILMAAMAHA 4: XIRIIRKA BULSHADA IYO DUGSIGA ',
          'dimension5':'TILMAAMAHA 5: BARIDDA IYO BARASHADA'
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
          'indicator11': 'Maamulaha dugsigu waxa uu haystaa shahaado Jaamacadeed.',
          'indicator12': 'Maamulahu waxa uu heystaa khibradii looga baahnaa sida ku xusan  siyaasadaha iyo sharciga waxbarashada dalka.',
          'indicator13': 'Dugsigu waxa uu leeyahay hiigsi iyo himilo qoran oo waafaqsan midda guud ee waxbarashada dalka.',
          'indicator14': 'Daahfurnaanta nidaam xisaabeedka dugsigu waxa uu u oggolaanayaa waalidiinta in ay helaan diiwaanka maaliyadda dugsiga.',
          'indicator15': 'Dugsigu waxa uu leeyahay nidaamka quudinta ardayda oo shaqaynaya.',
          'indicator16': 'Dugsigu waxa uu leeyahay nidaamka anshaxmarinta ardayda.',
          'indicator17': 'Dugsigu waxa uu leeyahay qorshayaal lagu dhiirigeliyo xirfada nolosha, sida xallinta dhibaatooyinka, xiriirka iyo xallinta khilaafaadka.',
          'indicator18': 'Maamuluhu waxa uu ku hagaa macallimiinta diyaarinta  qorshahowleedka (scheme of work).)',
          'indicator19': 'Dugisgu waxa uu hayaa diiwaanka saxda ah ee beddalka ardayda, waxa uuna u diraa EMIS.',
          'indicator110': 'Maamulka dugsigu waxa uu ka qaybgeliyaa guddiga waalidiinta (CEC)  iyo  shaqaalaha kale ee xilalka maaliyadeed haya diyaarinta miisaaniyadsanadeedka dugsiga ',
          'indicator111': 'Dugsigu waxa uu dhaqangeliyaa hababka xaadirinta macallmiinta',
          'indicator112': 'Dugsigu waxaa uu leeyahay qorshaha horumarinta dugsiga (QHD), kaas oo ku salaysan natiijadii  ka soo baxday qiimaynta dugsiga.',
          'indicator113': 'Dugsiga waxa laga heli karaa siyaasadaha waxbarashada dalka.',
          'indicator114': 'Dugsigu waxa uu soo bandhigaa natiijada ardayda.',
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
          'indicator21': 'Dugsigu waxa uu leeyahay deyr.',
          'indicator22': 'Fasallada dugsigu waxa ay leeyihiin daaqado iyo albaabo ku filan si waafaqsan halbeegyada iyo xeerarka dhismaha dugsiyada.',
          'indicator23': 'Degaanka dugsigu waa mid nadiif ah.',
          'indicator24': 'Dugsigu waxa uu leyahay qalabka gargaarka degdega ah.',
          'indicator25': 'Dugsigu waxa uu leeyahay habraaca badqabka degaanka dugsiga, taas oo tageereysa ardayda.',
          'indicator26': 'Dugsiga waxa uu leyahay masjid.',
          'indicator27': 'Dugsigu waxa uu leyahay masqulo kala soocan(lab iyo Dheddig),lehna biyo iyo agab nadafadeed  oo ku filan.',
          'indicator28': 'Dhammaan fasallada iyo dhismayaasha kale ee dugsigu waa kuwo lafal gali karaa dadka baahiyaha gaarka ah qaba.',
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
          'indicator31': 'Xafiiska maaamulaha dugsiga waxaa yaala nuqullo koobi oo muqararka ah.',
          'indicator32': 'Maamulaha dugsigu waxa uu si joogta ah u hubiyaa adeegsiga muqararka (Syllabus).',
          'indicator33': 'Dugsigu waxa uu shaqeeyaa 6 maalin todobaadkii.',
          'indicator34': 'Dugsiga waxa lagu dhigaa maaddooyinka manhajka oo dhan 9 dugsiga hoose.',
          'indicator35': 'Dugsiga waxa lagu dhigaa maaddooyinka manhajka oo dhan 13 dugsiga sare.',
          'indicator36': 'Muddada  xisaddu waa 40 daqiiqo dudsiga hoose.',
          'indicator37': 'Muddada  xisaddu waa 45 daqiiqo dugsiga sare.',
          'indicator38': 'Barayaashu waxa ay si sax ah u adeegsadaan  muqararka (Syllabus)',
          'indicator39': 'Dhammaan barayaasha dugsiga waxaa lagu tababaray fulinta manhajka.',
          'indicator310': 'Imtixaanka ardayda laga qaado waxa ay yihiin kuwa kala sooci kara karti-maaneedka ardayda (heer hoose, dhexe iyo sare)',
          'indicator311': 'Dugsigu waxa uu leelay saamigalka buugta iyo ardayda ee 1:1(ratio 1:1).',
          'indicator312': 'Dugsigu waxaa uu leeyahay maktabad iyo sheybaar(labrotory)',
          'indicator313': 'Dugsigu waxa uu leeyahay maktabad.',
          'indicator314': 'Dugsigu waxa uu leeyahay nidaamka kombuyuutarka(ICT system).',
          'indicator315': 'Dhammaan barayaashu waxa ay haystaan nuqul ansaxsan ah  oo qorshahowleedka ah (scheme of work).',
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
          'indicator41': 'Dugsigu waxaa uu leeyahay guddiga waxbarashada degaanka (GWD) oo shaqaynaya.',
          'indicator42': 'Guddiga waxbarashada degaanka(GWD) dhismihiisu waxa uu waafaqsan yahay habraaca siyaasadda GWD ee WWH&TS.',
          'indicator43': 'Guddiga waxbarashada degaanku (GWD) si joogto ah ayuu u kulmaa, wuuna xafidaa shirqaadyada (minutes) kulamadooda iyo go`aanada la gaaray.',
          'indicator44': 'Maamuluhu waxa uu hubiyaa in waalidiinta iyo bulshadu ay si fiican uga war hayaan arrimaha  dugsiga.',
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
          'indicator51': 'Macallinku waxa uu leeyahay qorshe shaqo iyo qorshe cashar oo laga soo saaray manhajka qaran.',
          'indicator52': 'Macallinku waxa uu haystaa agabka waxbarashada ee loo baahana kaas oo ku habboon cashar dhigidda sida: (Buugaagta hagaha macallinka.',
          'indicator53': 'Macallinku waxa uu awoodaa in uu aqoonsado kartida,waaya- aragnimada iyo xirfadaha ardayda iyo isku xirka casharka cusub iyo casharradii hore.',
          'indicator54': 'Macallinku waxa uu adeegsadaa hababaka wax dhigidda  isaga oo  eegaya kala duwanaanshaha da`da iyo kartida ardayda.',
          'indicator55': 'Macallinku waxa uu hubiyaa fahamka ardayga inta casharku socdo.',
          'indicator56': 'Ardaydu waxa ay  si firfircoon uga qayb qaataan casharka.',
          'indicator57': 'Fasalku waa mid ku habboon Baridda iyo barashada',
          'indicator58': 'Macallinku waxa uu adeegsadaa xeelado edbin togan, si uu u maareeyo fasalka.',
          'indicator59': 'Macallinku waxa uu raacaa habraaca ilaalinta ardayda iyo heerka anshaxa.',
          'indicator510': 'Macallinku waxa uu sameeyaa socsocod fasalka(class moves around) gudihiisa ah si uu ula socdo dhaqdhaqaaqa ardayda (eye contact).',
          'indicator511': 'Macallinku wuu ixtiraamaa ardayda, waxa uuna qof walba siiyaa fursado siman oo uu wax ku barto.',
          'indicator512': 'Macallinku waxa uu xaadiriyaa ardayda bilowga iyo dhammaadka xiisada.',
          'indicator513': 'Macallinku waxa uu kor u qaadaa xiisaha iyo heerka dhiirigelinta ardayda, isaga oo hordhaca casharka ka dhigaya mid xiiso leh oo soo jiidanaya ardayda.',
          'indicator514': 'Macallinku waxa uu la sameeya dhammaan ardayda fasalka xiriir wanaagsan.',
          'indicator515': 'Macallinku waxa uu aqoon wanaagsan u leeyahay maaddada',
          'indicator516': 'Macallinku waxa uu qiimeeyaa habdhaqanka, aqoonta, xirfadaha, qiyamka, iyo dabeecadaha inta lagu jiro habka Waxbaridda',
          'indicator517': 'Ardaydu waxa ay helaan jawaabcelin cad oo waqti ku habboon, natiijooyinkana waxaa loo isticmaalaa in lagu taageero ardayda iyo dejinta bartilmaameedyada kobcinta horumarinta ardayda.',
          'indicator518': 'Ardayda waxaa la siiyaa talooyin ay ku hagaajinayaan meelaha ay ku liitaan.',
          'indicator519': 'Ardayga ku liita waxbarashada waxaa lala wadaagaa waalidkii. ',
          'indicator520': 'Qiimaynta dugsigu waxa ay ku salaysantahay   heerarka sare ee kala duwanashaha  awoodaha garashada kuwaas oo  dhammaan la jaanqaadaya natiijooyinka waxbarasho ee manhajka',
          'lesson':'DIYAARINTA CASHARADA',
          'classroom':'MAAREYNTA FASALKA',
          'instruction':'TILMAAMO',
          'learner':'QIIMAYNTA ARDAYDA IYO JAWAAB CELINTA',
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
