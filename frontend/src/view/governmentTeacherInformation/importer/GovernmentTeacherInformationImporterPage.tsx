import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/governmentTeacherInformation/importer/governmentTeacherInformationImporterActions';
import fields from 'src/modules/governmentTeacherInformation/importer/governmentTeacherInformationImporterFields';
import selectors from 'src/modules/governmentTeacherInformation/importer/governmentTeacherInformationImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const GovernmentTeacherInformationImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.governmentTeacherInformation.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.governmentTeacherInformation.menu'), '/government-teacher-information'],
          [i18n('entities.governmentTeacherInformation.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.governmentTeacherInformation.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default GovernmentTeacherInformationImportPage;
