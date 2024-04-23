import React, { useEffect,useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/sSASurvey/view/sSASurveyViewActions';
import selectors from 'src/modules/sSASurvey/view/sSASurveyViewSelectors';
import SSASurveyView from 'src/view/sSASurvey/view/SSASurveyView';
import SSASurveyViewToolbar from 'src/view/sSASurvey/view/SSASurveyViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';
import {useReactToPrint} from 'react-to-print';

const SSASurveyPage = (props) => {
  const componentRef = useRef(null);

  const dispatch = useAppDispatch();
  const match = useParams();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  
  useEffect(() => {
    dispatch(actions.doFind(match.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToPrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: record?.school?.name+"SSA Tool"
  });

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.sSASurvey.menu'), '/s-s-a-survey'],
          [i18n('entities.sSASurvey.view.title')],
        ]}
      />

      <ContentWrapper>
        <TopbarWrapper>
        <PageTitle>
          {i18n('entities.sSASurvey.view.title')}
        </PageTitle>
        
        <SSASurveyViewToolbar match={match} handleToPrint={handleToPrint} />
        </TopbarWrapper>
        <div ref={componentRef}>
        <SSASurveyView loading={loading} record={record} />
        </div>
      </ContentWrapper>
    </>
  );
};

export default SSASurveyPage;
