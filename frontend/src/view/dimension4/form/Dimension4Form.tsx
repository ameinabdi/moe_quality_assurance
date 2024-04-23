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
import dimension4Enumerators from 'src/modules/dimension4/dimension4Enumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';

const schema = yup.object().shape({
  indicator41: yupFormSchemas.enumerator(
    i18n('entities.dimension4.fields.indicator41'),
    {
      "options": dimension4Enumerators.indicator41
    },
  ),
  indicator42: yupFormSchemas.enumerator(
    i18n('entities.dimension4.fields.indicator42'),
    {
      "options": dimension4Enumerators.indicator42
    },
  ),
  indicator43: yupFormSchemas.enumerator(
    i18n('entities.dimension4.fields.indicator43'),
    {
      "options": dimension4Enumerators.indicator43
    },
  ),
  indicator44: yupFormSchemas.enumerator(
    i18n('entities.dimension4.fields.indicator44'),
    {
      "options": dimension4Enumerators.indicator44
    },
  ),
  school: yupFormSchemas.relationToOne(
    i18n('entities.dimension4.fields.school'),
    {},
  ),
});

const Dimension4Form = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      indicator41: record.indicator41,
      indicator42: record.indicator42,
      indicator43: record.indicator43,
      indicator44: record.indicator44,
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
            name="indicator41"
            label={i18n('entities.dimension4.fields.indicator41')}
            options={dimension4Enumerators.indicator41.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension4.enumerators.indicator41.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator42"
            label={i18n('entities.dimension4.fields.indicator42')}
            options={dimension4Enumerators.indicator42.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension4.enumerators.indicator42.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator43"
            label={i18n('entities.dimension4.fields.indicator43')}
            options={dimension4Enumerators.indicator43.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension4.enumerators.indicator43.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator44"
            label={i18n('entities.dimension4.fields.indicator44')}
            options={dimension4Enumerators.indicator44.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimension4.enumerators.indicator44.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SchoolAutocompleteFormItem  
            name="school"
            label={i18n('entities.dimension4.fields.school')}
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

export default Dimension4Form;
