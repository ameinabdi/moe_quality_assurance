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
import dimension1Enumerators from 'src/modules/dimension1/dimension1Enumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';

const schema = yup.object().shape({
  indicator11: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator11'),
    {
      "options": dimension1Enumerators.indicator11
    },
  ),
  indicator12: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator12'),
    {
      "options": dimension1Enumerators.indicator12
    },
  ),
  indicator13: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator13'),
    {
      "options": dimension1Enumerators.indicator13
    },
  ),
  indicator14: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator14'),
    {
      "options": dimension1Enumerators.indicator14
    },
  ),
  indicator15: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator15'),
    {
      "options": dimension1Enumerators.indicator15
    },
  ),
  indicator16: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator16'),
    {
      "options": dimension1Enumerators.indicator16
    },
  ),
  indicator17: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator17'),
    {
      "options": dimension1Enumerators.indicator17
    },
  ),
  indicator18: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator18'),
    {
      "options": dimension1Enumerators.indicator18
    },
  ),
  indicator19: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator19'),
    {
      "options": dimension1Enumerators.indicator19
    },
  ),
  indicator110: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator110'),
    {
      "options": dimension1Enumerators.indicator110
    },
  ),
  indicator111: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator111'),
    {
      "options": dimension1Enumerators.indicator111
    },
  ),
  indicator112: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator112'),
    {
      "options": dimension1Enumerators.indicator112
    },
  ),
  indicator113: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator113'),
    {
      "options": dimension1Enumerators.indicator113
    },
  ),
  indicator114: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator114'),
    {
      "options": dimension1Enumerators.indicator114
    },
  ),
  school: yupFormSchemas.relationToOne(
    i18n('entities.dimension1.fields.school'),
    {},
  ),
});

const Dimension1Form = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      indicator11: record.indicator11,
      indicator12: record.indicator12,
      indicator13: record.indicator13,
      indicator14: record.indicator14,
      indicator15: record.indicator15,
      indicator16: record.indicator16,
      indicator17: record.indicator17,
      indicator18: record.indicator18,
      indicator19: record.indicator19,
      indicator110: record.indicator110,
      indicator111: record.indicator111,
      indicator112: record.indicator112,
      indicator113: record.indicator113,
      indicator114: record.indicator114,
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
          <SelectFormItem
            name="indicator11"
            label={i18n('entities.dimension1.fields.indicator11')}
            options={dimension1Enumerators.indicator11.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator11.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator12"
            label={i18n('entities.dimension1.fields.indicator12')}
            options={dimension1Enumerators.indicator12.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator12.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator13"
            label={i18n('entities.dimension1.fields.indicator13')}
            options={dimension1Enumerators.indicator13.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator13.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator14"
            label={i18n('entities.dimension1.fields.indicator14')}
            options={dimension1Enumerators.indicator14.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator14.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator15"
            label={i18n('entities.dimension1.fields.indicator15')}
            options={dimension1Enumerators.indicator15.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator15.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator16"
            label={i18n('entities.dimension1.fields.indicator16')}
            options={dimension1Enumerators.indicator16.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator16.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator17"
            label={i18n('entities.dimension1.fields.indicator17')}
            options={dimension1Enumerators.indicator17.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator17.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator18"
            label={i18n('entities.dimension1.fields.indicator18')}
            options={dimension1Enumerators.indicator18.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator18.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator19"
            label={i18n('entities.dimension1.fields.indicator19')}
            options={dimension1Enumerators.indicator19.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator19.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator110"
            label={i18n('entities.dimension1.fields.indicator110')}
            options={dimension1Enumerators.indicator110.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator110.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator111"
            label={i18n('entities.dimension1.fields.indicator111')}
            options={dimension1Enumerators.indicator111.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator111.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator112"
            label={i18n('entities.dimension1.fields.indicator112')}
            options={dimension1Enumerators.indicator112.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator112.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator113"
            label={i18n('entities.dimension1.fields.indicator113')}
            options={dimension1Enumerators.indicator113.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator113.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator114"
            label={i18n('entities.dimension1.fields.indicator114')}
            options={dimension1Enumerators.indicator114.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension1.enumerators.indicator114.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SchoolAutocompleteFormItem  
            name="school"
            label={i18n('entities.dimension1.fields.school')}
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

export default Dimension1Form;
