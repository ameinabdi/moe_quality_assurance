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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import assessmentEnumerators from 'src/modules/assessment/assessmentEnumerators';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    i18n('entities.assessment.fields.title'),
    {
      "required": true
    },
  ),
  description: yupFormSchemas.string(
    i18n('entities.assessment.fields.description'),
    {},
  ),
  level: yupFormSchemas.stringArray(
    i18n('entities.assessment.fields.level'),
    {},
  ),
});

const AssessmentForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      title: record.title,
      description: record.description,
      level: record.level || [],
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
          <InputFormItem
            name="title"
            label={i18n('entities.assessment.fields.title')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <TextAreaFormItem
            name="description"
            label={i18n('entities.assessment.fields.description')}  
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="level"
            label={i18n('entities.assessment.fields.level')}
            options={assessmentEnumerators.level.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.assessment.enumerators.level.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
            mode="multiple"
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

export default AssessmentForm;
