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
import dimensionGPE3Enumerators from 'src/modules/dimensionGPE3/dimensionGPE3Enumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';

const schema = yup.object().shape({
  indicator51: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator51'),
    {
      "options": dimensionGPE3Enumerators.indicator51
    },
  ),
  indicator52: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator52'),
    {
      "options": dimensionGPE3Enumerators.indicator52
    },
  ),
  indicator53: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator53'),
    {
      "options": dimensionGPE3Enumerators.indicator53
    },
  ),
  indicator54: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator54'),
    {
      "options": dimensionGPE3Enumerators.indicator54
    },
  ),
  indicator55: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator55'),
    {
      "options": dimensionGPE3Enumerators.indicator55
    },
  ),
  indicator56: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator56'),
    {
      "options": dimensionGPE3Enumerators.indicator56
    },
  ),
  indicator57: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator57'),
    {
      "options": dimensionGPE3Enumerators.indicator57
    },
  ),
  indicator58: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator58'),
    {
      "options": dimensionGPE3Enumerators.indicator58
    },
  ),
  indicator59: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator59'),
    {
      "options": dimensionGPE3Enumerators.indicator59
    },
  ),
  indicator510: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator510'),
    {
      "options": dimensionGPE3Enumerators.indicator510
    },
  ),
  indicator511: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator511'),
    {
      "options": dimensionGPE3Enumerators.indicator511
    },
  ),
  indicator512: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator512'),
    {
      "options": dimensionGPE3Enumerators.indicator512
    },
  ),
  indicator513: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator513'),
    {
      "options": dimensionGPE3Enumerators.indicator513
    },
  ),
  indicator514: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator514'),
    {
      "options": dimensionGPE3Enumerators.indicator514
    },
  ),
  indicator515: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator515'),
    {
      "options": dimensionGPE3Enumerators.indicator515
    },
  ),
  indicator516: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator516'),
    {
      "options": dimensionGPE3Enumerators.indicator516
    },
  ),
  indicator517: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator517'),
    {
      "options": dimensionGPE3Enumerators.indicator517
    },
  ),
  indicator518: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator518'),
    {
      "options": dimensionGPE3Enumerators.indicator518
    },
  ),
  indicator519: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator519'),
    {
      "options": dimensionGPE3Enumerators.indicator519
    },
  ),
  indicator520: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE3.fields.indicator520'),
    {
      "options": dimensionGPE3Enumerators.indicator520
    },
  ),
  school: yupFormSchemas.relationToOne(
    i18n('entities.dimensionGPE3.fields.school'),
    {},
  ),
});

const DimensionGPE3Form = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      indicator51: record.indicator51,
      indicator52: record.indicator52,
      indicator53: record.indicator53,
      indicator54: record.indicator54,
      indicator55: record.indicator55,
      indicator56: record.indicator56,
      indicator57: record.indicator57,
      indicator58: record.indicator58,
      indicator59: record.indicator59,
      indicator510: record.indicator510,
      indicator511: record.indicator511,
      indicator512: record.indicator512,
      indicator513: record.indicator513,
      indicator514: record.indicator514,
      indicator515: record.indicator515,
      indicator516: record.indicator516,
      indicator517: record.indicator517,
      indicator518: record.indicator518,
      indicator519: record.indicator519,
      indicator520: record.indicator520,
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
            name="indicator51"
            label={i18n('entities.dimensionGPE3.fields.indicator51')}
            options={dimensionGPE3Enumerators.indicator51.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator51.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator52"
            label={i18n('entities.dimensionGPE3.fields.indicator52')}
            options={dimensionGPE3Enumerators.indicator52.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator52.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator53"
            label={i18n('entities.dimensionGPE3.fields.indicator53')}
            options={dimensionGPE3Enumerators.indicator53.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator53.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator54"
            label={i18n('entities.dimensionGPE3.fields.indicator54')}
            options={dimensionGPE3Enumerators.indicator54.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator54.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator55"
            label={i18n('entities.dimensionGPE3.fields.indicator55')}
            options={dimensionGPE3Enumerators.indicator55.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator55.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator56"
            label={i18n('entities.dimensionGPE3.fields.indicator56')}
            options={dimensionGPE3Enumerators.indicator56.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator56.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator57"
            label={i18n('entities.dimensionGPE3.fields.indicator57')}
            options={dimensionGPE3Enumerators.indicator57.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator57.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator58"
            label={i18n('entities.dimensionGPE3.fields.indicator58')}
            options={dimensionGPE3Enumerators.indicator58.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator58.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator59"
            label={i18n('entities.dimensionGPE3.fields.indicator59')}
            options={dimensionGPE3Enumerators.indicator59.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator59.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator510"
            label={i18n('entities.dimensionGPE3.fields.indicator510')}
            options={dimensionGPE3Enumerators.indicator510.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator510.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator511"
            label={i18n('entities.dimensionGPE3.fields.indicator511')}
            options={dimensionGPE3Enumerators.indicator511.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator511.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator512"
            label={i18n('entities.dimensionGPE3.fields.indicator512')}
            options={dimensionGPE3Enumerators.indicator512.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator512.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator513"
            label={i18n('entities.dimensionGPE3.fields.indicator513')}
            options={dimensionGPE3Enumerators.indicator513.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator513.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator514"
            label={i18n('entities.dimensionGPE3.fields.indicator514')}
            options={dimensionGPE3Enumerators.indicator514.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator514.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator515"
            label={i18n('entities.dimensionGPE3.fields.indicator515')}
            options={dimensionGPE3Enumerators.indicator515.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator515.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator516"
            label={i18n('entities.dimensionGPE3.fields.indicator516')}
            options={dimensionGPE3Enumerators.indicator516.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator516.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator517"
            label={i18n('entities.dimensionGPE3.fields.indicator517')}
            options={dimensionGPE3Enumerators.indicator517.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator517.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator518"
            label={i18n('entities.dimensionGPE3.fields.indicator518')}
            options={dimensionGPE3Enumerators.indicator518.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator518.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator519"
            label={i18n('entities.dimensionGPE3.fields.indicator519')}
            options={dimensionGPE3Enumerators.indicator519.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator519.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator520"
            label={i18n('entities.dimensionGPE3.fields.indicator520')}
            options={dimensionGPE3Enumerators.indicator520.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE3.enumerators.indicator520.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SchoolAutocompleteFormItem  
            name="school"
            label={i18n('entities.dimensionGPE3.fields.school')}
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

export default DimensionGPE3Form;
