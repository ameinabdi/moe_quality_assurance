import React from 'react';
import { i18n } from 'src/i18n';
import RegionListFilter from 'src/view/region/list/RegionListFilter';
import RegionListTable from 'src/view/region/list/RegionListTable';
import RegionListToolbar from 'src/view/region/list/RegionListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const RegionListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.region.menu')],
        ]}
      />

      <ContentWrapper>
        <TopbarWrapper>
          <PageTitle>
            {i18n('entities.region.list.title')}
          </PageTitle>

          <RegionListToolbar />
        </TopbarWrapper>
        <RegionListFilter />
        <RegionListTable />
      </ContentWrapper>
    </>
  );
};

export default RegionListPage;
