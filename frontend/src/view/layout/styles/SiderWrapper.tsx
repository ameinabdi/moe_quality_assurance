import styled from 'styled-components';

const SiderWrapper = styled.div`
  .sider {
    display:block;
    flex-direction: row;
  }
  .Main {
    display:flex;
    flex-direction: row;
    width:100%
  }
  .left {
    align-content: center;
    background-color:#001529;
    float: left;
    display:flex;
    flex-direction:row;
    align-items: center;
    height:46px;
    padding:3px;

  }
 .center {
  align-content: center;
  width:100%;
  }
  .right {
    align-content: center;
    background-color:#001529;
    float: right;
    display:flex;
    flex-direction:row;
    align-items: center;
    height:46px;
    padding:3px;
    }
 
  .ant-menu-inline {
    border: 0;
    background-color:red;

  }
  

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    text-align: center;
  }

  .logo a {
    color: white;
    text-decoration: none;
  }

  .ant-menu-item-only-child .anticon {
    margin-right: 10px;
  }
  .ant-menu {
      background-color: #021524;
  }
`;

export default SiderWrapper;
