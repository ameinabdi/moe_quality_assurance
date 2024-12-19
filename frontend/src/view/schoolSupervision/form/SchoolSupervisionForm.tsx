import { Button, Row, Col, Table, Card, Typography, Steps, Progress} from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  formItemLayout,
} from 'src/view/shared/styles/FormWrapper';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import schoolEnumerators from 'src/modules/school/schoolEnumerators';
import dimensionSsv1Enumerators from 'src/modules/dimensionSsv1/dimensionSsv1Enumerators';
import dimensionSsv2Enumerators from 'src/modules/dimensionSsv2/dimensionSsv2Enumerators';
import parse from 'html-react-parser';
import CustomCheckboxFormItem from 'src/view/shared/form/items/CustomCheckboxFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import StepsDiv from 'src/view/layout/styles/steps';
import _ from 'lodash';
import DistrictAutocompleteFormItem from 'src/view/district/autocomplete/DistrictAutocompleteFormItem';

const { Text, Title } = Typography;

const schema = yup.object().shape({
  finalizedDate: yupFormSchemas.date(
    i18n('entities.sSASurvey.fields.finalizedDate'),
    {},
  ),
  principal: yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.principal'),
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
  signatureofprincipal: yupFormSchemas.images(
    i18n('entities.sSASurvey.fields.signatureofprincipal'),
    {
      "required": true
    },
  ),
  schoolStamp: yupFormSchemas.images(
    i18n('entities.sSASurvey.fields.schoolStamp'),
    {
      "required": true
    },
  ),
  schoolImprovement: yupFormSchemas.files(
    i18n('entities.sSASurvey.fields.schoolImprovement'),
    {
      "required": true
    },
  ),
  teacherAttedance: yupFormSchemas.files(
    i18n('entities.sSASurvey.fields.teacherAttedance'),
    {
      "required": true
    },
  ),
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
    {
      "required": true
    },
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
      "options": schoolEnumerators.headsex,
      "required": true
    },
  ),
  headTeacherPhone: yupFormSchemas.string(
    i18n('entities.school.fields.headTeacherPhone'),
    {
      "required": true
    },
  ),
  headTeacherLevelEduction: yupFormSchemas.string(
    i18n('entities.school.fields.headTeacherLevelEduction'),
    {
      "required": true
    },
  ),
  indicator11: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator11'),
    {
      "options": dimensionSsv1Enumerators.indicator11,
      "required": true   
    },
  ),
  indicator12: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator12'),
    {
      "options": dimensionSsv1Enumerators.indicator12,
       "required": true
    
    },
  ),
  indicator13: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator13'),
    {
      "options": dimensionSsv1Enumerators.indicator13,
       "required": true
    
    },
  ),
  indicator14: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator14'),
    {
      "options": dimensionSsv1Enumerators.indicator14,
       "required": true
    
    },
  ),
  indicator15: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator15'),
    {
      "options": dimensionSsv1Enumerators.indicator15,
       "required": true
    
    },
  ),
  indicator16: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator16'),
    {
      "options": dimensionSsv1Enumerators.indicator16,
       "required": true
    
    },
  ),
  indicator17: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator17'),
    {
      "options": dimensionSsv1Enumerators.indicator17,
       "required": true
    
    },
  ),
  indicator18: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator18'),
    {
      "options": dimensionSsv1Enumerators.indicator18,
       "required": true
    
    },
  ),
  indicator19: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator19'),
    {
      "options": dimensionSsv1Enumerators.indicator19,
       "required": true
    
    },
  ),
  indicator110: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator110'),
    {
      "options": dimensionSsv1Enumerators.indicator110,
       "required": true
    
    },
  ),
  indicator111: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator111'),
    {
      "options": dimensionSsv1Enumerators.indicator111,
       "required": true
    
    },
  ),
  indicator112: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator112'),
    {
      "options": dimensionSsv1Enumerators.indicator112,
       "required": true
    
    },
  ),
  indicator113: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator113'),
    {
      "options": dimensionSsv1Enumerators.indicator113,
       "required": true
    
    },
  ),
  indicator114: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator114'),
    {
      "options": dimensionSsv1Enumerators.indicator114,
       "required": true
    
    },
  ),
  indicator31: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator31'),
    {
      "options": dimensionSsv2Enumerators.indicator31,
      "required": true
      
    },
  ),
  indicator32: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator32'),
    {
      "options": dimensionSsv2Enumerators.indicator32,
      "required": true
    },
  ),
  indicator33: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator33'),
    {
      "options": dimensionSsv2Enumerators.indicator33,
      "required": true
    },
  ),
  indicator34: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator34'),
    {
      "options": dimensionSsv2Enumerators.indicator34,
      "required": true
    },
  ),
  indicator35: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator35'),
    {
      "options": dimensionSsv2Enumerators.indicator35,
      "required": true
    },
  ),
  indicator36: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator36'),
    {
      "options": dimensionSsv2Enumerators.indicator36,
      "required": true
    },
  ),
  indicator37: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator37'),
    {
      "options": dimensionSsv2Enumerators.indicator37,
      "required": true
    },
  ),
  indicator38: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator38'),
    {
      "options": dimensionSsv2Enumerators.indicator38,
      "required": true
    },
  ),
  indicator39: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator39'),
    {
      "options": dimensionSsv2Enumerators.indicator39,
      "required": true
    },
  ),
  indicator310: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator310'),
    {
      "options": dimensionSsv2Enumerators.indicator310,
      "required": true
    },
  ),
  indicator311: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator311'),
    {
      "options": dimensionSsv2Enumerators.indicator311,
      "required": true
    },
  ),
  indicator312: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator312'),
    {
      "options": dimensionSsv2Enumerators.indicator312,
      "required": true
    },
  ),
  indicator313: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator313'),
    {
      "options": dimensionSsv2Enumerators.indicator313,
      "required": true
    },
  ),
  indicator314: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator314'),
    {
      "options": dimensionSsv2Enumerators.indicator314,
      "required": true
    },
  ),
  indicator315: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv2.fields.indicator315'),
    {
      "options": dimensionSsv2Enumerators.indicator315,
      "required": true
    },
  ),
  dimension1Challenge :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension1Challenge'),
    {
      
    },
  ),
  dimension1Mark :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension1Mark'),
    {
      
    },
  ),
  dimension1Solutions :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension1Solution'),
    {
      
    },
  ),
  dimension3Challenge :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension3Challenge'),
    {
      
    },
  ),
  dimension3Mark :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension3Mark'),
    {
      
    },
  ),
  dimension3Solutions :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension3Solution'),
    {
      
    },
  ),
});

const SchoolSupervisionForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      schoolName: record?.school?.schoolName,
      schoolLevel: record?.school?.schoolLevel || [],
      schoolType: record?.school?.schoolType,
      schoolPhone: record?.school?.schoolPhone,
      schoolEmail: record?.school?.schoolEmail,
      district: record.district,
      schoolLocation: record?.school?.schoolLocation,
      schoolEMISNumber: record?.school?.schoolEMISNumber,
      classes: record?.school?.classes,
      toilets: record?.school?.toilets,
      maleStaff: record?.school?.maleStaff,
      femaleStaff: record?.school?.femaleStaff,
      nonTeachingFemaleStaff: record?.school?.nonTeachingFemaleStaff,
      nonTeachingMaleStaff: record?.school?.nonTeachingMaleStaff,
      headTeacher: record?.school?.headTeacher,
      headsex: record?.school?.headsex,
      headTeacherPhone: record?.school?.headTeacherPhone,
      headTeacherLevelEduction: record?.school?.headTeacherLevelEduction,

      indicator11: record?.dimension1?.indicator11,
      indicator12: record?.dimension1?.indicator12,
      indicator13: record?.dimension1?.indicator13,
      indicator14: record?.dimension1?.indicator14,
      indicator15: record?.dimension1?.indicator15,
      indicator16: record?.dimension1?.indicator16,
      indicator17: record?.dimension1?.indicator17,
      indicator18: record?.dimension1?.indicator18,
      indicator19: record?.dimension1?.indicator19,
      indicator110: record?.dimension1?.indicator110,
      indicator111: record?.dimension1?.indicator111,
      indicator112: record?.dimension1?.indicator112,
      indicator113: record?.dimension1?.indicator113,
      indicator114: record?.dimension1?.indicator114,

      indicator31: record?.dimension3?.indicator31,
      indicator32: record?.dimension3?.indicator32,
      indicator33: record?.dimension3?.indicator33,
      indicator34: record?.dimension3?.indicator34,
      indicator35: record?.dimension3?.indicator35,
      indicator36: record?.dimension3?.indicator36,
      indicator37: record?.dimension3?.indicator37,
      indicator38: record?.dimension3?.indicator38,
      indicator39: record?.dimension3?.indicator39,
      indicator310: record?.dimension3?.indicator310,
      indicator311: record?.dimension3?.indicator311,
      indicator312: record?.dimension3?.indicator312,
      indicator313: record?.dimension3?.indicator313,
      indicator314: record?.dimension3?.indicator314,
      indicator315: record?.dimension3?.indicator315,


      finalizedDate: record.finalizedDate ? moment(record.finalizedDate, 'YYYY-MM-DD') : null,
      principal: record.principal,
      signatureofprincipal: record.signatureofprincipal || [],
      introduction: record.introduction,
      guidelines: record.guidelines,
      school: record.school,
      schoolStamp: record.schoolStamp || [],
      schoolImprovement: record.schoolImprovement || [],
      teacherAttedance:record.teacherAttedance || [],

      dimension1Challenge: record.dimension1Challenge || null,
      dimension1Mark: record.dimension1Mark || null,
      dimension1Solution: record.dimension1Solution || null,

      dimension3Challenge: record.dimension3Challenge || null,
      dimension3Mark: record.dimension3Mark || null,
      dimension3Solution: record.dimension3Solution || null,
      
    };
  });
  const [current, setCurrent] = useState(0);

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const next =  () => {
    setCurrent(current + 1);
  };
  
  const prev = () => {
    setCurrent(current - 1);
  };
  const columnIndicator = [
    {
      title: i18n('entities.sSASurvey.fields.ratingAwarded'),
      sorter: true,
      dataIndex: 'ratingAwarded',    
    },
    {
      title: i18n('entities.sSASurvey.fields.descriptor'),
      sorter: true,
      dataIndex: 'descriptor',
    },
    {
      title: i18n('entities.sSASurvey.fields.looking'),
      sorter: false,
      dataIndex: 'looking',
    },
    {
      title: i18n('entities.sSASurvey.fields.evidence'),
      sorter: true,
      dataIndex: 'evidence',
    },
    {
      title: i18n('entities.sSASurvey.fields.interpretation'),
      sorter: true,
      dataIndex: 'interpretation',
    },
  ];

  const dataIndicator =[
    {
      ratingAwarded:'1',
      descriptor: i18n('entities.sSASurvey.fields.descriptor_1'),
      looking: i18n('entities.sSASurvey.fields.looking_1'),
      evidence: i18n('entities.sSASurvey.fields.evidence_1'),
      interpretation: parse(i18n('entities.sSASurvey.fields.interpretation_1')) 
    },
    {
      ratingAwarded:'3',
      descriptor: i18n('entities.sSASurvey.fields.descriptor_3'),
      looking: i18n('entities.sSASurvey.fields.looking_3'),
      evidence: i18n('entities.sSASurvey.fields.evidence_3'),
      interpretation: parse(i18n('entities.sSASurvey.fields.interpretation_3'))
    },
    {
      ratingAwarded:'5',
      descriptor: i18n('entities.sSASurvey.fields.descriptor_5'),
      looking: i18n('entities.sSASurvey.fields.looking_5'),
      evidence: i18n('entities.sSASurvey.fields.evidence_5'),
      interpretation: parse(i18n('entities.sSASurvey.fields.interpretation_5'))
    },
    
  ]

  const columns = [
    {
      title: i18n('entities.sSASurvey.fields.No'),
      sorter: true,
      dataIndex: 'no',    },
    {
      title: i18n('entities.sSASurvey.fields.DIMENSIONS'),
      sorter: true,
      dataIndex: 'DIMENSIONS',
    },
    {
      title: i18n('entities.sSASurvey.fields.Indicators'),
      sorter: false,
      dataIndex: 'indicators',
    },
    {
      title: i18n('entities.sSASurvey.fields.value'),
      sorter: true,
      dataIndex: 'value',
    },
  ];

  const data =[
    {
      no:'1',
      DIMENSIONS: i18n('entities.schoolSupervision.fields.dimension1'),
      indicators:'14',
      value:'20%'
    },
    {
      no:'3',
      DIMENSIONS:i18n('entities.schoolSupervision.fields.dimension2'),
      indicators:'15',
      value:'40%'
    },
   
    {
      no:'5',
      DIMENSIONS:i18n('entities.schoolSupervision.fields.dimension3'),
      indicators:'20',
      value:'40%'
    }
  ]

  const dimensionColumns = [
    {
      title: i18n('entities.sSASurvey.fields.No'),
      sorter: true,
      dataIndex: 'no',   
      width:'5%'
    },
    {
      title: i18n('entities.sSASurvey.fields.Indicator'),
      sorter: true,
      dataIndex: 'indicator',
      width:'50%'
    },
    {
      title: i18n('entities.sSASurvey.fields.1'),
      sorter: true,
      dataIndex: '1',
      width:'10%'
    },
    {
      title: i18n('entities.sSASurvey.fields.2'),
      sorter: true,
      dataIndex: '2',
      width:'10%'
    },
    {
      title: i18n('entities.sSASurvey.fields.3'),
      sorter: true,
      dataIndex: '3',
      width:'5%'
    },
    {
      title: i18n('entities.sSASurvey.fields.4'),
      sorter: true,
      dataIndex: '4',
      width:'5%'
    },
    {
      title: i18n('entities.sSASurvey.fields.5'),
      sorter: true,
      dataIndex: '5',
      width:'5%'
    },
    
  ];

  const sectionCColumns = [
    {
      title: i18n('entities.sSASurvey.fields.aspect'),
      sorter: true,
      dataIndex: 'aspect',   
      width:'25%'
    },
    {
      title: i18n('entities.sSASurvey.fields.challenge'),
      sorter: true,
      dataIndex: 'challenge',
      width:'25%'
    },
    {
      title: i18n('entities.sSASurvey.fields.rating'),
      sorter: true,
      dataIndex: 'rating',
      width:'25%'
    },
    {
      title: i18n('entities.sSASurvey.fields.solution'),
      sorter: true,
      dataIndex: 'solution',
      width:'25%'
    },
    
  ];

  const twoColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 12,
    style: {
      marginBottom: 24,
    },
  };

  const threeColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 8,
    lg: 8,
    xl: 8,
    style: {
      marginBottom: 24,
    },
  };
  const fourColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 6,
    lg: 6,
    xl: 6,
    style: {
      marginBottom: 24,
    },
  };

  const sexColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 4,
    lg: 4,
    xl: 4,
    style: {
      marginBottom: 24,
    },
  };


  const dimension1 =[
    {
      no:'1',
      indicator:i18n('entities.dimension1.fields.indicator11'),
      1:(<CustomCheckboxFormItem
        name="indicator11"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator11"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator11"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator11"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator11"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'2',
      indicator:i18n('entities.dimension1.fields.indicator12'),
      1:(<CustomCheckboxFormItem
        name="indicator12"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator12"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator12"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator12"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator12"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'3',
      indicator:i18n('entities.dimension1.fields.indicator13'),
      1:(<CustomCheckboxFormItem
        name="indicator13"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator13"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator13"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator13"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator13"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'4',
      indicator:i18n('entities.dimension1.fields.indicator14'),
      1:(<CustomCheckboxFormItem
        name="indicator14"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator14"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator14"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator14"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator14"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'5',
      indicator:i18n('entities.dimension1.fields.indicator15'),
      1:(<CustomCheckboxFormItem
        name="indicator15"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator15"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator15"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator15"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator15"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'6',
      indicator:i18n('entities.dimension1.fields.indicator16'),
      1:(<CustomCheckboxFormItem
        name="indicator16"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator16"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator16"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator16"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator16"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'7',
      indicator:i18n('entities.dimension1.fields.indicator17'),
      1:(<CustomCheckboxFormItem
        name="indicator17"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator17"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator17"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator17"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator17"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'8',
      indicator:i18n('entities.dimension1.fields.indicator18'),
      1:(<CustomCheckboxFormItem
        name="indicator18"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator18"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator18"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator18"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator18"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'9',
      indicator:i18n('entities.dimension1.fields.indicator19'),
      1:(<CustomCheckboxFormItem
        name="indicator19"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator19"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator19"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator19"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator19"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'10',
      indicator:i18n('entities.dimension1.fields.indicator110'),
      1:(<CustomCheckboxFormItem
        name="indicator110"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator110"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator110"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator110"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator110"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'11',
      indicator:i18n('entities.dimension1.fields.indicator111'),
      1:(<CustomCheckboxFormItem
        name="indicator111"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator111"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator111"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator111"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator111"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'12',
      indicator:i18n('entities.dimension1.fields.indicator112'),
      1:(<CustomCheckboxFormItem
        name="indicator112"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator112"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator112"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator112"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator112"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'13',
      indicator:i18n('entities.dimension1.fields.indicator113'),
      1:(<CustomCheckboxFormItem
        name="indicator113"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator113"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator113"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator113"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator113"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'14',
      indicator:i18n('entities.dimension1.fields.indicator114'),
      1:(<CustomCheckboxFormItem
        name="indicator114"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator114"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator114"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator114"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator114"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
   
  ]
  const dimension3 =[
    {
      no:'1',
      indicator:i18n('entities.dimension3.fields.indicator31'),
      1:(<CustomCheckboxFormItem
        name="indicator31"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator31"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator31"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator31"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator31"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'2',
      indicator:i18n('entities.dimension3.fields.indicator32'),
      1:(<CustomCheckboxFormItem
        name="indicator32"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator32"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator32"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator32"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator32"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'3',
      indicator:i18n('entities.dimension3.fields.indicator33'),
      1:(<CustomCheckboxFormItem
        name="indicator33"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator33"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator33"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator33"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator33"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'4',
      indicator:i18n('entities.dimension3.fields.indicator34'),
      1:(<CustomCheckboxFormItem
        name="indicator34"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator34"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator34"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator34"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator34"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'5',
      indicator:i18n('entities.dimension3.fields.indicator35'),
      1:(<CustomCheckboxFormItem
        name="indicator35"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator35"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator35"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator35"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator35"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'6',
      indicator:i18n('entities.dimension3.fields.indicator36'),
      1:(<CustomCheckboxFormItem
        name="indicator36"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator36"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator36"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator36"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator36"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'7',
      indicator:i18n('entities.dimension3.fields.indicator37'),
      1:(<CustomCheckboxFormItem
        name="indicator37"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator37"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator37"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator37"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator37"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'8',
      indicator:i18n('entities.dimension3.fields.indicator38'),
      1:(<CustomCheckboxFormItem
        name="indicator38"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator38"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator38"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator38"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator38"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'9',
      indicator:i18n('entities.dimension3.fields.indicator39'),
      1:(<CustomCheckboxFormItem
        name="indicator39"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator39"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator39"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator39"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator39"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'10',
      indicator:i18n('entities.dimension3.fields.indicator310'),
      1:(<CustomCheckboxFormItem
        name="indicator310"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator310"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator310"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator310"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator310"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'11',
      indicator:i18n('entities.dimension3.fields.indicator311'),
      1:(<CustomCheckboxFormItem
        name="indicator311"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator311"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator311"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator311"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator311"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'12',
      indicator:i18n('entities.dimension3.fields.indicator312'),
      1:(<CustomCheckboxFormItem
        name="indicator312"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator312"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator312"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator312"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator312"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'13',
      indicator:i18n('entities.dimension3.fields.indicator313'),
      1:(<CustomCheckboxFormItem
        name="indicator313"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator313"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator313"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator313"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator313"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'14',
      indicator:i18n('entities.dimension3.fields.indicator314'),
      1:(<CustomCheckboxFormItem
        name="indicator314"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator314"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator314"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator314"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator314"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'15',
      indicator:i18n('entities.dimension3.fields.indicator315'),
      1:(<CustomCheckboxFormItem
        name="indicator315"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator315"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator315"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator315"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator315"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },

  ]



  const dimension1RateEachIndicator =40/14
  const dimension1RateEachRate = dimension1RateEachIndicator/5
  const totaldimension1 = ((form.watch('indicator11')*dimension1RateEachRate)+(form.watch('indicator12')*dimension1RateEachRate)+(form.watch('indicator13')*dimension1RateEachRate)+(form.watch('indicator14')*dimension1RateEachRate)+(form.watch('indicator15')*dimension1RateEachRate)+(form.watch('indicator16')*dimension1RateEachRate)+(form.watch('indicator17')*dimension1RateEachRate)+(form.watch('indicator18')*dimension1RateEachRate)+(form.watch('indicator19')*dimension1RateEachRate)+(form.watch('indicator110')*dimension1RateEachRate)+(form.watch('indicator111')*dimension1RateEachRate)+(form.watch('indicator112')*dimension1RateEachRate)+(form.watch('indicator113')*dimension1RateEachRate)+(form.watch('indicator114')*dimension1RateEachRate))

  const dimension3RateEachIndicator = 40/15
  const dimension3RateEachRate1 = dimension3RateEachIndicator/5
  const totaldimension3 = ((form.watch('indicator31')*dimension3RateEachRate1)+(form.watch('indicator32')*dimension3RateEachRate1)+(form.watch('indicator33')*dimension3RateEachRate1)+(form.watch('indicator34')*dimension3RateEachRate1)+(form.watch('indicator35')*dimension3RateEachRate1)+(form.watch('indicator36')*dimension3RateEachRate1)+(form.watch('indicator37')*dimension3RateEachRate1)+(form.watch('indicator38')*dimension3RateEachRate1)+(form.watch('indicator39')*dimension3RateEachRate1)+(form.watch('indicator310')*dimension3RateEachRate1)+(form.watch('indicator311')*dimension3RateEachRate1)+(form.watch('indicator312')*dimension3RateEachRate1)+(form.watch('indicator313')*dimension3RateEachRate1)+(form.watch('indicator314')*dimension3RateEachRate1)+(form.watch('indicator315')*dimension3RateEachRate1))    


  const onSubmit = (values) => {
    const fullData = {
      ...values,
      dimension1Rate:totaldimension1,
      dimension3Rate:totaldimension3,
    }
     props.onSubmit(props?.record?.id, fullData);
  };

  const sectionCData =[
    {
      aspect:i18n('entities.schoolSupervision.new.dimension1'),
      challenge:(<TextAreaFormItem
        name="dimension1Challenge"
        required={false}
        layout={formItemLayout}
      />),
      rating:<Progress strokeLinecap="butt"
      //@ts-ignore
      strokeColor={parseFloat(totaldimension1 || 0) < 7.5 ? '#ff4d4f' : undefined}
      //@ts-ignore
      format={(percent) => `${parseFloat(totaldimension1 || 0).toFixed(0)} / ${15} %`} 
      //@ts-ignore
      percent={(parseFloat(totaldimension1 || 0).toFixed(0)/15)*100} size={[300, 20]} />,
      solution:(<TextAreaFormItem
        name="dimension1Solution"
        required={false}
        layout={formItemLayout}
      />),
    },
    {
      aspect:i18n('entities.schoolSupervision.new.dimension2'),
      challenge:(<TextAreaFormItem
        name="dimension3Challenge"
        required={false}
        layout={formItemLayout}
      />),
      rating:(<Progress strokeLinecap="butt"
      //@ts-ignore
      strokeColor={parseFloat(totaldimension3 || 0) < 15 ? '#ff4d4f' : undefined}
      //@ts-ignore
      format={(percent) => `${parseFloat(totaldimension3 || 0).toFixed(0)} / ${30} %`} 
      //@ts-ignore
      percent={(parseFloat(totaldimension3 || 0).toFixed(0)/30)*100} size={[300, 20]} />),
      solution:(<TextAreaFormItem
        name="dimension3Solution"
        required={false}
        layout={formItemLayout}
      />),
    },
  ]

  const handleStep = (current) => {
    if(current === 0) {
      return (
        <>
        <Row>
        <Col span={24}>
        <Title level={3}>
          {i18n('entities.sSASurvey.new.sectiona')}
          </Title>
          <Text>
          {parse(i18n('entities.sSASurvey.new.introduction'))}
          </Text>
        </Col>
        </Row>
        
        <br/>
        <Row>
        
        <Col span={24}>
          <Text>
          {parse(i18n('entities.sSASurvey.new.note'))}
          </Text>
        </Col>
      </Row>
      <Row>
            <Col span={24}>
              <Title level={3}>
              {i18n('entities.sSASurvey.new.sectionb')}
              </Title>
              
            </Col>
            <Col span={24}>
              <Table
                rowKey="id"
                columns={columnIndicator as any}
                dataSource={dataIndicator}
                bordered
                scroll={{
                  x: true,
                }}
              />
            </Col>
            <Col span={24}>
              <Table
                rowKey="id"
                columns={columns as any}
                dataSource={data}
                bordered
                scroll={{
                  x: true,
                }}
              />
            </Col>
        </Row>
      </>
       )
    }
    if(current === 1) {
      return (
        <Card title={i18n('entities.sSASurvey.new.basic')}>
        <Row gutter={24}>
          <Col  span={24}>
          <InputFormItem
            name="schoolName"
            label={i18n('entities.school.fields.schoolName')}  
            required={true}
            layout={formItemLayout}
            size={'large'}
            autoFocus
          />
          </Col>
          <Col  {...fourColumnsResponsiveProps}>
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
            size={'large'}
            mode="multiple"
          />
          </Col>
          
          <Col  {...fourColumnsResponsiveProps}>
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
            size={'large'}
          />
          </Col>

          <Col  {...fourColumnsResponsiveProps}>
          <InputFormItem
            name="schoolPhone"
            label={i18n('entities.school.fields.schoolPhone')}
            placeholder={'+252 XX XXXXXXX'}  
            required={false}
            layout={formItemLayout}
            size={'large'}
          />
          </Col>
          <Col  {...fourColumnsResponsiveProps}>
          <InputFormItem
            name="schoolEmail"
            label={i18n('entities.school.fields.schoolEmail')}  
            required={false}
            layout={formItemLayout}
            size={'large'}
          />
          </Col>
          <Col {...threeColumnsResponsiveProps}>
            <DistrictAutocompleteFormItem  
              name="district"
              label={i18n('entities.governmentTeacherInformation.fields.district')}
              required={true}
              size="large"
              layout={formItemLayout}
            />
           </Col>
          <Col  {...threeColumnsResponsiveProps}>
            <InputFormItem
              name="schoolLocation"
              label={i18n('entities.school.fields.schoolLocation')}  
              required={false}
              layout={formItemLayout}
              size={'large'}
            />
          </Col>
          <Col  {...threeColumnsResponsiveProps}>
            <InputFormItem
              name="schoolEMISNumber"
              label={i18n('entities.school.fields.schoolEMISNumber')}  
              required={false}
              layout={formItemLayout}
              size={'large'}
            />
          </Col>

          <Col  {...sexColumnsResponsiveProps}>
            <InputFormItem
              name="classes"
              label={i18n('entities.school.fields.classes')}
              hint={i18n('entities.school.hints.classes')}  
              required={false}
              layout={formItemLayout}
              size={'large'}
            />
          </Col>
          <Col  {...sexColumnsResponsiveProps}>
          <InputNumberFormItem
            name="toilets"
            label={i18n('entities.school.fields.toilets')}
            hint={i18n('entities.school.hints.toilets')}  
            required={false}
            layout={formItemLayout}
            size={'large'}
          />
          </Col>
          <Col  {...sexColumnsResponsiveProps}>
          <InputNumberFormItem
        name="maleStaff"
        label={i18n('entities.school.fields.maleStaff')}  
        hint={i18n('entities.school.hints.maleStaff')}  

        required={false}
        layout={formItemLayout}
        size={'large'}
      />
          </Col>
          <Col  {...sexColumnsResponsiveProps}>
          <InputNumberFormItem
        name="femaleStaff"
        label={i18n('entities.school.fields.femaleStaff')}
        hint={i18n('entities.school.hints.femaleStaff')}  
        required={false}
        layout={formItemLayout}
        size={'large'}
      />
          </Col>
          <Col  {...sexColumnsResponsiveProps}>
          <InputNumberFormItem
        name="nonTeachingFemaleStaff"
        label={i18n('entities.school.fields.nonTeachingFemaleStaff')}  
        required={false}
        layout={formItemLayout}
        size={'large'}
      />
          </Col>
          <Col  {...sexColumnsResponsiveProps}>
          <InputNumberFormItem
        name="nonTeachingMaleStaff"
        label={i18n('entities.school.fields.nonTeachingMaleStaff')}  
        required={false}
        layout={formItemLayout}
        size={'large'}
      />
          </Col>
          <Col  span={24}>
          <InputFormItem
        name="headTeacher"
        label={i18n('entities.school.fields.headTeacher')}
        hint={i18n('entities.school.hints.headTeacher')}  
        required={true}
        layout={formItemLayout}
        size={'large'}
      />
          </Col>
          <Col  {...threeColumnsResponsiveProps}>
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
        size={'large'}
      />
          </Col>
          <Col  {...threeColumnsResponsiveProps}>
          <InputFormItem
        name="headTeacherPhone"
        label={i18n('entities.school.fields.headTeacherPhone')}  
        required={false}
        layout={formItemLayout}
        size={'large'}
      />
          </Col>
          <Col  {...threeColumnsResponsiveProps}>
          <InputFormItem
        name="headTeacherLevelEduction"
        label={i18n('entities.school.fields.headTeacherLevelEduction')}  
        required={false}
        layout={formItemLayout}
        size={'large'}
      />
          </Col>
        </Row>

      </Card>
      )
    }
    if(current === 2) {
      return (
        <Card title={i18n('entities.schoolSupervision.new.dimension1')} style={{padding:0}}>
          <Table
            rowKey="id"
            columns={dimensionColumns as any}
            dataSource={dimension1}
            bordered
            scroll={{
              x: true,
            }}
            pagination= {false}
          />
      </Card>
      )
    }
    if(current === 3) {
      return (
        <Card title={i18n('entities.schoolSupervision.new.dimension2')}>
            <Table
              rowKey="id"
              columns={dimensionColumns as any}
              dataSource={dimension3}
              bordered
              scroll={{
                x: true,
              }}
              pagination= {false}
            />
        </Card>
      )
    }
    if(current === 4) {
      return (
        <Card title={i18n('entities.sSASurvey.new.sectionc')}>
              <Table
                rowKey="sectionC"
                columns={sectionCColumns as any}
                dataSource={sectionCData}
                bordered
                scroll={{
                  x: true,
                }}
                pagination= {false}
              />
 <Row gutter={24}>
          <Col {...twoColumnsResponsiveProps}>
          <InputFormItem
            name="principal"
            label={i18n('entities.sSASurvey.fields.principal')}  
            required={true}
            layout={formItemLayout}
            size={'large'}
          />
          </Col>
          
          <Col {...twoColumnsResponsiveProps}>

         <DatePickerFormItem
            name="finalizedDate"
            label={i18n('entities.sSASurvey.fields.finalizedDate')}
            required={false}
            layout={formItemLayout}
            size={'large'}
          />
          </Col>
          <Col {...fourColumnsResponsiveProps}>
          <ImagesFormItem
            name="signatureofprincipal"
            label={i18n('entities.sSASurvey.fields.signatureofprincipal')}
            required={true}
            storage={Storage.values.sSASurveySignatureofprincipal}
            max={undefined}
            layout={formItemLayout}
          />
          </Col>
          <Col {...fourColumnsResponsiveProps}>
          <ImagesFormItem
            name="schoolStamp"
            label={i18n('entities.sSASurvey.fields.schoolStamp')}
            required={false}
            storage={Storage.values.sSASurveySchoolStamp}
            max={undefined}
            layout={formItemLayout}
          />
          </Col>
          <Col {...fourColumnsResponsiveProps}>
          <FilesFormItem
            name="schoolImprovement"
            label={i18n('entities.sSASurvey.fields.schoolImprovement')}
            required={false}
            storage={Storage.values.sSASurveySchoolImprovement}
            max={undefined}
            layout={formItemLayout}
          />
          </Col>
          <Col {...fourColumnsResponsiveProps}>
          <FilesFormItem
            name="teacherAttedance"
            label={i18n('entities.sSASurvey.fields.teacherAttedance')}
            required={false}
            storage={Storage.values.sSASurveyTeacherAttedance}
            max={undefined}
            layout={formItemLayout}
          />
          </Col>
         </Row>
         
          </Card>
      )
    }
  }

  const steps = [
    {
      title: i18n('entities.schoolSupervision.fields.introduction'),
      content:  i18n('entities.schoolSupervision.fields.introduction'),
    },
    {
      title: i18n('entities.schoolSupervision.fields.school'),
      content: i18n('entities.schoolSupervision.fields.schoolinfo'),
    },
    {
      title: i18n('entities.schoolSupervision.fields.dimension1'),
      content: i18n('entities.schoolSupervision.new.dimension1'),
    },
    {
      title: i18n('entities.schoolSupervision.fields.dimension2'),
      content: i18n('entities.schoolSupervision.new.dimension2'),
    },
    {
      title: i18n('entities.schoolSupervision.fields.finalize'),
      content:  i18n('entities.schoolSupervision.new.sectionc'),
    },
  ];

  const items = steps.map(item => ({ key: item.title, title: item.title, description:item.content }));
  const { saveLoading } = props;


  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <StepsDiv>
        <Steps
          type="navigation"
          className="site-navigation-steps"
          current={current} 
          items={items}
          status={_.isEmpty(form.formState.errors) ? undefined :'error'}
          percent={current*12.5}
          onChange={(value:number)=>{setCurrent(value)}}
        />
        </StepsDiv>
        <div className="steps-content">{handleStep(current)}</div>
        <Row style={{ marginTop: 24 }}>
        {current < steps.length - 1 && current === 0 && (
          <Col span={24}>
          <Button type="primary" onClick={next} block size='large'>
            Next
          </Button>
          </Col>
        )}
        {current === steps.length - 1 && (
          <Col span={24}>
          <Row>
          <Col {...twoColumnsResponsiveProps} >
             <Button size='large' style={{ margin: '0 8px' }} onClick={() => prev()} block>
               Previous
             </Button>
           </Col>
           <Col {...twoColumnsResponsiveProps}>
           <Button
            type="primary"
            size="large"
            block
            htmlType="submit"
            loading={saveLoading}
          >
            {i18n('common.save')}
          </Button>
           </Col>
         </Row>
         </Col>
        )}
        {current > 0 && current < 4  && (
          <Col span={24}>
           <Row>
           <Col {...twoColumnsResponsiveProps} >
              <Button size='large' style={{ margin: '0 8px' }} onClick={() => prev()} block>
                Previous
              </Button>
            </Col>
            <Col {...twoColumnsResponsiveProps}>
              <Button type="primary" size='large' onClick={next} block>
                Next
              </Button>
            </Col>
          </Row>
          </Col>
        )}
       </Row>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default SchoolSupervisionForm;
