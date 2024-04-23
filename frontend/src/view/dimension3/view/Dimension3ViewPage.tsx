import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimension3/view/dimension3ViewActions';
import selectors from 'src/modules/dimension3/view/dimension3ViewSelectors';
import Dimension3View from 'src/view/dimension3/view/Dimension3View';
import Dimension3ViewToolbar from 'src/view/dimension3/view/Dimension3ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const Dimension3Page = (props) => {
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
          [i18n('entities.dimension3.menu'), '/dimension3'],
          [i18n('entities.dimension3.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimension3.view.title')}
        </PageTitle>

        <Dimension3ViewToolbar match={match} />

        <Dimension3View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default Dimension3Page;
