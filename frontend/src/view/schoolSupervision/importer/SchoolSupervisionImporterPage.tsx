import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/schoolSupervision/importer/schoolSupervisionImporterActions';
import fields from 'src/modules/schoolSupervision/importer/schoolSupervisionImporterFields';
import selectors from 'src/modules/schoolSupervision/importer/schoolSupervisionImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SchoolSupervisionImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.schoolSupervision.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.schoolSupervision.menu'), '/school-supervision'],
          [i18n('entities.schoolSupervision.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.schoolSupervision.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default SchoolSupervisionImportPage;
