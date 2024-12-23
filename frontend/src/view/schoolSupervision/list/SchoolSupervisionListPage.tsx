import React from 'react';
import { i18n } from 'src/i18n';
import SchoolSupervisionListFilter from 'src/view/schoolSupervision/list/SchoolSupervisionListFilter';
import SchoolSupervisionListTable from 'src/view/schoolSupervision/list/SchoolSupervisionListTable';
import SchoolSupervisionListToolbar from 'src/view/schoolSupervision/list/SchoolSupervisionListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const SchoolSupervisionListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.schoolSupervision.menu')],
        ]}
      />

      <ContentWrapper>
        <TopbarWrapper>
          <PageTitle>
            {i18n('entities.schoolSupervision.list.title')}
          </PageTitle>
          <SchoolSupervisionListToolbar />
        </TopbarWrapper>
        <SchoolSupervisionListFilter />
        <SchoolSupervisionListTable />
      </ContentWrapper>
    </>
  );
};

export default SchoolSupervisionListPage;
