import { Button, Row, Col } from 'antd';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link, useLocation } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import ContentSignUp from 'src/view/auth/styles/ContentSignUp';
import LogoRow from 'src/view/auth/styles/LogoRow';
import OtherActions from 'src/view/auth/styles/OtherActions';
import Wrapper from 'src/view/auth/styles/Wrapper';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PhoneInputFormItem from '../shared/form/items/PhoneInputFormItem';
import {
  formItemLayout,
} from 'src/view/shared/styles/FormWrapper';
const schema = yup.object().shape({
  firstName: yupFormSchemas.string(i18n('user.fields.firstName'), {
    required: true,
  }),
  lastName: yupFormSchemas.string(i18n('user.fields.lastName'), {
    required: true,
  }),
  email: yupFormSchemas.string(i18n('user.fields.email'), {
    required: true,
  }),
  password: yupFormSchemas.string(
    i18n('user.fields.password'),
    {
      required: true,
    },
  ),
  phoneNumber: yupFormSchemas.string(i18n('user.fields.phoneNumber'), {
    required: true,
  }),
});

const SignupPage = (props) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const loading = useSelector(selectors.selectLoading);
  const externalErrorMessage = useSelector(
    selectors.selectErrorMessage,
  );
  const backgroundImageUrl = useSelector(
    selectors.selectBackgroundImageUrl,
  );
  const logoUrl = useSelector(selectors.selectLogoUrl);

  const clearErrorMessage = () => {
    dispatch(actions.doClearErrorMessage());
  };

  useEffect(() => {
    clearErrorMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = () => {
    if (externalErrorMessage) {
      clearErrorMessage();
    }
  };

  const emailFromInvitation = queryString.parse(
    location.search,
  ).email;

  const [initialValues] = useState({
    firstName:'',
    lastName:'',
    email: emailFromInvitation || '',
    password: '',
    phoneNumber:''
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: initialValues,
  });

  const onSubmit = ({ email, password }) => {
    dispatch(
      actions.doRegisterEmailAndPassword(email, password),
    );
  };
  const twoColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 12,
  };

  return (
    <Wrapper
      style={{
        backgroundImage: `url(${
          backgroundImageUrl || '/images/signup.jpg'
        })`,
      }}
    >
      <ContentSignUp>
        <LogoRow>
            <img
              src='/images/logo.png'
              width="80px"
              alt={i18n('app.title')}
            />
            <h1>{i18n('app.title')}</h1>
        </LogoRow>

        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Row>
            <Col span={24}>
            </Col>
            <Col {...twoColumnsResponsiveProps}>
            <InputFormItem
              name="firstName"
              label={i18n('user.fields.firstName')}
              placeholder={i18n('user.fields.firstName')}
              size="large"
              externalErrorMessage={externalErrorMessage}
              layout={formItemLayout}
              onChange={handleChange}
            />
            </Col>
            <Col {...twoColumnsResponsiveProps}>
            <InputFormItem
              name="lastName"
              label={i18n('user.fields.lastName')}
              placeholder={i18n('user.fields.lastName')}
              size="large"
              externalErrorMessage={externalErrorMessage}
              layout={formItemLayout}
              onChange={handleChange}
            />
            </Col>    
            <Col span={24}>
            <InputFormItem
              name="email"
              label={i18n('user.fields.email')}
              placeholder={i18n('user.fields.email')}
              autoComplete="email"
              size="large"
              externalErrorMessage={externalErrorMessage}
              layout={formItemLayout}
              onChange={handleChange}
            />
            </Col>    
            <Col span={24}>
            <InputFormItem
              name="password"
              label={i18n('user.fields.password')}
              placeholder={i18n('user.fields.password')}
              autoComplete="password"
              type="password"
              size="large"
              layout={formItemLayout}
            />
            </Col> 
           
            <Col span={24}>
            <PhoneInputFormItem
              name="phoneNumber"
              label={i18n('user.fields.phoneNumber')}
              placeholder={i18n('user.fields.phoneNumber')}
              size="large"
              externalErrorMessage={externalErrorMessage}
              layout={formItemLayout}
              onChange={handleChange}
            />
            </Col>
            </Row>
            <Button
              type="primary"
              size="large"
              block
              htmlType="submit"
              loading={loading}
            >
              {i18n('auth.signup')}
            </Button>

            <OtherActions>
              <Link to="/auth/signin">
                {i18n('auth.alreadyHaveAnAccount')}
              </Link>
            </OtherActions>
          </form>
        </FormProvider>
      </ContentSignUp>
    </Wrapper>
  );
};

export default SignupPage;
