import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimension1/view/dimension1ViewActions';
import selectors from 'src/modules/dimension1/view/dimension1ViewSelectors';
import Dimension1View from 'src/view/dimension1/view/Dimension1View';
import Dimension1ViewToolbar from 'src/view/dimension1/view/Dimension1ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Dimension1Page = (props) => {
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
          [i18n('entities.dimension1.menu'), '/dimension1'],
          [i18n('entities.dimension1.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimension1.view.title')}
        </PageTitle>

        <Dimension1ViewToolbar match={match} />

        <Dimension1View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default Dimension1Page;
