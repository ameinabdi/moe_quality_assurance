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
import dimensionGPE5Enumerators from 'src/modules/dimensionGPE5/dimensionGPE5Enumerators';
import TeacherGPEAutocompleteFormItem from 'src/view/teacherGPE/autocomplete/TeacherGPEAutocompleteFormItem';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';

const schema = yup.object().shape({
  indicator51: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator51'),
    {
      "required": true,
      "options": dimensionGPE5Enumerators.indicator51
    },
  ),
  indicator52: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator52'),
    {
      "required": true,
      "options": dimensionGPE5Enumerators.indicator52
    },
  ),
  indicator53: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator53'),
    {
      "required": true,
      "options": dimensionGPE5Enumerators.indicator53
    },
  ),
  indicator54: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator54'),
    {
      "required": true,
      "options": dimensionGPE5Enumerators.indicator54
    },
  ),
  indicator55: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator55'),
    {
      "required": true,
      "options": dimensionGPE5Enumerators.indicator55
    },
  ),
  indicator56: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator56'),
    {
      "required": true,
      "options": dimensionGPE5Enumerators.indicator56
    },
  ),
  indicator57: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator57'),
    {
      "required": true,
      "options": dimensionGPE5Enumerators.indicator57
    },
  ),
  indicator58: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator58'),
    {
      "options": dimensionGPE5Enumerators.indicator58
    },
  ),
  indicator59: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator59'),
    {
      "options": dimensionGPE5Enumerators.indicator59
    },
  ),
  indicator510: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator510'),
    {
      "options": dimensionGPE5Enumerators.indicator510
    },
  ),
  indicator511: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator511'),
    {
      "options": dimensionGPE5Enumerators.indicator511
    },
  ),
  indicator512: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator512'),
    {
      "options": dimensionGPE5Enumerators.indicator512
    },
  ),
  indicator513: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator513'),
    {
      "options": dimensionGPE5Enumerators.indicator513
    },
  ),
  indicator514: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator514'),
    {
      "options": dimensionGPE5Enumerators.indicator514
    },
  ),
  indicator515: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator515'),
    {
      "options": dimensionGPE5Enumerators.indicator515
    },
  ),
  indicator516: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator516'),
    {
      "options": dimensionGPE5Enumerators.indicator516
    },
  ),
  indicator517: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator517'),
    {
      "options": dimensionGPE5Enumerators.indicator517
    },
  ),
  indicator518: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator518'),
    {
      "options": dimensionGPE5Enumerators.indicator518
    },
  ),
  indicator519: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator519'),
    {
      "options": dimensionGPE5Enumerators.indicator519
    },
  ),
  indicator520: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator520'),
    {
      "options": dimensionGPE5Enumerators.indicator520
    },
  ),
  indicator521: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator521'),
    {
      "options": dimensionGPE5Enumerators.indicator521
    },
  ),
  indicator522: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator522'),
    {
      "options": dimensionGPE5Enumerators.indicator522
    },
  ),
  indicator523: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator523'),
    {
      "required": true,
      "options": dimensionGPE5Enumerators.indicator523
    },
  ),
  indicator524: yupFormSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator524'),
    {
      "required": true,
      "options": dimensionGPE5Enumerators.indicator524
    },
  ),
  teacher: yupFormSchemas.relationToOne(
    i18n('entities.dimensionGPE5.fields.teacher'),
    {
      "required": true
    },
  ),
  school: yupFormSchemas.relationToOne(
    i18n('entities.dimensionGPE5.fields.school'),
    {
      "required": true
    },
  ),
});

const DimensionGPE5Form = (props) => {
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
      indicator521: record.indicator521,
      indicator522: record.indicator522,
      indicator523: record.indicator523,
      indicator524: record.indicator524,
      teacher: record.teacher,
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
            label={i18n('entities.dimensionGPE5.fields.indicator51')}
            options={dimensionGPE5Enumerators.indicator51.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator51.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator52"
            label={i18n('entities.dimensionGPE5.fields.indicator52')}
            options={dimensionGPE5Enumerators.indicator52.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator52.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator53"
            label={i18n('entities.dimensionGPE5.fields.indicator53')}
            options={dimensionGPE5Enumerators.indicator53.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator53.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator54"
            label={i18n('entities.dimensionGPE5.fields.indicator54')}
            options={dimensionGPE5Enumerators.indicator54.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator54.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator55"
            label={i18n('entities.dimensionGPE5.fields.indicator55')}
            options={dimensionGPE5Enumerators.indicator55.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator55.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator56"
            label={i18n('entities.dimensionGPE5.fields.indicator56')}
            options={dimensionGPE5Enumerators.indicator56.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator56.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator57"
            label={i18n('entities.dimensionGPE5.fields.indicator57')}
            options={dimensionGPE5Enumerators.indicator57.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator57.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator58"
            label={i18n('entities.dimensionGPE5.fields.indicator58')}
            options={dimensionGPE5Enumerators.indicator58.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator58.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator59"
            label={i18n('entities.dimensionGPE5.fields.indicator59')}
            options={dimensionGPE5Enumerators.indicator59.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator59.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator510"
            label={i18n('entities.dimensionGPE5.fields.indicator510')}
            options={dimensionGPE5Enumerators.indicator510.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator510.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator511"
            label={i18n('entities.dimensionGPE5.fields.indicator511')}
            options={dimensionGPE5Enumerators.indicator511.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator511.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator512"
            label={i18n('entities.dimensionGPE5.fields.indicator512')}
            options={dimensionGPE5Enumerators.indicator512.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator512.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator513"
            label={i18n('entities.dimensionGPE5.fields.indicator513')}
            options={dimensionGPE5Enumerators.indicator513.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator513.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator514"
            label={i18n('entities.dimensionGPE5.fields.indicator514')}
            options={dimensionGPE5Enumerators.indicator514.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator514.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator515"
            label={i18n('entities.dimensionGPE5.fields.indicator515')}
            options={dimensionGPE5Enumerators.indicator515.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator515.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator516"
            label={i18n('entities.dimensionGPE5.fields.indicator516')}
            options={dimensionGPE5Enumerators.indicator516.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator516.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator517"
            label={i18n('entities.dimensionGPE5.fields.indicator517')}
            options={dimensionGPE5Enumerators.indicator517.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator517.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator518"
            label={i18n('entities.dimensionGPE5.fields.indicator518')}
            options={dimensionGPE5Enumerators.indicator518.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator518.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator519"
            label={i18n('entities.dimensionGPE5.fields.indicator519')}
            options={dimensionGPE5Enumerators.indicator519.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator519.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator520"
            label={i18n('entities.dimensionGPE5.fields.indicator520')}
            options={dimensionGPE5Enumerators.indicator520.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator520.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator521"
            label={i18n('entities.dimensionGPE5.fields.indicator521')}
            options={dimensionGPE5Enumerators.indicator521.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator521.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator522"
            label={i18n('entities.dimensionGPE5.fields.indicator522')}
            options={dimensionGPE5Enumerators.indicator522.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator522.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <RadioFormItem
            name="indicator523"
            label={i18n('entities.dimensionGPE5.fields.indicator523')}
            options={dimensionGPE5Enumerators.indicator523.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator523.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="indicator524"
            label={i18n('entities.dimensionGPE5.fields.indicator524')}
            options={dimensionGPE5Enumerators.indicator524.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.dimensionGPE5.enumerators.indicator524.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
          <TeacherGPEAutocompleteFormItem  
            name="teacher"
            label={i18n('entities.dimensionGPE5.fields.teacher')}
            required={true}
            showCreate={!props.modal}
            layout={formItemLayout}
          />
          <SchoolAutocompleteFormItem  
            name="school"
            label={i18n('entities.dimensionGPE5.fields.school')}
            required={true}
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

export default DimensionGPE5Form;
