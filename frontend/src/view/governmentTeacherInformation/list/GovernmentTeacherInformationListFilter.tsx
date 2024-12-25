import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { i18n } from 'src/i18n';
import actions from 'src/modules/governmentTeacherInformation/list/governmentTeacherInformationListActions';
import selectors from 'src/modules/governmentTeacherInformation/list/governmentTeacherInformationListSelectors';
import FilterWrapper, {
  filterItemLayout,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import { Collapse } from 'antd';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';
import DistrictAutocompleteFormItem from 'src/view/district/autocomplete/DistrictAutocompleteFormItem';

const schema = yup.object().shape({
  school: yupFilterSchemas.relationToOne(
    i18n('entities.governmentTeacherInformation.fields.school'),
  ),
  district: yupFilterSchemas.relationToOne(
    i18n('entities.governmentTeacherInformation.fields.district'),
  ),
  fullName: yupFilterSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.fullName'),
  ),
  teacherIDNumber: yupFilterSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.teacherIDNumber'),
  ),
  educationLevel: yupFilterSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.educationLevel'),
  ),
  
});

const emptyValues = {
  school: null,
  district: null,
  fullName: null,
  teacherIDNumber: null,
  educationLevel: null,
}

const previewRenders = {
  school: {
      label: i18n('entities.governmentTeacherInformation.fields.school'),
      render: filterRenders.relationToOne(),
    },
  district: {
      label: i18n('entities.governmentTeacherInformation.fields.district'),
      render: filterRenders.relationToOne(),
    },
  fullName: {
    label: i18n('entities.governmentTeacherInformation.fields.fullName'),
    render: filterRenders.generic(),
  },
  teacherIDNumber: {
    label: i18n('entities.governmentTeacherInformation.fields.teacherIDNumber'),
    render: filterRenders.generic(),
  },
}

const GovernmentTeacherInformationListFilter = (props) => {
  const dispatch = useAppDispatch();
  const rawFilter = useSelector(selectors.selectRawFilter);
  const [expanded, setExpanded] = useState(true);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(true);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(true);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const { loading } = props;
  return (
    <FilterWrapper>
      <Collapse
        activeKey={expanded ? 'filter' : undefined}
        expandIconPosition="right"
        ghost
        onChange={(value) => {
          setExpanded(Boolean(value.length));
        }}
      >
        <Collapse.Panel
          header={
            <FilterPreview             
              renders={previewRenders}
              values={rawFilter}
              expanded={expanded}
              onRemove={onRemove}
            />
          }
          key="filter"
        >
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Row gutter={24}>
                <Col xs={24} md={24} lg={12}>
                  <SchoolAutocompleteFormItem  
                    name="school"
                    label={i18n('entities.governmentTeacherInformation.fields.school')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DistrictAutocompleteFormItem  
                    name="district"
                    label={i18n('entities.governmentTeacherInformation.fields.district')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="fullName"
                    label={i18n('entities.governmentTeacherInformation.fields.fullName')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="teacherIDNumber"
                    label={i18n('entities.governmentTeacherInformation.fields.teacherIDNumber')}      
                    layout={filterItemLayout}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="filter-buttons" span={24}>
                  <Button
                    loading={loading}
                    icon={<SearchOutlined rev={undefined} />}
                    type="primary"
                    htmlType="submit"
                  >
                    {i18n('common.search')}
                  </Button>
                  <Button
                    loading={loading}
                    onClick={onReset}
                    icon={<UndoOutlined rev={undefined} />}
                  >
                    {i18n('common.reset')}
                  </Button>
                </Col>
              </Row>
            </form>
          </FormProvider>
        </Collapse.Panel>
      </Collapse>
    </FilterWrapper>
  );
};

export default GovernmentTeacherInformationListFilter;