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
import questionSectionSelectors from 'src/modules/questionSection/questionSectionSelectors';
import destroyActions from 'src/modules/questionSection/destroy/questionSectionDestroyActions';
import destroySelectors from 'src/modules/questionSection/destroy/questionSectionDestroySelectors';
import Toolbar from 'src/view/shared/styles/Toolbar';
import {useParams } from 'react-router-dom';

const QuestionSectionViewToolbar = (props) => {
  const dispatch = useAppDispatch();

const match = useParams();

  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectAuditLogToRead,
  );
  const hasPermissionToEdit = useSelector(
    questionSectionSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    questionSectionSelectors.selectPermissionToDestroy,
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
        <Link to={`/question-section/${id}/edit`}>
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

export default QuestionSectionViewToolbar;
