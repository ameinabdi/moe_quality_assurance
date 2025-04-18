import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/tools/view/toolsViewActions';
import selectors from 'src/modules/tools/view/toolsViewSelectors';
import ToolsView from 'src/view/tools/view/ToolsView';
import ToolsViewToolbar from 'src/view/tools/view/ToolsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ToolsPage = (props) => {
  const dispatch = useAppDispatch();
  const match = useParams();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tools.menu'), '/tools'],
          [i18n('entities.tools.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.tools.view.title')}
        </PageTitle>

        <ToolsViewToolbar match={match} />

        <ToolsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default ToolsPage;
