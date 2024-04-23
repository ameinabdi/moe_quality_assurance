import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/assessmentAnswer/list/assessmentAnswerListActions';
import destroyActions from 'src/modules/assessmentAnswer/destroy/assessmentAnswerDestroyActions';
import selectors from 'src/modules/assessmentAnswer/list/assessmentAnswerListSelectors';
import destroySelectors from 'src/modules/assessmentAnswer/destroy/assessmentAnswerDestroySelectors';
import assessmentAnswerSelectors from 'src/modules/assessmentAnswer/assessmentAnswerSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import moment from 'moment';
import AssessmentListItem from 'src/view/assessment/list/AssessmentListItem';

const AssessmentAnswerListTable = (props) => {
  const dispatch = useAppDispatch();


  const findLoading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasPermissionToEdit = useSelector(
    assessmentAnswerSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    assessmentAnswerSelectors.selectPermissionToDestroy,
  );

  const handleTableChange = (
    pagination,
    filters,
    sorter,
  ) => {
    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  const doDestroy = (id) => {
    dispatch(destroyActions.doDestroy(id));
  };

  const columns = [
      {
        title: i18n('entities.assessmentAnswer.fields.assessment'),
        sorter: false,
        dataIndex: 'assessment',
        render: (value) => <AssessmentListItem value={value} />,
      },
      {
        title: i18n('entities.assessmentAnswer.fields.status'),
        sorter: true,
        dataIndex: 'status',
        render: (value) =>
          value
            ? i18n(
                `entities.assessmentAnswer.enumerators.status.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.assessmentAnswer.fields.submitDate'),
        sorter: true,
        dataIndex: 'submitDate',
        render: (value) =>
          value
            ? moment(value).format('YYYY-MM-DD HH:mm')
            : null,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/assessment-answer/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/assessment-answer/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  const rowSelection = () => {
    return {
      selectedRowKeys: selectedKeys,
      onChange: (selectedRowKeys) => {
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  return (
    <TableWrapper>
      <Table
        rowKey="id"
        loading={loading}
        columns={columns as any}
        dataSource={rows}
        pagination={pagination}
        onChange={handleTableChange}
        rowSelection={rowSelection()}
        scroll={{
          x: true,
        }}
      />
    </TableWrapper>
  );
};

export default AssessmentAnswerListTable;
