import React from 'react';
import { i18n } from 'src/i18n';
import Dimension5ListFilter from 'src/view/dimension5/list/Dimension5ListFilter';
import Dimension5ListTable from 'src/view/dimension5/list/Dimension5ListTable';
import Dimension5ListToolbar from 'src/view/dimension5/list/Dimension5ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Dimension5ListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimension5.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimension5.list.title')}
        </PageTitle>

        <Dimension5ListToolbar />
        <Dimension5ListFilter />
        <Dimension5ListTable />
      </ContentWrapper>
    </>
  );
};

export default Dimension5ListPage;
