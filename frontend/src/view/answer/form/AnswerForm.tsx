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
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import AssessmentAutocompleteFormItem from 'src/view/assessment/autocomplete/AssessmentAutocompleteFormItem';
import QuestionAutocompleteFormItem from 'src/view/question/autocomplete/QuestionAutocompleteFormItem';

const schema = yup.object().shape({
  assessment: yupFormSchemas.relationToOne(
    i18n('entities.answer.fields.assessment'),
    {},
  ),
  question: yupFormSchemas.relationToOne(
    i18n('entities.answer.fields.question'),
    {},
  ),
  answer: yupFormSchemas.string(
    i18n('entities.answer.fields.answer'),
    {
      "required": true
    },
  ),
});

const AnswerForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      assessment: record.assessment,
      question: record.question,
      answer: record.answer,
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
          <AssessmentAutocompleteFormItem  
            name="assessment"
            label={i18n('entities.answer.fields.assessment')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <QuestionAutocompleteFormItem  
            name="question"
            label={i18n('entities.answer.fields.question')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <TextAreaFormItem
            name="answer"
            label={i18n('entities.answer.fields.answer')}  
            required={true}
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

export default AnswerForm;
