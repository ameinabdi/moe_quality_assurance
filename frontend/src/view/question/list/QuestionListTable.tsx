import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/question/list/questionListActions';
import destroyActions from 'src/modules/question/destroy/questionDestroyActions';
import selectors from 'src/modules/question/list/questionListSelectors';
import destroySelectors from 'src/modules/question/destroy/questionDestroySelectors';
import questionSelectors from 'src/modules/question/questionSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';


const QuestionListTable = (props) => {
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
    questionSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    questionSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.question.fields.question'),
        sorter: true,
        dataIndex: 'question',
      },
      {
        title: i18n('entities.question.fields.type'),
        sorter: true,
        dataIndex: 'type',
        render: (value) =>
          value
            ? i18n(
                `entities.question.enumerators.type.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.question.fields.hint'),
        sorter: true,
        dataIndex: 'hint',
      },
      {
        title: i18n('entities.question.fields.validation'),
        dataIndex: 'validation',
        render: (values) =>
          (values || []).map((value) => (
            <div key={value}>
              {value
                ? i18n(
                  `entities.question.enumerators.validation.${value}`,
                  )
                : null}
            </div>
          )),
      },
      {
        title: i18n('entities.question.fields.answerValue'),
        sorter: true,
        dataIndex: 'answerValue',
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/question/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/question/${record.id}/edit`}>
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

export default QuestionListTable;
