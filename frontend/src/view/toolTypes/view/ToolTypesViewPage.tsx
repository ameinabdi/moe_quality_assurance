import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/toolTypes/view/toolTypesViewActions';
import selectors from 'src/modules/toolTypes/view/toolTypesViewSelectors';
import ToolTypesView from 'src/view/toolTypes/view/ToolTypesView';
import ToolTypesViewToolbar from 'src/view/toolTypes/view/ToolTypesViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const ToolTypesPage = (props) => {
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
          [i18n('entities.toolTypes.menu'), '/tool-types'],
          [i18n('entities.toolTypes.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.toolTypes.view.title')}
        </PageTitle>

        <ToolTypesViewToolbar match={match} />

        <ToolTypesView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default ToolTypesPage;
