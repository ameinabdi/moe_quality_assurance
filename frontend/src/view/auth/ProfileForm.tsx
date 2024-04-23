import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form } from 'antd';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { i18n } from 'src/i18n';
import actions from 'src/modules/auth/authActions';
import selectors from 'src/modules/auth/authSelectors';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import Storage from 'src/security/storage';
import { yupResolver } from '@hookform/resolvers/yup';
import userEnumerators from 'src/modules/user/userEnumerators';
import SwitchFormItem from '../shared/form/items/SwitchFormItem';
import RadioFormItem from '../shared/form/items/RadioFormItem';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('user.fields.firstName'),
    {
      max: 80,
    },
  ),
  lastName: yupFormSchemas.string(
    i18n('user.fields.lastName'),
    {
      max: 175,
    },
  ),
  phoneNumber: yupFormSchemas.string(
    i18n('user.fields.phoneNumber'),
    {
      matches: /^[0-9]/,
      max: 24,
    },
  ),
  avatars: yupFormSchemas.images(
    i18n('user.fields.avatars'),
    {
      max: 1,
    },
  ),
  twoFA: yupFormSchemas.boolean(
    i18n('user.fields.twoFA'),
    {},
  ),
  notification: yupFormSchemas.enumerator(
    i18n('user.fields.notification'),
    {
      "options": userEnumerators.notification
    },
  ),
});

const ProfileFormPage = (props) => {
  const dispatch = useAppDispatch();

  const saveLoading = useSelector(
    selectors.selectLoadingUpdateProfile,
  );
  const currentUser = useSelector(
    selectors.selectCurrentUser,
  );

  const onSubmit = (values) => {
    dispatch(actions.doUpdateProfile(values));
  };

  const [initialValues] = useState(() => {
    const record = currentUser || {};

    return {
      firstName: record.firstName,
      lastName: record.lastName,
      phoneNumber: record.phoneNumber,
      avatars: record.avatars || [],
      twoFA: record.twoFA,
      notification: record.notification,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onReset = () => {
    Object.keys(initialValues).forEach((key: any) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Form.Item
            labelAlign='left'
            label={i18n('user.fields.email')}
            {...formItemLayout}
          >
            <strong>{currentUser.email}</strong>
          </Form.Item>

          <InputFormItem
            name="firstName"
            label={i18n('user.fields.firstName')}
            autoComplete="firstName"
            layout={formItemLayout}
            autoFocus
          />

          <InputFormItem
            name="lastName"
            label={i18n('user.fields.lastName')}
            autoComplete="lastName"
            layout={formItemLayout}
          />

          <InputFormItem
            name="phoneNumber"
            label={i18n('user.fields.phoneNumber')}
            autoComplete="phoneNumber"
            prefix="+"
            layout={formItemLayout}
          />

          <ImagesFormItem
            name="avatars"
            label={i18n('user.fields.avatars')}
            storage={Storage.values.userAvatarsProfiles}
            max={1}
            layout={formItemLayout}
          />
          <SwitchFormItem
            name="twoFA"
            label={i18n('user.fields.twoFA')}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="notification"
            label={i18n('user.fields.notification')}
            options={userEnumerators.notification.map(
              (value) => ({
                value,
                label: i18n(
                  `user.enumerators.notification.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />

          <Form.Item
            className="form-buttons"
            {...tailFormItemLayout}
          >
            <Button
              loading={saveLoading}
              type="primary"
              onClick={form.handleSubmit(onSubmit)}
              icon={<SaveOutlined rev={undefined}  />}
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              icon={<UndoOutlined rev={undefined}  />}
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel && (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                icon={<CloseOutlined rev={undefined}  />}
              >
                {i18n('common.cancel')}
              </Button>
            )}
          </Form.Item>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default ProfileFormPage;
