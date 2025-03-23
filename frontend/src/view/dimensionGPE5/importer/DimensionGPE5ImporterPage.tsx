import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionGPE5/importer/dimensionGPE5ImporterActions';
import fields from 'src/modules/dimensionGPE5/importer/dimensionGPE5ImporterFields';
import selectors from 'src/modules/dimensionGPE5/importer/dimensionGPE5ImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE5ImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.dimensionGPE5.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionGPE5.menu'), '/dimension-g-p-e5'],
          [i18n('entities.dimensionGPE5.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE5.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE5ImportPage;
