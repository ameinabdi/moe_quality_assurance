import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/subQuestion/view/subQuestionViewActions';
import selectors from 'src/modules/subQuestion/view/subQuestionViewSelectors';
import SubQuestionView from 'src/view/subQuestion/view/SubQuestionView';
import SubQuestionViewToolbar from 'src/view/subQuestion/view/SubQuestionViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SubQuestionPage = (props) => {
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
          [i18n('entities.subQuestion.menu'), '/sub-question'],
          [i18n('entities.subQuestion.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.subQuestion.view.title')}
        </PageTitle>

        <SubQuestionViewToolbar match={match} />

        <SubQuestionView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default SubQuestionPage;
