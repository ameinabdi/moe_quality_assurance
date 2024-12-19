import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionSsv2/importer/dimensionSsv2ImporterActions';
import fields from 'src/modules/dimensionSsv2/importer/dimensionSsv2ImporterFields';
import selectors from 'src/modules/dimensionSsv2/importer/dimensionSsv2ImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionSsv2ImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.dimensionSsv2.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionSsv2.menu'), '/dimension-ssv2'],
          [i18n('entities.dimensionSsv2.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionSsv2.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default DimensionSsv2ImportPage;
