import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/region/view/regionViewActions';
import selectors from 'src/modules/region/view/regionViewSelectors';
import RegionView from 'src/view/region/view/RegionView';
import RegionViewToolbar from 'src/view/region/view/RegionViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const RegionPage = (props) => {
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
          [i18n('entities.region.menu'), '/region'],
          [i18n('entities.region.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.region.view.title')}
        </PageTitle>

        <RegionViewToolbar match={match} />

        <RegionView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default RegionPage;
