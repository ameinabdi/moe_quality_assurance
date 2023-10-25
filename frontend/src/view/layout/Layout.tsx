import { Layout as AntLayout } from 'antd';
import React from 'react';
import Header from 'src/view/layout/Header';
import LayoutWrapper from 'src/view/layout/styles/LayoutWrapper';
import {useResolvedPath } from 'react-router-dom';
const { Content } = AntLayout;

const Layout = (props) => {
  const url = useResolvedPath("").pathname;

  return (
    <LayoutWrapper>
      <Header url={url} />
      <AntLayout>
        <Content>{props.children}</Content>
      </AntLayout>
    </LayoutWrapper>
  );
};

export default Layout;
