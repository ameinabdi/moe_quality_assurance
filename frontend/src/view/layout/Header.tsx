import {
  LockOutlined,
  LogoutOutlined,
  AppstoreOutlined,
  UserOutlined,
  CodeOutlined,
  FileSearchOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Layout, Menu, Typography } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { i18n } from 'src/i18n';
import authActions from 'src/modules/auth/authActions';
import authSelectors from 'src/modules/auth/authSelectors';
import layoutSelectors from 'src/modules/layout/layoutSelectors';
import { getHistory } from 'src/modules/store';
import I18nSelect from 'src/view/layout/I18nSelect';
import HeaderWrapper from 'src/view/layout/styles/HeaderWrapper';
import config from 'src/config';
import MainMenu from 'src/view/layout/Menu';
import { Link } from 'react-router-dom';

const { Header: AntHeader } = Layout;
const { Text } = Typography;


const Header = (props) => {
  const dispatch = useAppDispatch();

  const menuVisible = useSelector(
    layoutSelectors.selectMenuVisible,
  );
  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );
  const userDropdownText = useSelector(
    authSelectors.selectCurrentUserNameOrEmailPrefix,
  );
  const userDropdownAvatar = useSelector(
    authSelectors.selectCurrentUserAvatar,
  );

  const doSignout = () => {
    dispatch(authActions.doSignout());
  };

  const doNavigateToProfile = () => {
    getHistory().push('/account-center');
  };

  const doNavigateToPasswordChange = () => {
    getHistory().push('/password-change');
  };

  const doNavigateToTenants = () => {
    getHistory().push('/tenant');
  };

  const doNavigateToSettings = () => {
    getHistory().push('/settings');
  };

  const doNavigateToAuditLogs = () => {
    getHistory().push('/audit-logs');
  };


  const userMenu3 = (
    <Menu selectedKeys={[]}>
      <Menu.Item
        onClick={doNavigateToProfile}
        key="userCenter"
      >
        <UserOutlined style={{ marginRight: 8 }} rev={undefined}/>
        {i18n('auth.profile.title')}
      </Menu.Item>
      <Menu.Item
        onClick={doNavigateToPasswordChange}
        key="passwordChange"
      >
        <LockOutlined style={{ marginRight: 8 }} rev={undefined}/>
        {i18n('auth.passwordChange.title')}
      </Menu.Item>
      {['multi', 'multi-with-subdomain'].includes(
        config.tenantMode,
      ) && (
        <Menu.Item
          onClick={doNavigateToTenants}
          key="tenants"
        >
          <AppstoreOutlined style={{ marginRight: 8 }} rev={undefined}/>
          {i18n('auth.tenants')}
        </Menu.Item>
      )}
       <Menu.Item
          onClick={doNavigateToSettings}
          key="settings"
        >
          <SettingOutlined style={{ marginRight: 8 }} rev={undefined}/>
          {i18n('settings.menu')}
      </Menu.Item>
      <Menu.Item
          onClick={doNavigateToAuditLogs}
          key="audit-logs"
        >
          <FileSearchOutlined style={{ marginRight: 8 }} rev={undefined}/>
          {i18n('auditLog.menu')}
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={doSignout} key="logout">
        <LogoutOutlined style={{ marginRight: 8 }} rev={undefined}/>
        {i18n('auth.signout')}
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderWrapper>
      <AntHeader 
        style={{
          backgroundPosition:'center',
          backgroundSize:'contain',
          backgroundRepeat:'no-repeat',
          backgroundImage: `url('/images/MOE-banner.png')`,
        }}
      >
      </AntHeader>
      <MainMenu url={props.url} /> 
    </HeaderWrapper>
  );
};

export default Header;
