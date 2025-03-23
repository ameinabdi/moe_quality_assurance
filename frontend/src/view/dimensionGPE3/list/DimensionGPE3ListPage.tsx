import React from 'react';
import { i18n } from 'src/i18n';
import DimensionGPE3ListFilter from 'src/view/dimensionGPE3/list/DimensionGPE3ListFilter';
import DimensionGPE3ListTable from 'src/view/dimensionGPE3/list/DimensionGPE3ListTable';
import DimensionGPE3ListToolbar from 'src/view/dimensionGPE3/list/DimensionGPE3ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE3ListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionGPE3.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE3.list.title')}
        </PageTitle>

        <DimensionGPE3ListToolbar />
        <DimensionGPE3ListFilter />
        <DimensionGPE3ListTable />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE3ListPage;
