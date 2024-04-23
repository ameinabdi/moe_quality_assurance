import React from 'react';
import { i18n } from 'src/i18n';
import Dimension4ListFilter from 'src/view/dimension4/list/Dimension4ListFilter';
import Dimension4ListTable from 'src/view/dimension4/list/Dimension4ListTable';
import Dimension4ListToolbar from 'src/view/dimension4/list/Dimension4ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Dimension4ListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimension4.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimension4.list.title')}
        </PageTitle>

        <Dimension4ListToolbar />
        <Dimension4ListFilter />
        <Dimension4ListTable />
      </ContentWrapper>
    </>
  );
};

export default Dimension4ListPage;
