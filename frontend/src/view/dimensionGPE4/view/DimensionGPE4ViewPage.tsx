import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionGPE4/view/dimensionGPE4ViewActions';
import selectors from 'src/modules/dimensionGPE4/view/dimensionGPE4ViewSelectors';
import DimensionGPE4View from 'src/view/dimensionGPE4/view/DimensionGPE4View';
import DimensionGPE4ViewToolbar from 'src/view/dimensionGPE4/view/DimensionGPE4ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE4Page = (props) => {
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
          [i18n('entities.dimensionGPE4.menu'), '/dimension-g-p-e4'],
          [i18n('entities.dimensionGPE4.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE4.view.title')}
        </PageTitle>

        <DimensionGPE4ViewToolbar match={match} />

        <DimensionGPE4View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE4Page;
