import React from 'react';
import { i18n } from 'src/i18n';
import ToolTypesListFilter from 'src/view/toolTypes/list/ToolTypesListFilter';
import ToolTypesListTable from 'src/view/toolTypes/list/ToolTypesListTable';
import ToolTypesListToolbar from 'src/view/toolTypes/list/ToolTypesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const ToolTypesListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.toolTypes.menu')],
        ]}
      />

      <ContentWrapper>
      <TopbarWrapper>
        <PageTitle>
          {i18n('entities.toolTypes.list.title')}
        </PageTitle>
        <ToolTypesListToolbar />
      </TopbarWrapper>
        <ToolTypesListFilter />
        <ToolTypesListTable />
      </ContentWrapper>
    </>
  );
};

export default ToolTypesListPage;
