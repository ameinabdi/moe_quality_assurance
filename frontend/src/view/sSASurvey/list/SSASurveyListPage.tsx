import React from 'react';
import { i18n } from 'src/i18n';
import SSASurveyListFilter from 'src/view/sSASurvey/list/SSASurveyListFilter';
import SSASurveyListTable from 'src/view/sSASurvey/list/SSASurveyListTable';
import SSASurveyListToolbar from 'src/view/sSASurvey/list/SSASurveyListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const SSASurveyListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.sSASurvey.menu')],
        ]}
      />

      <ContentWrapper>
        <TopbarWrapper>
          <PageTitle>
            {i18n('entities.sSASurvey.list.title')}
          </PageTitle>

          <SSASurveyListToolbar />
        </TopbarWrapper>
        <SSASurveyListFilter />
        <SSASurveyListTable />
      </ContentWrapper>
    </>
  );
};

export default SSASurveyListPage;
