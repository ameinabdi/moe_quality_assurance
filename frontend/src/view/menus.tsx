import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React  from 'react';
import {
  DashboardOutlined,
  RightOutlined,
  BarChartOutlined,
  MenuOutlined,
} from '@ant-design/icons';

const permissions = Permissions.values;

const mainMenu =  [
  {
    path: '/',
    exact: true,
    icon: <DashboardOutlined rev={undefined}  />,
    label: i18n('dashboard.menu'),
    permissionRequired:  permissions.dashboardRead,
    key: 'home',
  },
  {
    path: '/',
    label: i18n('setup.menu'),
    permissionRequired: permissions.userRead,
    icon: <MenuOutlined rev={undefined} />,
    key: 'setup',
    submenu:[
        {
          path: '/state',
          permissionRequired: permissions.stateRead,
          icon: <RightOutlined rev={undefined}  />,
          label: i18n('entities.state.menu'),
          key: 'state',
        },

        {
          path: '/region',
          permissionRequired: permissions.regionRead,
          icon: <RightOutlined rev={undefined} />,
          label: i18n('entities.region.menu'),
          key: 'region',
        },

        {
          path: '/district',
          permissionRequired: permissions.districtRead,
          icon: <RightOutlined rev={undefined} />,
          label: i18n('entities.district.menu'),
          key: 'district',
        },
        {
          path: '/tool-types',
          permissionRequired: permissions.toolTypesRead,
          icon: <RightOutlined rev={undefined} />,
          label: i18n('entities.toolTypes.menu'),
          key: 'toolTypes',
        },
      ]
  },
  {
    path: '/state-report',
    exact: true,
    icon: <BarChartOutlined rev={undefined}  />,
    label: i18n('stateReport.menu'),
    permissionRequired: permissions.stateReportRead,
    key: 'stateReport',
    
  },
  {
    path: '/report',
    exact: true,
    icon: <BarChartOutlined rev={undefined}  />,
    label: i18n('report.menu'),
    permissionRequired: permissions.reportRead,
    key: 'report',
    submenu:[
      {
        path: '/report',
        exact: true,
        icon: <BarChartOutlined rev={undefined}  />,
        label: i18n('report.menu'),
        permissionRequired: permissions.reportRead,
        key: 'report',
        
      },
      {
        path: '/supervision-report',
        exact: true,
        icon: <BarChartOutlined rev={undefined}  />,
        label: i18n('supervisionReport.menu'),
        permissionRequired: permissions.reportRead,
        key: 'supervisionReport',
      },
      {
        path: '/teacher-report',
        exact: true,
        icon: <BarChartOutlined rev={undefined}  />,
        label: i18n('teacherReport.menu'),
        permissionRequired: permissions.reportRead,
        key: 'teacherReport',
        
      },

      {
        path: '/supervision-report-gpe',
        exact: true,
        icon: <BarChartOutlined rev={undefined}  />,
        label: i18n('supervisionReportGPE.menu'),
        permissionRequired: permissions.reportRead,
        key: 'supervisionReport',
      },
      {
        path: '/teacher-report-gpe',
        exact: true,
        icon: <BarChartOutlined rev={undefined}  />,
        label: i18n('teacherReportGPE.menu'),
        permissionRequired: permissions.reportRead,
        key: 'teacherReport',
        
      },
    ]
  },
  {
    path: '/s-s-a-survey',
    permissionRequired: permissions.sSASurveyRead,
    icon: <RightOutlined  rev={undefined} />,
    label: i18n('entities.sSASurvey.menu'),
    key: 'sSASurvey',
  },
  {
    path: '/school-supervision',
    permissionRequired: permissions.schoolSupervisionRead,
    icon: <RightOutlined  rev={undefined} />,
    label: i18n('entities.schoolSupervision.menu'),
    key: 'schoolSupervision',
    submenu:[
      {
        path: '/school-supervision',
        permissionRequired: permissions.schoolSupervisionRead,
        icon: <RightOutlined  rev={undefined} />,
        label: i18n('entities.schoolSupervision.menu'),
        key: 'schoolSupervision',
      },
      {
        path: '/school-supervision-g-p-e',
        permissionRequired: permissions.schoolSupervisionGPERead,
        icon: <RightOutlined rev={undefined} />,
        label: i18n('entities.schoolSupervisionGPE.menu'),
        key: 'schoolSupervisionGPE',
      },
      {
        path: '/teacher-g-p-e',
        permissionRequired: permissions.teacherGPERead,
        icon: <RightOutlined rev={undefined} />,
        label: i18n('entities.teacherGPE.menu'),
        key: 'teacherGPE',
      },
    ]
  },
  {
    path: '/government-teacher-information',
    permissionRequired: permissions.governmentTeacherInformationRead,
    icon: <RightOutlined  rev={undefined} />,
    label: i18n('entities.governmentTeacherInformation.menu'),
    key: 'governmentTeacherInformation',
  },
  
  {
    path: '/tools',
    permissionRequired: permissions.toolsRead,
    icon: <RightOutlined rev={undefined} />,
    label: i18n('entities.tools.menu'),
    key: 'tools',
  },
  
 
  
].filter(Boolean);

const stateMenu =  [
  {
    path: '/school-supervision',
    permissionRequired: permissions.schoolSupervisionRead,
    icon: <RightOutlined  rev={undefined} />,
    label: i18n('entities.schoolSupervision.menu'),
    key: 'schoolSupervision',
    submenu:[]
  },
  {
    path: '/school-supervision-g-p-e',
    permissionRequired: permissions.schoolSupervisionGPERead,
    icon: <RightOutlined rev={undefined} />,
    label: i18n('entities.schoolSupervisionGPE.menu'),
    key: 'schoolSupervisionGPE',
  },
  {
    path: '/teacher-g-p-e',
    permissionRequired: permissions.teacherGPERead,
    icon: <RightOutlined rev={undefined} />,
    label: i18n('entities.teacherGPE.menu'),
    key: 'teacherGPE',
  },
  {
    path: '/government-teacher-information',
    permissionRequired: permissions.governmentTeacherInformationRead,
    icon: <RightOutlined  rev={undefined} />,
    label: i18n('entities.governmentTeacherInformation.menu'),
    key: 'governmentTeacherInformation',
  },

 ].filter(Boolean);

 export default {stateMenu, mainMenu}