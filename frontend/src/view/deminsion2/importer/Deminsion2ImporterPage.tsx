import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/deminsion2/importer/deminsion2ImporterActions';
import fields from 'src/modules/deminsion2/importer/deminsion2ImporterFields';
import selectors from 'src/modules/deminsion2/importer/deminsion2ImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Deminsion2ImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.deminsion2.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.deminsion2.menu'), '/deminsion2'],
          [i18n('entities.deminsion2.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.deminsion2.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default Deminsion2ImportPage;
