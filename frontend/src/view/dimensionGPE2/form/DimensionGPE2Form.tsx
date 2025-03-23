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
import dimensionGPE2Enumerators from 'src/modules/dimensionGPE2/dimensionGPE2Enumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';

const schema = yup.object().shape({
  indicator31: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator31'),
    {
      "options": dimensionGPE2Enumerators.indicator31
    },
  ),
  indicator32: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator32'),
    {
      "options": dimensionGPE2Enumerators.indicator32
    },
  ),
  indicator33: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator33'),
    {
      "options": dimensionGPE2Enumerators.indicator33
    },
  ),
  indicator34: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator34'),
    {
      "options": dimensionGPE2Enumerators.indicator34
    },
  ),
  indicator35: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator35'),
    {
      "options": dimensionGPE2Enumerators.indicator35
    },
  ),
  indicator36: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator36'),
    {
      "options": dimensionGPE2Enumerators.indicator36
    },
  ),
  indicator37: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator37'),
    {
      "options": dimensionGPE2Enumerators.indicator37
    },
  ),
  indicator38: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator38'),
    {
      "options": dimensionGPE2Enumerators.indicator38
    },
  ),
  indicator39: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator39'),
    {
      "options": dimensionGPE2Enumerators.indicator39
    },
  ),
  indicator310: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator310'),
    {
      "options": dimensionGPE2Enumerators.indicator310
    },
  ),
  indicator311: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator311'),
    {
      "options": dimensionGPE2Enumerators.indicator311
    },
  ),
  indicator312: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator312'),
    {
      "options": dimensionGPE2Enumerators.indicator312
    },
  ),
  indicator313: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator313'),
    {
      "options": dimensionGPE2Enumerators.indicator313
    },
  ),
  indicator314: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator314'),
    {
      "options": dimensionGPE2Enumerators.indicator314
    },
  ),
  indicator315: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE2.fields.indicator315'),
    {
      "options": dimensionGPE2Enumerators.indicator315
    },
  ),
  school: yupFormSchemas.relationToOne(
    i18n('entities.dimensionGPE2.fields.school'),
    {},
  ),
});

const DimensionGPE2Form = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      indicator31: record.indicator31,
      indicator32: record.indicator32,
      indicator33: record.indicator33,
      indicator34: record.indicator34,
      indicator35: record.indicator35,
      indicator36: record.indicator36,
      indicator37: record.indicator37,
      indicator38: record.indicator38,
      indicator39: record.indicator39,
      indicator310: record.indicator310,
      indicator311: record.indicator311,
      indicator312: record.indicator312,
      indicator313: record.indicator313,
      indicator314: record.indicator314,
      indicator315: record.indicator315,
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
            name="indicator31"
            label={i18n('entities.dimensionGPE2.fields.indicator31')}
            options={dimensionGPE2Enumerators.indicator31.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator31.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator32"
            label={i18n('entities.dimensionGPE2.fields.indicator32')}
            options={dimensionGPE2Enumerators.indicator32.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator32.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator33"
            label={i18n('entities.dimensionGPE2.fields.indicator33')}
            options={dimensionGPE2Enumerators.indicator33.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator33.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator34"
            label={i18n('entities.dimensionGPE2.fields.indicator34')}
            options={dimensionGPE2Enumerators.indicator34.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator34.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator35"
            label={i18n('entities.dimensionGPE2.fields.indicator35')}
            options={dimensionGPE2Enumerators.indicator35.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator35.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator36"
            label={i18n('entities.dimensionGPE2.fields.indicator36')}
            options={dimensionGPE2Enumerators.indicator36.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator36.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator37"
            label={i18n('entities.dimensionGPE2.fields.indicator37')}
            options={dimensionGPE2Enumerators.indicator37.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator37.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator38"
            label={i18n('entities.dimensionGPE2.fields.indicator38')}
            options={dimensionGPE2Enumerators.indicator38.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator38.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator39"
            label={i18n('entities.dimensionGPE2.fields.indicator39')}
            options={dimensionGPE2Enumerators.indicator39.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator39.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator310"
            label={i18n('entities.dimensionGPE2.fields.indicator310')}
            options={dimensionGPE2Enumerators.indicator310.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator310.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator311"
            label={i18n('entities.dimensionGPE2.fields.indicator311')}
            options={dimensionGPE2Enumerators.indicator311.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator311.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator312"
            label={i18n('entities.dimensionGPE2.fields.indicator312')}
            options={dimensionGPE2Enumerators.indicator312.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator312.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator313"
            label={i18n('entities.dimensionGPE2.fields.indicator313')}
            options={dimensionGPE2Enumerators.indicator313.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator313.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator314"
            label={i18n('entities.dimensionGPE2.fields.indicator314')}
            options={dimensionGPE2Enumerators.indicator314.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator314.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator315"
            label={i18n('entities.dimensionGPE2.fields.indicator315')}
            options={dimensionGPE2Enumerators.indicator315.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE2.enumerators.indicator315.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <SchoolAutocompleteFormItem  
            name="school"
            label={i18n('entities.dimensionGPE2.fields.school')}
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

export default DimensionGPE2Form;
