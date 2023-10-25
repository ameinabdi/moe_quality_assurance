import React from 'react';
import {  Tabs } from 'antd';
import UserTab from 'src/view/admin/UserTab/UserTab';
import RightContentWrapper from 'src/view/layout/styles/RightContentWrapper';

const UserPage = (props) => {
  return (
    <RightContentWrapper>
      <Tabs
        defaultActiveKey="1"
        size='middle'
        items={[
          {
            label: `Users`,
            key: '3', 
            children:(<UserTab />),
          }
        ]}
      />
    </RightContentWrapper>
  );
};

export default UserPage;
