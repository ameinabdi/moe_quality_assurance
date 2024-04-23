import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimension4/view/dimension4ViewActions';
import selectors from 'src/modules/dimension4/view/dimension4ViewSelectors';
import Dimension4View from 'src/view/dimension4/view/Dimension4View';
import Dimension4ViewToolbar from 'src/view/dimension4/view/Dimension4ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Dimension4Page = (props) => {
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
          [i18n('entities.dimension4.menu'), '/dimension4'],
          [i18n('entities.dimension4.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimension4.view.title')}
        </PageTitle>

        <Dimension4ViewToolbar match={match} />

        <Dimension4View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default Dimension4Page;
