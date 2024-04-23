import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimension1/importer/dimension1ImporterActions';
import fields from 'src/modules/dimension1/importer/dimension1ImporterFields';
import selectors from 'src/modules/dimension1/importer/dimension1ImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Dimension1ImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.dimension1.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimension1.menu'), '/dimension1'],
          [i18n('entities.dimension1.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimension1.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default Dimension1ImportPage;
