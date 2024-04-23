import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimension3/importer/dimension3ImporterActions';
import fields from 'src/modules/dimension3/importer/dimension3ImporterFields';
import selectors from 'src/modules/dimension3/importer/dimension3ImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Dimension3ImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.dimension3.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.dimension3.menu'), '/dimension3'],
          [i18n('entities.dimension3.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimension3.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default Dimension3ImportPage;
