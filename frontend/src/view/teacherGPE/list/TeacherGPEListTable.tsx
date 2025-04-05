import { Table, Popconfirm, Progress, Dropdown, Button } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/teacherGPE/list/teacherGPEListActions';
import destroyActions from 'src/modules/teacherGPE/destroy/teacherGPEDestroyActions';
import selectors from 'src/modules/teacherGPE/list/teacherGPEListSelectors';
import destroySelectors from 'src/modules/teacherGPE/destroy/teacherGPEDestroySelectors';
import teacherGPESelectors from 'src/modules/teacherGPE/teacherGPESelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import RegionListItem from 'src/view/region/list/RegionListItem';
import DistrictListItem from 'src/view/district/list/DistrictListItem';
import StateListItem from 'src/view/state/list/StateListItem';
import type { MenuProps } from 'antd';
import { DeleteOutlined, DownOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

const TeacherGPEListTable = (props) => {
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
    teacherGPESelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    teacherGPESelectors.selectPermissionToDestroy,
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
      title: i18n('entities.sSASurvey.fields.total')+" (100 %)",
      sorter: true,
      dataIndex: '',
      render: (value) =>{
        const total = (parseFloat(value?.dimension5?.dimension5Rate || 0)).toFixed(0)
      
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
        title: i18n('entities.teacherGPE.fields.school'),
        sorter: false,
        dataIndex: 'school',
      },
      {
        title: i18n('entities.teacherGPE.fields.schoolEMISNo'),
        sorter: false,
        dataIndex: 'schoolEMISNo',
      },
      {
        title: i18n('entities.teacherGPE.fields.state'),
        sorter: true,
        dataIndex: 'state',
        render: (value) => <StateListItem value={value} />,
      },
      {
        title: i18n('entities.teacherGPE.fields.region'),
        sorter: false,
        dataIndex: 'region',
        render: (value) => <RegionListItem value={value} />,
      },
      {
        title: i18n('entities.teacherGPE.fields.district'),
        sorter: false,
        dataIndex: 'district',
        render: (value) => <DistrictListItem value={value} />,
      },
      {
        title: i18n('entities.teacherGPE.fields.fullName'),
        sorter: true,
        dataIndex: 'fullName',
      },
      {
        title: i18n('entities.teacherGPE.fields.gender'),
        sorter: true,
        dataIndex: 'gender',
        render: (value) =>
          value
            ? i18n(
                `entities.teacherGPE.enumerators.gender.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.teacherGPE.fields.subjectName'),
        sorter: true,
        dataIndex: 'subjectName',
        render: (value) =>
          value
            ? i18n(
                `entities.teacherGPE.enumerators.subjectName.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.teacherGPE.fields.teachingLevel'),
        sorter: true,
        dataIndex: 'teachingLevel',
        render: (value) =>
          value
            ? i18n(
                `entities.teacherGPE.enumerators.teachingLevel.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.teacherGPE.fields.grade'),
        sorter: true,
        dataIndex: 'grade',
        render: (value) =>
          value
            ? i18n(
                `entities.teacherGPE.enumerators.grade.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.teacherGPE.fields.totalStudent'),
        sorter: true,  
        dataIndex: 'totalStudent',
        align: 'right',
      },
      {
        title: i18n('entities.teacherGPE.fields.maleStudents'),
        sorter: true,  
        dataIndex: 'maleStudents',
        align: 'right',
      },
      {
        title: i18n('entities.teacherGPE.fields.femaleStudent'),
        sorter: true,  
        dataIndex: 'femaleStudent',
        align: 'right',
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
              label: (<Link to={`/teacher-g-p-e/${record.id}`}>
              {i18n('common.view')}
             </Link>),
              icon:(<EyeOutlined rev={undefined}  />),
            },
            {
              key: '1',
              label: (<Link to={`/teacher-g-p-e/${record.id}/edit`}>
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

export default TeacherGPEListTable;
