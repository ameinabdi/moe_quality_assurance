import React from 'react';
import { i18n } from 'src/i18n';
import AssessmentAnswerListFilter from 'src/view/assessmentAnswer/list/AssessmentAnswerListFilter';
import AssessmentAnswerListTable from 'src/view/assessmentAnswer/list/AssessmentAnswerListTable';
import AssessmentAnswerListToolbar from 'src/view/assessmentAnswer/list/AssessmentAnswerListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AssessmentAnswerListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.assessmentAnswer.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.assessmentAnswer.list.title')}
        </PageTitle>

        <AssessmentAnswerListToolbar />
        <AssessmentAnswerListFilter />
        <AssessmentAnswerListTable />
      </ContentWrapper>
    </>
  );
};

export default AssessmentAnswerListPage;
