import { Button, Row, Col, Table, Card, Typography, Steps} from 'antd';
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
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import schoolEnumerators from 'src/modules/school/schoolEnumerators';
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import CustomCheckboxFormItem from 'src/view/shared/form/items/CustomCheckboxFormItem';
import dimension1Enumerators from 'src/modules/dimension1/dimension1Enumerators';
import deminsion2Enumerators from 'src/modules/deminsion2/deminsion2Enumerators';
import dimension3Enumerators from 'src/modules/dimension3/dimension3Enumerators';
import dimension4Enumerators from 'src/modules/dimension4/dimension4Enumerators';
import dimension5Enumerators from 'src/modules/dimension5/dimension5Enumerators';
import currenctSelectors from 'src/modules/auth/authSelectors';
import { useSelector } from 'react-redux';
import TextAreaFormItem from 'src/view/shared/form/items/TextAreaFormItem';
import StepsDiv from 'src/view/layout/styles/steps';
import _ from 'lodash';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';


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
  signatureofprincipal: yupFormSchemas.images(
    i18n('entities.sSASurvey.fields.signatureofprincipal'),
    {
    },
  ),
  schoolStamp: yupFormSchemas.images(
    i18n('entities.sSASurvey.fields.schoolStamp'),
    {},
  ),
  schoolImprovement: yupFormSchemas.files(
    i18n('entities.sSASurvey.fields.schoolImprovement'),
    {},
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
      "options": dimension1Enumerators.indicator11,
      "required": true   
    },
  ),
  indicator12: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator12'),
    {
      "options": dimension1Enumerators.indicator12,
       "required": true
    
    },
  ),
  indicator13: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator13'),
    {
      "options": dimension1Enumerators.indicator13,
       "required": true
    
    },
  ),
  indicator14: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator14'),
    {
      "options": dimension1Enumerators.indicator14,
       "required": true
    
    },
  ),
  indicator15: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator15'),
    {
      "options": dimension1Enumerators.indicator15,
       "required": true
    
    },
  ),
  indicator16: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator16'),
    {
      "options": dimension1Enumerators.indicator16,
       "required": true
    
    },
  ),
  indicator17: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator17'),
    {
      "options": dimension1Enumerators.indicator17,
       "required": true
    
    },
  ),
  indicator18: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator18'),
    {
      "options": dimension1Enumerators.indicator18,
       "required": true
    
    },
  ),
  indicator19: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator19'),
    {
      "options": dimension1Enumerators.indicator19,
       "required": true
    
    },
  ),
  indicator110: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator110'),
    {
      "options": dimension1Enumerators.indicator110,
       "required": true
    
    },
  ),
  indicator111: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator111'),
    {
      "options": dimension1Enumerators.indicator111,
       "required": true
    
    },
  ),
  indicator112: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator112'),
    {
      "options": dimension1Enumerators.indicator112,
       "required": true
    
    },
  ),
  indicator113: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator113'),
    {
      "options": dimension1Enumerators.indicator113,
       "required": true
    
    },
  ),
  indicator114: yupFormSchemas.enumerator(
    i18n('entities.dimension1.fields.indicator114'),
    {
      "options": dimension1Enumerators.indicator114,
       "required": true
    
    },
  ),

  indicator21: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator21'),
    {
      "options": deminsion2Enumerators.indicator21,
       "required": true
    
    },
  ),
  indicator22: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator22'),
    {
      "options": deminsion2Enumerators.indicator22,
       "required": true
    
    },
  ),
  indicator23: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator23'),
    {
      "options": deminsion2Enumerators.indicator23,
       "required": true
    
    },
  ),
  indicator24: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator24'),
    {
      "options": deminsion2Enumerators.indicator24,
       "required": true
    
    },
  ),
  indicator25: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator25'),
    {
      "options": deminsion2Enumerators.indicator25,
       "required": true
    
    },
  ),
  indicator26: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator26'),
    {
      "options": deminsion2Enumerators.indicator26,
       "required": true
    
    },
  ),
  indicator27: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator27'),
    {
      "options": deminsion2Enumerators.indicator27,
       "required": true
    
    },
  ),
  indicator28: yupFormSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator28'),
    {
      "options": deminsion2Enumerators.indicator28,
       "required": true
    
    },
  ),
  indicator31: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator31'),
    {
      "options": dimension3Enumerators.indicator31,
       "required": true
    
    },
  ),
  indicator32: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator32'),
    {
      "options": dimension3Enumerators.indicator32,
       "required": true
    
    },
  ),
  indicator33: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator33'),
    {
      "options": dimension3Enumerators.indicator33,
       "required": true
    
    },
  ),
  indicator34: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator34'),
    {
      "options": dimension3Enumerators.indicator34,
       "required": true
    
    },
  ),
  indicator35: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator35'),
    {
      "options": dimension3Enumerators.indicator35,
       "required": true
    
    },
  ),
  indicator36: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator36'),
    {
      "options": dimension3Enumerators.indicator36,
       "required": true
    
    },
  ),
  indicator37: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator37'),
    {
      "options": dimension3Enumerators.indicator37,
       "required": true
    
    },
  ),
  indicator38: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator38'),
    {
      "options": dimension3Enumerators.indicator38,
       "required": true
    
    },
  ),
  indicator39: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator39'),
    {
      "options": dimension3Enumerators.indicator39,
       "required": true
    
    },
  ),
  indicator310: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator310'),
    {
      "options": dimension3Enumerators.indicator310,
       "required": true
    
    },
  ),
  indicator311: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator311'),
    {
      "options": dimension3Enumerators.indicator311,
       "required": true
    
    },
  ),
  indicator312: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator312'),
    {
      "options": dimension3Enumerators.indicator312,
       "required": true
    
    },
  ),
  indicator313: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator313'),
    {
      "options": dimension3Enumerators.indicator313,
       "required": true
    
    },
  ),
  indicator314: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator314'),
    {
      "options": dimension3Enumerators.indicator314,
       "required": true
    
    },
  ),
  indicator315: yupFormSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator315'),
    {
      "options": dimension3Enumerators.indicator315,
       "required": true
    
    },
  ),
  indicator41: yupFormSchemas.enumerator(
    i18n('entities.dimension4.fields.indicator41'),
    {
      "options": dimension4Enumerators.indicator41,
       "required": true
    
    },
  ),
  indicator42: yupFormSchemas.enumerator(
    i18n('entities.dimension4.fields.indicator42'),
    {
      "options": dimension4Enumerators.indicator42,
       "required": true
    
    },
  ),
  indicator43: yupFormSchemas.enumerator(
    i18n('entities.dimension4.fields.indicator43'),
    {
      "options": dimension4Enumerators.indicator43,
       "required": true
    
    },
  ),
  indicator44: yupFormSchemas.enumerator(
    i18n('entities.dimension4.fields.indicator44'),
    {
      "options": dimension4Enumerators.indicator44,
       "required": true
    
    },
  ),
  indicator51: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator51'),
    {
      "options": dimension5Enumerators.indicator51,
       "required": true
    
    },
  ),
  indicator52: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator52'),
    {
      "options": dimension5Enumerators.indicator52,
       "required": true
    
    },
  ),
  indicator53: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator53'),
    {
      "options": dimension5Enumerators.indicator53,
       "required": true
    
    },
  ),
  indicator54: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator54'),
    {
      "options": dimension5Enumerators.indicator54,
       "required": true
    
    },
  ),
  indicator55: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator55'),
    {
      "options": dimension5Enumerators.indicator55,
       "required": true
    
    },
  ),
  indicator56: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator56'),
    {
      "options": dimension5Enumerators.indicator56,
       "required": true
    
    },
  ),
  indicator57: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator57'),
    {
      "options": dimension5Enumerators.indicator57,
       "required": true
    
    },
  ),
  indicator58: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator58'),
    {
      "options": dimension5Enumerators.indicator58,
       "required": true
    
    },
  ),
  indicator59: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator59'),
    {
      "options": dimension5Enumerators.indicator59,
       "required": true
    
    },
  ),
  indicator510: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator510'),
    {
      "options": dimension5Enumerators.indicator510,
       "required": true
    
    },
  ),
  indicator511: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator511'),
    {
      "options": dimension5Enumerators.indicator511,
       "required": true
    
    },
  ),
  indicator512: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator512'),
    {
      "options": dimension5Enumerators.indicator512,
       "required": true
    
    },
  ),
  indicator513: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator513'),
    {
      "options": dimension5Enumerators.indicator513,
       "required": true
    
    },
  ),
  indicator514: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator514'),
    {
      "options": dimension5Enumerators.indicator514,
       "required": true
    
    },
  ),
  indicator515: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator515'),
    {
      "options": dimension5Enumerators.indicator515,
       "required": true
    
    },
  ),
  indicator516: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator516'),
    {
      "options": dimension5Enumerators.indicator516,
       "required": true
    
    },
  ),
  indicator517: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator517'),
    {
      "options": dimension5Enumerators.indicator517,
       "required": true
    
    },
  ),
  indicator518: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator518'),
    {
      "options": dimension5Enumerators.indicator518,
       "required": true
    
    },
  ),
  indicator519: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator519'),
    {
      "options": dimension5Enumerators.indicator519,
       "required": true
    
    },
  ),
  indicator520: yupFormSchemas.enumerator(
    i18n('entities.dimension5.fields.indicator520'),
    {
      "options": dimension5Enumerators.indicator520,
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
  dimension2Challenge :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension2Challenge'),
    {
      
    },
  ),
  dimension2Mark :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension2Mark'),
    {
      
    },
  ),
  dimension2Solutions :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension2Solution'),
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
  dimension4Challenge :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension4Challenge'),
    {
      
    },
  ),
  dimension4Mark :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension4Mark'),
    {
      
    },
  ),
  dimension4Solutions :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension4Solution'),
    {
      
    },
  ),
  dimension5Challenge :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension5Challenge'),
    {
      
    },
  ),
  dimension5Mark :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension5Mark'),
    {
      
    },
  ),
  dimension5Solutions :yupFormSchemas.string(
    i18n('entities.sSASurvey.fields.dimension5Solution'),
    {
      
    },
  ),
});


const SSASurveyForm = (props) => {
  const currentUser = useSelector(
    currenctSelectors.selectCurrentUser,
  );

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      schoolName: record?.school?.schoolName || currentUser?.school?.InstitutionName,
      schoolLevel: record?.school?.schoolLevel || [currentUser?.school?.InstitutionLevel],
      schoolType: record?.school?.schoolType || currentUser?.school?.Ownership,
      schoolPhone: record?.school?.schoolPhone || currentUser?.school?.HeadTeacherPhone,
      schoolEmail: record?.school?.schoolEmail ||  currentUser?.school?.HeadTeacherEmail,
      schoolLocation: record?.school?.schoolLocation || currentUser?.school?.District,
      schoolEMISNumber: record?.school?.schoolEMISNumber || currentUser?.school?.RegNo,
      classes: record?.school?.classes,
      toilets: record?.school?.toilets,
      maleStaff: record?.school?.maleStaff,
      femaleStaff: record?.school?.femaleStaff,
      nonTeachingFemaleStaff: record?.school?.nonTeachingFemaleStaff,
      nonTeachingMaleStaff: record?.school?.nonTeachingMaleStaff,
      headTeacher: record?.school?.headTeacher || currentUser?.school?.HeadTeacherName,
      headsex: record?.school?.headsex,
      headTeacherPhone: record?.school?.headTeacherPhone || currentUser?.school?.HeadTeacherPhone,
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


      indicator21: record?.dimension2?.indicator21,
      indicator22: record?.dimension2?.indicator22,
      indicator23: record?.dimension2?.indicator23,
      indicator24: record?.dimension2?.indicator24,
      indicator25: record?.dimension2?.indicator25,
      indicator26: record?.dimension2?.indicator26,
      indicator27: record?.dimension2?.indicator27,
      indicator28: record?.dimension2?.indicator28,

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

      indicator41: record?.dimension4?.indicator41,
      indicator42: record?.dimension4?.indicator42,
      indicator43: record?.dimension4?.indicator43,
      indicator44: record?.dimension4?.indicator44,

      indicator51: record?.dimension5?.indicator51,
      indicator52: record?.dimension5?.indicator52,
      indicator53: record?.dimension5?.indicator53,
      indicator54: record?.dimension5?.indicator54,
      indicator55: record?.dimension5?.indicator55,
      indicator56: record?.dimension5?.indicator56,
      indicator57: record?.dimension5?.indicator57,
      indicator58: record?.dimension5?.indicator58,
      indicator59: record?.dimension5?.indicator59,
      indicator510: record?.dimension5?.indicator510,
      indicator511: record?.dimension5?.indicator511,
      indicator512: record?.dimension5?.indicator512,
      indicator513: record?.dimension5?.indicator513,
      indicator514: record?.dimension5?.indicator514,
      indicator515: record?.dimension5?.indicator515,
      indicator516: record?.dimension5?.indicator516,
      indicator517: record?.dimension5?.indicator517,
      indicator518: record?.dimension5?.indicator518,
      indicator519: record?.dimension5?.indicator519,
      indicator520: record?.dimension5?.indicator520,

      finalizedDate: record.finalizedDate ? moment(record.finalizedDate, 'YYYY-MM-DD') : null,
      principal: record.principal || currentUser?.school?.HeadTeacherName,
      signatureofprincipal: record.signatureofprincipal || [],
      introduction: record.introduction,
      guidelines: record.guidelines,
      school: record.school,
      schoolStamp: record.schoolStamp || [],
      schoolImprovement: record.schoolImprovement || [],

      dimension1Challenge: record.dimension1Challenge || null,
      dimension1Mark: record.dimension1Mark || null,
      dimension1Solution: record.dimension1Solution || null,

      dimension2Challenge: record.dimension2Challenge || null,
      dimension2Mark: record.dimension2Mark || null,
      dimension2Solution: record.dimension2Solution || null,

      dimension3Challenge: record.dimension3Challenge || null,
      dimension3Mark: record.dimension3Mark || null,
      dimension3Solution: record.dimension3Solution || null,
      
      dimension4Challenge: record.dimension4Challenge || null,
      dimension4Mark: record.dimension4Mark || null,
      dimension4Solution: record.dimension4Solution || null,

      dimension5Challenge: record.dimension5Challenge || null,
      dimension5Mark: record.dimension5Mark || null,
      dimension5Solution: record.dimension5Solution || null,



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
      DIMENSIONS:'School leadership and governance',
      indicators:'14',
      value:'15%'
    },
    {
      no:'2',
      DIMENSIONS:'School Environment and its safety',
      indicators:'8',
      value:'10%'
    },
    {
      no:'3',
      DIMENSIONS:'Curriculum implementation',
      indicators:'15',
      value:'30%'
    },
    {
      no:'4',
      DIMENSIONS:'Community Relations and participation',
      indicators:'4',
      value:'15%'
    },
    {
      no:'5',
      DIMENSIONS:'Teaching and learning',
      indicators:'20',
      value:'30%'
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
  const dimension2 =[
    {
      no:'1',
      indicator:i18n('entities.deminsion2.fields.indicator21'),
      1:(<CustomCheckboxFormItem
        name="indicator21"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator21"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator21"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator21"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator21"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'2',
      indicator:i18n('entities.deminsion2.fields.indicator22'),
      1:(<CustomCheckboxFormItem
        name="indicator22"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator22"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator22"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator22"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator22"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'3',
      indicator:i18n('entities.deminsion2.fields.indicator23'),
      1:(<CustomCheckboxFormItem
        name="indicator23"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator23"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator23"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator23"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator23"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'4',
      indicator:i18n('entities.deminsion2.fields.indicator24'),
      1:(<CustomCheckboxFormItem
        name="indicator24"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator24"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator24"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator24"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator24"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'5',
      indicator:i18n('entities.deminsion2.fields.indicator25'),
      1:(<CustomCheckboxFormItem
        name="indicator25"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator25"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator25"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator25"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator25"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'6',
      indicator:i18n('entities.deminsion2.fields.indicator26'),
      1:(<CustomCheckboxFormItem
        name="indicator26"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator26"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator26"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator26"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator26"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'7',
      indicator:i18n('entities.deminsion2.fields.indicator27'),
      1:(<CustomCheckboxFormItem
        name="indicator27"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator27"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator27"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator27"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator27"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'8',
      indicator:i18n('entities.deminsion2.fields.indicator28'),
      1:(<CustomCheckboxFormItem
        name="indicator28"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator28"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator28"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator28"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator28"
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
      no:'13',
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
  const dimension4 =[
    {
      no:'1',
      indicator:i18n('entities.dimension4.fields.indicator41'),
      1:(<CustomCheckboxFormItem
        name="indicator41"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator41"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator41"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator41"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator41"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'2',
      indicator:i18n('entities.dimension4.fields.indicator42'),
      1:(<CustomCheckboxFormItem
        name="indicator42"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator42"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator42"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator42"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator42"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'3',
      indicator:i18n('entities.dimension4.fields.indicator43'),
      1:(<CustomCheckboxFormItem
        name="indicator43"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator43"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator43"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator43"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator43"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'4',
      indicator:i18n('entities.dimension4.fields.indicator44'),
      1:(<CustomCheckboxFormItem
        name="indicator44"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator44"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator44"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator44"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator44"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
  ]
  const dimension5 =[
    {
      no:'',
      indicator:(<Title level={3}>Lesson Preparation</Title>),
    },
    {
      no:'1',
      indicator:i18n('entities.dimension5.fields.indicator51'),
      1:(<CustomCheckboxFormItem
        name="indicator51"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator51"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator51"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator51"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator51"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'2',
      indicator:i18n('entities.dimension5.fields.indicator52'),
      1:(<CustomCheckboxFormItem
        name="indicator52"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator52"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator52"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator52"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator52"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'3',
      indicator:i18n('entities.dimension5.fields.indicator53'),
      1:(<CustomCheckboxFormItem
        name="indicator53"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator53"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator53"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator53"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator53"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'4',
      indicator:i18n('entities.dimension5.fields.indicator54'),
      1:(<CustomCheckboxFormItem
        name="indicator54"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator54"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator54"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator54"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator54"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'5',
      indicator:i18n('entities.dimension5.fields.indicator55'),
      1:(<CustomCheckboxFormItem
        name="indicator55"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator55"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator55"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator55"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator55"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
   
    {
      no:'6',
      indicator:i18n('entities.dimension5.fields.indicator56'),
      1:(<CustomCheckboxFormItem
        name="indicator56"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator56"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator56"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator56"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator56"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'',
      indicator:(<Title level={3}>Classroom Management</Title>),
    },
    {
      no:'7',
      indicator:i18n('entities.dimension5.fields.indicator57'),
      1:(<CustomCheckboxFormItem
        name="indicator57"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator57"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator57"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator57"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator57"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'8',
      indicator:i18n('entities.dimension5.fields.indicator58'),
      1:(<CustomCheckboxFormItem
        name="indicator58"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator58"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator58"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator58"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator58"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'9',
      indicator:i18n('entities.dimension5.fields.indicator59'),
      1:(<CustomCheckboxFormItem
        name="indicator59"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator59"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator59"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator59"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator59"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'10',
      indicator:i18n('entities.dimension5.fields.indicator510'),
      1:(<CustomCheckboxFormItem
        name="indicator510"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator510"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator510"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator510"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator510"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'11',
      indicator:i18n('entities.dimension5.fields.indicator511'),
      1:(<CustomCheckboxFormItem
        name="indicator511"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator511"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator511"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator511"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator511"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'12',
      indicator:i18n('entities.dimension5.fields.indicator512'),
      1:(<CustomCheckboxFormItem
        name="indicator512"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator512"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator512"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator512"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator512"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'',
      indicator:(<Title level={3}>Instruction</Title>),
    },
    {
      no:'13',
      indicator:i18n('entities.dimension5.fields.indicator513'),
      1:(<CustomCheckboxFormItem
        name="indicator513"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator513"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator513"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator513"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator513"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'14',
      indicator:i18n('entities.dimension5.fields.indicator514'),
      1:(<CustomCheckboxFormItem
        name="indicator514"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator514"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator514"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator514"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator514"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'',
      indicator:(<Title level={3}>Learner Assessment and Feedback</Title>),
    },
    {
      no:'15',
      indicator:i18n('entities.dimension5.fields.indicator515'),
      1:(<CustomCheckboxFormItem
        name="indicator515"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator515"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator515"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator515"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator515"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'16',
      indicator:i18n('entities.dimension5.fields.indicator516'),
      1:(<CustomCheckboxFormItem
        name="indicator516"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator516"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator516"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator516"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator516"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'17',
      indicator:i18n('entities.dimension5.fields.indicator517'),
      1:(<CustomCheckboxFormItem
        name="indicator517"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator517"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator517"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator517"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator517"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'18',
      indicator:i18n('entities.dimension5.fields.indicator518'),
      1:(<CustomCheckboxFormItem
        name="indicator518"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator518"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator518"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator518"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator518"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'19',
      indicator:i18n('entities.dimension5.fields.indicator519'),
      1:(<CustomCheckboxFormItem
        name="indicator519"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator519"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator519"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator519"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator519"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
    {
      no:'20',
      indicator:i18n('entities.dimension5.fields.indicator520'),
      1:(<CustomCheckboxFormItem
        name="indicator520"
        size={'large'}
        value={'1'}
        required={false}
        layout={formItemLayout}
      />),
      2:(<CustomCheckboxFormItem
        name="indicator520"
        size={'large'}
        value={'2'}
        required={false}
        layout={formItemLayout}
      />),
      3:(<CustomCheckboxFormItem
        name="indicator520"
        size={'large'}
        value={'3'}
        required={false}
        layout={formItemLayout}
      />),
      4:(<CustomCheckboxFormItem
        name="indicator520"
        size={'large'}
        value={'4'}
        required={false}
        layout={formItemLayout}
      />),
      5:(<CustomCheckboxFormItem
        name="indicator520"
        size={'large'}
        value={'5'}
        required={false}
        layout={formItemLayout}
      />)
    },
   
  ]

  const dimension1RateEachIndicator =15/14
  const dimension1RateEachRate = dimension1RateEachIndicator/5

  const totaldimension1 = ((form.watch('indicator11')*dimension1RateEachRate)+(form.watch('indicator12')*dimension1RateEachRate)+(form.watch('indicator13')*dimension1RateEachRate)+(form.watch('indicator14')*dimension1RateEachRate)+(form.watch('indicator15')*dimension1RateEachRate)+(form.watch('indicator16')*dimension1RateEachRate)+(form.watch('indicator17')*dimension1RateEachRate)+(form.watch('indicator18')*dimension1RateEachRate)+(form.watch('indicator19')*dimension1RateEachRate)+(form.watch('indicator110')*dimension1RateEachRate)+(form.watch('indicator111')*dimension1RateEachRate)+(form.watch('indicator112')*dimension1RateEachRate)+(form.watch('indicator113')*dimension1RateEachRate)+(form.watch('indicator114')*dimension1RateEachRate))

  const dimension2RateEachIndicator =10/8
  const dimension2RateEachRate = dimension2RateEachIndicator/5
  const totaldimension2 = ((form.watch('indicator21')*dimension2RateEachRate)+(form.watch('indicator22')*dimension2RateEachRate)+(form.watch('indicator23')*dimension2RateEachRate)+(form.watch('indicator24')*dimension2RateEachRate)+(form.watch('indicator25')*dimension2RateEachRate)+(form.watch('indicator26')*dimension2RateEachRate)+(form.watch('indicator27')*dimension2RateEachRate)+(form.watch('indicator28')*dimension2RateEachRate))
  
  
  const dimension3RateEachIndicator = 30/15
  const dimension3RateEachRate1 = dimension3RateEachIndicator/5
  const totaldimension3 = ((form.watch('indicator31')*dimension3RateEachRate1)+(form.watch('indicator32')*dimension3RateEachRate1)+(form.watch('indicator33')*dimension3RateEachRate1)+(form.watch('indicator34')*dimension3RateEachRate1)+(form.watch('indicator35')*dimension3RateEachRate1)+(form.watch('indicator36')*dimension3RateEachRate1)+(form.watch('indicator37')*dimension3RateEachRate1)+(form.watch('indicator38')*dimension3RateEachRate1)+(form.watch('indicator39')*dimension3RateEachRate1)+(form.watch('indicator310')*dimension3RateEachRate1)+(form.watch('indicator311')*dimension3RateEachRate1)+(form.watch('indicator312')*dimension3RateEachRate1)+(form.watch('indicator313')*dimension3RateEachRate1)+(form.watch('indicator314')*dimension3RateEachRate1)+(form.watch('indicator315')*dimension3RateEachRate1))    

  const dimension4RateEachIndicator =15/4
  const dimension4RateEachRate = dimension4RateEachIndicator/5
  const totaldimension4 = ((form.watch('indicator41')*dimension4RateEachRate)+(form.watch('indicator42')*dimension4RateEachRate)+(form.watch('indicator43')*dimension4RateEachRate)+(form.watch('indicator44')*dimension4RateEachRate))
 
  const dimension5RateEachIndicator =30/20
  const dimension5RateEachRate1 = dimension5RateEachIndicator/5
  const totaldimension5 = ((form.watch('indicator51')*dimension5RateEachRate1)+(form.watch('indicator52')*dimension5RateEachRate1)+(form.watch('indicator53')*dimension5RateEachRate1)+(form.watch('indicator54')*dimension5RateEachRate1)+(form.watch('indicator55')*dimension5RateEachRate1)+(form.watch('indicator56')*dimension5RateEachRate1)+(form.watch('indicator57')*dimension5RateEachRate1)+(form.watch('indicator58')*dimension5RateEachRate1)+(form.watch('indicator59')*dimension5RateEachRate1)+(form.watch('indicator510')*dimension5RateEachRate1)+(form.watch('indicator511')*dimension5RateEachRate1)+(form.watch('indicator512')*dimension5RateEachRate1)+(form.watch('indicator513')*dimension5RateEachRate1)+(form.watch('indicator514')*dimension5RateEachRate1)+(form.watch('indicator515')*dimension5RateEachRate1)+(form.watch('indicator516')*dimension5RateEachRate1)+(form.watch('indicator517')*dimension5RateEachRate1)+(form.watch('indicator518')*dimension5RateEachRate1)+(form.watch('indicator519')*dimension5RateEachRate1)+(form.watch('indicator520')*dimension5RateEachRate1))
  
  const onSubmit = (values) => {
    const fullData = {
      ...values,
      dimension1Rate:totaldimension1,
      dimension2Rate:totaldimension2,
      dimension3Rate:totaldimension3,
      dimension4Rate:totaldimension4,
      dimension5Rate:totaldimension5
    }
     props.onSubmit(props?.record?.id, fullData);
  };

  const sectionCData =[
    {
      aspect:i18n('entities.sSASurvey.new.dimension1'),
      challenge:(<TextAreaFormItem
        name="dimension1Challenge"
        required={false}
        layout={formItemLayout}
      />),
      rating:totaldimension1.toFixed(0)+" %",
      solution:(<TextAreaFormItem
        name="dimension1Solution"
        required={false}
        layout={formItemLayout}
      />),
    },
    {
      aspect:i18n('entities.sSASurvey.new.dimension2'),
      challenge:(<TextAreaFormItem
        name="dimension2Challenge"
        required={false}
        layout={formItemLayout}
      />),
      rating:totaldimension2.toFixed(0)+" %",
      solution:(<TextAreaFormItem
        name="dimension2Solution"
        required={false}
        layout={formItemLayout}
      />),
    },
    {
      aspect:i18n('entities.sSASurvey.new.dimension3'),
      challenge:(<TextAreaFormItem
        name="dimension3Challenge"
        required={false}
        layout={formItemLayout}
      />),
      rating:totaldimension3.toFixed(0)+" %",
      solution:(<TextAreaFormItem
        name="dimension3Solution"
        required={false}
        layout={formItemLayout}
      />),
    },
    {
      aspect:i18n('entities.sSASurvey.new.dimension4'),
      challenge:(<TextAreaFormItem
        name="dimension4Challenge"
        required={false}
        layout={formItemLayout}
      />),
      rating:totaldimension4.toFixed(0)+" %",
      solution:(<TextAreaFormItem
        name="dimension4Solution"
        required={false}
        layout={formItemLayout}
      />),
    },
    {
      aspect:i18n('entities.sSASurvey.new.dimension5'),
      challenge:(<TextAreaFormItem
        name="dimension5Challenge"
        required={false}
        layout={formItemLayout}
      />),
      rating:totaldimension5.toFixed(0)+" %",
      solution:(<TextAreaFormItem
        name="dimension5Solution"
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
          {i18n('entities.sSASurvey.new.introduction')}
          </Text>
        </Col>
        </Row>
        
        <br/>
        <Row>
        <Col span={24}>
          <Title level={5} style={{color:'red'}} >NOTE:</Title>
        </Col>
        <Col span={24}>
          <Text>
          {i18n('entities.sSASurvey.new.note')}
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
                columns={columns as any}
                dataSource={data}
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
          <Col  {...twoColumnsResponsiveProps}>
            <InputFormItem
              name="schoolLocation"
              label={i18n('entities.school.fields.schoolLocation')}  
              required={false}
              layout={formItemLayout}
              size={'large'}
            />
          </Col>
          <Col  {...twoColumnsResponsiveProps}>
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
        <Card title={i18n('entities.sSASurvey.new.dimension1')} style={{padding:0}}>
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
        <Card title={i18n('entities.sSASurvey.new.dimension2')}>
              <Table
                rowKey="id"
                columns={dimensionColumns as any}
                dataSource={dimension2}
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
        <Card title={i18n('entities.sSASurvey.new.dimension3')}>
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
    if(current === 5) {
      return (
        <Card title={i18n('entities.sSASurvey.new.dimension4')}>
              <Table
                rowKey="id"
                columns={dimensionColumns as any}
                dataSource={dimension4}
                bordered
                scroll={{
                  x: true,
                }}
                pagination= {false}
              />

          </Card>
      )
    }
    if(current === 6) {
      return (
        <Card title={i18n('entities.sSASurvey.new.dimension5')}>
              <Table
                rowKey="id"
                columns={dimensionColumns as any}
                dataSource={dimension5}
                bordered
                scroll={{
                  x: true,
                }}
                pagination= {false}
              />

          </Card>
      )
    }
    if(current === 7) {
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
          <Col {...threeColumnsResponsiveProps}>
          <ImagesFormItem
            name="signatureofprincipal"
            label={i18n('entities.sSASurvey.fields.signatureofprincipal')}
            required={true}
            storage={Storage.values.sSASurveySignatureofprincipal}
            max={undefined}
            layout={formItemLayout}
          />
          </Col>
          <Col {...threeColumnsResponsiveProps}>
          <ImagesFormItem
            name="schoolStamp"
            label={i18n('entities.sSASurvey.fields.schoolStamp')}
            required={false}
            storage={Storage.values.sSASurveySchoolStamp}
            max={undefined}
            layout={formItemLayout}
          />
          </Col>
          <Col {...threeColumnsResponsiveProps}>
          <FilesFormItem
            name="schoolImprovement"
            label={i18n('entities.sSASurvey.fields.schoolImprovement')}
            required={false}
            storage={Storage.values.sSASurveySchoolImprovement}
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
      title: i18n('entities.sSASurvey.fields.introduction'),
      content:  i18n('entities.sSASurvey.fields.introduction'),
    },
    {
      title: i18n('entities.sSASurvey.fields.school'),
      content: i18n('entities.sSASurvey.fields.schoolinfo'),
    },
    {
      title: i18n('entities.sSASurvey.fields.dimension1'),
      content: i18n('entities.sSASurvey.new.dimension1'),
    },
    {
      title: i18n('entities.sSASurvey.fields.dimension2'),
      content: i18n('entities.sSASurvey.new.dimension2'),
    },
    {
      title: i18n('entities.sSASurvey.fields.dimension3'),
      content: i18n('entities.sSASurvey.new.dimension3'),
    },
    {
      title: i18n('entities.sSASurvey.fields.dimension4'),
      content: i18n('entities.sSASurvey.new.dimension4'),
    },
    {
      title: i18n('entities.sSASurvey.fields.dimension5'),
      content: i18n('entities.sSASurvey.new.dimension5'),
    },
    {
      title: i18n('entities.sSASurvey.fields.finalize'),
      content:  i18n('entities.sSASurvey.new.sectionc'),
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
        {current > 0 && current < 7  && (
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

export default SSASurveyForm;
