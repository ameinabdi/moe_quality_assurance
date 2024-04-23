import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/subAnswer/view/subAnswerViewActions';
import selectors from 'src/modules/subAnswer/view/subAnswerViewSelectors';
import SubAnswerView from 'src/view/subAnswer/view/SubAnswerView';
import SubAnswerViewToolbar from 'src/view/subAnswer/view/SubAnswerViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

const SubAnswerPage = (props) => {
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
          [i18n('entities.subAnswer.menu'), '/sub-answer'],
          [i18n('entities.subAnswer.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.subAnswer.view.title')}
        </PageTitle>

        <SubAnswerViewToolbar match={match} />

        <SubAnswerView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default SubAnswerPage;
