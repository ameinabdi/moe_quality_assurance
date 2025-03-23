import React, { useEffect,useRef } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import {useParams } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/schoolSupervisionGPE/view/schoolSupervisionGPEViewActions';
import selectors from 'src/modules/schoolSupervisionGPE/view/schoolSupervisionGPEViewSelectors';
import SchoolSupervisionGPEView from 'src/view/schoolSupervisionGPE/view/SchoolSupervisionGPEView';
import SchoolSupervisionGPEViewToolbar from 'src/view/schoolSupervisionGPE/view/SchoolSupervisionGPEViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';
import {useReactToPrint} from 'react-to-print';

const SchoolSupervisionGPEPage = (props) => {
  const dispatch = useAppDispatch();
  const match = useParams();
  const componentRef = useRef(null);

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

   const handleToPrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: record?.school?.name+"supervision GPE Tool"
    });

  useEffect(() => {
    dispatch(actions.doFind(match.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.schoolSupervisionGPE.menu'), '/school-supervision-g-p-e'],
          [i18n('entities.schoolSupervisionGPE.view.title')],
        ]}
      />

      <ContentWrapper>
        <TopbarWrapper>
          <PageTitle>
            {i18n('entities.schoolSupervisionGPE.view.title')}
          </PageTitle>

          <SchoolSupervisionGPEViewToolbar match={match}  handleToPrint={handleToPrint} />
        </TopbarWrapper>
        
        <div ref={componentRef}>
        <SchoolSupervisionGPEView loading={loading} record={record} />
        </div>
      </ContentWrapper>
    </>
  );
};

export default SchoolSupervisionGPEPage;
