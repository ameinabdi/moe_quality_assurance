import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/subAnswer/importer/subAnswerImporterActions';
import fields from 'src/modules/subAnswer/importer/subAnswerImporterFields';
import selectors from 'src/modules/subAnswer/importer/subAnswerImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SubAnswerImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.subAnswer.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.subAnswer.menu'), '/sub-answer'],
          [i18n('entities.subAnswer.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.subAnswer.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default SubAnswerImportPage;
