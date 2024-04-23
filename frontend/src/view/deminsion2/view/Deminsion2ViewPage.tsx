import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/deminsion2/view/deminsion2ViewActions';
import selectors from 'src/modules/deminsion2/view/deminsion2ViewSelectors';
import Deminsion2View from 'src/view/deminsion2/view/Deminsion2View';
import Deminsion2ViewToolbar from 'src/view/deminsion2/view/Deminsion2ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Deminsion2Page = (props) => {
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
          [i18n('entities.deminsion2.menu'), '/deminsion2'],
          [i18n('entities.deminsion2.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.deminsion2.view.title')}
        </PageTitle>

        <Deminsion2ViewToolbar match={match} />

        <Deminsion2View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default Deminsion2Page;
