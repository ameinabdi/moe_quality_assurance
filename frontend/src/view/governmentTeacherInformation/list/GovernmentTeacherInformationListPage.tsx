import React from 'react';
import { i18n } from 'src/i18n';
import GovernmentTeacherInformationListFilter from 'src/view/governmentTeacherInformation/list/GovernmentTeacherInformationListFilter';
import GovernmentTeacherInformationListTable from 'src/view/governmentTeacherInformation/list/GovernmentTeacherInformationListTable';
import GovernmentTeacherInformationListToolbar from 'src/view/governmentTeacherInformation/list/GovernmentTeacherInformationListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const GovernmentTeacherInformationListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.governmentTeacherInformation.menu')],
        ]}
      />

      <ContentWrapper>
        <TopbarWrapper>
          <PageTitle>
            {i18n('entities.governmentTeacherInformation.list.title')}
          </PageTitle>

          <GovernmentTeacherInformationListToolbar />
        </TopbarWrapper>
        
        <GovernmentTeacherInformationListFilter />
        <GovernmentTeacherInformationListTable />
      </ContentWrapper>
    </>
  );
};

export default GovernmentTeacherInformationListPage;
