import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/assessmentAnswer/importer/assessmentAnswerImporterActions';
import fields from 'src/modules/assessmentAnswer/importer/assessmentAnswerImporterFields';
import selectors from 'src/modules/assessmentAnswer/importer/assessmentAnswerImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AssessmentAnswerImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.assessmentAnswer.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.assessmentAnswer.menu'), '/assessment-answer'],
          [i18n('entities.assessmentAnswer.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.assessmentAnswer.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default AssessmentAnswerImportPage;
