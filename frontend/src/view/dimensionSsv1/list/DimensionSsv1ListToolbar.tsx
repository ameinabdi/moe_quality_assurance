import React from 'react';
import Toolbar from 'src/view/shared/styles/Toolbar';
import { Button, Tooltip, Popconfirm } from 'antd';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import dimensionSsv1Selectors from 'src/modules/dimensionSsv1/dimensionSsv1Selectors';
import selectors from 'src/modules/dimensionSsv1/list/dimensionSsv1ListSelectors';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import actions from 'src/modules/dimensionSsv1/list/dimensionSsv1ListActions';
import destroyActions from 'src/modules/dimensionSsv1/destroy/dimensionSsv1DestroyActions';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import destroySelectors from 'src/modules/dimensionSsv1/destroy/dimensionSsv1DestroySelectors';
import {
  FileExcelOutlined,
  DeleteOutlined,
  PlusOutlined,
  UploadOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';

const DimensionSsv1Toolbar = (props) => {
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
    dimensionSsv1Selectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    dimensionSsv1Selectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    dimensionSsv1Selectors.selectPermissionToImport,
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
        <Link to="/dimension-ssv1/new">
          <Button type="primary" icon={<PlusOutlined rev={undefined} />}>
            {i18n('common.new')}
          </Button>
        </Link>
      )}

      {hasPermissionToImport && (
        <Link to="/dimension-ssv1/importer">
          <Button type="primary" icon={<UploadOutlined rev={undefined} />}>
            {i18n('common.import')}
          </Button>
        </Link>
      )}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=dimensionSsv1">
          <Button icon={<FileSearchOutlined rev={undefined} />}>
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}

      {renderExportButton()}
    </Toolbar>
  );
};

export default DimensionSsv1Toolbar;
