import {
  DeleteOutlined,
  EditOutlined,
  FileSearchOutlined,
  PrinterOutlined,
} from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import auditLogSelectors from 'src/modules/auditLog/auditLogSelectors';
import schoolSupervisionGPESelectors from 'src/modules/schoolSupervisionGPE/schoolSupervisionGPESelectors';
import destroyActions from 'src/modules/schoolSupervisionGPE/destroy/schoolSupervisionGPEDestroyActions';
import destroySelectors from 'src/modules/schoolSupervisionGPE/destroy/schoolSupervisionGPEDestroySelectors';
import Toolbar from 'src/view/shared/styles/Toolbar';
import {useParams } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

const SchoolSupervisionGPEViewToolbar = (props) => {
  const dispatch = useAppDispatch();
  const match = useParams();

  const hasPermissionToAuditLogs = useSelector(
     auditLogSelectors.selectAuditLogToRead,
  );
  const hasPermissionToEdit = useSelector(
    schoolSupervisionGPESelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    schoolSupervisionGPESelectors.selectPermissionToDestroy,
  );
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

const id:any = match.id;

  const doDestroy = () => {
    dispatch(destroyActions.doDestroy(id));
  };
  const reactToPrintTrigger = React.useCallback(() => {
    return (
      <Button 
      type="dashed" 
      icon={<PrinterOutlined  rev={undefined}  />} 
      >
        {i18n('common.print')}
      </Button>
    ); 
  }, []);

  return (
    <Toolbar>
      <ReactToPrint
              content={props.handleToPrint}
              documentTitle="AwesomeFileName"
              trigger={reactToPrintTrigger}
            />
      {hasPermissionToEdit && (
        <Link to={`/school-supervision-g-p-e/${id}/edit`}>
          <Button type="primary" icon={<EditOutlined rev={undefined}  />}>
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
            icon={<DeleteOutlined rev={undefined}  />}
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
          <Button icon={<FileSearchOutlined rev={undefined}  />}>
            {i18n('auditLog.menu')}
          </Button>
        </Link>
      )}
    </Toolbar>
  );
};

export default SchoolSupervisionGPEViewToolbar;
