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
import actions from 'src/modules/schoolSupervisionGPE/list/schoolSupervisionGPEListActions';
import selectors from 'src/modules/schoolSupervisionGPE/list/schoolSupervisionGPEListSelectors';
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
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';
import DimensionGPE1AutocompleteFormItem from 'src/view/dimensionGPE1/autocomplete/DimensionGPE1AutocompleteFormItem';
import DimensionGPE2AutocompleteFormItem from 'src/view/dimensionGPE2/autocomplete/DimensionGPE2AutocompleteFormItem';
import DimensionGPE3AutocompleteFormItem from 'src/view/dimensionGPE3/autocomplete/DimensionGPE3AutocompleteFormItem';
import DimensionGPE4AutocompleteFormItem from 'src/view/dimensionGPE4/autocomplete/DimensionGPE4AutocompleteFormItem';

const schema = yup.object().shape({
  introduction: yupFilterSchemas.string(
    i18n('entities.schoolSupervisionGPE.fields.introduction'),
  ),
  guidelines: yupFilterSchemas.string(
    i18n('entities.schoolSupervisionGPE.fields.guidelines'),
  ),
  finalizedDateRange: yupFilterSchemas.dateRange(
    i18n('entities.schoolSupervisionGPE.fields.finalizedDateRange'),
  ),
  principal: yupFilterSchemas.string(
    i18n('entities.schoolSupervisionGPE.fields.principal'),
  ),
  school: yupFilterSchemas.relationToOne(
    i18n('entities.schoolSupervisionGPE.fields.school'),
  ),
  dimension1: yupFilterSchemas.relationToOne(
    i18n('entities.schoolSupervisionGPE.fields.dimension1'),
  ),
  dimension2: yupFilterSchemas.relationToOne(
    i18n('entities.schoolSupervisionGPE.fields.dimension2'),
  ),
  dimension3: yupFilterSchemas.relationToOne(
    i18n('entities.schoolSupervisionGPE.fields.dimension3'),
  ),
  dimension4: yupFilterSchemas.relationToOne(
    i18n('entities.schoolSupervisionGPE.fields.dimension4'),
  ),
});

const emptyValues = {
  introduction: null,
  guidelines: null,
  finalizedDateRange: [],
  principal: null,
  school: null,
  dimension1: null,
  dimension2: null,
  dimension3: null,
  dimension4: null,
}

const previewRenders = {
  introduction: {
    label: i18n('entities.schoolSupervisionGPE.fields.introduction'),
    render: filterRenders.generic(),
  },
  guidelines: {
    label: i18n('entities.schoolSupervisionGPE.fields.guidelines'),
    render: filterRenders.generic(),
  },
  finalizedDateRange: {
    label: i18n('entities.schoolSupervisionGPE.fields.finalizedDateRange'),
    render: filterRenders.dateRange(),
  },
  principal: {
    label: i18n('entities.schoolSupervisionGPE.fields.principal'),
    render: filterRenders.generic(),
  },
  school: {
      label: i18n('entities.schoolSupervisionGPE.fields.school'),
      render: filterRenders.relationToOne(),
    },
  dimension1: {
      label: i18n('entities.schoolSupervisionGPE.fields.dimension1'),
      render: filterRenders.relationToOne(),
    },
  dimension2: {
      label: i18n('entities.schoolSupervisionGPE.fields.dimension2'),
      render: filterRenders.relationToOne(),
    },
  dimension3: {
      label: i18n('entities.schoolSupervisionGPE.fields.dimension3'),
      render: filterRenders.relationToOne(),
    },
  dimension4: {
      label: i18n('entities.schoolSupervisionGPE.fields.dimension4'),
      render: filterRenders.relationToOne(),
    },
}

const SchoolSupervisionGPEListFilter = (props) => {
  const dispatch = useAppDispatch();
  const rawFilter = useSelector(selectors.selectRawFilter);
  const [expanded, setExpanded] = useState(false);

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
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
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
                  <InputFormItem
                    name="introduction"
                    label={i18n('entities.schoolSupervisionGPE.fields.introduction')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="guidelines"
                    label={i18n('entities.schoolSupervisionGPE.fields.guidelines')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="finalizedDateRange"
                    label={i18n('entities.schoolSupervisionGPE.fields.finalizedDateRange')}    
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="principal"
                    label={i18n('entities.schoolSupervisionGPE.fields.principal')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SchoolAutocompleteFormItem  
                    name="school"
                    label={i18n('entities.schoolSupervisionGPE.fields.school')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DimensionGPE1AutocompleteFormItem  
                    name="dimension1"
                    label={i18n('entities.schoolSupervisionGPE.fields.dimension1')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DimensionGPE2AutocompleteFormItem  
                    name="dimension2"
                    label={i18n('entities.schoolSupervisionGPE.fields.dimension2')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DimensionGPE3AutocompleteFormItem  
                    name="dimension3"
                    label={i18n('entities.schoolSupervisionGPE.fields.dimension3')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DimensionGPE4AutocompleteFormItem  
                    name="dimension4"
                    label={i18n('entities.schoolSupervisionGPE.fields.dimension4')}        
                    layout={filterItemLayout}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="filter-buttons" span={24}>
                  <Button
                    loading={loading}
                    icon={<SearchOutlined rev={undefined}  />}
                    type="primary"
                    htmlType="submit"
                  >
                    {i18n('common.search')}
                  </Button>
                  <Button
                    loading={loading}
                    onClick={onReset}
                    icon={<UndoOutlined rev={undefined}  />}
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

export default SchoolSupervisionGPEListFilter;