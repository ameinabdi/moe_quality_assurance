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
import actions from 'src/modules/subQuestion/list/subQuestionListActions';
import selectors from 'src/modules/subQuestion/list/subQuestionListSelectors';
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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import subQuestionEnumerators from 'src/modules/subQuestion/subQuestionEnumerators';

const schema = yup.object().shape({
  question: yupFilterSchemas.string(
    i18n('entities.subQuestion.fields.question'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.subQuestion.fields.type'),
  ),
  hint: yupFilterSchemas.string(
    i18n('entities.subQuestion.fields.hint'),
  ),
  validation: yupFilterSchemas.stringArray(
    i18n('entities.subQuestion.fields.validation'),
  ),
  answerValue: yupFilterSchemas.string(
    i18n('entities.subQuestion.fields.answerValue'),
  ),
});

const emptyValues = {
  question: null,
  type: null,
  hint: null,
  validation: [],
  answerValue: null,
}

const previewRenders = {
  question: {
    label: i18n('entities.subQuestion.fields.question'),
    render: filterRenders.generic(),
  },
  type: {
    label: i18n('entities.subQuestion.fields.type'),
    render: filterRenders.enumerator('entities.subQuestion.enumerators.type',),
  },
  hint: {
    label: i18n('entities.subQuestion.fields.hint'),
    render: filterRenders.generic(),
  },
  validation: {
    label: i18n('entities.subQuestion.fields.validation'),
    render: filterRenders.enumeratorMultiple('entities.subQuestion.enumerators.validation',),
  },
  answerValue: {
    label: i18n('entities.subQuestion.fields.answerValue'),
    render: filterRenders.generic(),
  },
}

const SubQuestionListFilter = (props) => {
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
                    name="question"
                    label={i18n('entities.subQuestion.fields.question')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="type"
                    label={i18n('entities.subQuestion.fields.type')}
                    options={subQuestionEnumerators.type.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.subQuestion.enumerators.type.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="hint"
                    label={i18n('entities.subQuestion.fields.hint')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="validation"
                    label={i18n('entities.subQuestion.fields.validation')}
                    options={subQuestionEnumerators.validation.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.subQuestion.enumerators.validation.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                    mode="multiple"
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="answerValue"
                    label={i18n('entities.subQuestion.fields.answerValue')}      
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

export default SubQuestionListFilter;