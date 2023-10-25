import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/assessmentAnswer/view/assessmentAnswerViewActions';
import selectors from 'src/modules/assessmentAnswer/view/assessmentAnswerViewSelectors';
import AssessmentAnswerView from 'src/view/assessmentAnswer/view/AssessmentAnswerView';
import AssessmentAnswerViewToolbar from 'src/view/assessmentAnswer/view/AssessmentAnswerViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AssessmentAnswerPage = (props) => {
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
          [i18n('entities.assessmentAnswer.menu'), '/assessment-answer'],
          [i18n('entities.assessmentAnswer.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.assessmentAnswer.view.title')}
        </PageTitle>

        <AssessmentAnswerViewToolbar match={match} />

        <AssessmentAnswerView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default AssessmentAnswerPage;
