import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionSsv1/importer/dimensionSsv1ImporterActions';
import fields from 'src/modules/dimensionSsv1/importer/dimensionSsv1ImporterFields';
import selectors from 'src/modules/dimensionSsv1/importer/dimensionSsv1ImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionSsv1ImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.dimensionSsv1.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionSsv1.menu'), '/dimension-ssv1'],
          [i18n('entities.dimensionSsv1.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionSsv1.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default DimensionSsv1ImportPage;
