import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimension5/importer/dimension5ImporterActions';
import fields from 'src/modules/dimension5/importer/dimension5ImporterFields';
import selectors from 'src/modules/dimension5/importer/dimension5ImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Dimension5ImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.dimension5.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimension5.menu'), '/dimension5'],
          [i18n('entities.dimension5.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimension5.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default Dimension5ImportPage;
