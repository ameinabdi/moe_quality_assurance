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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import assessmentAnswerEnumerators from 'src/modules/assessmentAnswer/assessmentAnswerEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import AssessmentAutocompleteFormItem from 'src/view/assessment/autocomplete/AssessmentAutocompleteFormItem';

const schema = yup.object().shape({
  assessment: yupFormSchemas.relationToOne(
    i18n('entities.assessmentAnswer.fields.assessment'),
    {},
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.assessmentAnswer.fields.status'),
    {
      "options": assessmentAnswerEnumerators.status
    },
  ),
  submitDate: yupFormSchemas.datetime(
    i18n('entities.assessmentAnswer.fields.submitDate'),
    {},
  ),
});

const AssessmentAnswerForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      assessment: record.assessment,
      status: record.status,
      submitDate: record.submitDate ? moment(record.submitDate) : null,
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
            label={i18n('entities.assessmentAnswer.fields.assessment')}
            required={false}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="status"
            label={i18n('entities.assessmentAnswer.fields.status')}
            options={assessmentAnswerEnumerators.status.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.assessmentAnswer.enumerators.status.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <DatePickerFormItem
            name="submitDate"
            label={i18n('entities.assessmentAnswer.fields.submitDate')}
            required={false}
            showTime
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

export default AssessmentAnswerForm;
