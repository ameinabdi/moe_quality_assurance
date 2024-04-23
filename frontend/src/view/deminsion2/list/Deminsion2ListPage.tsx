import React from 'react';
import { i18n } from 'src/i18n';
import Deminsion2ListFilter from 'src/view/deminsion2/list/Deminsion2ListFilter';
import Deminsion2ListTable from 'src/view/deminsion2/list/Deminsion2ListTable';
import Deminsion2ListToolbar from 'src/view/deminsion2/list/Deminsion2ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Deminsion2ListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.deminsion2.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.deminsion2.list.title')}
        </PageTitle>

        <Deminsion2ListToolbar />
        <Deminsion2ListFilter />
        <Deminsion2ListTable />
      </ContentWrapper>
    </>
  );
};

export default Deminsion2ListPage;
