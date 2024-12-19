import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/toolTypes/importer/toolTypesImporterActions';
import fields from 'src/modules/toolTypes/importer/toolTypesImporterFields';
import selectors from 'src/modules/toolTypes/importer/toolTypesImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ToolTypesImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.toolTypes.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.toolTypes.menu'), '/tool-types'],
          [i18n('entities.toolTypes.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.toolTypes.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default ToolTypesImportPage;
