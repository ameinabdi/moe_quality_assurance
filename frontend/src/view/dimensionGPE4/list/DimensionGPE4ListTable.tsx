import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionGPE4/list/dimensionGPE4ListActions';
import destroyActions from 'src/modules/dimensionGPE4/destroy/dimensionGPE4DestroyActions';
import selectors from 'src/modules/dimensionGPE4/list/dimensionGPE4ListSelectors';
import destroySelectors from 'src/modules/dimensionGPE4/destroy/dimensionGPE4DestroySelectors';
import dimensionGPE4Selectors from 'src/modules/dimensionGPE4/dimensionGPE4Selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import SchoolListItem from 'src/view/school/list/SchoolListItem';

const DimensionGPE4ListTable = (props) => {
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
    dimensionGPE4Selectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    dimensionGPE4Selectors.selectPermissionToDestroy,
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
        title: i18n('entities.dimensionGPE4.fields.indicator41'),
        sorter: true,
        dataIndex: 'indicator41',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE4.enumerators.indicator41.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE4.fields.indicator42'),
        sorter: true,
        dataIndex: 'indicator42',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE4.enumerators.indicator42.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE4.fields.indicator43'),
        sorter: true,
        dataIndex: 'indicator43',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE4.enumerators.indicator43.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE4.fields.indicator44'),
        sorter: true,
        dataIndex: 'indicator44',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE4.enumerators.indicator44.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE4.fields.school'),
        sorter: false,
        dataIndex: 'school',
        render: (value) => <SchoolListItem value={value} />,
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/dimension-g-p-e4/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/dimension-g-p-e4/${record.id}/edit`}>
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

export default DimensionGPE4ListTable;
