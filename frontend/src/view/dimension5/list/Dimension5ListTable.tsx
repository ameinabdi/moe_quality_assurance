import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimension5/list/dimension5ListActions';
import destroyActions from 'src/modules/dimension5/destroy/dimension5DestroyActions';
import selectors from 'src/modules/dimension5/list/dimension5ListSelectors';
import destroySelectors from 'src/modules/dimension5/destroy/dimension5DestroySelectors';
import dimension5Selectors from 'src/modules/dimension5/dimension5Selectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import SchoolListItem from 'src/view/school/list/SchoolListItem';

const Dimension5ListTable = (props) => {
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
    dimension5Selectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    dimension5Selectors.selectPermissionToDestroy,
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
        title: i18n('entities.dimension5.fields.indicator51'),
        sorter: true,
        dataIndex: 'indicator51',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator51.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator52'),
        sorter: true,
        dataIndex: 'indicator52',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator52.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator53'),
        sorter: true,
        dataIndex: 'indicator53',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator53.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator54'),
        sorter: true,
        dataIndex: 'indicator54',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator54.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator55'),
        sorter: true,
        dataIndex: 'indicator55',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator55.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator56'),
        sorter: true,
        dataIndex: 'indicator56',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator56.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator57'),
        sorter: true,
        dataIndex: 'indicator57',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator57.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator58'),
        sorter: true,
        dataIndex: 'indicator58',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator58.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator59'),
        sorter: true,
        dataIndex: 'indicator59',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator59.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator510'),
        sorter: true,
        dataIndex: 'indicator510',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator510.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator511'),
        sorter: true,
        dataIndex: 'indicator511',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator511.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator512'),
        sorter: true,
        dataIndex: 'indicator512',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator512.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator513'),
        sorter: true,
        dataIndex: 'indicator513',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator513.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator514'),
        sorter: true,
        dataIndex: 'indicator514',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator514.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator515'),
        sorter: true,
        dataIndex: 'indicator515',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator515.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator516'),
        sorter: true,
        dataIndex: 'indicator516',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator516.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator517'),
        sorter: true,
        dataIndex: 'indicator517',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator517.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator518'),
        sorter: true,
        dataIndex: 'indicator518',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator518.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator519'),
        sorter: true,
        dataIndex: 'indicator519',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator519.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.indicator520'),
        sorter: true,
        dataIndex: 'indicator520',
        render: (value) =>
          value
            ? i18n(
                `entities.dimension5.enumerators.indicator520.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.dimension5.fields.school'),
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
          <Link to={`/dimension5/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/dimension5/${record.id}/edit`}>
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

export default Dimension5ListTable;
