import {
  DeleteOutlined,
  EditOutlined,
  FileSearchOutlined,
} from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import dimensionSsv1Selectors from 'src/modules/dimensionSsv1/dimensionSsv1Selectors';
import destroyActions from 'src/modules/dimensionSsv1/destroy/dimensionSsv1DestroyActions';
import destroySelectors from 'src/modules/dimensionSsv1/destroy/dimensionSsv1DestroySelectors';
import Toolbar from 'src/view/shared/styles/Toolbar';
import {useParams } from 'react-router-dom';


const DimensionSsv1ViewToolbar = (props) => {
  const dispatch = useAppDispatch();
  const match = useParams();

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectAuditLogToRead,
  );
  const hasPermissionToEdit = useSelector(
    dimensionSsv1Selectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    dimensionSsv1Selectors.selectPermissionToDestroy,
  );
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const id:any = match.id;

  const doDestroy = () => {
    dispatch(destroyActions.doDestroy(id));
  };

  return (
    <Toolbar>
      {hasPermissionToEdit && (
        <Link to={`/dimension-ssv1/${id}/edit`}>
          <Button type="primary" icon={<EditOutlined rev={undefined} />}>
            {i18n('common.edit')}
          </Button>
        </Link>
      )}

      {hasPermissionToDestroy && (
        <Popconfirm
          title={i18n('common.areYouSure')}
          onConfirm={doDestroy}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        >
          <Button
            type="primary"
            icon={<DeleteOutlined rev={undefined} />}
            disabled={destroyLoading}
          >
            {i18n('common.destroy')}
          </Button>
        </Popconfirm>
      )}

      {hasPermissionToAuditLogs && (
        <Link
          to={`/audit-logs?entityId=${encodeURIComponent(
            id,
          )}`}
        >
          <Button icon={<FileSearchOutlined rev={undefined} />}>
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}
    </Toolbar>
  );
};

export default DimensionSsv1ViewToolbar;
