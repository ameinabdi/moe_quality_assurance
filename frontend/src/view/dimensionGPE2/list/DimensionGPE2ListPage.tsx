import React from 'react';
import { i18n } from 'src/i18n';
import DimensionGPE2ListFilter from 'src/view/dimensionGPE2/list/DimensionGPE2ListFilter';
import DimensionGPE2ListTable from 'src/view/dimensionGPE2/list/DimensionGPE2ListTable';
import DimensionGPE2ListToolbar from 'src/view/dimensionGPE2/list/DimensionGPE2ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE2ListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionGPE2.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE2.list.title')}
        </PageTitle>

        <DimensionGPE2ListToolbar />
        <DimensionGPE2ListFilter />
        <DimensionGPE2ListTable />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE2ListPage;
