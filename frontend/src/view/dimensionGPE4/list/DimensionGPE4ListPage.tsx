import React from 'react';
import { i18n } from 'src/i18n';
import DimensionGPE4ListFilter from 'src/view/dimensionGPE4/list/DimensionGPE4ListFilter';
import DimensionGPE4ListTable from 'src/view/dimensionGPE4/list/DimensionGPE4ListTable';
import DimensionGPE4ListToolbar from 'src/view/dimensionGPE4/list/DimensionGPE4ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE4ListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionGPE4.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE4.list.title')}
        </PageTitle>

        <DimensionGPE4ListToolbar />
        <DimensionGPE4ListFilter />
        <DimensionGPE4ListTable />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE4ListPage;
