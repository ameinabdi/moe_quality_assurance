import React from 'react';
import { i18n } from 'src/i18n';
import TeacherGPEListFilter from 'src/view/teacherGPE/list/TeacherGPEListFilter';
import TeacherGPEListTable from 'src/view/teacherGPE/list/TeacherGPEListTable';
import TeacherGPEListToolbar from 'src/view/teacherGPE/list/TeacherGPEListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const TeacherGPEListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.teacherGPE.menu')],
        ]}
      />

      <ContentWrapper>
        <TopbarWrapper>
          <PageTitle>
            {i18n('entities.teacherGPE.list.title')}
          </PageTitle>

          <TeacherGPEListToolbar />
        </TopbarWrapper>
       
        <TeacherGPEListFilter />
        <TeacherGPEListTable />
      </ContentWrapper>
    </>
  );
};

export default TeacherGPEListPage;
