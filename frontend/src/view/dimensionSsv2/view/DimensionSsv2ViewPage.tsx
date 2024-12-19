import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionSsv2/view/dimensionSsv2ViewActions';
import selectors from 'src/modules/dimensionSsv2/view/dimensionSsv2ViewSelectors';
import DimensionSsv2View from 'src/view/dimensionSsv2/view/DimensionSsv2View';
import DimensionSsv2ViewToolbar from 'src/view/dimensionSsv2/view/DimensionSsv2ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionSsv2Page = (props) => {
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
          [i18n('entities.dimensionSsv2.menu'), '/dimension-ssv2'],
          [i18n('entities.dimensionSsv2.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionSsv2.view.title')}
        </PageTitle>

        <DimensionSsv2ViewToolbar match={match} />

        <DimensionSsv2View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default DimensionSsv2Page;
