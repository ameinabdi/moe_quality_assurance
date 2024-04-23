import React from 'react';
import { i18n } from 'src/i18n';
import QuestionListFilter from 'src/view/question/list/QuestionListFilter';
import QuestionListTable from 'src/view/question/list/QuestionListTable';
import QuestionListToolbar from 'src/view/question/list/QuestionListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const QuestionListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.question.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.question.list.title')}
        </PageTitle>

        <QuestionListToolbar />
        <QuestionListFilter />
        <QuestionListTable />
      </ContentWrapper>
    </>
  );
};

export default QuestionListPage;
