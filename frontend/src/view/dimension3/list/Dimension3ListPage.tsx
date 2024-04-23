import React from 'react';
import { i18n } from 'src/i18n';
import Dimension3ListFilter from 'src/view/dimension3/list/Dimension3ListFilter';
import Dimension3ListTable from 'src/view/dimension3/list/Dimension3ListTable';
import Dimension3ListToolbar from 'src/view/dimension3/list/Dimension3ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Dimension3ListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimension3.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimension3.list.title')}
        </PageTitle>

        <Dimension3ListToolbar />
        <Dimension3ListFilter />
        <Dimension3ListTable />
      </ContentWrapper>
    </>
  );
};

export default Dimension3ListPage;
