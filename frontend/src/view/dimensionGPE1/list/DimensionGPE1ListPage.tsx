import React from 'react';
import { i18n } from 'src/i18n';
import DimensionGPE1ListFilter from 'src/view/dimensionGPE1/list/DimensionGPE1ListFilter';
import DimensionGPE1ListTable from 'src/view/dimensionGPE1/list/DimensionGPE1ListTable';
import DimensionGPE1ListToolbar from 'src/view/dimensionGPE1/list/DimensionGPE1ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE1ListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionGPE1.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE1.list.title')}
        </PageTitle>

        <DimensionGPE1ListToolbar />
        <DimensionGPE1ListFilter />
        <DimensionGPE1ListTable />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE1ListPage;
