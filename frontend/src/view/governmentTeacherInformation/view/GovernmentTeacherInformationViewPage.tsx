import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import actions from 'src/modules/governmentTeacherInformation/view/governmentTeacherInformationViewActions';
import selectors from 'src/modules/governmentTeacherInformation/view/governmentTeacherInformationViewSelectors';
import GovernmentTeacherInformationView from 'src/view/governmentTeacherInformation/view/GovernmentTeacherInformationView';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';

const GovernmentTeacherInformationPage = (props) => {
  const dispatch = useAppDispatch();
  const match = useParams();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.id || props.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <ContentWrapper>
        <GovernmentTeacherInformationView loading={loading} record={record} />
      </ContentWrapper>
  );
};

export default GovernmentTeacherInformationPage;
