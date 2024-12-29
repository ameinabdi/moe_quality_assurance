import { Table, Popconfirm, Button, Dropdown, Drawer, Space } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/governmentTeacherInformation/list/governmentTeacherInformationListActions';
import destroyActions from 'src/modules/governmentTeacherInformation/destroy/governmentTeacherInformationDestroyActions';
import selectors from 'src/modules/governmentTeacherInformation/list/governmentTeacherInformationListSelectors';
import destroySelectors from 'src/modules/governmentTeacherInformation/destroy/governmentTeacherInformationDestroySelectors';
import governmentTeacherInformationSelectors from 'src/modules/governmentTeacherInformation/governmentTeacherInformationSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ImagesListView from 'src/view/shared/list/ImagesListView';
import SchoolListItem from 'src/view/school/list/SchoolListItem';
import DistrictListItem from 'src/view/district/list/DistrictListItem';
import { DeleteOutlined, DownOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import GovernmentTeacherInformationViewToolbar from '../view/GovernmentTeacherInformationViewToolbar';
import GovernmentTeacherInformationPage from '../view/GovernmentTeacherInformationViewPage';
import StateListItem from 'src/view/state/list/StateListItem';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

const GovernmentTeacherInformationListTable = (props) => {
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
  const hasPermissionToDestroy = useSelector(
    governmentTeacherInformationSelectors.selectPermissionToDestroy,
  );
  const [visible, setVisible] =  React.useState(null);

  const doClose = () => {
    setVisible(null);
  };

  const doOpen = (id) => {
    setVisible(id);
  };

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
        title: i18n('entities.governmentTeacherInformation.fields.teacherPhoto'),
        sorter: false,
        dataIndex: 'teacherPhoto',
        render: (value) => <ImagesListView value={value} />,
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.fullName'),
        sorter: true,
        dataIndex: 'fullName',
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.gender'),
        sorter: true,
        dataIndex: 'gender',
        render: (value) =>
          value
            ? i18n(
                `entities.governmentTeacherInformation.enumerators.gender.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.teacherIDNumber'),
        sorter: true,
        dataIndex: 'teacherIDNumber',
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.niraID'),
        sorter: true,
        dataIndex: 'niraID',
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.state'),
        sorter: false,
        dataIndex: 'state',
        render: (value) => <StateListItem value={value} />,
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.district'),
        sorter: false,
        dataIndex: 'district',
        render: (value) => <DistrictListItem value={value} />,
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.school'),
        sorter: false,
        dataIndex: 'school',
        render: (value) => <SchoolListItem value={value} />,
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.educationLevel'),
        sorter: true,
        dataIndex: 'educationLevel',
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.graduationYear'),
        sorter: true,
        dataIndex: 'graduationYear',
        render: (value) => (dayjs(value).format('YYYY')),

      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.taughtLevel'),
        sorter: true,
        dataIndex: 'taughtLevel',
        render: (value) =>
          value
            ? i18n(
                `entities.governmentTeacherInformation.enumerators.taughtLevel.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.teachingShift'),
        sorter: true,
        dataIndex: 'teachingShift',
        render: (value) =>
          value
            ? i18n(
                `entities.governmentTeacherInformation.enumerators.teachingShift.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.gradesTaught'),
        dataIndex: 'gradesTaught',
        render: (values) =>
          (values || []).map((value) => (
            <div key={value}>
              {value
                ? i18n(
                  `entities.governmentTeacherInformation.enumerators.gradesTaught.${value}`,
                  )
                : null}
            </div>
          )),
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.subjectsTaught'),
        dataIndex: 'subjectsTaught',
        render: (values) =>
          (values || []).map((value) => (
            <div key={value}>
              {value
                ? i18n(
                  `entities.governmentTeacherInformation.enumerators.subjectsTaught.${value}`,
                  )
                : null}
            </div>
          )),
      },
      {
        title: i18n('entities.governmentTeacherInformation.fields.contactNumber'),
        sorter: true,
        dataIndex: 'contactNumber',
      },
    
      {
        title: i18n('entities.governmentTeacherInformation.fields.disablity'),
        sorter: true,
        dataIndex: 'disablity',
        render: (value) =>
          value
            ? i18n(
                `entities.governmentTeacherInformation.enumerators.disablity.${value}`,
              )
            : null,
      },
      
    
      {
        title: '',
        dataIndex: '',
        fixed:'right',
        width: '100px',
        render: (_, record) => (
          <div className="table-actions" >
          <Dropdown
          trigger={['click']}
          menu={{
            items:[
              {
                label:i18n('common.view'),
                onClick:()=>doOpen(record.id),
                key: '1',
                icon:(<EyeOutlined rev={undefined}  />),
              },
              {
                label: (
                  <Popconfirm
                    title={i18n('common.areYouSure')}
                    onConfirm={() => doDestroy(record.id)}
                    okText={i18n('common.yes')}
                    cancelText={i18n('common.no')}
                    placement="leftBottom"
                  >
                      {i18n('common.destroy')}
                  </Popconfirm>
                ),
                disabled:!hasPermissionToDestroy,
                icon:(<DeleteOutlined rev={undefined}  />),
                key: '2',
              },
              {
                label:(<Link to={`/government-teacher-information/${record.id}/edit`}>{i18n('common.edit')}</Link>),
                key: '3',
                icon:(<EditOutlined rev={undefined}  />),
              },
            ],
          }
        }
          >
            <Button>
            {i18n('common.actions')} <DownOutlined rev={undefined}  />
            </Button>
              </Dropdown>
            
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
       <Drawer
              title={i18n('entities.governmentTeacherInformation.view.title')}
              width={1220}
              onClose={doClose}
              visible={Boolean(visible)}
              bodyStyle={{ paddingBottom: 80 }}
              /* @ts-ignore */
              extra={
                <Space>
                  <GovernmentTeacherInformationViewToolbar match={{id:visible}} record={visible} />
                </Space>
              }
              >
              <>
              <GovernmentTeacherInformationPage id={visible}/>
              </>
            </Drawer>
    </TableWrapper>
  );
};

export default GovernmentTeacherInformationListTable;
