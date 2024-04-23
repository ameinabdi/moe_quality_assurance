import React from 'react';
import { i18n } from 'src/i18n';
import AssessmentListFilter from 'src/view/assessment/list/AssessmentListFilter';
import AssessmentListTable from 'src/view/assessment/list/AssessmentListTable';
import AssessmentListToolbar from 'src/view/assessment/list/AssessmentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AssessmentListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.assessment.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.assessment.list.title')}
        </PageTitle>

        <AssessmentListToolbar />
        <AssessmentListFilter />
        <AssessmentListTable />
      </ContentWrapper>
    </>
  );
};

export default AssessmentListPage;
