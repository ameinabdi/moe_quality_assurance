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
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import deminsion2Enumerators from 'src/modules/deminsion2/deminsion2Enumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';

const schema = yup.object().shape({
  indicator21: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator21'),
    {
      "options": deminsion2Enumerators.indicator21
    },
  ),
  indicator22: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator22'),
    {
      "options": deminsion2Enumerators.indicator22
    },
  ),
  indicator23: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator23'),
    {
      "options": deminsion2Enumerators.indicator23
    },
  ),
  indicator24: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator24'),
    {
      "options": deminsion2Enumerators.indicator24
    },
  ),
  indicator25: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator25'),
    {
      "options": deminsion2Enumerators.indicator25
    },
  ),
  indicator26: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator26'),
    {
      "options": deminsion2Enumerators.indicator26
    },
  ),
  indicator27: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator27'),
    {
      "options": deminsion2Enumerators.indicator27
    },
  ),
  indicator28: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator28'),
    {
      "options": deminsion2Enumerators.indicator28
    },
  ),
  school: yupFormSchemas.relationToOne(
    i18n('entities.deminsion2.fields.school'),
    {},
  ),
});

const Deminsion2Form = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      indicator21: record.indicator21,
      indicator22: record.indicator22,
      indicator23: record.indicator23,
      indicator24: record.indicator24,
      indicator25: record.indicator25,
      indicator26: record.indicator26,
      indicator27: record.indicator27,
      indicator28: record.indicator28,
      school: record.school,
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
          <RadioFormItem
            name="indicator21"
            label={i18n('entities.deminsion2.fields.indicator21')}
            options={deminsion2Enumerators.indicator21.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.deminsion2.enumerators.indicator21.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator22"
            label={i18n('entities.deminsion2.fields.indicator22')}
            options={deminsion2Enumerators.indicator22.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.deminsion2.enumerators.indicator22.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator23"
            label={i18n('entities.deminsion2.fields.indicator23')}
            options={deminsion2Enumerators.indicator23.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.deminsion2.enumerators.indicator23.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator24"
            label={i18n('entities.deminsion2.fields.indicator24')}
            options={deminsion2Enumerators.indicator24.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.deminsion2.enumerators.indicator24.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator25"
            label={i18n('entities.deminsion2.fields.indicator25')}
            options={deminsion2Enumerators.indicator25.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.deminsion2.enumerators.indicator25.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator26"
            label={i18n('entities.deminsion2.fields.indicator26')}
            options={deminsion2Enumerators.indicator26.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.deminsion2.enumerators.indicator26.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator27"
            label={i18n('entities.deminsion2.fields.indicator27')}
            options={deminsion2Enumerators.indicator27.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.deminsion2.enumerators.indicator27.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator28"
            label={i18n('entities.deminsion2.fields.indicator28')}
            options={deminsion2Enumerators.indicator28.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.deminsion2.enumerators.indicator28.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SchoolAutocompleteFormItem  
            name="school"
            label={i18n('entities.deminsion2.fields.school')}
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

export default Deminsion2Form;
