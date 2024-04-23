import { Layout } from 'antd';
import React from 'react';
import HeaderWrapper from 'src/view/layout/styles/HeaderWrapper';
import MainMenu from 'src/view/layout/Menu';

const { Header: AntHeader } = Layout;


const Header = (props) => {
  
  return (
    <HeaderWrapper>
      <AntHeader 
        style={{
          backgroundPosition:'center',
          backgroundSize:'contain',
          backgroundRepeat:'no-repeat',
          backgroundImage: `url('/images/MOE-banner.png')`,
        }}
      >
        
      </AntHeader>
      <MainMenu url={props.url} /> 
    </HeaderWrapper>
  );
};

export default Header;
