import {
  CloseOutlined,
  EnvironmentOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button,Row, Col,  } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  formItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import governmentTeacherInformationEnumerators from 'src/modules/governmentTeacherInformation/governmentTeacherInformationEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';
import DistrictAutocompleteFormItem from 'src/view/district/autocomplete/DistrictAutocompleteFormItem';
import { useGeolocated } from "react-geolocated";

const schema = yup.object().shape({
  school: yupFormSchemas.relationToOne(
    i18n('entities.governmentTeacherInformation.fields.school'),
    {
      "required": true
    },
  ),
  district: yupFormSchemas.relationToOne(
    i18n('entities.governmentTeacherInformation.fields.district'),
    {
      "required": true
    },
  ),
  fullName: yupFormSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.fullName'),
    {
      "required": true
    },
  ),
  gender: yupFormSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.gender'),
    {
      "options": governmentTeacherInformationEnumerators.gender,
      "required": true
    },
  ),
  teacherIDNumber: yupFormSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.teacherIDNumber'),
    {
      "required": true
    },
  ),
  niraID: yupFormSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.niraID'),
    {
      "required": true
    },
  ),
  
  educationLevel: yupFormSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.educationLevel'),
    {
      "options": governmentTeacherInformationEnumerators.educationLevel,
      "required": true
    },
  ),
  graduationYear: yupFormSchemas.date(
    i18n('entities.governmentTeacherInformation.fields.graduationYear'),
    {
      "required": true
    },
  ),
  taughtLevel: yupFormSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.taughtLevel'),
    {
      "options": governmentTeacherInformationEnumerators.taughtLevel,
      "required": true
    },
  ),
  teachingShift: yupFormSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.teachingShift'),
    {
      "options": governmentTeacherInformationEnumerators.teachingShift,
      "required": true
    },
  ),
  gradesTaught: yupFormSchemas.stringArray(
    i18n('entities.governmentTeacherInformation.fields.gradesTaught'),
    {
      "required": true
    },
  ),
  subjectsTaught: yupFormSchemas.stringArray(
    i18n('entities.governmentTeacherInformation.fields.subjectsTaught'),
    {
      "required": true
    },
  ),
  teachertraining: yupFormSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.teachertraining'),
    {
      "options": governmentTeacherInformationEnumerators.teachertraining,
      "required": true
    },
  ),
  trainingNo: yupFormSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.trainingNo'),
    {
      "options": governmentTeacherInformationEnumerators.trainingNo,
      "required": true
    },
  ),
  present: yupFormSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.present'),
    {
      "options": governmentTeacherInformationEnumerators.present,
      "required": true
    },
  ),
  contactNumber: yupFormSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.contactNumber'),
    {
      "required": true
    },
  ),
  experience: yupFormSchemas.integer(
    i18n('entities.governmentTeacherInformation.fields.experience'),
    {
      "required": true
    },
  ),
  joinedYear: yupFormSchemas.date(
    i18n('entities.governmentTeacherInformation.fields.joinedYear'),
    {
      "required": true
    },
  ),
  disablity: yupFormSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.disablity'),
    {
      "options": governmentTeacherInformationEnumerators.disablity,
      "required": true
    },
  ),
  gPSLocation: yupFormSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.gPSLocation'),
    {
      "required": true
    },
  ),
  teacherPhoto: yupFormSchemas.images(
    i18n('entities.governmentTeacherInformation.fields.teacherPhoto'),
    {
      "max": 1,
      "required": true
    },
  ),
  teacherSignature: yupFormSchemas.images(
    i18n('entities.governmentTeacherInformation.fields.teacherSignature'),
    {
      "required": true
    },
  ),
});

const GovernmentTeacherInformationForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      school: record.school,
      state: record.state,
      region: record.region,
      district: record.district,
      fullName: record.fullName,
      gender: record.gender,
      teacherIDNumber: record.teacherIDNumber,
      niraID: record.niraID,
      educationLevel: record.educationLevel,
      graduationYear: record.graduationYear ? moment(record.graduationYear, 'YYYY-MM-DD') : null,
      taughtLevel: record.taughtLevel,
      teachingShift: record.teachingShift,
      gradesTaught: record.gradesTaught || [],
      subjectsTaught: record.subjectsTaught || [],
      teachertraining: record.teachertraining,
      trainingNo: record.trainingNo,
      present: record.present,
      contactNumber: record.contactNumber,
      experience: record.experience,
      joinedYear: record.joinedYear ? moment(record.joinedYear, 'YYYY-MM-DD') : null,
      disablity: record.disablity,
      gPSLocation: record.gPSLocation,
      teacherPhoto: record.teacherPhoto || [],
      teacherSignature: record.teacherSignature || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });
  const { coords,getPosition } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });

  useEffect(() => {
    getPosition()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const onSubmit = (values) => {
    props.onSubmit(props?.record?.id, {...values, gPSLocation:coords});
  };
 


  const { saveLoading } = props;
  const threeColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 8,
    lg: 8,
    xl: 8,
    style: {
      marginBottom: 24,
      padding:5
    },
  };
  const oneColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24,
    style: {
      marginBottom: 24,
      padding:5
    },
  };

  const twoColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 12,
    style: {
      marginBottom: 24,
      padding:5
    },
  };

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <Row>
           <Col  {...oneColumnsResponsiveProps}>
           <SchoolAutocompleteFormItem  
            name="school"
            label={i18n('entities.governmentTeacherInformation.fields.school')}
            required={true}
            size="large"
            layout={formItemLayout}
          />
           </Col>
           <Col {...oneColumnsResponsiveProps}>
            <DistrictAutocompleteFormItem  
              name="district"
              label={i18n('entities.governmentTeacherInformation.fields.district')}
              required={true}
              size="large"
              layout={formItemLayout}
            />
           </Col>
           <Col  {...oneColumnsResponsiveProps}>
            <InputFormItem
              name="fullName"
              label={i18n('entities.governmentTeacherInformation.fields.fullName')}  
              required={true}
              size="large"
              layout={formItemLayout}
            />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
            <SelectFormItem
              name="gender"
              label={i18n('entities.governmentTeacherInformation.fields.gender')}
              options={governmentTeacherInformationEnumerators.gender.map(
                (value) => ({
                  value,
                  label: i18n(
                    `entities.governmentTeacherInformation.enumerators.gender.${value}`,
                  ),
                }),
              )}
              required={true}
              size="large"
              layout={formItemLayout}
            />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
            <InputFormItem
              name="teacherIDNumber"
              label={i18n('entities.governmentTeacherInformation.fields.teacherIDNumber')}  
              required={true}
               size="large"
              layout={formItemLayout}
            />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
            <InputFormItem
              name="niraID"
              label={i18n('entities.governmentTeacherInformation.fields.niraID')}  
              required={true}
              size="large"
              layout={formItemLayout}
            />
           </Col>
         
           <Col {...threeColumnsResponsiveProps}>
           <SelectFormItem
            name="educationLevel"
            label={i18n('entities.governmentTeacherInformation.fields.educationLevel')}
            options={governmentTeacherInformationEnumerators.educationLevel.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.governmentTeacherInformation.enumerators.educationLevel.${value}`,
                ),
              }),
            )}
            required={true}
            size="large"
            layout={formItemLayout}
          />
           </Col>
           <Col {...twoColumnsResponsiveProps}>
            <DatePickerFormItem
              name="graduationYear"
              label={i18n('entities.governmentTeacherInformation.fields.graduationYear')}
              required={true}
              size="large"
              layout={formItemLayout}
            />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
              <RadioFormItem
                name="taughtLevel"
                label={i18n('entities.governmentTeacherInformation.fields.taughtLevel')}
                options={governmentTeacherInformationEnumerators.taughtLevel.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.governmentTeacherInformation.enumerators.taughtLevel.${value}`,
                    ),
                  }),
                )}
                required={true}
                size="large"
                layout={formItemLayout}
              />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
              <RadioFormItem
                name="teachingShift"
                label={i18n('entities.governmentTeacherInformation.fields.teachingShift')}
                options={governmentTeacherInformationEnumerators.teachingShift.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.governmentTeacherInformation.enumerators.teachingShift.${value}`,
                    ),
                  }),
                )}
                required={true}
                size="large"
                layout={formItemLayout}
              />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
              <SelectFormItem
                name="gradesTaught"
                label={i18n('entities.governmentTeacherInformation.fields.gradesTaught')}
                options={governmentTeacherInformationEnumerators.gradesTaught.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.governmentTeacherInformation.enumerators.gradesTaught.${value}`,
                    ),
                  }),
                )}
                required={true}
                size="large"
                layout={formItemLayout}
                mode="multiple"
              />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
              <SelectFormItem
                name="subjectsTaught"
                label={i18n('entities.governmentTeacherInformation.fields.subjectsTaught')}
                options={governmentTeacherInformationEnumerators.subjectsTaught.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.governmentTeacherInformation.enumerators.subjectsTaught.${value}`,
                    ),
                  }),
                )}
                required={true}
                size="large"
                layout={formItemLayout}
                mode="multiple"
              />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
              <RadioFormItem
                name="teachertraining"
                label={i18n('entities.governmentTeacherInformation.fields.teachertraining')}
                options={governmentTeacherInformationEnumerators.teachertraining.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.governmentTeacherInformation.enumerators.teachertraining.${value}`,
                    ),
                  }),
                )}
                required={true}
                size="large"
                layout={formItemLayout}
              />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
           <SelectFormItem
            name="trainingNo"
            label={i18n('entities.governmentTeacherInformation.fields.trainingNo')}
            options={governmentTeacherInformationEnumerators.trainingNo.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.governmentTeacherInformation.enumerators.trainingNo.${value}`,
                ),
              }),
            )}
            required={true}
            size="large"
            layout={formItemLayout}
          />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
              <RadioFormItem
                name="present"
                label={i18n('entities.governmentTeacherInformation.fields.present')}
                options={governmentTeacherInformationEnumerators.present.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.governmentTeacherInformation.enumerators.present.${value}`,
                    ),
                  }),
                )}
                required={true}
                size="large"
                layout={formItemLayout}
              />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
              <InputFormItem
                name="contactNumber"
                label={i18n('entities.governmentTeacherInformation.fields.contactNumber')}  
                required={true}
                size="large"
                layout={formItemLayout}
              />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
              <InputNumberFormItem
                name="experience"
                label={i18n('entities.governmentTeacherInformation.fields.experience')}  
                required={true}
                size="large"
                layout={formItemLayout}
              />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
            <DatePickerFormItem
              name="joinedYear"
              label={i18n('entities.governmentTeacherInformation.fields.joinedYear')}
              required={true}
              size="large"
              layout={formItemLayout}
            />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
            <RadioFormItem
              name="disablity"
              label={i18n('entities.governmentTeacherInformation.fields.disablity')}
              options={governmentTeacherInformationEnumerators.disablity.map(
                (value) => ({
                  value,
                  label: i18n(
                    `entities.governmentTeacherInformation.enumerators.disablity.${value}`,
                  ),
                }),
              )}
              required={true}
              size="large"
              layout={formItemLayout}
            />
           </Col>
           <Col {...threeColumnsResponsiveProps}>
            <InputFormItem
              name="gPSLocation"
              label={i18n('entities.governmentTeacherInformation.fields.gPSLocation')}  
              required={true}
              size="large"
              disabled={true}
              layout={formItemLayout}
              addonBefore={<EnvironmentOutlined rev={undefined} onClick={()=>{
                getPosition()
                form.setValue('gPSLocation', `lAT:${coords?.latitude} & LONG: ${coords?.longitude}`,{ shouldValidate: true, shouldDirty: true } )
              }}/>}
            />
           </Col>
           <Col {...twoColumnsResponsiveProps}>
            <ImagesFormItem
              name="teacherPhoto"
              label={i18n('entities.governmentTeacherInformation.fields.teacherPhoto')}
              required={true}
              storage={Storage.values.governmentTeacherInformationTeacherPhoto}
              max={1}
              layout={formItemLayout}
            />
           </Col>
           <Col {...twoColumnsResponsiveProps}>
            <ImagesFormItem
              name="teacherSignature"
              label={i18n('entities.governmentTeacherInformation.fields.teacherSignature')}
              required={true}
              storage={Storage.values.governmentTeacherInformationTeacherSignature}
              max={undefined}
              layout={formItemLayout}
            />
           </Col>
         
          <Row gutter={24} style={{ width:'100%'}}>
            <Col span={8}>
            <Button
              loading={saveLoading}
              type="primary"
              size='large'
              block
              onClick={form.handleSubmit(onSubmit)}
              icon={<SaveOutlined rev={undefined} />}
            >
              {i18n('common.save')}
            </Button>
            </Col>
            <Col span={8}>
              <Button
                disabled={saveLoading}
                onClick={onReset}
                size='large'
                block
                icon={<UndoOutlined rev={undefined} />}
              >
                {i18n('common.reset')}
              </Button>
            </Col>
            <Col span={8}>
            {props.onCancel && (
              <Button
                disabled={saveLoading}
                size='large'
                block
                onClick={() => props.onCancel()}
                icon={<CloseOutlined rev={undefined} />}
              >
                {i18n('common.cancel')}
              </Button>
            )}
            </Col>
          </Row>
        </Row>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default GovernmentTeacherInformationForm;
