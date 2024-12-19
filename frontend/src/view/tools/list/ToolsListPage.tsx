import React from 'react';
import { i18n } from 'src/i18n';
import ToolsListFilter from 'src/view/tools/list/ToolsListFilter';
import ToolsListTable from 'src/view/tools/list/ToolsListTable';
import ToolsListToolbar from 'src/view/tools/list/ToolsListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const ToolsListPage = (props) => {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tools.menu')],
        ]}
      />

      <ContentWrapper>
        <TopbarWrapper>
        <PageTitle>
          {i18n('entities.tools.list.title')}
        </PageTitle>

        <ToolsListToolbar />
        </TopbarWrapper>
        <ToolsListFilter />
        <ToolsListTable />
      </ContentWrapper>
    </>
  );
};

export default ToolsListPage;
