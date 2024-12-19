import React from 'react';
import { i18n } from 'src/i18n';
import DimensionSsv1ListFilter from 'src/view/dimensionSsv1/list/DimensionSsv1ListFilter';
import DimensionSsv1ListTable from 'src/view/dimensionSsv1/list/DimensionSsv1ListTable';
import DimensionSsv1ListToolbar from 'src/view/dimensionSsv1/list/DimensionSsv1ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionSsv1ListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionSsv1.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionSsv1.list.title')}
        </PageTitle>

        <DimensionSsv1ListToolbar />
        <DimensionSsv1ListFilter />
        <DimensionSsv1ListTable />
      </ContentWrapper>
    </>
  );
};

export default DimensionSsv1ListPage;
