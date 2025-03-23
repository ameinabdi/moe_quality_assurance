import React from 'react';
import { i18n } from 'src/i18n';
import SchoolSupervisionGPEListFilter from 'src/view/schoolSupervisionGPE/list/SchoolSupervisionGPEListFilter';
import SchoolSupervisionGPEListTable from 'src/view/schoolSupervisionGPE/list/SchoolSupervisionGPEListTable';
import SchoolSupervisionGPEListToolbar from 'src/view/schoolSupervisionGPE/list/SchoolSupervisionGPEListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const SchoolSupervisionGPEListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.schoolSupervisionGPE.menu')],
        ]}
      />

      <ContentWrapper>
        <TopbarWrapper>
          <PageTitle>
            {i18n('entities.schoolSupervisionGPE.list.title')}
          </PageTitle>

          <SchoolSupervisionGPEListToolbar />
        </TopbarWrapper>
        
        <SchoolSupervisionGPEListFilter />
        <SchoolSupervisionGPEListTable />
      </ContentWrapper>
    </>
  );
};

export default SchoolSupervisionGPEListPage;
