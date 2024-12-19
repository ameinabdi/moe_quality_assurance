import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/tools/importer/toolsImporterActions';
import fields from 'src/modules/tools/importer/toolsImporterFields';
import selectors from 'src/modules/tools/importer/toolsImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ToolsImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.tools.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tools.menu'), '/tools'],
          [i18n('entities.tools.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.tools.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default ToolsImportPage;
