import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/questionSection/view/questionSectionViewActions';
import selectors from 'src/modules/questionSection/view/questionSectionViewSelectors';
import QuestionSectionView from 'src/view/questionSection/view/QuestionSectionView';
import QuestionSectionViewToolbar from 'src/view/questionSection/view/QuestionSectionViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const QuestionSectionPage = (props) => {
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
          [i18n('entities.questionSection.menu'), '/question-section'],
          [i18n('entities.questionSection.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.questionSection.view.title')}
        </PageTitle>

        <QuestionSectionViewToolbar match={match} />

        <QuestionSectionView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default QuestionSectionPage;
