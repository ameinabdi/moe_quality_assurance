import { Card, Col, Row ,Statistic} from 'antd';
import React, { useEffect } from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/dashboard/view/dashboardViewActions';
import selectors from 'src/modules/dashboard/view/dashboardViewSelectors';
import Spinner from '../shared/Spinner';
import { useAppDispatch } from 'src/modules/hook';
import { useSelector } from 'react-redux';
import { 
  BranchesOutlined,
  AppstoreOutlined,
  CarOutlined,
  UserOutlined
 } from '@ant-design/icons';
 import { Column } from '@ant-design/plots';
 import ContentWrapperTransaparent from 'src/view/layout/styles/ContentWrapperTransaparent';
 import Breadcrumb from 'src/view/shared/Breadcrumb';

const DashboardPage = (props) => {
  const dispatch = useAppDispatch();

  const dashboardCounts = useSelector(selectors.selectDashboardCounts);
  const loading = useSelector(selectors.selectLoading);
  const rows = useSelector(selectors.selectRows);


  useEffect(() => {
    // dispatch(actions.doFetch({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const twoColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 12,
    style: {
      marginBottom: 24,
    },
  };

  const fourColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 6,
    lg: 6,
    xl: 6,
    style: {
      marginBottom: 24,
    },
  };
  
 
  if(loading){
    return <Spinner />
  }


  return (
    <>
    <Breadcrumb
      items={[
        [i18n('dashboard.menu'), '/'],
      ]}
    />
    <ContentWrapperTransaparent>
      <Row gutter={16}>
      <Col {...fourColumnsResponsiveProps}>
        <Card bordered={false}>
          <Statistic
            title="Trips"
            value={rows?.trips}
            prefix={<BranchesOutlined rev={undefined} />}
          />
        </Card>
      </Col>
      <Col {...fourColumnsResponsiveProps}>
        <Card bordered={false}>
          <Statistic
            title="Orders"
            value={rows?.orders}
            prefix={<AppstoreOutlined rev={undefined} />}
          />
        </Card>
      </Col>
      <Col {...fourColumnsResponsiveProps}>
        <Card bordered={false}>
          <Statistic
            title="Drivers"
            value={rows?.drivers}
            prefix={<UserOutlined rev={undefined} />}
          />
        </Card>
      </Col>
      <Col {...fourColumnsResponsiveProps}>
        <Card bordered={false}>
          <Statistic
            title="Trucks"
            value={rows?.trucks}
            prefix={<CarOutlined rev={undefined} />}
          />
        </Card>
      </Col>
     </Row>
     <Row>
      <Col span={24}>
        <Card>
          <Column 
          {...{
            data:rows?.orderByMonth || [],
            xField: 'week',
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
     </Row>
     
    </ContentWrapperTransaparent>
    </>
  );
};

export default DashboardPage;
