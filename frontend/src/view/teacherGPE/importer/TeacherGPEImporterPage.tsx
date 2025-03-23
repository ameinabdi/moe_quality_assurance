import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/teacherGPE/importer/teacherGPEImporterActions';
import fields from 'src/modules/teacherGPE/importer/teacherGPEImporterFields';
import selectors from 'src/modules/teacherGPE/importer/teacherGPEImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const TeacherGPEImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.teacherGPE.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.teacherGPE.menu'), '/teacher-g-p-e'],
          [i18n('entities.teacherGPE.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.teacherGPE.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default TeacherGPEImportPage;
