import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimension5/view/dimension5ViewActions';
import selectors from 'src/modules/dimension5/view/dimension5ViewSelectors';
import Dimension5View from 'src/view/dimension5/view/Dimension5View';
import Dimension5ViewToolbar from 'src/view/dimension5/view/Dimension5ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Dimension5Page = (props) => {
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
          [i18n('entities.dimension5.menu'), '/dimension5'],
          [i18n('entities.dimension5.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimension5.view.title')}
        </PageTitle>

        <Dimension5ViewToolbar match={match} />

        <Dimension5View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default Dimension5Page;
