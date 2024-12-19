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
import actions from 'src/modules/schoolSupervision/list/schoolSupervisionListActions';
import selectors from 'src/modules/schoolSupervision/list/schoolSupervisionListSelectors';
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
import Dimension1AutocompleteFormItem from 'src/view/dimension1/autocomplete/Dimension1AutocompleteFormItem';
import Deminsion2AutocompleteFormItem from 'src/view/deminsion2/autocomplete/Deminsion2AutocompleteFormItem';
import Dimension3AutocompleteFormItem from 'src/view/dimension3/autocomplete/Dimension3AutocompleteFormItem';
import Dimension4AutocompleteFormItem from 'src/view/dimension4/autocomplete/Dimension4AutocompleteFormItem';
import Dimension5AutocompleteFormItem from 'src/view/dimension5/autocomplete/Dimension5AutocompleteFormItem';

const schema = yup.object().shape({
  finalizedDateRange: yupFilterSchemas.dateRange(
    i18n('entities.schoolSupervision.fields.finalizedDateRange'),
  ),
  principal: yupFilterSchemas.string(
    i18n('entities.schoolSupervision.fields.principal'),
  ),
  introduction: yupFilterSchemas.string(
    i18n('entities.schoolSupervision.fields.introduction'),
  ),
  guidelines: yupFilterSchemas.string(
    i18n('entities.schoolSupervision.fields.guidelines'),
  ),
  school: yupFilterSchemas.relationToOne(
    i18n('entities.schoolSupervision.fields.school'),
  ),
  dimension1: yupFilterSchemas.relationToOne(
    i18n('entities.schoolSupervision.fields.dimension1'),
  ),
  dimension2: yupFilterSchemas.relationToOne(
    i18n('entities.schoolSupervision.fields.dimension2'),
  ),
  dimension3: yupFilterSchemas.relationToOne(
    i18n('entities.schoolSupervision.fields.dimension3'),
  ),
  dimension4: yupFilterSchemas.relationToOne(
    i18n('entities.schoolSupervision.fields.dimension4'),
  ),
  dimension5: yupFilterSchemas.relationToOne(
    i18n('entities.schoolSupervision.fields.dimension5'),
  ),
});

const emptyValues = {
  finalizedDateRange: [],
  principal: null,
  introduction: null,
  guidelines: null,
  school: null,
  dimension1: null,
  dimension2: null,
  dimension3: null,
  dimension4: null,
  dimension5: null,
}

const previewRenders = {
  finalizedDateRange: {
    label: i18n('entities.schoolSupervision.fields.finalizedDateRange'),
    render: filterRenders.dateRange(),
  },
  principal: {
    label: i18n('entities.schoolSupervision.fields.principal'),
    render: filterRenders.generic(),
  },
  introduction: {
    label: i18n('entities.schoolSupervision.fields.introduction'),
    render: filterRenders.generic(),
  },
  guidelines: {
    label: i18n('entities.schoolSupervision.fields.guidelines'),
    render: filterRenders.generic(),
  },
  school: {
      label: i18n('entities.schoolSupervision.fields.school'),
      render: filterRenders.relationToOne(),
    },
  dimension1: {
      label: i18n('entities.schoolSupervision.fields.dimension1'),
      render: filterRenders.relationToOne(),
    },
  dimension2: {
      label: i18n('entities.schoolSupervision.fields.dimension2'),
      render: filterRenders.relationToOne(),
    },
  dimension3: {
      label: i18n('entities.schoolSupervision.fields.dimension3'),
      render: filterRenders.relationToOne(),
    },
  dimension4: {
      label: i18n('entities.schoolSupervision.fields.dimension4'),
      render: filterRenders.relationToOne(),
    },
  dimension5: {
      label: i18n('entities.schoolSupervision.fields.dimension5'),
      render: filterRenders.relationToOne(),
    },
}

const SchoolSupervisionListFilter = (props) => {
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
                  <DatePickerRangeFormItem
                    name="finalizedDateRange"
                    label={i18n('entities.schoolSupervision.fields.finalizedDateRange')}    
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="principal"
                    label={i18n('entities.schoolSupervision.fields.principal')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="introduction"
                    label={i18n('entities.schoolSupervision.fields.introduction')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="guidelines"
                    label={i18n('entities.schoolSupervision.fields.guidelines')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SchoolAutocompleteFormItem  
                    name="school"
                    label={i18n('entities.schoolSupervision.fields.school')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <Dimension1AutocompleteFormItem  
                    name="dimension1"
                    label={i18n('entities.schoolSupervision.fields.dimension1')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <Deminsion2AutocompleteFormItem  
                    name="dimension2"
                    label={i18n('entities.schoolSupervision.fields.dimension2')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <Dimension3AutocompleteFormItem  
                    name="dimension3"
                    label={i18n('entities.schoolSupervision.fields.dimension3')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <Dimension4AutocompleteFormItem  
                    name="dimension4"
                    label={i18n('entities.schoolSupervision.fields.dimension4')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <Dimension5AutocompleteFormItem  
                    name="dimension5"
                    label={i18n('entities.schoolSupervision.fields.dimension5')}        
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

export default SchoolSupervisionListFilter;