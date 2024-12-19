import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/district/list/districtListActions';
import destroyActions from 'src/modules/district/destroy/districtDestroyActions';
import selectors from 'src/modules/district/list/districtListSelectors';
import destroySelectors from 'src/modules/district/destroy/districtDestroySelectors';
import districtSelectors from 'src/modules/district/districtSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import RegionListItem from 'src/view/region/list/RegionListItem';
import StateListItem from 'src/view/state/list/StateListItem';


const DistrictListTable = (props) => {
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
    districtSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    districtSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.district.fields.name'),
        sorter: true,
        dataIndex: 'name',
      },
      
      {
        title: i18n('entities.district.fields.region'),
        sorter: true,
        dataIndex: 'region',
        render: (value) => <RegionListItem value={value} />,
      },
      {
        title: i18n('entities.district.fields.state'),
        sorter: true,
        dataIndex: 'state',
        render: (value) => <StateListItem value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/district/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/district/${record.id}/edit`}>
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

export default DistrictListTable;
