import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionGPE1/importer/dimensionGPE1ImporterActions';
import fields from 'src/modules/dimensionGPE1/importer/dimensionGPE1ImporterFields';
import selectors from 'src/modules/dimensionGPE1/importer/dimensionGPE1ImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE1ImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.dimensionGPE1.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionGPE1.menu'), '/dimension-g-p-e1'],
          [i18n('entities.dimensionGPE1.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE1.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE1ImportPage;
