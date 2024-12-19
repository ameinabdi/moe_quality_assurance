import React from 'react';
import Toolbar from 'src/view/shared/styles/Toolbar';
import { Button, Tooltip, Popconfirm } from 'antd';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import stateSelectors from 'src/modules/state/stateSelectors';
import selectors from 'src/modules/state/list/stateListSelectors';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import actions from 'src/modules/state/list/stateListActions';
import destroyActions from 'src/modules/state/destroy/stateDestroyActions';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import destroySelectors from 'src/modules/state/destroy/stateDestroySelectors';
import {
  FileExcelOutlined,
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';

const StateToolbar = (props) => {
  const dispatch = useAppDispatch();
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectAuditLogToRead,
  );
  const hasPermissionToDestroy = useSelector(
    stateSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    stateSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    stateSelectors.selectPermissionToImport,
  );

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    dispatch(destroyActions.doDestroyAll(selectedKeys));
  };

  const renderExportButton = () => {
    const disabled = !hasRows || loading;
    const button = (
      <Button
        disabled={disabled}
        icon={<FileExcelOutlined rev={undefined} />}
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
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;
    const button = (
      <Button
        disabled={disabled}
        loading={destroyLoading}
        type="primary"
        icon={<DeleteOutlined rev={undefined} />}
      >
        {i18n('common.destroy')}
      </Button>
    );
    const buttonWithConfirm = (
      <Popconfirm
        title={i18n('common.areYouSure')}
        onConfirm={() => doDestroyAllSelected()}
        okText={i18n('common.yes')}
        cancelText={i18n('common.no')}
      >
        {button}
      </Popconfirm>
    );

    if (disabled) {
      return (
        <Tooltip title={i18n('common.mustSelectARow')}>
          {button}
        </Tooltip>
      );
    }

    return buttonWithConfirm;
  };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
        <Link to="/state/new">
          <Button type="primary" icon={<PlusOutlined rev={undefined} />}>
            {i18n('common.new')}
          </Button>
        </Link>
      )}

      {hasPermissionToImport && (
        <Link to="/state/importer">
          <Button type="primary" icon={<UploadOutlined rev={undefined} />}>
            {i18n('common.import')}
          </Button>
        </Link>
      )}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=state">
          <Button icon={<FileSearchOutlined rev={undefined} />}>
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}

      {renderExportButton()}
    </Toolbar>
  );
};

export default StateToolbar;
