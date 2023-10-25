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
import actions from 'src/modules/assessmentAnswer/list/assessmentAnswerListActions';
import selectors from 'src/modules/assessmentAnswer/list/assessmentAnswerListSelectors';
import FilterWrapper, {
  filterItemLayout,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import { Collapse } from 'antd';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import assessmentAnswerEnumerators from 'src/modules/assessmentAnswer/assessmentAnswerEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import AssessmentAutocompleteFormItem from 'src/view/assessment/autocomplete/AssessmentAutocompleteFormItem';

const schema = yup.object().shape({
  assessment: yupFilterSchemas.relationToOne(
    i18n('entities.assessmentAnswer.fields.assessment'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.assessmentAnswer.fields.status'),
  ),
  submitDateRange: yupFilterSchemas.datetimeRange(
    i18n('entities.assessmentAnswer.fields.submitDateRange'),
  ),
});

const emptyValues = {
  assessment: null,
  status: null,
  submitDateRange: [],
}

const previewRenders = {
  assessment: {
      label: i18n('entities.assessmentAnswer.fields.assessment'),
      render: filterRenders.relationToOne(),
    },
  status: {
    label: i18n('entities.assessmentAnswer.fields.status'),
    render: filterRenders.enumerator('entities.assessmentAnswer.enumerators.status',),
  },
  submitDateRange: {
    label: i18n('entities.assessmentAnswer.fields.submitDateRange'),
    render: filterRenders.datetimeRange(),
  },
}

const AssessmentAnswerListFilter = (props) => {
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
                  <AssessmentAutocompleteFormItem  
                    name="assessment"
                    label={i18n('entities.assessmentAnswer.fields.assessment')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="status"
                    label={i18n('entities.assessmentAnswer.fields.status')}
                    options={assessmentAnswerEnumerators.status.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.assessmentAnswer.enumerators.status.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="submitDateRange"
                    label={i18n('entities.assessmentAnswer.fields.submitDateRange')}    
                    showTime
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

export default AssessmentAnswerListFilter;