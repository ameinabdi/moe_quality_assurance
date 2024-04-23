import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { i18n, i18nHtml } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import Content from 'src/view/auth/styles/Content';
import Wrapper from 'src/view/auth/styles/Wrapper';
import OtherActions from 'src/view/auth/styles/OtherActions';
import ButtonLink from 'src/view/shared/styles/ButtonLink';
import Logo from './styles/Logo';
import { Typography }  from 'antd';

const DeactiveTenantPage = (props) => {
  const dispatch = useAppDispatch();
  const currentTenant = useSelector(
    selectors.selectCurrentTenant,
  );
  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );

  const doSignout = () => {
    dispatch(actions.doSignout());
  };

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${
          backgroundImageUrl ||
          '/images/signin.jpg'
        })`,
      }}
    >
      <Content>
      <Logo>
            <img
              src='/images/logo.png'
              width="140px"
              alt={i18n('app.title')}
            />
            <h1 style={{fontWeight:'bold',color:'#f39c12'}}>{i18n('app.title')}<span style={{color:'#00bbf9'}}>{i18n('app.name')}</span> </h1>
            <p>{i18n('auth.title')}</p>
        </Logo>
        <img
              src='/images/403.svg'
              width="180px"
              alt={i18n('app.title')}
              style={{alignSelf:'center', marginTop:10,marginBottom:10}}
            />
        <Typography.Paragraph
          style={{
            textAlign: 'center',
            color:'white',
          }}
        >
          {i18nHtml('auth.deactiveTenant.message', currentTenant?.name)}
        </Typography.Paragraph>

        <OtherActions>
          <ButtonLink onClick={doSignout}>
            {i18n('auth.signout')}
          </ButtonLink>
        </OtherActions>
      </Content>
    </Wrapper>
  );
};

export default DeactiveTenantPage;
