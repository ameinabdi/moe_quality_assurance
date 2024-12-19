import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/state/view/stateViewActions';
import selectors from 'src/modules/state/view/stateViewSelectors';
import StateView from 'src/view/state/view/StateView';
import StateViewToolbar from 'src/view/state/view/StateViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const StatePage = (props) => {
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
          [i18n('entities.state.menu'), '/state'],
          [i18n('entities.state.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.state.view.title')}
        </PageTitle>

        <StateViewToolbar match={match} />

        <StateView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default StatePage;
