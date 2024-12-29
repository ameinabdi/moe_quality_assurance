import { Card, Col, Row } from 'antd';
import React, { useEffect } from 'react';
import { i18n } from 'src/i18n';
import selectors from 'src/modules/report/stateReport/stateReportSelectors';
import Spinner from '../shared/Spinner';
import { useSelector } from 'react-redux';
 import { Column,Pie } from '@ant-design/plots';
 import ContentWrapperTransaparent from 'src/view/layout/styles/ContentWrapperTransaparent';
 import Breadcrumb from 'src/view/shared/Breadcrumb';
 import actions from 'src/modules/report/stateReport/stateReportActions';
 import { useAppDispatch } from 'src/modules/hook';

const StateReportPage = (props) => {
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
  const configOwner = {
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
  const config = {
    data: rows?.teacherByGender?.map((item)=>({
      type:item.gender,
      value:item.totalTeachers
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

  const config2 = {
    data: rows?.teacherByPresent?.map((item)=>({
      type:item.present,
      value:item.totalTeachers
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
  const config3 = {
    data: rows?.teacherByDisability?.map((item)=>({
      type:item.disablity,
      value:item.totalTeachers
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
            <Card title="School Supervision By Ownership">
              <Pie 
              {...configOwner} />
            </Card>
            </Col>
           </Row>
     <Row>
      <Col span={18}>
      <Card title="Teachers By District">
          <Column 
          {...{
            data:rows?.teacherByDistrict || [],
            xField: 'districtName',
            yField: 'totalTeachers',
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
      <Card title="Teachers By Gender">
        <Pie 
        {...config} />
      </Card>
      </Col>
     </Row>
     <br/><br/><br/>
      <Row>
      <Col span={24}>
      <Card title="Teacher By Experience">
          <Column 
          {...{
            data:rows?.teacherByExperience || [],
            xField: 'experience',
            yField: 'totalTeachers',
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
     <br/><br/><br/>

     <Row>
      <Col span={18}>
        <Card title="Teachers By Tought Level">
          <Column 
          {...{
            data:rows?.teacherByToughtLevel || [],
            xField: 'taughtLevel',
            yField: 'totalTeachers',
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
      <Card title="Teachers By Present">
        <Pie 
        {...config2} />
      </Card>
      </Col>
     </Row>
     
     <br/><br/><br/>

     <Row>
      <Col span={18}>
        <Card title="Teachers By Education Level ">
          <Column 
          {...{
            data:rows?.teacherByEducationLevel || [],
            xField: 'educationLevel',
            yField: 'totalTeachers',
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
      <Card title="Teachers By Disability">
        <Pie 
        {...config3} />
      </Card>
      </Col>
     </Row>
    </ContentWrapperTransaparent>
    </>
  );
};

export default StateReportPage;
