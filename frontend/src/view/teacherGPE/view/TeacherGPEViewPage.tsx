import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/teacherGPE/view/teacherGPEViewActions';
import selectors from 'src/modules/teacherGPE/view/teacherGPEViewSelectors';
import TeacherGPEView from 'src/view/teacherGPE/view/TeacherGPEView';
import TeacherGPEViewToolbar from 'src/view/teacherGPE/view/TeacherGPEViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const TeacherGPEPage = (props) => {
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
          [i18n('entities.teacherGPE.menu'), '/teacher-g-p-e'],
          [i18n('entities.teacherGPE.view.title')],
        ]}
      />

      <ContentWrapper>
        <TopbarWrapper>
          <PageTitle>
            {i18n('entities.teacherGPE.view.title')}
          </PageTitle>

          <TeacherGPEViewToolbar match={match} />
        </TopbarWrapper>
       

        <TeacherGPEView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
};

export default TeacherGPEPage;
