import React from 'react';
import { i18n } from 'src/i18n';
import SubQuestionListFilter from 'src/view/subQuestion/list/SubQuestionListFilter';
import SubQuestionListTable from 'src/view/subQuestion/list/SubQuestionListTable';
import SubQuestionListToolbar from 'src/view/subQuestion/list/SubQuestionListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SubQuestionListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.subQuestion.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.subQuestion.list.title')}
        </PageTitle>

        <SubQuestionListToolbar />
        <SubQuestionListFilter />
        <SubQuestionListTable />
      </ContentWrapper>
    </>
  );
};

export default SubQuestionListPage;
