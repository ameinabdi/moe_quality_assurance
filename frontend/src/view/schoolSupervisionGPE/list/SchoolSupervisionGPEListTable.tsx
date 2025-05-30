import { Table, Popconfirm, Dropdown,Button, Progress } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/schoolSupervisionGPE/list/schoolSupervisionGPEListActions';
import destroyActions from 'src/modules/schoolSupervisionGPE/destroy/schoolSupervisionGPEDestroyActions';
import selectors from 'src/modules/schoolSupervisionGPE/list/schoolSupervisionGPEListSelectors';
import destroySelectors from 'src/modules/schoolSupervisionGPE/destroy/schoolSupervisionGPEDestroySelectors';
import schoolSupervisionGPESelectors from 'src/modules/schoolSupervisionGPE/schoolSupervisionGPESelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';

import type { MenuProps } from 'antd';
import { DeleteOutlined, DownOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import DistrictListItem from 'src/view/district/list/DistrictListItem';

const SchoolSupervisionGPEListTable = (props) => {
  const dispatch = useAppDispatch();

  const findLoading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const count = useSelector(selectors.selectCount);

  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasPermissionToEdit = useSelector(
    schoolSupervisionGPESelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    schoolSupervisionGPESelectors.selectPermissionToDestroy,
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
                  title: 'district',
                  sorter: true,
                  dataIndex: 'district',
                  render: (value) =>(<DistrictListItem value={value} />)
                },
      {
        title: i18n('entities.sSASurvey.fields.dimension1')+" (15 %)",
        sorter: true,
        dataIndex: '',
        render: (value) =>(parseFloat(value?.dimension1?.dimension1Rate || 0).toFixed(0)+" %")
      },
      {
        title: i18n('entities.sSASurvey.fields.dimension2')+" (10 %)",
        sorter: true,
        dataIndex: '',
        render: (value) =>(parseFloat(value?.dimension2?.dimension2Rate || 0).toFixed(0)+" %")
      },
      {
        title: i18n('entities.sSASurvey.fields.dimension3')+" (30 %)",
        sorter: true,
        dataIndex: '',
        render: (value) =>(parseFloat(value?.dimension3?.dimension3Rate || 0).toFixed(0)+" %")
      },
      {
        title: i18n('entities.sSASurvey.fields.dimension4')+" (15 %)",
        sorter: true,
        dataIndex: '',
        render: (value) =>(parseFloat(value?.dimension4?.dimension4Rate || 0).toFixed(0)+" %")
      },
      {
        title: i18n('entities.sSASurvey.fields.total')+" (100 %)",
        sorter: true,
        dataIndex: '',
        render: (value) =>{
          const total = (parseFloat(value?.dimension1?.dimension1Rate || 0)+parseFloat(value?.dimension2?.dimension2Rate || 0)+parseFloat(value?.dimension3?.dimension3Rate || 0)+parseFloat(value?.dimension4?.dimension4Rate || 0)+parseFloat(value?.dimension5?.dimension5Rate || 0)).toFixed(0)
        
          return (<Progress strokeLinecap="butt"
          type='dashboard'
          strokeWidth={10}
          //@ts-ignore
          strokeColor={parseFloat(total || 0) < 50 ? '#ff4d4f' : undefined}
          //@ts-ignore
          format={(percent) => `${parseFloat(total || 0).toFixed(0)} / ${100} %`} 
          //@ts-ignore
          percent={(parseFloat(total || 0).toFixed(0)/30)*100} size={[100, 20]} 
          className="custom-progress-text"
          />)
        }
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
            label: (<Link to={`/school-supervision-g-p-e/${record.id}`}>
            {i18n('common.view')}
           </Link>),
            icon:(<EyeOutlined rev={undefined}  />),
          },
          {
            key: '1',
            label: (<Link to={`/school-supervision-g-p-e/${record.id}/edit`}>
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
        pagination={{
          ...pagination,
          total: count,
          showSizeChanger: true,
          showTotal:total => `Total ${total} Records`,
          pageSizeOptions:[
            10, 20, 50, 100,500, count > 500 ? count : 1000 
          ],
        }}  
        onChange={handleTableChange}
        rowSelection={rowSelection()}
        scroll={{
          x: true,
        }}
      />
    </TableWrapper>
  );
};

export default SchoolSupervisionGPEListTable;
