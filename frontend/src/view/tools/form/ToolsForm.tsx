import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Form } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  formItemLayout,
  tailFormItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import ToolTypesAutocompleteFormItem from 'src/view/toolTypes/autocomplete/ToolTypesAutocompleteFormItem';

const schema = yup.object().shape({
  type: yupFormSchemas.relationToOne(
    i18n('entities.tools.fields.type'),
    {},
  ),
  name: yupFormSchemas.string(
    i18n('entities.tools.fields.name'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.tools.fields.description'),
    {},
  ),
  attachment: yupFormSchemas.files(
    i18n('entities.tools.fields.attachment'),
    {},
  ),
});

const ToolsForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      type: record.type,
      name: record.name,
      description: record.description,
      attachment: record.attachment || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const onSubmit = (values) => {
    props.onSubmit(props?.record?.id, values);
  };

  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <ToolTypesAutocompleteFormItem  
            name="type"
            label={i18n('entities.tools.fields.type')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="name"
            label={i18n('entities.tools.fields.name')}  
            required={false}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="description"
            label={i18n('entities.tools.fields.description')}  
            required={false}
            layout={formItemLayout}
          />
          <FilesFormItem
            name="attachment"
            label={i18n('entities.tools.fields.attachment')}
            required={false}
            storage={Storage.values.toolsAttachment}
            max={undefined}
            formats={undefined}
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
              icon={<SaveOutlined rev={undefined} />}
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              icon={<UndoOutlined rev={undefined} />}
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel && (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                icon={<CloseOutlined rev={undefined} />}
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

export default ToolsForm;
