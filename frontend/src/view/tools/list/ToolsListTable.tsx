import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/tools/list/toolsListActions';
import destroyActions from 'src/modules/tools/destroy/toolsDestroyActions';
import selectors from 'src/modules/tools/list/toolsListSelectors';
import destroySelectors from 'src/modules/tools/destroy/toolsDestroySelectors';
import toolsSelectors from 'src/modules/tools/toolsSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import FilesListView from 'src/view/shared/list/FileListView';
import ToolTypesListItem from 'src/view/toolTypes/list/ToolTypesListItem';

const ToolsListTable = (props) => {
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
    toolsSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    toolsSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.tools.fields.type'),
        sorter: false,
        dataIndex: 'type',
        render: (value) => <ToolTypesListItem value={value} />,
      },
      {
        title: i18n('entities.tools.fields.name'),
        sorter: true,
        dataIndex: 'name',
      },
      {
        title: i18n('entities.tools.fields.description'),
        sorter: true,
        dataIndex: 'description',
      },
      {
        title: i18n('entities.tools.fields.attachment'),
        sorter: false,
        dataIndex: 'attachment',
        render: (value) => <FilesListView value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/tools/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/tools/${record.id}/edit`}>
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

export default ToolsListTable;
