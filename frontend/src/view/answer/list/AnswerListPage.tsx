import React from 'react';
import { i18n } from 'src/i18n';
import AnswerListFilter from 'src/view/answer/list/AnswerListFilter';
import AnswerListTable from 'src/view/answer/list/AnswerListTable';
import AnswerListToolbar from 'src/view/answer/list/AnswerListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AnswerListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.answer.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.answer.list.title')}
        </PageTitle>

        <AnswerListToolbar />
        <AnswerListFilter />
        <AnswerListTable />
      </ContentWrapper>
    </>
  );
};

export default AnswerListPage;
