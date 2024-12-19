import React from 'react';
import { i18n } from 'src/i18n';
import DimensionSsv3ListTable from 'src/view/dimensionSsv3/list/DimensionSsv3ListTable';
import DimensionSsv3ListToolbar from 'src/view/dimensionSsv3/list/DimensionSsv3ListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import TopbarWrapper from 'src/view/layout/styles/TopbarWrapper';
import PageTitle from 'src/view/shared/styles/PageTitle';

const DimensionSsv3ListPage = (props) => {

  
  return (
      <ContentWrapper>
        <TopbarWrapper>
        <PageTitle>
          {i18n('entities.dimensionSsv3.list.title')}
        </PageTitle>

        <DimensionSsv3ListToolbar supervision={props.supervision} />
        </TopbarWrapper>
        <DimensionSsv3ListTable supervision={props.supervision}/>
      </ContentWrapper>
  );
};

export default DimensionSsv3ListPage;
