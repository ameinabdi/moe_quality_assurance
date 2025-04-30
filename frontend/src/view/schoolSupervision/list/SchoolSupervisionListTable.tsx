import { Table, Popconfirm, Tag } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/schoolSupervision/list/schoolSupervisionListActions';
import destroyActions from 'src/modules/schoolSupervision/destroy/schoolSupervisionDestroyActions';
import selectors from 'src/modules/schoolSupervision/list/schoolSupervisionListSelectors';
import destroySelectors from 'src/modules/schoolSupervision/destroy/schoolSupervisionDestroySelectors';
import schoolSupervisionSelectors from 'src/modules/schoolSupervision/schoolSupervisionSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import ImagesListView from 'src/view/shared/list/ImagesListView';
import StateListItem from 'src/view/state/list/StateListItem';
import DistrictListItem from 'src/view/district/list/DistrictListItem';
import moment from 'moment';

const SchoolSupervisionListTable = (props) => {
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
    schoolSupervisionSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    schoolSupervisionSelectors.selectPermissionToDestroy,
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
          dataIndex: 'school',
          render: (value) =>(value?.schoolEMISNumber)
        },
          {
            title: i18n('entities.school.fields.schoolName'),
            sorter: true,
            dataIndex: 'school',
            render: (value) =>(value?.schoolName)
    
          },
          {
            title: i18n('entities.school.fields.schoolLevel'),
            dataIndex: 'school',
            render: (values) =>
              (values?.schoolLevel|| []).map((value) => (
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
            dataIndex: 'school',
            render: (value) => (value?.schoolType)
          },
          
          {
            title: 'state',
            sorter: true,
            dataIndex: 'state',
            render: (value) =>(<StateListItem value={value} />)
          },
          {
            title: 'district',
            sorter: true,
            dataIndex: 'district',
            render: (value) =>(<DistrictListItem value={value} />)
          },
      {
        title: i18n('entities.schoolSupervision.fields.dimension1'),
        sorter: false,
        dataIndex: 'dimension1',
        render: (value) =>(parseFloat(value?.dimension1Percentage || 0).toFixed(2)+" %")
      },
      {
        title: i18n('entities.schoolSupervision.fields.dimension2'),
        sorter: false,
        dataIndex: 'dimension2',
        render: (value) =>(parseFloat(value?.dimension3Rate || 0).toFixed(0)+" %")
      },
      {
        title: i18n('entities.schoolSupervision.fields.dimension3'),
        sorter: false,
        dataIndex: 'dimension3s',
        render: (values) =>(values?.map((value)=>(<Tag>{parseFloat(value?.totalpercentage || 0).toFixed(0)+" % "}</Tag>)))
      },
     
      {
        title: i18n('entities.schoolSupervision.fields.schoolStamp'),
        sorter: false,
        dataIndex: 'schoolStamp',
        render: (value) => <ImagesListView value={value} />,
      },
      {
        title: i18n('entities.schoolSupervision.fields.createdAt'),
        sorter: false,
        dataIndex: 'createdAt',
        render: (value) => moment(value).fromNow(),
      },
    {
      title: '',
      dataIndex: '',
      fixed:'right',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/school-supervision/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/school-supervision/${record.id}/edit`}>
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

export default SchoolSupervisionListTable;
