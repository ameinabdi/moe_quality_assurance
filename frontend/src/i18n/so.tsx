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
    title: 'Vuuca Admin',
  },

  api: {
    menu: 'API',
  },

  entities: {
    clients:{
      menu:'Clients'
    },
    serviceProvider:{
      menu:'Service Provider'
    },
    roles: {
      name: 'roles',
      label: 'Roles',
      menu: 'Roles',
      exporterFileName: 'roles_export',
      list: {
        menu: 'Roles',
        title: 'Roles',
      },
      create: {
        success: 'Roles successfully saved',
      },
      update: {
        success: 'Roles successfully saved',
      },
      destroy: {
        success: 'Roles successfully deleted',
      },
      destroyAll: {
        success: 'Roles(s) successfully deleted',
      },
      edit: {
        title: 'Edit Roles',
      },
      fields: {
        id: 'Id',
        'roles': 'Roles',
        'description': 'Description',
        'permissions': 'Permissions',
        'users': 'Users',
        'assignToNewUser': 'AssignToNewUser',
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
        title: 'New Roles',
      },
      view: {
        title: 'View Roles',
      },
      importer: {
        title: 'Import Roles',
        fileName: 'roles_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

  permission: {
      name: 'permission',
      label: 'Permissions',
      menu: 'Permissions',
      exporterFileName: 'permission_export',
      list: {
        menu: 'Permissions',
        title: 'Permissions',
      },
      create: {
        success: 'Permission successfully saved',
      },
      update: {
        success: 'Permission successfully saved, The page will reload in {0} seconds for changes to take effect',
      },
      destroy: {
        success: 'Permission successfully deleted',
      },
      destroyAll: {
        success: 'Permission(s) successfully deleted',
      },
      edit: {
        title: 'Edit Permission',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'entity': 'Entity',
        'list': 'list',
        'add': 'Add',
        'edit': 'Edit',
        'view':'Veiw',
        'search':'Search',
        'trash': 'Delete',
        'importData': 'Import',
        'exportData': 'Export',
        'print': 'Print',
        'inRole': 'Role',
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
        title: 'New Permission',
      },
      view: {
        title: 'View Permission',
      },
      importer: {
        title: 'Import Permissions',
        fileName: 'permission_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
    trailer: {
        name: 'trailer',
        label: 'Trailers',
        menu: 'Trailers',
        exporterFileName: 'trailer_export',
        list: {
          menu: 'Trailers',
          title: 'Trailers',
        },
        create: {
          success: 'Trailer successfully saved',
        },
        update: {
          success: 'Trailer successfully saved',
        },
        destroy: {
          success: 'Trailer successfully deleted',
        },
        destroyAll: {
          success: 'Trailer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Trailer',
        },
        fields: {
          id: 'Id',
          'registerNumber': 'Register Number',
          'fleetNumber': 'Fleet Number',
          'isActive': 'Is Active',
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
          title: 'New Trailer',
        },
        view: {
          title: 'View Trailer',
        },
        importer: {
          title: 'Import Trailers',
          fileName: 'trailer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    truck: {
        name: 'truck',
        label: 'Trucks',
        menu: 'Trucks',
        exporterFileName: 'truck_export',
        list: {
          menu: 'Trucks',
          title: 'Trucks',
        },
        create: {
          success: 'Truck successfully saved',
        },
        update: {
          success: 'Truck successfully saved',
        },
        destroy: {
          success: 'Truck successfully deleted',
        },
        destroyAll: {
          success: 'Truck(s) successfully deleted',
        },
        edit: {
          title: 'Edit Truck',
        },
        fields: {
          id: 'Id',
          'registrationNumber': 'Registration Number',
          'registrationDateRange': 'Registration Date',
          'registrationDate': 'Registration Date',
          'make': 'Make',
          'model': 'Model',
          'trailer': 'Trailer',
          'trailer2': 'Trailer 2',
          'fuelType': 'Fuel Type',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'fuelType': {
            'None': 'None',
            'Gas': 'Gas',
            'Diesel': 'Diesel',
            'Electric': 'Electric',
            'Propane': 'Propane',
            'Reefer Fuel': 'Reefer Fuel',
            'Gasohol': 'Gasohol',
            'Natural Gas': 'Natural Gas',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Truck',
        },
        view: {
          title: 'View Truck',
        },
        importer: {
          title: 'Import Trucks',
          fileName: 'truck_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    driver: {
        name: 'driver',
        label: 'Drivers',
        menu: 'Drivers',
        exporterFileName: 'driver_export',
        list: {
          menu: 'Drivers',
          title: 'Drivers',
        },
        create: {
          success: 'Driver successfully saved',
        },
        update: {
          success: 'Driver successfully saved',
        },
        destroy: {
          success: 'Driver successfully deleted',
        },
        destroyAll: {
          success: 'Driver(s) successfully deleted',
        },
        edit: {
          title: 'Edit Driver',
        },
        fields: {
          id: 'Id',
          'fullName': 'Full Name',
          'passportNo': 'Passport No',
          'dateofBirthRange': 'Date of Birth',
          'dateofBirth': 'Date of Birth',
          'mobile': 'Mobile',
          'username': 'Username',
          'password': 'Password',
          'pINNoRange': 'PIN',
          'pINNo': 'PIN',
          'status': 'Status',
          'mobileAppAccess': 'Mobile App Access',
          'employmentType': 'Employment Type',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'active': 'Active',
            'inactive': 'Inactive',
          },
          'employmentType': {
            'PERMANENT': 'PERMANENT',
            'TEMPORARY': 'TEMPORARY',
          },
        },
        placeholders: {

        },
        hints: {
          'fullName': 'Must match fullname on the passport',
        },
        new: {
          title: 'New Driver',
        },
        view: {
          title: 'View Driver',
        },
        importer: {
          title: 'Import Drivers',
          fileName: 'driver_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    account: {
        name: 'account',
        label: 'Accounts',
        menu: 'Accounts',
        exporterFileName: 'account_export',
        list: {
          menu: 'Accounts',
          title: 'Accounts',
        },
        create: {
          success: 'Account successfully saved',
        },
        update: {
          success: 'Account successfully saved',
        },
        destroy: {
          success: 'Account successfully deleted',
        },
        destroyAll: {
          success: 'Account(s) successfully deleted',
        },
        edit: {
          title: 'Edit Account',
        },
        fields: {
          id: 'Id',
          'accountNo': 'Account No',
          'accountName': 'Account Name',
          'currency': 'Currency',
          'openingBalanceRange': 'Opening Balance',
          'openingBalance': 'Opening Balance',
          'accountStatus': 'Account Status',
          'isDefault': 'IsDefault',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'accountStatus': {
            'open': 'Open',
            'inactive': 'Inactive',
            'dormant': 'Dormant',
            'closed': 'Closed',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Account',
        },
        view: {
          title: 'View Account',
        },
        importer: {
          title: 'Import Accounts',
          fileName: 'account_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    deposit: {
        name: 'deposit',
        label: 'Deposits',
        menu: 'Deposits',
        exporterFileName: 'deposit_export',
        list: {
          menu: 'Deposits',
          title: 'Deposits',
        },
        create: {
          success: 'Deposit successfully saved',
        },
        update: {
          success: 'Deposit successfully saved',
        },
        destroy: {
          success: 'Deposit successfully deleted',
        },
        destroyAll: {
          success: 'Deposit(s) successfully deleted',
        },
        edit: {
          title: 'Edit Deposit',
        },
        fields: {
          id: 'Id',
          'account': 'Account',
          'bank': 'Bank',
          'amountRange': 'Amount',
          'amount': 'Amount',
          'reference': 'Reference',
          'status': 'Status',
          'loadedby': 'Loaded by',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'verified': 'Verified',
            'declined': 'Declined',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Deposit',
        },
        view: {
          title: 'View Deposit',
        },
        importer: {
          title: 'Import Deposits',
          fileName: 'deposit_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    bank: {
        name: 'bank',
        label: 'Banks',
        menu: 'Banks',
        exporterFileName: 'bank_export',
        list: {
          menu: 'Banks',
          title: 'Banks',
        },
        create: {
          success: 'Bank successfully saved',
        },
        update: {
          success: 'Bank successfully saved',
        },
        destroy: {
          success: 'Bank successfully deleted',
        },
        destroyAll: {
          success: 'Bank(s) successfully deleted',
        },
        edit: {
          title: 'Edit Bank',
        },
        fields: {
          id: 'Id',
          'bankName': 'Bank Name',
          'country': 'Country',
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
          title: 'New Bank',
        },
        view: {
          title: 'View Bank',
        },
        importer: {
          title: 'Import Banks',
          fileName: 'bank_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    depositStatus: {
        name: 'depositStatus',
        label: 'DepositStatuses',
        menu: 'DepositStatuses',
        exporterFileName: 'depositStatus_export',
        list: {
          menu: 'DepositStatuses',
          title: 'DepositStatuses',
        },
        create: {
          success: 'DepositStatus successfully saved',
        },
        update: {
          success: 'DepositStatus successfully saved',
        },
        destroy: {
          success: 'DepositStatus successfully deleted',
        },
        destroyAll: {
          success: 'DepositStatus(s) successfully deleted',
        },
        edit: {
          title: 'Edit DepositStatus',
        },
        fields: {
          id: 'Id',
          'deposit': 'Deposit',
          'reason': 'Reason',
          'status': 'Status',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'verified': 'Verified',
            'declined': 'Declined',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New DepositStatus',
        },
        view: {
          title: 'View DepositStatus',
        },
        importer: {
          title: 'Import DepositStatuses',
          fileName: 'depositStatus_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    country: {
        name: 'country',
        label: 'Countries',
        menu: 'Countries',
        exporterFileName: 'country_export',
        list: {
          menu: 'Countries',
          title: 'Countries',
        },
        create: {
          success: 'Country successfully saved',
        },
        update: {
          success: 'Country successfully saved',
        },
        destroy: {
          success: 'Country successfully deleted',
        },
        destroyAll: {
          success: 'Country(s) successfully deleted',
        },
        edit: {
          title: 'Edit Country',
        },
        fields: {
          id: 'Id',
          'country': 'Country',
          'active': 'Active',
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
          title: 'New Country',
        },
        view: {
          title: 'View Country',
        },
        importer: {
          title: 'Import Countries',
          fileName: 'country_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    serviceCategory: {
        name: 'serviceCategory',
        label: 'ServiceCategories',
        menu: 'ServiceCategories',
        exporterFileName: 'serviceCategory_export',
        list: {
          menu: 'ServiceCategories',
          title: 'ServiceCategories',
        },
        create: {
          success: 'ServiceCategory successfully saved',
        },
        update: {
          success: 'ServiceCategory successfully saved',
        },
        destroy: {
          success: 'ServiceCategory successfully deleted',
        },
        destroyAll: {
          success: 'ServiceCategory(s) successfully deleted',
        },
        edit: {
          title: 'Edit ServiceCategory',
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
          title: 'New ServiceCategory',
        },
        view: {
          title: 'View ServiceCategory',
        },
        importer: {
          title: 'Import ServiceCategories',
          fileName: 'serviceCategory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    service: {
        name: 'service',
        label: 'Services',
        menu: 'Services',
        exporterFileName: 'service_export',
        list: {
          menu: 'Services',
          title: 'Services',
        },
        create: {
          success: 'Service successfully saved',
        },
        update: {
          success: 'Service successfully saved',
        },
        destroy: {
          success: 'Service successfully deleted',
        },
        destroyAll: {
          success: 'Service(s) successfully deleted',
        },
        edit: {
          title: 'Edit Service',
        },
        fields: {
          id: 'Id',
          'office': 'Office',
          'city': 'City',
          'workingHours': 'Working Hours',
          'currency': 'Currency',
          'longitude': 'Longitude',
          'latitude': 'Latitude',
          'diesel': 'Diesel',
          'services': 'Services',
          'status': 'Status',
          'country': 'Country',
          'type': 'Type',
          'priceInUSDRange': 'Price In USD',
          'priceInUSD': 'Price In USD',
          'category': 'Category',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'LIMITED STOCK': 'LIMITED STOCK',
            'SUFFICIENT STOCK': 'SUFFICIENT STOCK',
            'OUT OF STOCK': 'OUT OF STOCK',
          },
          'type': {
            'Cash': 'Cash',
            'Fuel': 'Fuel',
            'Service': 'Service',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Service',
        },
        view: {
          title: 'View Service',
        },
        importer: {
          title: 'Import Services',
          fileName: 'service_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    order: {
        name: 'order',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'order_export',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Order successfully saved',
        },
        update: {
          success: 'Order successfully saved',
        },
        destroy: {
          success: 'Order successfully deleted',
        },
        destroyAll: {
          success: 'Order(s) successfully deleted',
        },
        edit: {
          title: 'Edit Order',
        },
        fields: {
          id: 'Id',
          'driver': 'Driver',
          'truck': 'Truck',
          'trailers': 'Trailers',
          'country': 'Country',
          'currency': 'Currency',
          'orderNo': 'Order No',
          'orderRef': 'Order Ref',
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
          title: 'New Order',
        },
        view: {
          title: 'View Order',
        },
        importer: {
          title: 'Import Orders',
          fileName: 'order_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    serviceOrder: {
        name: 'serviceOrder',
        label: 'ServiceOrders',
        menu: 'ServiceOrders',
        exporterFileName: 'serviceOrder_export',
        list: {
          menu: 'ServiceOrders',
          title: 'ServiceOrders',
        },
        create: {
          success: 'ServiceOrder successfully saved',
        },
        update: {
          success: 'ServiceOrder successfully saved',
        },
        destroy: {
          success: 'ServiceOrder successfully deleted',
        },
        destroyAll: {
          success: 'ServiceOrder(s) successfully deleted',
        },
        edit: {
          title: 'Edit ServiceOrder',
        },
        fields: {
          id: 'Id',
          'order': 'Order',
          'service': 'Service',
          'amountRange': 'Amount',
          'amount': 'Amount',
          'status': 'Status',
          'wallet': 'Wallet',
          'currency': 'Currency',
          'taxRange': 'Tax',
          'tax': 'Tax',
          'remark': 'Remark',
          'rateRange': 'Rate',
          'rate': 'Rate',
          'totalRange': 'Total',
          'total': 'Total',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'paid': 'Paid',
            'unpaid': 'Unpaid',
            'completed': 'Completed',
            'cancelled': 'Cancelled',
            'pending': 'Pending',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New ServiceOrder',
        },
        view: {
          title: 'View ServiceOrder',
        },
        importer: {
          title: 'Import ServiceOrders',
          fileName: 'serviceOrder_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    trip: {
        name: 'trip',
        label: 'Trips',
        menu: 'Trips',
        exporterFileName: 'trip_export',
        list: {
          menu: 'Trips',
          title: 'Trips',
        },
        create: {
          success: 'Trip successfully saved',
        },
        update: {
          success: 'Trip successfully saved',
        },
        destroy: {
          success: 'Trip successfully deleted',
        },
        destroyAll: {
          success: 'Trip(s) successfully deleted',
        },
        edit: {
          title: 'Edit Trip',
        },
        fields: {
          id: 'Id',
          'tripNo': 'TripNo',
          'order': 'Order',
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
          title: 'New Trip',
        },
        view: {
          title: 'View Trip',
        },
        importer: {
          title: 'Import Trips',
          fileName: 'trip_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    tripTemplate: {
        name: 'tripTemplate',
        label: 'Trip Templates',
        menu: 'Trip Templates',
        exporterFileName: 'tripTemplate_export',
        list: {
          menu: 'Trip Templates',
          title: 'Trip Templates',
        },
        create: {
          success: 'Trip Template successfully saved',
        },
        update: {
          success: 'Trip Template successfully saved',
        },
        destroy: {
          success: 'Trip Template successfully deleted',
        },
        destroyAll: {
          success: 'Trip Template(s) successfully deleted',
        },
        edit: {
          title: 'Edit Trip Template',
        },
        fields: {
          id: 'Id',
          'trip': 'Trip',
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
          title: 'New Trip Template',
        },
        view: {
          title: 'View Trip Template',
        },
        importer: {
          title: 'Import Trip Templates',
          fileName: 'tripTemplate_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    currency: {
        name: 'currency',
        label: 'Currencies',
        menu: 'Currencies',
        exporterFileName: 'currency_export',
        list: {
          menu: 'Currencies',
          title: 'Currencies',
        },
        create: {
          success: 'Currency successfully saved',
        },
        update: {
          success: 'Currency successfully saved',
        },
        destroy: {
          success: 'Currency successfully deleted',
        },
        destroyAll: {
          success: 'Currency(s) successfully deleted',
        },
        edit: {
          title: 'Edit Currency',
        },
        fields: {
          id: 'Id',
          'currency': 'Currency',
          'rateRange': 'Rate',
          'rate': 'Rate',
          'status': 'Status',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'active': 'Active',
            'inactive': 'Inactive',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Currency',
        },
        view: {
          title: 'View Currency',
        },
        importer: {
          title: 'Import Currencies',
          fileName: 'currency_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    branch: {
        name: 'branch',
        label: 'Branches',
        menu: 'Branches',
        exporterFileName: 'branch_export',
        list: {
          menu: 'Branches',
          title: 'Branches',
        },
        create: {
          success: 'Branch successfully saved',
        },
        update: {
          success: 'Branch successfully saved',
        },
        destroy: {
          success: 'Branch successfully deleted',
        },
        destroyAll: {
          success: 'Branch(s) successfully deleted',
        },
        edit: {
          title: 'Edit Branch',
        },
        fields: {
          id: 'Id',
          'officeName': 'OfficeName',
          'country': 'Country',
          'city': 'City',
          'address': 'Address',
          'longitude': 'Longitude',
          'latitude': 'Latitude',
          'status': 'Status',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'active': 'Active',
            'suspended': 'Suspended',
            'closed': 'Closed',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Branch',
        },
        view: {
          title: 'View Branch',
        },
        importer: {
          title: 'Import Branches',
          fileName: 'branch_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    accountcenter: {
        name: 'accountcenter',
        label: 'Accountcenters',
        menu: 'Accountcenters',
        exporterFileName: 'accountcenter_export',
        list: {
          menu: 'Accountcenters',
          title: 'Accountcenters',
        },
        create: {
          success: 'Accountcenter successfully saved',
        },
        update: {
          success: 'Accountcenter successfully saved',
        },
        destroy: {
          success: 'Accountcenter successfully deleted',
        },
        destroyAll: {
          success: 'Accountcenter(s) successfully deleted',
        },
        edit: {
          title: 'Edit Accountcenter',
        },
        fields: {
          id: 'Id',
          'twoFA': '2FA',
          'notification': 'Notification',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'notification': {
            'Email': 'Email',
            'SMS': 'SMS',
            'Notification': 'Notification',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Accountcenter',
        },
        view: {
          title: 'View Accountcenter',
        },
        importer: {
          title: 'Import Accountcenters',
          fileName: 'accountcenter_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    customerServiceCenter: {
        name: 'customerServiceCenter',
        label: 'CustomerServiceCenters',
        menu: 'CustomerServiceCenters',
        exporterFileName: 'customerServiceCenter_export',
        list: {
          menu: 'CustomerServiceCenters',
          title: 'CustomerServiceCenters',
        },
        create: {
          success: 'CustomerServiceCenter successfully saved',
        },
        update: {
          success: 'CustomerServiceCenter successfully saved',
        },
        destroy: {
          success: 'CustomerServiceCenter successfully deleted',
        },
        destroyAll: {
          success: 'CustomerServiceCenter(s) successfully deleted',
        },
        edit: {
          title: 'Edit CustomerServiceCenter',
        },
        fields: {
          id: 'Id',
          'country': 'Country',
          'details': 'Details',
          'status': 'Status',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'active': 'Active',
            'inactive': 'Inactive',
            'closed': 'Closed',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New CustomerServiceCenter',
        },
        view: {
          title: 'View CustomerServiceCenter',
        },
        importer: {
          title: 'Import CustomerServiceCenters',
          fileName: 'customerServiceCenter_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    coupon: {
        name: 'coupon',
        label: 'Coupons',
        menu: 'Coupons',
        exporterFileName: 'coupon_export',
        list: {
          menu: 'Coupons',
          title: 'Coupons',
        },
        create: {
          success: 'Coupon successfully saved',
        },
        update: {
          success: 'Coupon successfully saved',
        },
        destroy: {
          success: 'Coupon successfully deleted',
        },
        destroyAll: {
          success: 'Coupon(s) successfully deleted',
        },
        edit: {
          title: 'Edit Coupon',
        },
        fields: {
          id: 'Id',
          'order': 'Order',
          'orderService': 'OrderService',
          'serielNo': 'SerielNo',
          'transactionNo': 'TransactionNo',
          'office': 'Office',
          'expireDateRange': 'ExpireDate',
          'expireDate': 'ExpireDate',
          'status': 'Status',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'status': {
            'Created': 'Created',
            'Printed': 'Printed',
            'Taken': 'Taken',
            'Used': 'Used',
            'Expired': 'Expired',
            '': '',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Coupon',
        },
        view: {
          title: 'View Coupon',
        },
        importer: {
          title: 'Import Coupons',
          fileName: 'coupon_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    transaction: {
        name: 'transaction',
        label: 'Transactions',
        menu: 'Transactions',
        exporterFileName: 'transaction_export',
        list: {
          menu: 'Transactions',
          title: 'Transactions',
        },
        create: {
          success: 'Transaction successfully saved',
        },
        update: {
          success: 'Transaction successfully saved',
        },
        destroy: {
          success: 'Transaction successfully deleted',
        },
        destroyAll: {
          success: 'Transaction(s) successfully deleted',
        },
        edit: {
          title: 'Edit Transaction',
        },
        fields: {
          id: 'Id',
          'sender': 'Sender',
          'receiver': 'Receiver',
          'amountRange': 'Amount',
          'amount': 'Amount',
          'type': 'Type',
          'status': 'Status',
          'transactionNo': 'TransactionNo',
          'orderService': 'OrderService',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'type': {
            'Deposit': 'Deposit',
            'Transfer': 'Transfer',
            'Credit': 'Credit',
            'Debit': 'Debit',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Transaction',
        },
        view: {
          title: 'View Transaction',
        },
        importer: {
          title: 'Import Transactions',
          fileName: 'transaction_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    transactionLogs: {
        name: 'transactionLogs',
        label: 'TransactionLogs',
        menu: 'TransactionLogs',
        exporterFileName: 'transactionLogs_export',
        list: {
          menu: 'TransactionLogs',
          title: 'TransactionLogs',
        },
        create: {
          success: 'TransactionLogs successfully saved',
        },
        update: {
          success: 'TransactionLogs successfully saved',
        },
        destroy: {
          success: 'TransactionLogs successfully deleted',
        },
        destroyAll: {
          success: 'TransactionLogs(s) successfully deleted',
        },
        edit: {
          title: 'Edit TransactionLogs',
        },
        fields: {
          id: 'Id',
          'transaction': 'Transaction',
          'details': 'Details',
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
          title: 'New TransactionLogs',
        },
        view: {
          title: 'View TransactionLogs',
        },
        importer: {
          title: 'Import TransactionLogs',
          fileName: 'transactionLogs_import_template',
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
