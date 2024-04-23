import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/school/view/schoolViewActions';
import selectors from 'src/modules/school/view/schoolViewSelectors';
import SchoolView from 'src/view/school/view/SchoolView';
import SchoolViewToolbar from 'src/view/school/view/SchoolViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SchoolPage = (props) => {
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
          [i18n('entities.school.menu'), '/school'],
          [i18n('entities.school.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.school.view.title')}
        </PageTitle>

        <SchoolViewToolbar match={match} />

        <SchoolView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default SchoolPage;
