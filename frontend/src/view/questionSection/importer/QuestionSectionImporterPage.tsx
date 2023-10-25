import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/questionSection/importer/questionSectionImporterActions';
import fields from 'src/modules/questionSection/importer/questionSectionImporterFields';
import selectors from 'src/modules/questionSection/importer/questionSectionImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const QuestionSectionImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.questionSection.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.questionSection.menu'), '/question-section'],
          [i18n('entities.questionSection.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.questionSection.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default QuestionSectionImportPage;
