import React from 'react';
import { i18n } from 'src/i18n';
import DimensionGPE5ListFilter from 'src/view/dimensionGPE5/list/DimensionGPE5ListFilter';
import DimensionGPE5ListTable from 'src/view/dimensionGPE5/list/DimensionGPE5ListTable';
import DimensionGPE5ListToolbar from 'src/view/dimensionGPE5/list/DimensionGPE5ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE5ListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionGPE5.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE5.list.title')}
        </PageTitle>

        <DimensionGPE5ListToolbar />
        <DimensionGPE5ListFilter />
        <DimensionGPE5ListTable />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE5ListPage;
