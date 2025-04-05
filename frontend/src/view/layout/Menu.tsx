import React, { useEffect } from 'react';
import SiderWrapper from 'src/view/layout/styles/SiderWrapper';
import authSelectors from 'src/modules/auth/authSelectors';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import actions from 'src/modules/layout/layoutActions';
import menus from 'src/view/menus';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import {
  LockOutlined,
  LogoutOutlined,
  AppstoreOutlined,
  UserOutlined,
  FileSearchOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Dropdown, Menu } from 'antd';
import I18nSelect from 'src/view/layout/I18nSelect';
import { getHistory } from 'src/modules/store';
import authActions from 'src/modules/auth/authActions';
import config from 'src/config';
import Permissions from 'src/security/permissions';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const AppMenu = (props) => {
  const dispatch = useAppDispatch();
  const currentTenant = useSelector(
    authSelectors.selectCurrentTenant,
  );
  const currentUser = useSelector(
    authSelectors.selectCurrentUser,
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
    getHistory().push('/user');
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


  const permissionChecker = new PermissionChecker(
    currentTenant,
    currentUser,
  );
 
  const toggleMenuOnResize = () => {
    window.innerWidth < 576 ? hideMenu() : showMenu();
  };

  useEffect(() => {
    toggleMenuOnResize();
    window.addEventListener('resize', toggleMenuOnResize);

    return () => {
      window.removeEventListener(
        'resize',
        toggleMenuOnResize,
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   const selectedKeys = () => {
    const url = props.url;
    let match;

    menus.mainMenu.map((option:any) => {
      let initialPathSegment = "/" + url.split('/')[1];
      if (option?.submenu) {
        option?.submenu.forEach(subOption => {
          if (subOption.path === initialPathSegment) {
            match = [subOption.path];
          }
        })
      } else {
        if (option.path === initialPathSegment) {
          match = [option.key];
        }
      } 
      return match
    })

    return match;
  };

  const hideMenu = () => {
    dispatch(actions.doHideMenu());
  };

  const showMenu = () => {
    dispatch(actions.doShowMenu());
  };

  const match = (permission) => {
    return permissionChecker.match(permission);
  };
  const defaultOpenKeys = () => {
    let keys = selectedKeys() || [];
    let openKeys: string[] = [];

    menus.mainMenu.forEach((option:any) => {
      if (option?.submenu) {
        option?.submenu.forEach((sub:any) => {
          if (keys.includes(sub.key)) {
            openKeys.push(option.key);
          }
        });
      }
    });

    return openKeys;
  };
  const selectedStateKeys = () => {
    const url = props.url;
    let match;

    menus.stateMenu.map(option => {
      let initialPathSegment = "/" + url.split('/')[1];
        if (option.path === initialPathSegment) {
          match = [option.key];
        }
      return match
    })

    return match;
  };



  const defaultStateOpenKeys = () => {
    let keys = selectedKeys() || [];
    let openKeys: string[] = [];

    menus.stateMenu.forEach(option => {
      if (option?.submenu) {
        option.submenu.forEach((sub:any) => {
          if (keys.includes(sub.key)) {
            openKeys.push(option.key);
          }
        });
      }
    });

    return openKeys;
  };

  

  

  const items: MenuProps['items'] = [
    ...menus.mainMenu.filter((menu) => match(menu.permissionRequired)).map((menu) => (getItem(<Link to={`${menu.path}`} style={{color:'white'}}>{menu.label}</Link>, menu.key,  menu.icon, 
      //@ts-ignore
      menu.submenu ? [...menu.submenu.map((item)=>getItem(<Link to={`${item.path}`}>{item.label}</Link>, item.path, item.icon))]: null)
      )),
  ];

  const stateItems: MenuProps['items'] = [
    ...menus.stateMenu.filter((menu) => match(menu.permissionRequired)).map((menu) => (getItem(<Link to={`${menu.path}`} style={{color:'white'}}>{menu.label}</Link>, menu.key,  menu.icon, 
      //@ts-ignore
      menu.submenu ? [...menu.submenu.map((item)=>getItem(<Link to={`${item.path}`}>{item.label}</Link>, item.path, item.icon))]: null)
      )),
  ];

 

  const userMenu = (
    <Menu selectedKeys={[]}>
     {match(Permissions.values.planRead) && (
       <Menu.Item
       onClick={doNavigateToProfile}
       key="userCenter"
     >
       <UserOutlined rev={undefined} style={{ marginRight: 8 }} />
       {i18n('user.title')}
     </Menu.Item>
     )} 
      <Menu.Item
        onClick={doNavigateToPasswordChange}
        key="passwordChange"
      >
        <LockOutlined rev={undefined} style={{ marginRight: 8 }} />
        {i18n('auth.passwordChange.title')}
      </Menu.Item>
      {['multi', 'multi-with-subdomain'].includes(
        config.tenantMode,
      ) && match(Permissions.values.planRead) && (
        <Menu.Item
          onClick={doNavigateToTenants}
          key="tenants"
        >
          <AppstoreOutlined rev={undefined} style={{ marginRight: 8 }} />
          {i18n('auth.tenants')}
        </Menu.Item>
      )}
      {match(Permissions.values.settingsEdit) && (
       <Menu.Item
          onClick={doNavigateToSettings}
          key="settings"
        >
          <SettingOutlined rev={undefined} style={{ marginRight: 8 }} />
          {i18n('settings.menu')}
      </Menu.Item>
       )}
     {match(Permissions.values.auditLogRead) && (
      <Menu.Item
          onClick={doNavigateToAuditLogs}
          key="audit-logs"
        >
          <FileSearchOutlined rev={undefined} style={{ marginRight: 8 }} />
          {i18n('auditLog.menu')}
      </Menu.Item>
       )}
      <Menu.Divider />
      <Menu.Item onClick={doSignout} key="logout">
        <LogoutOutlined rev={undefined} style={{ marginRight: 8 }} />
        {i18n('auth.signout')}
      </Menu.Item>
    </Menu>
  );

  return (
    <SiderWrapper className="sider">
      <div className='Main'>
   
      <div className='left'>
         
        </div>
        <div className='center'>
        {permissionChecker.isState ? 
         <Menu
         theme="dark"
         mode="horizontal"
         selectedKeys={selectedStateKeys()}
         defaultOpenKeys={defaultStateOpenKeys()}
         items={stateItems}
         selectable={true}
         expandIcon
         >
         </Menu>
        :
         <Menu
         theme="dark"
         mode="horizontal"
         selectedKeys={selectedKeys()}
         defaultOpenKeys={defaultOpenKeys()}
         items={items}
         selectable={true}
         expandIcon
         >
         
       </Menu>
          }
        </div>
        <div className='right'>
          <span className="i18n-select">
            <I18nSelect />
          </span>
          <Dropdown
            className="user-dropdown"
            overlay={userMenu}
            trigger={['click']}
          >
            <div className="user-dropdown-content">
              <Avatar
                className="user-dropdown-avatar"
                size="small"
                src={userDropdownAvatar || undefined}
                alt="avatar"
                icon={
                  userDropdownAvatar ? undefined : (
                    <UserOutlined rev={undefined}   />
                  )
                }
              />
              <span className="user-dropdown-text">
                <span>{userDropdownText}</span>{' '}
              </span>
            </div>
          </Dropdown>
        </div>
      </div>
    </SiderWrapper>
  );
};

export default AppMenu;
