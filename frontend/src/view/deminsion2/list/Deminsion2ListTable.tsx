import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/deminsion2/list/deminsion2ListActions';
import destroyActions from 'src/modules/deminsion2/destroy/deminsion2DestroyActions';
import selectors from 'src/modules/deminsion2/list/deminsion2ListSelectors';
import destroySelectors from 'src/modules/deminsion2/destroy/deminsion2DestroySelectors';
import deminsion2Selectors from 'src/modules/deminsion2/deminsion2Selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import SchoolListItem from 'src/view/school/list/SchoolListItem';

const Deminsion2ListTable = (props) => {
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
    deminsion2Selectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    deminsion2Selectors.selectPermissionToDestroy,
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
        title: i18n('entities.deminsion2.fields.indicator21'),
        sorter: true,
        dataIndex: 'indicator21',
        render: (value) =>
          value
            ? i18n(
                `entities.deminsion2.enumerators.indicator21.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.deminsion2.fields.indicator22'),
        sorter: true,
        dataIndex: 'indicator22',
        render: (value) =>
          value
            ? i18n(
                `entities.deminsion2.enumerators.indicator22.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.deminsion2.fields.indicator23'),
        sorter: true,
        dataIndex: 'indicator23',
        render: (value) =>
          value
            ? i18n(
                `entities.deminsion2.enumerators.indicator23.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.deminsion2.fields.indicator24'),
        sorter: true,
        dataIndex: 'indicator24',
        render: (value) =>
          value
            ? i18n(
                `entities.deminsion2.enumerators.indicator24.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.deminsion2.fields.indicator25'),
        sorter: true,
        dataIndex: 'indicator25',
        render: (value) =>
          value
            ? i18n(
                `entities.deminsion2.enumerators.indicator25.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.deminsion2.fields.indicator26'),
        sorter: true,
        dataIndex: 'indicator26',
        render: (value) =>
          value
            ? i18n(
                `entities.deminsion2.enumerators.indicator26.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.deminsion2.fields.indicator27'),
        sorter: true,
        dataIndex: 'indicator27',
        render: (value) =>
          value
            ? i18n(
                `entities.deminsion2.enumerators.indicator27.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.deminsion2.fields.indicator28'),
        sorter: true,
        dataIndex: 'indicator28',
        render: (value) =>
          value
            ? i18n(
                `entities.deminsion2.enumerators.indicator28.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.deminsion2.fields.school'),
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
          <Link to={`/deminsion2/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/deminsion2/${record.id}/edit`}>
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

export default Deminsion2ListTable;
