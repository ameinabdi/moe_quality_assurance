import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/answer/view/answerViewActions';
import selectors from 'src/modules/answer/view/answerViewSelectors';
import AnswerView from 'src/view/answer/view/AnswerView';
import AnswerViewToolbar from 'src/view/answer/view/AnswerViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const AnswerPage = (props) => {
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
          [i18n('entities.answer.menu'), '/answer'],
          [i18n('entities.answer.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.answer.view.title')}
        </PageTitle>

        <AnswerViewToolbar match={match} />

        <AnswerView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default AnswerPage;
