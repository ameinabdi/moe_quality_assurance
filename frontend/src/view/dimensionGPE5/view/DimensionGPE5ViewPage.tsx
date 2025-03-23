import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionGPE5/view/dimensionGPE5ViewActions';
import selectors from 'src/modules/dimensionGPE5/view/dimensionGPE5ViewSelectors';
import DimensionGPE5View from 'src/view/dimensionGPE5/view/DimensionGPE5View';
import DimensionGPE5ViewToolbar from 'src/view/dimensionGPE5/view/DimensionGPE5ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE5Page = (props) => {
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
          [i18n('entities.dimensionGPE5.menu'), '/dimension-g-p-e5'],
          [i18n('entities.dimensionGPE5.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE5.view.title')}
        </PageTitle>

        <DimensionGPE5ViewToolbar match={match} />

        <DimensionGPE5View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE5Page;
