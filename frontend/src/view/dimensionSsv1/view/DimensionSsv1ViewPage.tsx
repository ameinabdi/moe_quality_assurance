import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionSsv1/view/dimensionSsv1ViewActions';
import selectors from 'src/modules/dimensionSsv1/view/dimensionSsv1ViewSelectors';
import DimensionSsv1View from 'src/view/dimensionSsv1/view/DimensionSsv1View';
import DimensionSsv1ViewToolbar from 'src/view/dimensionSsv1/view/DimensionSsv1ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionSsv1Page = (props) => {
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
          [i18n('entities.dimensionSsv1.menu'), '/dimension-ssv1'],
          [i18n('entities.dimensionSsv1.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionSsv1.view.title')}
        </PageTitle>

        <DimensionSsv1ViewToolbar match={match} />

        <DimensionSsv1View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default DimensionSsv1Page;
