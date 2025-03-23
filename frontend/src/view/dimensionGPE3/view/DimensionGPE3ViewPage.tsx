import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionGPE3/view/dimensionGPE3ViewActions';
import selectors from 'src/modules/dimensionGPE3/view/dimensionGPE3ViewSelectors';
import DimensionGPE3View from 'src/view/dimensionGPE3/view/DimensionGPE3View';
import DimensionGPE3ViewToolbar from 'src/view/dimensionGPE3/view/DimensionGPE3ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionGPE3Page = (props) => {
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
          [i18n('entities.dimensionGPE3.menu'), '/dimension-g-p-e3'],
          [i18n('entities.dimensionGPE3.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionGPE3.view.title')}
        </PageTitle>

        <DimensionGPE3ViewToolbar match={match} />

        <DimensionGPE3View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default DimensionGPE3Page;
