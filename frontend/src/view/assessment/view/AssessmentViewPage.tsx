import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/assessment/view/assessmentViewActions';
import selectors from 'src/modules/assessment/view/assessmentViewSelectors';
import AssessmentView from 'src/view/assessment/view/AssessmentView';
import AssessmentViewToolbar from 'src/view/assessment/view/AssessmentViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AssessmentPage = (props) => {
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
          [i18n('entities.assessment.menu'), '/assessment'],
          [i18n('entities.assessment.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.assessment.view.title')}
        </PageTitle>

        <AssessmentViewToolbar match={match} />

        <AssessmentView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default AssessmentPage;
