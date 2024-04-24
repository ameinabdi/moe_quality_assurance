import { Table, Popconfirm, Dropdown,Button } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sSASurvey/list/sSASurveyListActions';
import destroyActions from 'src/modules/sSASurvey/destroy/sSASurveyDestroyActions';
import selectors from 'src/modules/sSASurvey/list/sSASurveyListSelectors';
import destroySelectors from 'src/modules/sSASurvey/destroy/sSASurveyDestroySelectors';
import sSASurveySelectors from 'src/modules/sSASurvey/sSASurveySelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import { DeleteOutlined,EditOutlined, EyeOutlined,DownOutlined  } from '@ant-design/icons';

import type { MenuProps } from 'antd';

const SSASurveyListTable = (props) => {
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
    sSASurveySelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    sSASurveySelectors.selectPermissionToDestroy,
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
      title: i18n('entities.school.fields.schoolEMISNumber'),
      sorter: true,
      dataIndex: '',
      render: (value) =>(value?.school?.schoolEMISNumber)
    },
      {
        title: i18n('entities.school.fields.schoolName'),
        sorter: true,
        dataIndex: '',
        render: (value) =>(value?.school?.schoolName)

      },
      {
        title: i18n('entities.school.fields.schoolLevel'),
        dataIndex: '',
        render: (values) =>
          (values?.school?.schoolLevel|| []).map((value) => (
            <div key={value}>
              {value
                ? i18n(
                  `entities.school.enumerators.schoolLevel.${value}`,
                  )
                : null}
            </div>
          )),
      },
      {
        title: i18n('entities.school.fields.schoolType'),
        sorter: true,
        dataIndex: '',
        render: (value) => (value?.school?.schoolType)
      },
      {
        title: i18n('entities.school.fields.schoolPhone'),
        sorter: true,
        dataIndex: '',
        render: (value) =>(value?.school?.schoolPhone)
      },
      {
        title: i18n('entities.sSASurvey.fields.dimension1')+" (15 %)",
        sorter: true,
        dataIndex: '',
        render: (value) =>(parseFloat(value?.dimension1?.dimension1Rate).toFixed(0)+" %")
      },
      {
        title: i18n('entities.sSASurvey.fields.dimension2')+" (10 %)",
        sorter: true,
        dataIndex: '',
        render: (value) =>(parseFloat(value?.dimension2?.dimension2Rate).toFixed(0)+" %")
      },
      {
        title: i18n('entities.sSASurvey.fields.dimension3')+" (30 %)",
        sorter: true,
        dataIndex: '',
        render: (value) =>(parseFloat(value?.dimension3?.dimension3Rate).toFixed(0)+" %")
      },
      {
        title: i18n('entities.sSASurvey.fields.dimension4')+" (15 %)",
        sorter: true,
        dataIndex: '',
        render: (value) =>(parseFloat(value?.dimension4?.dimension4Rate).toFixed(0)+" %")
      },
      {
        title: i18n('entities.sSASurvey.fields.dimension5')+" (30 %)",
        sorter: true,
        dataIndex: '',
        render: (value) =>(parseFloat(value?.dimension5?.dimension5Rate).toFixed(0)+" %")
      },
      {
        title: i18n('entities.sSASurvey.fields.total')+" (100 %)",
        sorter: true,
        dataIndex: '',
        render: (value) =>((parseFloat(value?.dimension1?.dimension1Rate)+parseFloat(value?.dimension2?.dimension2Rate)+parseFloat(value?.dimension3?.dimension3Rate)+parseFloat(value?.dimension4?.dimension4Rate)+parseFloat(value?.dimension5?.dimension5Rate)).toFixed(0)+" %")
      },
      
      {
        title: i18n('entities.sSASurvey.fields.finalizedDate'),
        sorter: true,
        dataIndex: 'finalizedDate',
      },
      {
        title: i18n('entities.sSASurvey.fields.principal'),
        sorter: true,
        dataIndex: 'principal',
      },
    {
      title: '',
      dataIndex: '',
      fixed:'right',
      width: '160px',
      render: (_, record) => {
        
        const items: MenuProps['items'] = [
          {
            key: '0',
            label: (<Link to={`/s-s-a-survey/${record.id}`}>
            {i18n('common.view')}
           </Link>),
            icon:(<EyeOutlined rev={undefined}  />),
          },
          {
            key: '1',
            label: (<Link to={`/s-s-a-survey/${record.id}/edit`}>
            {i18n('common.edit')}
           </Link>),
            icon:(<EditOutlined rev={undefined}  />),
            disabled:!hasPermissionToEdit
          },
          {
            key: '2',
            label: (<Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
                  {i18n('common.destroy')}
            </Popconfirm>),
            icon:(<DeleteOutlined rev={undefined}  />),
            disabled:!hasPermissionToDestroy
          },
        ]
  
      return (
        <div className="table-actions">
          <Dropdown menu={{items}} trigger={['click']}>
            <Button>
            {i18n('common.actions')} <DownOutlined rev={undefined}  />
            </Button>
          </Dropdown>
        </div>
      )
    },
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

export default SSASurveyListTable;
