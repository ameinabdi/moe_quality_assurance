import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionSsv3/importer/dimensionSsv3ImporterActions';
import fields from 'src/modules/dimensionSsv3/importer/dimensionSsv3ImporterFields';
import selectors from 'src/modules/dimensionSsv3/importer/dimensionSsv3ImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionSsv3ImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.dimensionSsv3.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimensionSsv3.menu'), '/dimension-ssv3'],
          [i18n('entities.dimensionSsv3.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionSsv3.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default DimensionSsv3ImportPage;
