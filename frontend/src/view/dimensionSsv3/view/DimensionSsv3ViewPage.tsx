import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dimensionSsv3/view/dimensionSsv3ViewActions';
import selectors from 'src/modules/dimensionSsv3/view/dimensionSsv3ViewSelectors';
import DimensionSsv3View from 'src/view/dimensionSsv3/view/DimensionSsv3View';
import DimensionSsv3ViewToolbar from 'src/view/dimensionSsv3/view/DimensionSsv3ViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionSsv3Page = (props) => {
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
          [i18n('entities.dimensionSsv3.menu'), '/dimension-ssv3'],
          [i18n('entities.dimensionSsv3.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.dimensionSsv3.view.title')}
        </PageTitle>

        <DimensionSsv3ViewToolbar match={match} />

        <DimensionSsv3View loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default DimensionSsv3Page;
