import {
  CloseOutlined,
  SaveOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row, Table,Typography } from 'antd';
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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import teacherGPEEnumerators from 'src/modules/teacherGPE/teacherGPEEnumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';
import DistrictAutocompleteFormItem from 'src/view/district/autocomplete/DistrictAutocompleteFormItem';
import dimensionGPE5Enumerators from 'src/modules/dimensionGPE5/dimensionGPE5Enumerators';
import CustomCheckboxFormItem from 'src/view/shared/form/items/CustomCheckboxFormItem';
const {  Title } = Typography;

const schema = yup.object().shape({
  school: yupFormSchemas.relationToOne(
    i18n('entities.teacherGPE.fields.school'),
    {
      "required": true
    },
  ),
  district: yupFormSchemas.relationToOne(
    i18n('entities.teacherGPE.fields.district'),
    {
      "required": true
    },
  ),
  fullName: yupFormSchemas.string(
    i18n('entities.teacherGPE.fields.fullName'),
    {
      "required": true
    },
  ),
  gender: yupFormSchemas.enumerator(
    i18n('entities.teacherGPE.fields.gender'),
    {
      "required": true,
      "options": teacherGPEEnumerators.gender
    },
  ),
  subjectName: yupFormSchemas.enumerator(
    i18n('entities.teacherGPE.fields.subjectName'),
    {
      "options": teacherGPEEnumerators.subjectName
    },
  ),
  teachingLevel: yupFormSchemas.enumerator(
    i18n('entities.teacherGPE.fields.teachingLevel'),
    {
      "required": true,
      "options": teacherGPEEnumerators.teachingLevel
    },
  ),
  grade: yupFormSchemas.enumerator(
    i18n('entities.teacherGPE.fields.grade'),
    {
      "required": true,
      "options": teacherGPEEnumerators.grade
    },
  ),
  totalStudent: yupFormSchemas.integer(
    i18n('entities.teacherGPE.fields.totalStudent'),
    {
      "required": true
    },
  ),
  maleStudents: yupFormSchemas.integer(
    i18n('entities.teacherGPE.fields.maleStudents'),
    {
      "required": true
    },
  ),
  femaleStudent: yupFormSchemas.integer(
    i18n('entities.teacherGPE.fields.femaleStudent'),
    {
      "required": true
    },
  ),
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
});

const TeacherGPEForm = (props) => {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      school: record.school,
      state: record.state,
      region: record.region,
      district: record.district,
      fullName: record.fullName,
      gender: record.gender,
      subjectName: record.subjectName,
      teachingLevel: record.teachingLevel,
      grade: record.grade,
      totalStudent: record.totalStudent,
      maleStudents: record.maleStudents,
      femaleStudent: record.femaleStudent,
      indicator51: record.dimension5?.indicator51,
      indicator52: record.dimension5?.indicator52,
      indicator53: record.dimension5?.indicator53,
      indicator54: record.dimension5?.indicator54,
      indicator55: record.dimension5?.indicator55,
      indicator56: record.dimension5?.indicator56,
      indicator57: record.dimension5?.indicator57,
      indicator58: record.dimension5?.indicator58,
      indicator59: record.dimension5?.indicator59,
      indicator510: record.dimension5?.indicator510,
      indicator511: record.dimension5?.indicator511,
      indicator512: record.dimension5?.indicator512,
      indicator513: record.dimension5?.indicator513,
      indicator514: record.dimension5?.indicator514,
      indicator515: record.dimension5?.indicator515,
      indicator516: record.dimension5?.indicator516,
      indicator517: record.dimension5?.indicator517,
      indicator518: record.dimension5?.indicator518,
      indicator519: record.dimension5?.indicator519,
      indicator520: record.dimension5?.indicator520,
      indicator521: record.dimension5?.indicator521,
      indicator522: record.dimension5?.indicator522,
      indicator523: record.dimension5?.indicator523,
      indicator524: record.dimension5?.indicator524,
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
        const dimension5 =[
          {
            no:'',
            indicator:(<Title level={3}>{i18n('entities.dimensionGPE5.fields.lesson')}</Title>),
          },
          {
            no:'1',
            indicator:i18n('entities.dimensionGPE5.fields.indicator51'),
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
            indicator:i18n('entities.dimensionGPE5.fields.indicator52'),
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
            indicator:i18n('entities.dimensionGPE5.fields.indicator53'),
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
            indicator:i18n('entities.dimensionGPE5.fields.indicator54'),
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
            indicator:i18n('entities.dimensionGPE5.fields.indicator55'),
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
            indicator:i18n('entities.dimensionGPE5.fields.indicator56'),
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
            no:'7',
            indicator:i18n('entities.dimensionGPE5.fields.indicator57'),
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
            no:'',
            indicator:(<Title level={3}>{i18n('entities.dimensionGPE5.fields.classroom')}</Title>),
          },
          {
            no:'8',
            indicator:i18n('entities.dimensionGPE5.fields.indicator58'),
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
            indicator:i18n('entities.dimensionGPE5.fields.indicator59'),
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
            indicator:i18n('entities.dimensionGPE5.fields.indicator510'),
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
            indicator:i18n('entities.dimensionGPE5.fields.indicator511'),
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
            indicator:i18n('entities.dimensionGPE5.fields.indicator512'),
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
            no:'13',
            indicator:i18n('entities.dimensionGPE5.fields.indicator513'),
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
            no:'',
            indicator:(<Title level={3}>{i18n('entities.dimensionGPE5.fields.instruction')}</Title>),
          },
          {
            no:'14',
            indicator:i18n('entities.dimensionGPE5.fields.indicator514'),
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
            no:'15',
            indicator:i18n('entities.dimensionGPE5.fields.indicator515'),
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
            indicator:i18n('entities.dimensionGPE5.fields.indicator516'),
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
            no:'',
            indicator:(<Title level={3}>{i18n('entities.dimensionGPE5.fields.Professionalism')}</Title>),
          },
          {
            no:'17',
            indicator:i18n('entities.dimensionGPE5.fields.indicator517'),
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
            indicator:i18n('entities.dimensionGPE5.fields.indicator518'),
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
            indicator:i18n('entities.dimensionGPE5.fields.indicator519'),
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
            no:'',
            indicator:(<Title level={3}>{i18n('entities.dimensionGPE5.fields.learner')}</Title>),
          },
          {
            no:'20',
            indicator:i18n('entities.dimensionGPE5.fields.indicator520'),
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
          {
            no:'21',
            indicator:i18n('entities.dimensionGPE5.fields.indicator521'),
            1:(<CustomCheckboxFormItem
              name="indicator521"
              size={'large'}
              value={'1'}
              required={false}
              layout={formItemLayout}
            />),
            2:(<CustomCheckboxFormItem
              name="indicator521"
              size={'large'}
              value={'2'}
              required={false}
              layout={formItemLayout}
            />),
            3:(<CustomCheckboxFormItem
              name="indicator521"
              size={'large'}
              value={'3'}
              required={false}
              layout={formItemLayout}
            />),
            4:(<CustomCheckboxFormItem
              name="indicator521"
              size={'large'}
              value={'4'}
              required={false}
              layout={formItemLayout}
            />),
            5:(<CustomCheckboxFormItem
              name="indicator521"
              size={'large'}
              value={'5'}
              required={false}
              layout={formItemLayout}
            />)
          },
          {
            no:'22',
            indicator:i18n('entities.dimensionGPE5.fields.indicator522'),
            1:(<CustomCheckboxFormItem
              name="indicator522"
              size={'large'}
              value={'1'}
              required={false}
              layout={formItemLayout}
            />),
            2:(<CustomCheckboxFormItem
              name="indicator522"
              size={'large'}
              value={'2'}
              required={false}
              layout={formItemLayout}
            />),
            3:(<CustomCheckboxFormItem
              name="indicator522"
              size={'large'}
              value={'3'}
              required={false}
              layout={formItemLayout}
            />),
            4:(<CustomCheckboxFormItem
              name="indicator522"
              size={'large'}
              value={'4'}
              required={false}
              layout={formItemLayout}
            />),
            5:(<CustomCheckboxFormItem
              name="indicator522"
              size={'large'}
              value={'5'}
              required={false}
              layout={formItemLayout}
            />)
          },
          {
            no:'23',
            indicator:i18n('entities.dimensionGPE5.fields.indicator523'),
            1:(<CustomCheckboxFormItem
              name="indicator523"
              size={'large'}
              value={'1'}
              required={false}
              layout={formItemLayout}
            />),
            2:(<CustomCheckboxFormItem
              name="indicator523"
              size={'large'}
              value={'2'}
              required={false}
              layout={formItemLayout}
            />),
            3:(<CustomCheckboxFormItem
              name="indicator523"
              size={'large'}
              value={'3'}
              required={false}
              layout={formItemLayout}
            />),
            4:(<CustomCheckboxFormItem
              name="indicator523"
              size={'large'}
              value={'4'}
              required={false}
              layout={formItemLayout}
            />),
            5:(<CustomCheckboxFormItem
              name="indicator523"
              size={'large'}
              value={'5'}
              required={false}
              layout={formItemLayout}
            />)
          },
          {
            no:'24',
            indicator:i18n('entities.dimensionGPE5.fields.indicator524'),
            1:(<CustomCheckboxFormItem
              name="indicator524"
              size={'large'}
              value={'1'}
              required={false}
              layout={formItemLayout}
            />),
            2:(<CustomCheckboxFormItem
              name="indicator524"
              size={'large'}
              value={'2'}
              required={false}
              layout={formItemLayout}
            />),
            3:(<CustomCheckboxFormItem
              name="indicator524"
              size={'large'}
              value={'3'}
              required={false}
              layout={formItemLayout}
            />),
            4:(<CustomCheckboxFormItem
              name="indicator524"
              size={'large'}
              value={'4'}
              required={false}
              layout={formItemLayout}
            />),
            5:(<CustomCheckboxFormItem
              name="indicator524"
              size={'large'}
              value={'5'}
              required={false}
              layout={formItemLayout}
            />)
          },
        
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
        const fourColumnsResponsiveProps = {
          xs: 24,
          sm: 24,
          md: 6,
          lg: 6,
          xl: 6,
          style: {
            marginBottom: 24,
            padding:5
          },
        };
        console.log('yeeee', form)

  const { saveLoading } = props;
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <Row gutter={24}>
        <Col {...fourColumnsResponsiveProps}>
        <InputFormItem
            name="fullName"
            label={i18n('entities.teacherGPE.fields.fullName')}  
            required={true}
            layout={formItemLayout}
          />
        </Col>
        <Col {...fourColumnsResponsiveProps}>
        <SelectFormItem
            name="gender"
            label={i18n('entities.teacherGPE.fields.gender')}
            options={teacherGPEEnumerators.gender.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.teacherGPE.enumerators.gender.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
        </Col>
        <Col {...fourColumnsResponsiveProps}>
        <SchoolAutocompleteFormItem  
            name="school"
            label={i18n('entities.teacherGPE.fields.school')}
            required={true}
            layout={formItemLayout}
          />
        </Col>
        <Col {...fourColumnsResponsiveProps}>
        <DistrictAutocompleteFormItem  
            name="district"
            label={i18n('entities.teacherGPE.fields.district')}
            required={true}
            layout={formItemLayout}
          />
        </Col>
        
        <Col {...fourColumnsResponsiveProps}>
        <SelectFormItem
            name="subjectName"
            label={i18n('entities.teacherGPE.fields.subjectName')}
            options={teacherGPEEnumerators.subjectName.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.teacherGPE.enumerators.subjectName.${value}`,
                ),
              }),
            )}
            required={false}
            layout={formItemLayout}
          />
        </Col>
        <Col {...fourColumnsResponsiveProps}>
        <SelectFormItem
            name="teachingLevel"
            label={i18n('entities.teacherGPE.fields.teachingLevel')}
            options={teacherGPEEnumerators.teachingLevel.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.teacherGPE.enumerators.teachingLevel.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
        </Col>
        <Col {...fourColumnsResponsiveProps}>
        <SelectFormItem
            name="grade"
            label={i18n('entities.teacherGPE.fields.grade')}
            options={teacherGPEEnumerators.grade.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.teacherGPE.enumerators.grade.${value}`,
                ),
              }),
            )}
            required={true}
            layout={formItemLayout}
          />
        </Col>
        <Col {...fourColumnsResponsiveProps}>
        <InputNumberFormItem
            name="totalStudent"
            label={i18n('entities.teacherGPE.fields.totalStudent')}  
            required={true}
            layout={formItemLayout}
          />
        </Col>
        <Col {...fourColumnsResponsiveProps}>
        <InputNumberFormItem
            name="maleStudents"
            label={i18n('entities.teacherGPE.fields.maleStudents')}  
            required={true}
            layout={formItemLayout}
          />
        </Col>
        <Col {...fourColumnsResponsiveProps}>
        <InputNumberFormItem
            name="femaleStudent"
            label={i18n('entities.teacherGPE.fields.femaleStudent')}  
            required={true}
            layout={formItemLayout}
          />
        </Col>

        </Row>
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
          
               
               <Row gutter={24} style={{marginTop:20}}>
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
                         onClick={() => props.onCancel()}
                         size='large'
                         block
                         icon={<CloseOutlined rev={undefined} />}
                       >
                         {i18n('common.cancel')}
                       </Button>
                     )}
                       </Col>
                     </Row>
        </form>
      </FormProvider>
    </FormWrapper>
  );
};

export default TeacherGPEForm;
