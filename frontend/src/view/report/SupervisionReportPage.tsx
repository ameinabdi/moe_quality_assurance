import { Card, Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { i18n } from 'src/i18n';
import selectors from 'src/modules/report/supervisionReport/supervisionReportSelectors';
import Spinner from '../shared/Spinner';
import { useSelector } from 'react-redux';
 import { Column,Pie } from '@ant-design/plots';
 import ContentWrapperTransaparent from 'src/view/layout/styles/ContentWrapperTransaparent';
 import Breadcrumb from 'src/view/shared/Breadcrumb';
 import actions from 'src/modules/report/supervisionReport/supervisionReportActions';
 import { useAppDispatch } from 'src/modules/hook';

const SupervisionReportPage = (props) => {
  const dispatch = useAppDispatch();

  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows);


  useEffect(() => {
    dispatch(actions.doFetch({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 
  if(loading){
    return <Spinner />
  }
  const config = {
    data: rows?.supervisionByOwnership?.map((item)=>({
      type:item.schoolType,
      value:item.totalSupervisions
    })) || [],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };
  const configLevel = {
    data: rows?.supervisionByLevel?.map((item)=>({
      type:item.schoolLevelGroup,
      value:item.totalSupervisions
    })) || [],
    angleField: 'value',
    colorField: 'type',
    label: {
      text: 'value',
      style: {
        fontWeight: 'bold',
      },
    },
    legend: {
      color: {
        title: false,
        position: 'right',
        rowPadding: 5,
      },
    },
  };

  return (
    <>
    <Breadcrumb
      items={[
        [i18n('dashboard.menu'), '/'],
      ]}
    />
    <ContentWrapperTransaparent>
     <Row>
      <Col span={18}>
        <Card title="School Supervision By State">
          <Column 
          {...{
            data:rows?.supervisionByState || [],
            xField: 'stateName',
            yField: 'totalSupervisions',
            label: {
              // 可手动配置 label 数据标签位置
              position: 'middle',
              // 'top', 'bottom', 'middle',
              // 配置样式
              style: {
                fill: '#FFFFFF',
                opacity: 0.6,
              },
            },
            xAxis: {
              label: {
                autoHide: true,
                autoRotate: false,
              },
            },
            meta: {
              type: {
                alias: 'Date',
              },
              sales: {
                alias: 'Orders',
              },
            },
          }} />
        </Card>
      </Col>
      <Col span={6}>
      <Card title="School Supervision By Ownership">
        <Pie 
        {...config} />
      </Card>
      </Col>
     </Row>
     <br/><br/><br/>
     <Row>
      <Col span={18}>
        <Card title="School Supervision By District">
          <Column 
          {...{
            data:rows?.supervisionByDistrict || [],
            xField: 'districtName',
            yField: 'totalSupervisions',
            label: {
              // 可手动配置 label 数据标签位置
              position: 'middle',
              // 'top', 'bottom', 'middle',
              // 配置样式
              style: {
                fill: '#FFFFFF',
                opacity: 0.6,
              },
            },
            xAxis: {
              label: {
                autoHide: true,
                autoRotate: false,
              },
            },
            meta: {
              type: {
                alias: 'Date',
              },
              sales: {
                alias: 'Orders',
              },
            },
          }} />
        </Card>
      </Col>
      <Col span={6}>
      <Card title="School Supervision By Level">
        <Pie 
        {...configLevel} />
      </Card>
      </Col>
     </Row>
     <br/><br/><br/>

     
    </ContentWrapperTransaparent>
    </>
  );
};

export default SupervisionReportPage;
