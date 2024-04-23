import { Card, Col, Row ,Statistic} from 'antd';
import React, { useEffect } from 'react';
import { i18n } from 'src/i18n';
import selectors from 'src/modules/report/ssaReport/ssaReportSelectors';
import Spinner from '../shared/Spinner';
import { useSelector } from 'react-redux';
import { 
  AppstoreOutlined,
 } from '@ant-design/icons';
 import { Column,Pie } from '@ant-design/plots';
 import ContentWrapperTransaparent from 'src/view/layout/styles/ContentWrapperTransaparent';
 import Breadcrumb from 'src/view/shared/Breadcrumb';
 import actions from 'src/modules/report/ssaReport/ssaReportActions';
 import { useAppDispatch } from 'src/modules/hook';

const ReportPage = (props) => {
  const dispatch = useAppDispatch();

  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows);


  useEffect(() => {
    dispatch(actions.doFetch({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const sixColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 4,
    lg: 4,
    xl: 4,
    style: {
      marginBottom: 24,
    },
  };
  
 
  if(loading){
    return <Spinner />
  }
  const config = {
    data: rows?.owrnership?.map((item)=>({
      type:item.schoolType,
      value:item.total
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
      <Row gutter={16}>
      {rows?.state?.map((state)=>(
        <Col {...sixColumnsResponsiveProps}>
        <Card bordered={false}>
          <Statistic
            title={state.state}
            value={state?.total}
            prefix={<AppstoreOutlined rev={undefined} />}
          />
        </Card>
        </Col>
      ))}
     
     </Row>
     <Row>
      <Col span={18}>
        <Card>
          <Column 
          {...{
            data:rows?.region || [],
            xField: 'region',
            yField: 'total',
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
      <Card>
        <Pie 
        {...config} />
      </Card>
      </Col>
     </Row>
     
    </ContentWrapperTransaparent>
    </>
  );
};

export default ReportPage;
