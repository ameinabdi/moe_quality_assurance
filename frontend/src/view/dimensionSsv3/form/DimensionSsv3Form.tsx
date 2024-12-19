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
import dimensionSsv3Enumerators from 'src/modules/dimensionSsv3/dimensionSsv3Enumerators';
import CustomCheckboxFormItem from 'src/view/shared/form/items/CustomCheckboxFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import governmentTeacherInformationEnumerators from 'src/modules/governmentTeacherInformation/governmentTeacherInformationEnumerators';
const {  Title } = Typography;

const schema = yup.object().shape({
  indicator51: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator51'),
    {
      "options": dimensionSsv3Enumerators.indicator51,
      "required": true
    },
  ),
  indicator52: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator52'),
    {
      "options": dimensionSsv3Enumerators.indicator52,
      "required": true
    },
  ),
  indicator53: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator53'),
    {
      "options": dimensionSsv3Enumerators.indicator53,
      "required": true
    },
  ),
  indicator54: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator54'),
    {
      "options": dimensionSsv3Enumerators.indicator54,
      "required": true
    },
  ),
  indicator55: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator55'),
    {
      "options": dimensionSsv3Enumerators.indicator55,
      "required": true
    },
  ),
  indicator56: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator56'),
    {
      "options": dimensionSsv3Enumerators.indicator56,
      "required": true
    },
  ),
  indicator57: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator57'),
    {
      "options": dimensionSsv3Enumerators.indicator57,
      "required": true
    },
  ),
  indicator58: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator58'),
    {
      "options": dimensionSsv3Enumerators.indicator58,
      "required": true
    },
  ),
  indicator59: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator59'),
    {
      "options": dimensionSsv3Enumerators.indicator59,
      "required": true
    },
  ),
  indicator510: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator510'),
    {
      "options": dimensionSsv3Enumerators.indicator510,
      "required": true
    },
  ),
  indicator511: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator511'),
    {
      "options": dimensionSsv3Enumerators.indicator511,
      "required": true
    },
  ),
  indicator512: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator512'),
    {
      "options": dimensionSsv3Enumerators.indicator512,
      "required": true
    },
  ),
  indicator513: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator513'),
    {
      "options": dimensionSsv3Enumerators.indicator513,
      "required": true
    },
  ),
  indicator514: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator514'),
    {
      "options": dimensionSsv3Enumerators.indicator514,
      "required": true
    },
  ),
  indicator515: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator515'),
    {
      "options": dimensionSsv3Enumerators.indicator515,
      "required": true
    },
  ),
  indicator516: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator516'),
    {
      "options": dimensionSsv3Enumerators.indicator516,
      "required": true
    },
  ),
  indicator517: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator517'),
    {
      "options": dimensionSsv3Enumerators.indicator517,
      "required": true
    },
  ),
  indicator518: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator518'),
    {
      "options": dimensionSsv3Enumerators.indicator518,
      "required": true
    },
  ),
  indicator519: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator519'),
    {
      "options": dimensionSsv3Enumerators.indicator519,
      "required": true
    },
  ),
  indicator520: yupFormSchemas.enumerator(
    i18n('entities.dimensionSsv3.fields.indicator520'),
    {
      "options": dimensionSsv3Enumerators.indicator520,
      "required": true
    },
  ),
  school: yupFormSchemas.relationToOne(
    i18n('entities.dimensionSsv3.fields.school'),
    {
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
});

const DimensionSsv3Form = (props) => {
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
      school: props.supervision?.schoolId || record.school,
      supervision:props.supervision?.id || null,
      gradesTaught: record.gradesTaught || [],
      subjectsTaught: record.subjectsTaught || [],
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
        indicator:(<Title level={3}>{i18n('entities.dimension5.fields.lesson')}</Title>),
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
        indicator:(<Title level={3}>{i18n('entities.dimension5.fields.classroom')}</Title>),
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
        indicator:(<Title level={3}>{i18n('entities.dimension5.fields.instruction')}</Title>),
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
        no:'',
        indicator:(<Title level={3}>{i18n('entities.dimension5.fields.learner')}</Title>),
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

  const { saveLoading } = props;

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
          <Row gutter={24}>
        <Col {...twoColumnsResponsiveProps}>
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
           <Col {...twoColumnsResponsiveProps}>
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

export default DimensionSsv3Form;
