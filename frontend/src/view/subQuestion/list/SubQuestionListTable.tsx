import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/subQuestion/list/subQuestionListActions';
import destroyActions from 'src/modules/subQuestion/destroy/subQuestionDestroyActions';
import selectors from 'src/modules/subQuestion/list/subQuestionListSelectors';
import destroySelectors from 'src/modules/subQuestion/destroy/subQuestionDestroySelectors';
import subQuestionSelectors from 'src/modules/subQuestion/subQuestionSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';


const SubQuestionListTable = (props) => {
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
    subQuestionSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    subQuestionSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.subQuestion.fields.question'),
        sorter: true,
        dataIndex: 'question',
      },
      {
        title: i18n('entities.subQuestion.fields.type'),
        sorter: true,
        dataIndex: 'type',
        render: (value) =>
          value
            ? i18n(
                `entities.subQuestion.enumerators.type.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.subQuestion.fields.hint'),
        sorter: true,
        dataIndex: 'hint',
      },
      {
        title: i18n('entities.subQuestion.fields.validation'),
        dataIndex: 'validation',
        render: (values) =>
          (values || []).map((value) => (
            <div key={value}>
              {value
                ? i18n(
                  `entities.subQuestion.enumerators.validation.${value}`,
                  )
                : null}
            </div>
          )),
      },
      {
        title: i18n('entities.subQuestion.fields.answerValue'),
        sorter: true,
        dataIndex: 'answerValue',
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/sub-question/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/sub-question/${record.id}/edit`}>
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

export default SubQuestionListTable;
