import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionGPE1/view/dimensionGPE1ViewActions';
import selectors from 'src/modules/dimensionGPE1/view/dimensionGPE1ViewSelectors';
import DimensionGPE1View from 'src/view/dimensionGPE1/view/DimensionGPE1View';
import DimensionGPE1ViewToolbar from 'src/view/dimensionGPE1/view/DimensionGPE1ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE1Page = (props) => {
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
          [i18n('entities.dimensionGPE1.menu'), '/dimension-g-p-e1'],
          [i18n('entities.dimensionGPE1.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE1.view.title')}
        </PageTitle>

        <DimensionGPE1ViewToolbar match={match} />

        <DimensionGPE1View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE1Page;
