import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import userEnumerators from 'src/modules/user/userEnumerators';
import { yupResolver } from '@hookform/resolvers/yup';
import StateAutocompleteFormItem from 'src/view/state/autocomplete/StateAutocompleteFormItem';

const singleSchema = yup.object().shape({
  fullName: yupFormSchemas.string(
    i18n('user.fields.fullName'),
    {},
  ),
  email: yupFormSchemas.email(i18n('user.fields.email'),{}),
  type: yupFormSchemas.enumerator(
    i18n('user.fields.type'),
    {
      "options": userEnumerators.type

    },
  ),
  state: yupFormSchemas.relationToOne(
    i18n('user.fields.state'),
    {},
  ),
});
 
const UserNewForm = (props) => {
  const schema = singleSchema

  const [initialValues] = useState(() => ({
    email: '',
    state: null,
    fullName:'',
    type:'',

  }));

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    const { ...data } = values;

    if (data.email) {
      data.emails = [data.email];
      delete data.email;
    }

    props.onSubmit(null, data);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key:any) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <SelectFormItem
            name="type"
            label={i18n('user.fields.type')}
            options={userEnumerators.type.map(
              (value) => ({
                value,
                label: i18n(
                  `user.enumerators.type.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
            size={'large'}
          />
            <InputFormItem
                      name="fullName"
                      label={i18n('user.fields.fullName')}  
                      required={false}
                      layout={formItemLayout}
                      autoFocus
                    />
            <InputFormItem
              name="email"
              label={i18n('user.fields.email')}
              required={true}
              layout={formItemLayout}
              autoFocus
            />
          <StateAutocompleteFormItem 
            name="state"
            label={i18n('user.fields.state')}
            required={false}
            showCreate={!props.modal}
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

export default UserNewForm;
