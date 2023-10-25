import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React  from 'react';

import {
  DashboardOutlined,
  UserAddOutlined,
  FileSearchOutlined,
  SettingOutlined,
  RightOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardOutlined rev={undefined}  />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
    key: 'home',
  },
  {
    path: '/assessment',
    permissionRequired: permissions.assessmentRead,
    icon: <RightOutlined rev={undefined}  />,
    label: i18n('entities.assessment.menu'),
    key: 'assessment',
  },

  {
    path: '/question-section',
    permissionRequired: permissions.questionSectionRead,
    icon: <RightOutlined rev={undefined}  />,
    label: i18n('entities.questionSection.menu'),
    key: 'questionSection',
  },
  {
    path: '/answer',
    permissionRequired: permissions.answerRead,
    icon: <RightOutlined rev={undefined} />,
    label: i18n('entities.answer.menu'),
    key: 'answer',
    submenu:[
      {
        path: '/answer',
        permissionRequired: permissions.answerRead,
        icon: <RightOutlined rev={undefined} />,
        label: i18n('entities.answer.menu'),
        key: 'answer',
      },
    ]
  },
 
].filter(Boolean);
