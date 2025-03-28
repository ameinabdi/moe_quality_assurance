import { Table, Popconfirm } from 'antd';
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
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import SchoolListItem from 'src/view/school/list/SchoolListItem';
import RegionListItem from 'src/view/region/list/RegionListItem';
import DistrictListItem from 'src/view/district/list/DistrictListItem';
import StateListItem from 'src/view/state/list/StateListItem';

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
        title: i18n('entities.teacherGPE.fields.school'),
        sorter: false,
        dataIndex: 'school',
        render: (value) => <SchoolListItem value={value} />,
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
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/teacher-g-p-e/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/teacher-g-p-e/${record.id}/edit`}>
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

export default TeacherGPEListTable;
