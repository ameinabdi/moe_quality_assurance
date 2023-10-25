import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/answer/importer/answerImporterActions';
import fields from 'src/modules/answer/importer/answerImporterFields';
import selectors from 'src/modules/answer/importer/answerImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AnswerImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.answer.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.answer.menu'), '/answer'],
          [i18n('entities.answer.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.answer.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default AnswerImportPage;
