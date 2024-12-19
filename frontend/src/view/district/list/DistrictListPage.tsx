import React from 'react';
import { i18n } from 'src/i18n';
import DistrictListFilter from 'src/view/district/list/DistrictListFilter';
import DistrictListTable from 'src/view/district/list/DistrictListTable';
import DistrictListToolbar from 'src/view/district/list/DistrictListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DistrictListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.district.menu')],
        ]}
      />

      <ContentWrapper>
        <TopbarWrapper>
          <PageTitle>
            {i18n('entities.district.list.title')}
          </PageTitle>
          <DistrictListToolbar />
        </TopbarWrapper>
        <DistrictListFilter />
        <DistrictListTable />
      </ContentWrapper>
    </>
  );
};

export default DistrictListPage;
