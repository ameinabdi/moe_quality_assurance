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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import schoolEnumerators from 'src/modules/school/schoolEnumerators';

const schema = yup.object().shape({
  schoolName: yupFormSchemas.string(
    i18n('entities.school.fields.schoolName'),
    {
      "required": true
    },
  ),
  schoolLevel: yupFormSchemas.stringArray(
    i18n('entities.school.fields.schoolLevel'),
    {},
  ),
  schoolType: yupFormSchemas.enumerator(
    i18n('entities.school.fields.schoolType'),
    {
      "options": schoolEnumerators.schoolType
    },
  ),
  schoolPhone: yupFormSchemas.string(
    i18n('entities.school.fields.schoolPhone'),
    {},
  ),
  schoolEmail: yupFormSchemas.string(
    i18n('entities.school.fields.schoolEmail'),
    {},
  ),
  schoolLocation: yupFormSchemas.string(
    i18n('entities.school.fields.schoolLocation'),
    {},
  ),
  schoolEMISNumber: yupFormSchemas.string(
    i18n('entities.school.fields.schoolEMISNumber'),
    {},
  ),
  classes: yupFormSchemas.string(
    i18n('entities.school.fields.classes'),
    {},
  ),
  toilets: yupFormSchemas.integer(
    i18n('entities.school.fields.toilets'),
    {},
  ),
  maleStaff: yupFormSchemas.integer(
    i18n('entities.school.fields.maleStaff'),
    {},
  ),
  femaleStaff: yupFormSchemas.integer(
    i18n('entities.school.fields.femaleStaff'),
    {},
  ),
  nonTeachingFemaleStaff: yupFormSchemas.integer(
    i18n('entities.school.fields.nonTeachingFemaleStaff'),
    {},
  ),
  nonTeachingMaleStaff: yupFormSchemas.integer(
    i18n('entities.school.fields.nonTeachingMaleStaff'),
    {},
  ),
  headTeacher: yupFormSchemas.string(
    i18n('entities.school.fields.headTeacher'),
    {
      "required": true
    },
  ),
  headsex: yupFormSchemas.enumerator(
    i18n('entities.school.fields.headsex'),
    {
      "options": schoolEnumerators.headsex
    },
  ),
  headTeacherPhone: yupFormSchemas.string(
    i18n('entities.school.fields.headTeacherPhone'),
    {},
  ),
  headTeacherLevelEduction: yupFormSchemas.string(
    i18n('entities.school.fields.headTeacherLevelEduction'),
    {},
  ),
});

const SchoolForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      schoolName: record.schoolName,
      schoolLevel: record.schoolLevel || [],
      schoolType: record.schoolType,
      schoolPhone: record.schoolPhone,
      schoolEmail: record.schoolEmail,
      schoolLocation: record.schoolLocation,
      schoolEMISNumber: record.schoolEMISNumber,
      classes: record.classes,
      toilets: record.toilets,
      maleStaff: record.maleStaff,
      femaleStaff: record.femaleStaff,
      nonTeachingFemaleStaff: record.nonTeachingFemaleStaff,
      nonTeachingMaleStaff: record.nonTeachingMaleStaff,
      headTeacher: record.headTeacher,
      headsex: record.headsex,
      headTeacherPhone: record.headTeacherPhone,
      headTeacherLevelEduction: record.headTeacherLevelEduction,
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
          <InputFormItem
            name="schoolName"
            label={i18n('entities.school.fields.schoolName')}  
            required={true}
            layout={formItemLayout}
            autoFocus
          />
          <SelectFormItem
            name="schoolLevel"
            label={i18n('entities.school.fields.schoolLevel')}
            options={schoolEnumerators.schoolLevel.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.school.enumerators.schoolLevel.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
            mode="multiple"
          />
          <SelectFormItem
            name="schoolType"
            label={i18n('entities.school.fields.schoolType')}
            options={schoolEnumerators.schoolType.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.school.enumerators.schoolType.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="schoolPhone"
            label={i18n('entities.school.fields.schoolPhone')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="schoolEmail"
            label={i18n('entities.school.fields.schoolEmail')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="schoolLocation"
            label={i18n('entities.school.fields.schoolLocation')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="schoolEMISNumber"
            label={i18n('entities.school.fields.schoolEMISNumber')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="classes"
            label={i18n('entities.school.fields.classes')}
            hint={i18n('entities.school.hints.classes')}  
            required={false}
            layout={formItemLayout}
          />
          <InputNumberFormItem
            name="toilets"
            label={i18n('entities.school.fields.toilets')}
            hint={i18n('entities.school.hints.toilets')}  
            required={false}
            layout={formItemLayout}
          />
          <InputNumberFormItem
            name="maleStaff"
            label={i18n('entities.school.fields.maleStaff')}  
            required={false}
            layout={formItemLayout}
          />
          <InputNumberFormItem
            name="femaleStaff"
            label={i18n('entities.school.fields.femaleStaff')}
            hint={i18n('entities.school.hints.femaleStaff')}  
            required={false}
            layout={formItemLayout}
          />
          <InputNumberFormItem
            name="nonTeachingFemaleStaff"
            label={i18n('entities.school.fields.nonTeachingFemaleStaff')}  
            required={false}
            layout={formItemLayout}
          />
          <InputNumberFormItem
            name="nonTeachingMaleStaff"
            label={i18n('entities.school.fields.nonTeachingMaleStaff')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="headTeacher"
            label={i18n('entities.school.fields.headTeacher')}
            hint={i18n('entities.school.hints.headTeacher')}  
            required={true}
            layout={formItemLayout}
          />
          <SelectFormItem
            name="headsex"
            label={i18n('entities.school.fields.headsex')}
            options={schoolEnumerators.headsex.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.school.enumerators.headsex.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="headTeacherPhone"
            label={i18n('entities.school.fields.headTeacherPhone')}  
            required={false}
            layout={formItemLayout}
          />
          <InputFormItem
            name="headTeacherLevelEduction"
            label={i18n('entities.school.fields.headTeacherLevelEduction')}  
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

export default SchoolForm;
