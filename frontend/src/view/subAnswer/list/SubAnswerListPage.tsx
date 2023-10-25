import React from 'react';
import { i18n } from 'src/i18n';
import SubAnswerListFilter from 'src/view/subAnswer/list/SubAnswerListFilter';
import SubAnswerListTable from 'src/view/subAnswer/list/SubAnswerListTable';
import SubAnswerListToolbar from 'src/view/subAnswer/list/SubAnswerListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SubAnswerListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.subAnswer.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.subAnswer.list.title')}
        </PageTitle>

        <SubAnswerListToolbar />
        <SubAnswerListFilter />
        <SubAnswerListTable />
      </ContentWrapper>
    </>
  );
};

export default SubAnswerListPage;
