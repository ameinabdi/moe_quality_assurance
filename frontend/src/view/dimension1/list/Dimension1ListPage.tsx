import React from 'react';
import { i18n } from 'src/i18n';
import Dimension1ListFilter from 'src/view/dimension1/list/Dimension1ListFilter';
import Dimension1ListTable from 'src/view/dimension1/list/Dimension1ListTable';
import Dimension1ListToolbar from 'src/view/dimension1/list/Dimension1ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Dimension1ListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimension1.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimension1.list.title')}
        </PageTitle>

        <Dimension1ListToolbar />
        <Dimension1ListFilter />
        <Dimension1ListTable />
      </ContentWrapper>
    </>
  );
};

export default Dimension1ListPage;
