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
import AssessmentAutocompleteFormItem from 'src/view/assessment/autocomplete/AssessmentAutocompleteFormItem';
import QuestionAutocompleteFormItem from 'src/view/question/autocomplete/QuestionAutocompleteFormItem';
import SubQuestionAutocompleteFormItem from 'src/view/subQuestion/autocomplete/SubQuestionAutocompleteFormItem';
import AnswerAutocompleteFormItem from 'src/view/answer/autocomplete/AnswerAutocompleteFormItem';

const schema = yup.object().shape({
  assessment: yupFormSchemas.relationToOne(
    i18n('entities.subAnswer.fields.assessment'),
    {},
  ),
  question: yupFormSchemas.relationToOne(
    i18n('entities.subAnswer.fields.question'),
    {},
  ),
  subQuestion: yupFormSchemas.relationToOne(
    i18n('entities.subAnswer.fields.subQuestion'),
    {},
  ),
  answer: yupFormSchemas.relationToOne(
    i18n('entities.subAnswer.fields.answer'),
    {},
  ),
  subAnswer: yupFormSchemas.string(
    i18n('entities.subAnswer.fields.subAnswer'),
    {
      "required": true
    },
  ),
});

const SubAnswerForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      assessment: record.assessment,
      question: record.question,
      subQuestion: record.subQuestion,
      answer: record.answer,
      subAnswer: record.subAnswer,
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
            label={i18n('entities.subAnswer.fields.assessment')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <QuestionAutocompleteFormItem  
            name="question"
            label={i18n('entities.subAnswer.fields.question')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <SubQuestionAutocompleteFormItem  
            name="subQuestion"
            label={i18n('entities.subAnswer.fields.subQuestion')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <AnswerAutocompleteFormItem  
            name="answer"
            label={i18n('entities.subAnswer.fields.answer')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <InputFormItem
            name="subAnswer"
            label={i18n('entities.subAnswer.fields.subAnswer')}  
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

export default SubAnswerForm;
