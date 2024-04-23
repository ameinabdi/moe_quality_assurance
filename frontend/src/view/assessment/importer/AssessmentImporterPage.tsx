import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/assessment/importer/assessmentImporterActions';
import fields from 'src/modules/assessment/importer/assessmentImporterFields';
import selectors from 'src/modules/assessment/importer/assessmentImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AssessmentImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.assessment.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.assessment.menu'), '/assessment'],
          [i18n('entities.assessment.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.assessment.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default AssessmentImportPage;
