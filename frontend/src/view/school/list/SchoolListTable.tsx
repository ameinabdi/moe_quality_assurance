import { Table, Popconfirm } from 'antd';
import { i18n } from 'src/i18n';
import actions from 'src/modules/school/list/schoolListActions';
import destroyActions from 'src/modules/school/destroy/schoolDestroyActions';
import selectors from 'src/modules/school/list/schoolListSelectors';
import destroySelectors from 'src/modules/school/destroy/schoolDestroySelectors';
import schoolSelectors from 'src/modules/school/schoolSelectors';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';import { Link } from 'react-router-dom';
import TableWrapper from 'src/view/shared/styles/TableWrapper';
import ButtonLink from 'src/view/shared/styles/ButtonLink';


const SchoolListTable = (props) => {
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
    schoolSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    schoolSelectors.selectPermissionToDestroy,
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
        title: i18n('entities.school.fields.schoolName'),
        sorter: true,
        dataIndex: 'schoolName',
      },
      {
        title: i18n('entities.school.fields.schoolLevel'),
        dataIndex: 'schoolLevel',
        render: (values) =>
          (values || []).map((value) => (
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
        dataIndex: 'schoolType',
        render: (value) =>
          value
            ? i18n(
                `entities.school.enumerators.schoolType.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.school.fields.schoolPhone'),
        sorter: true,
        dataIndex: 'schoolPhone',
      },
      {
        title: i18n('entities.school.fields.schoolEmail'),
        sorter: true,
        dataIndex: 'schoolEmail',
      },
      {
        title: i18n('entities.school.fields.schoolLocation'),
        sorter: true,
        dataIndex: 'schoolLocation',
      },
      {
        title: i18n('entities.school.fields.schoolEMISNumber'),
        sorter: true,
        dataIndex: 'schoolEMISNumber',
      },
      {
        title: i18n('entities.school.fields.classes'),
        sorter: true,
        dataIndex: 'classes',
      },
      {
        title: i18n('entities.school.fields.toilets'),
        sorter: true,  
        dataIndex: 'toilets',
        align: 'right',
      },
      {
        title: i18n('entities.school.fields.maleStaff'),
        sorter: true,  
        dataIndex: 'maleStaff',
        align: 'right',
      },
      {
        title: i18n('entities.school.fields.femaleStaff'),
        sorter: true,  
        dataIndex: 'femaleStaff',
        align: 'right',
      },
      {
        title: i18n('entities.school.fields.nonTeachingFemaleStaff'),
        sorter: true,  
        dataIndex: 'nonTeachingFemaleStaff',
        align: 'right',
      },
      {
        title: i18n('entities.school.fields.nonTeachingMaleStaff'),
        sorter: true,  
        dataIndex: 'nonTeachingMaleStaff',
        align: 'right',
      },
      {
        title: i18n('entities.school.fields.headTeacher'),
        sorter: true,
        dataIndex: 'headTeacher',
      },
      {
        title: i18n('entities.school.fields.headsex'),
        sorter: true,
        dataIndex: 'headsex',
        render: (value) =>
          value
            ? i18n(
                `entities.school.enumerators.headsex.${value}`,
              )
            : null,
      },
      {
        title: i18n('entities.school.fields.headTeacherPhone'),
        sorter: true,
        dataIndex: 'headTeacherPhone',
      },
      {
        title: i18n('entities.school.fields.headTeacherLevelEduction'),
        sorter: true,
        dataIndex: 'headTeacherLevelEduction',
      },
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/school/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {hasPermissionToEdit && (
            <Link to={`/school/${record.id}/edit`}>
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

export default SchoolListTable;
