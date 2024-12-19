import React from 'react';
import { i18n } from 'src/i18n';
import DimensionSsv2ListFilter from 'src/view/dimensionSsv2/list/DimensionSsv2ListFilter';
import DimensionSsv2ListTable from 'src/view/dimensionSsv2/list/DimensionSsv2ListTable';
import DimensionSsv2ListToolbar from 'src/view/dimensionSsv2/list/DimensionSsv2ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionSsv2ListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionSsv2.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionSsv2.list.title')}
        </PageTitle>

        <DimensionSsv2ListToolbar />
        <DimensionSsv2ListFilter />
        <DimensionSsv2ListTable />
      </ContentWrapper>
    </>
  );
};

export default DimensionSsv2ListPage;
