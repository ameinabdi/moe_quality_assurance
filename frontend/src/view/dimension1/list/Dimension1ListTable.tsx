import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimension1/list/dimension1ListActions';
import destroyActions from 'src/modules/dimension1/destroy/dimension1DestroyActions';
import selectors from 'src/modules/dimension1/list/dimension1ListSelectors';
import destroySelectors from 'src/modules/dimension1/destroy/dimension1DestroySelectors';
import dimension1Selectors from 'src/modules/dimension1/dimension1Selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import SchoolListItem from 'src/view/school/list/SchoolListItem';

const Dimension1ListTable = (props) => {
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
    dimension1Selectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    dimension1Selectors.selectPermissionToDestroy,
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
        title: i18n('entities.dimension1.fields.indicator11'),
        sorter: true,
        dataIndex: 'indicator11',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator11.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator12'),
        sorter: true,
        dataIndex: 'indicator12',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator12.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator13'),
        sorter: true,
        dataIndex: 'indicator13',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator13.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator14'),
        sorter: true,
        dataIndex: 'indicator14',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator14.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator15'),
        sorter: true,
        dataIndex: 'indicator15',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator15.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator16'),
        sorter: true,
        dataIndex: 'indicator16',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator16.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator17'),
        sorter: true,
        dataIndex: 'indicator17',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator17.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator18'),
        sorter: true,
        dataIndex: 'indicator18',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator18.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator19'),
        sorter: true,
        dataIndex: 'indicator19',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator19.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator110'),
        sorter: true,
        dataIndex: 'indicator110',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator110.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator111'),
        sorter: true,
        dataIndex: 'indicator111',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator111.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator112'),
        sorter: true,
        dataIndex: 'indicator112',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator112.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator113'),
        sorter: true,
        dataIndex: 'indicator113',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator113.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.indicator114'),
        sorter: true,
        dataIndex: 'indicator114',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension1.enumerators.indicator114.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension1.fields.school'),
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
          <Link to={`/dimension1/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/dimension1/${record.id}/edit`}>
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

export default Dimension1ListTable;
