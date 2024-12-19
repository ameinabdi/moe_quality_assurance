import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/schoolSupervision/view/schoolSupervisionViewActions';
import selectors from 'src/modules/schoolSupervision/view/schoolSupervisionViewSelectors';
import SchoolSupervisionView from 'src/view/schoolSupervision/view/SchoolSupervisionView';
import SchoolSupervisionViewToolbar from 'src/view/schoolSupervision/view/SchoolSupervisionViewToolbar';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';

const SchoolSupervisionPage = (props) => {
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
        <TopbarWrapper>
          <PageTitle>
            {i18n('entities.schoolSupervision.view.title')}
          </PageTitle>

          <SchoolSupervisionViewToolbar match={match} />
        </TopbarWrapper>
        <SchoolSupervisionView loading={loading} record={record} />
    </>
  );
};

export default SchoolSupervisionPage;
