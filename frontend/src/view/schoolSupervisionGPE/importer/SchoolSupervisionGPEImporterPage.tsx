import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/schoolSupervisionGPE/importer/schoolSupervisionGPEImporterActions';
import fields from 'src/modules/schoolSupervisionGPE/importer/schoolSupervisionGPEImporterFields';
import selectors from 'src/modules/schoolSupervisionGPE/importer/schoolSupervisionGPEImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SchoolSupervisionGPEImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.schoolSupervisionGPE.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.schoolSupervisionGPE.menu'), '/school-supervision-g-p-e'],
          [i18n('entities.schoolSupervisionGPE.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.schoolSupervisionGPE.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default SchoolSupervisionGPEImportPage;
