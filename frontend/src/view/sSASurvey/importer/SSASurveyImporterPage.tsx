import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sSASurvey/importer/sSASurveyImporterActions';
import fields from 'src/modules/sSASurvey/importer/sSASurveyImporterFields';
import selectors from 'src/modules/sSASurvey/importer/sSASurveyImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SSASurveyImportPage = (props) => {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.sSASurvey.importer.hint'),
  );
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.sSASurvey.menu'), '/s-s-a-survey'],
          [i18n('entities.sSASurvey.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.sSASurvey.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
};

export default SSASurveyImportPage;
