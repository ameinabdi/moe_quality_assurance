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
import subQuestionEnumerators from 'src/modules/subQuestion/subQuestionEnumerators';

const schema = yup.object().shape({
  question: yupFormSchemas.string(
    i18n('entities.subQuestion.fields.question'),
    {
      "required": true
    },
  ),
  type: yupFormSchemas.enumerator(
    i18n('entities.subQuestion.fields.type'),
    {
      "required": true,
      "options": subQuestionEnumerators.type
    },
  ),
  hint: yupFormSchemas.string(
    i18n('entities.subQuestion.fields.hint'),
    {},
  ),
  validation: yupFormSchemas.stringArray(
    i18n('entities.subQuestion.fields.validation'),
    {},
  ),
  answerValue: yupFormSchemas.string(
    i18n('entities.subQuestion.fields.answerValue'),
    {},
  ),
});

const SubQuestionForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      question: record.question,
      type: record.type,
      hint: record.hint,
      validation: record.validation || [],
      answerValue: record.answerValue,
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
          <TextAreaFormItem
            name="question"
            label={i18n('entities.subQuestion.fields.question')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <SelectFormItem
            name="type"
            label={i18n('entities.subQuestion.fields.type')}
            options={subQuestionEnumerators.type.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.subQuestion.enumerators.type.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="hint"
            label={i18n('entities.subQuestion.fields.hint')}  
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="validation"
            label={i18n('entities.subQuestion.fields.validation')}
            options={subQuestionEnumerators.validation.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.subQuestion.enumerators.validation.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
            mode="multiple"
          />
          <InputFormItem
            name="answerValue"
            label={i18n('entities.subQuestion.fields.answerValue')}  
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

export default SubQuestionForm;
