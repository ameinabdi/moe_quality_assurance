import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionGPE2/importer/dimensionGPE2ImporterActions';
import fields from 'src/modules/dimensionGPE2/importer/dimensionGPE2ImporterFields';
import selectors from 'src/modules/dimensionGPE2/importer/dimensionGPE2ImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE2ImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.dimensionGPE2.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionGPE2.menu'), '/dimension-g-p-e2'],
          [i18n('entities.dimensionGPE2.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE2.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE2ImportPage;
