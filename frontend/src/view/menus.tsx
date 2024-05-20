import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React  from 'react';

import {
  DashboardOutlined,
  RightOutlined,
  BarChartOutlined
} from '@ant-design/icons';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardOutlined rev={undefined}  />,
    label: i18n('dashboard.menu'),
    permissionRequired:  permissions.dashboardRead,
    key: 'home',
  },
  {
    path: '/report',
    exact: true,
    icon: <BarChartOutlined rev={undefined}  />,
    label: i18n('report.menu'),
    permissionRequired: permissions.reportRead,
    key: 'report',
  },
  {
    path: '/s-s-a-survey',
    permissionRequired: permissions.sSASurveyRead,
    icon: <RightOutlined rev={undefined}  />,
    label: i18n('entities.sSASurvey.menu'),
    key: 'sSASurvey',
  },
 
].filter(Boolean);
