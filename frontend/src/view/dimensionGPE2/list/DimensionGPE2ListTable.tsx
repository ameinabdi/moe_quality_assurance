import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionGPE2/list/dimensionGPE2ListActions';
import destroyActions from 'src/modules/dimensionGPE2/destroy/dimensionGPE2DestroyActions';
import selectors from 'src/modules/dimensionGPE2/list/dimensionGPE2ListSelectors';
import destroySelectors from 'src/modules/dimensionGPE2/destroy/dimensionGPE2DestroySelectors';
import dimensionGPE2Selectors from 'src/modules/dimensionGPE2/dimensionGPE2Selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import SchoolListItem from 'src/view/school/list/SchoolListItem';

const DimensionGPE2ListTable = (props) => {
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
    dimensionGPE2Selectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    dimensionGPE2Selectors.selectPermissionToDestroy,
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
        title: i18n('entities.dimensionGPE2.fields.indicator31'),
        sorter: true,
        dataIndex: 'indicator31',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator31.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator32'),
        sorter: true,
        dataIndex: 'indicator32',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator32.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator33'),
        sorter: true,
        dataIndex: 'indicator33',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator33.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator34'),
        sorter: true,
        dataIndex: 'indicator34',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator34.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator35'),
        sorter: true,
        dataIndex: 'indicator35',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator35.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator36'),
        sorter: true,
        dataIndex: 'indicator36',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator36.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator37'),
        sorter: true,
        dataIndex: 'indicator37',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator37.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator38'),
        sorter: true,
        dataIndex: 'indicator38',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator38.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator39'),
        sorter: true,
        dataIndex: 'indicator39',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator39.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator310'),
        sorter: true,
        dataIndex: 'indicator310',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator310.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator311'),
        sorter: true,
        dataIndex: 'indicator311',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator311.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator312'),
        sorter: true,
        dataIndex: 'indicator312',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator312.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator313'),
        sorter: true,
        dataIndex: 'indicator313',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator313.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator314'),
        sorter: true,
        dataIndex: 'indicator314',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator314.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.indicator315'),
        sorter: true,
        dataIndex: 'indicator315',
        render: (value) =>
          value
            ? i18n(
                `entities.dimensionGPE2.enumerators.indicator315.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimensionGPE2.fields.school'),
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
          <Link to={`/dimension-g-p-e2/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/dimension-g-p-e2/${record.id}/edit`}>
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

export default DimensionGPE2ListTable;
