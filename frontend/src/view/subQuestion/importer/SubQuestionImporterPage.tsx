import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/subQuestion/importer/subQuestionImporterActions';
import fields from 'src/modules/subQuestion/importer/subQuestionImporterFields';
import selectors from 'src/modules/subQuestion/importer/subQuestionImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SubQuestionImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.subQuestion.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.subQuestion.menu'), '/sub-question'],
          [i18n('entities.subQuestion.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.subQuestion.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default SubQuestionImportPage;
