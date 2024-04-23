import {
  FileExcelOutlined,
  FileSearchOutlined,
  MailOutlined,
  DeleteOutlined,
  ImportOutlined,
} from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';

import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import actions from 'src/modules/user/list/userListActions';
import selectors from 'src/modules/user/list/userListSelectors';
import userSelectors from 'src/modules/user/userSelectors';
import Toolbar from 'src/view/shared/styles/Toolbar';

const UserToolbar = (props) => {
  const dispatch = useAppDispatch()
;

  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const hasUserToAuditLogs = useSelector(
    auditLogSelectors.selectAuditLogToRead,
  );
  const hasUserToDestroy = useSelector(
    userSelectors.selectUserToDestroy,
  );
  const hasUserToCreate = useSelector(
    userSelectors.selectUserToCreate,
  );
  const hasUserToImport = useSelector(
    userSelectors.selectUserToImport,
  );

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    dispatch(actions.doDestroyAllSelected());
  };

  const renderExportButton = () => {
    const disabled = !hasRows || loading;
    const button = (
      <Button
        disabled={disabled}
        icon={<FileExcelOutlined rev={undefined}  />}
        onClick={doExport}
        loading={exportLoading}
      >
        {i18n('common.export')}
      </Button>
    );

    if (disabled) {
      return (
        <Tooltip title={i18n('common.noDataToExport')}>
          {button}
        </Tooltip>
      );
    }

    return button;
  };

  const renderDestroyButton = () => {
    if (!hasUserToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;
    const button = (
      <Button
        disabled={disabled}
        type="primary"
        icon={<DeleteOutlined rev={undefined}  />}
        onClick={doDestroyAllSelected}
      >
        {i18n('common.destroy')}
      </Button>
    );

    if (disabled) {
      return (
        <Tooltip title={i18n('common.mustSelectARow')}>
          {button}
        </Tooltip>
      );
    }

    return button;
  };

  return (
    <Toolbar>
      {hasUserToCreate && (
        <Link to="/user/new">
          <Button type="primary" icon={<MailOutlined rev={undefined}  />}>
            {i18n('user.invite')}
          </Button>
        </Link>
      )}

      {hasUserToImport && (
        <Link to="/user/importer">
          <Button type="primary" icon={<ImportOutlined rev={undefined}  />}>
            {i18n('common.import')}
          </Button>
        </Link>
      )}

      {renderDestroyButton()}

      {hasUserToAuditLogs && (
        <Link to="/audit-logs?entityNames=user">
          <Button icon={<FileSearchOutlined rev={undefined}  />}>
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}

      {renderExportButton()}
    </Toolbar>
  );
};

export default UserToolbar;
