import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionGPE2/view/dimensionGPE2ViewActions';
import selectors from 'src/modules/dimensionGPE2/view/dimensionGPE2ViewSelectors';
import DimensionGPE2View from 'src/view/dimensionGPE2/view/DimensionGPE2View';
import DimensionGPE2ViewToolbar from 'src/view/dimensionGPE2/view/DimensionGPE2ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE2Page = (props) => {
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
          [i18n('entities.dimensionGPE2.menu'), '/dimension-g-p-e2'],
          [i18n('entities.dimensionGPE2.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE2.view.title')}
        </PageTitle>

        <DimensionGPE2ViewToolbar match={match} />

        <DimensionGPE2View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE2Page;
