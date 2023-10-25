import React from 'react';
import { i18n } from 'src/i18n';
import QuestionSectionListFilter from 'src/view/questionSection/list/QuestionSectionListFilter';
import QuestionSectionListTable from 'src/view/questionSection/list/QuestionSectionListTable';
import QuestionSectionListToolbar from 'src/view/questionSection/list/QuestionSectionListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const QuestionSectionListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.questionSection.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.questionSection.list.title')}
        </PageTitle>

        <QuestionSectionListToolbar />
        <QuestionSectionListFilter />
        <QuestionSectionListTable />
      </ContentWrapper>
    </>
  );
};

export default QuestionSectionListPage;
