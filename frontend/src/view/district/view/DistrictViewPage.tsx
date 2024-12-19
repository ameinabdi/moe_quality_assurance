import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/district/view/districtViewActions';
import selectors from 'src/modules/district/view/districtViewSelectors';
import DistrictView from 'src/view/district/view/DistrictView';
import DistrictViewToolbar from 'src/view/district/view/DistrictViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DistrictPage = (props) => {
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
          [i18n('entities.district.menu'), '/district'],
          [i18n('entities.district.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.district.view.title')}
        </PageTitle>

        <DistrictViewToolbar match={match} />

        <DistrictView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default DistrictPage;
