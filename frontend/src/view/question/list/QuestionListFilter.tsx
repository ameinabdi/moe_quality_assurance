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
import actions from 'src/modules/question/list/questionListActions';
import selectors from 'src/modules/question/list/questionListSelectors';
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
import questionEnumerators from 'src/modules/question/questionEnumerators';

const schema = yup.object().shape({
  question: yupFilterSchemas.string(
    i18n('entities.question.fields.question'),
  ),
  type: yupFilterSchemas.enumerator(
    i18n('entities.question.fields.type'),
  ),
  hint: yupFilterSchemas.string(
    i18n('entities.question.fields.hint'),
  ),
  validation: yupFilterSchemas.stringArray(
    i18n('entities.question.fields.validation'),
  ),
  answerValue: yupFilterSchemas.string(
    i18n('entities.question.fields.answerValue'),
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
    label: i18n('entities.question.fields.question'),
    render: filterRenders.generic(),
  },
  type: {
    label: i18n('entities.question.fields.type'),
    render: filterRenders.enumerator('entities.question.enumerators.type',),
  },
  hint: {
    label: i18n('entities.question.fields.hint'),
    render: filterRenders.generic(),
  },
  validation: {
    label: i18n('entities.question.fields.validation'),
    render: filterRenders.enumeratorMultiple('entities.question.enumerators.validation',),
  },
  answerValue: {
    label: i18n('entities.question.fields.answerValue'),
    render: filterRenders.generic(),
  },
}

const QuestionListFilter = (props) => {
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
                    label={i18n('entities.question.fields.question')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="type"
                    label={i18n('entities.question.fields.type')}
                    options={questionEnumerators.type.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.question.enumerators.type.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="hint"
                    label={i18n('entities.question.fields.hint')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="validation"
                    label={i18n('entities.question.fields.validation')}
                    options={questionEnumerators.validation.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.question.enumerators.validation.${value}`,
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
                    label={i18n('entities.question.fields.answerValue')}      
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

export default QuestionListFilter;