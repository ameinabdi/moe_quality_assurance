import React from 'react';
import Toolbar from 'src/view/shared/styles/Toolbar';
import { Button, Tooltip, Popconfirm } from 'antd';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';import dimension1Selectors from 'src/modules/dimension1/dimension1Selectors';
import selectors from 'src/modules/dimension1/list/dimension1ListSelectors';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import actions from 'src/modules/dimension1/list/dimension1ListActions';
import destroyActions from 'src/modules/dimension1/destroy/dimension1DestroyActions';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import destroySelectors from 'src/modules/dimension1/destroy/dimension1DestroySelectors';
import {
  FileExcelOutlined,
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';

const Dimension1Toolbar = (props) => {
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
    dimension1Selectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    dimension1Selectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    dimension1Selectors.selectPermissionToImport,
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
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;
    const button = (
      <Button
        disabled={disabled}
        loading={destroyLoading}
        type="primary"
        icon={<DeleteOutlined rev={undefined}  />}
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
        <Link to="/dimension1/new">
          <Button type="primary" icon={<PlusOutlined rev={undefined}  />}>
            {i18n('common.new')}
          </Button>
        </Link>
      )}

      {hasPermissionToImport && (
        <Link to="/dimension1/importer">
          <Button type="primary" icon={<UploadOutlined rev={undefined}  />}>
            {i18n('common.import')}
          </Button>
        </Link>
      )}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=dimension1">
          <Button icon={<FileSearchOutlined rev={undefined}  />}>
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}

      {renderExportButton()}
    </Toolbar>
  );
};

export default Dimension1Toolbar;
