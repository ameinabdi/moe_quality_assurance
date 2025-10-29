import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';import { i18n } from 'src/i18n';
import actions from 'src/modules/sSASurvey/list/sSASurveyListActions';
import selectors from 'src/modules/sSASurvey/list/sSASurveyListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import sSASurveyEnumerators from 'src/modules/sSASurvey/sSASurveyEnumerators';

const schema = yup.object().shape({
  finalizedDateRange: yupFilterSchemas.dateRange(
    i18n('entities.sSASurvey.fields.finalizedDateRange'),
  ),
  principal: yupFilterSchemas.string(
    i18n('entities.sSASurvey.fields.principal'),
  ),
  school: yupFilterSchemas.relationToOne(
    i18n('entities.sSASurvey.fields.school'),
  ),
  tooltype: yupFilterSchemas.enumerator(
    i18n('entities.sSASurvey.fields.tooltype'),
  ),
});

const emptyValues = {
  finalizedDateRange: [],
  principal: null,
  school: null,
  tooltype: null,

}

const previewRenders = {
  finalizedDateRange: {
    label: i18n('entities.sSASurvey.fields.finalizedDateRange'),
    render: filterRenders.dateRange(),
  },
  principal: {
    label: i18n('entities.sSASurvey.fields.principal'),
    render: filterRenders.generic(),
  },
  school: {
      label: i18n('entities.sSASurvey.fields.school'),
      render: filterRenders.relationToOne(),
    },
 tooltype: {
    label: i18n('entities.sSASurvey.fields.tooltype'),
    render: filterRenders.enumerator('entities.sSASurvey.enumerators.tooltype'),
  },
}

const SSASurveyListFilter = (props) => {
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
                  <SelectFormItem
                    name="tooltype"
                    label={i18n('entities.sSASurvey.fields.tooltype')}
                    options={sSASurveyEnumerators.tooltype.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.sSASurvey.enumerators.tooltype.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="finalizedDateRange"
                    label={i18n('entities.sSASurvey.fields.finalizedDateRange')}    
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="principal"
                    label={i18n('entities.sSASurvey.fields.principal')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SchoolAutocompleteFormItem  
                    name="school"
                    label={i18n('entities.sSASurvey.fields.school')}        
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

export default SSASurveyListFilter;