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
import actions from 'src/modules/subAnswer/list/subAnswerListActions';
import selectors from 'src/modules/subAnswer/list/subAnswerListSelectors';
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
import AssessmentAutocompleteFormItem from 'src/view/assessment/autocomplete/AssessmentAutocompleteFormItem';
import QuestionAutocompleteFormItem from 'src/view/question/autocomplete/QuestionAutocompleteFormItem';
import SubQuestionAutocompleteFormItem from 'src/view/subQuestion/autocomplete/SubQuestionAutocompleteFormItem';
import AnswerAutocompleteFormItem from 'src/view/answer/autocomplete/AnswerAutocompleteFormItem';

const schema = yup.object().shape({
  assessment: yupFilterSchemas.relationToOne(
    i18n('entities.subAnswer.fields.assessment'),
  ),
  question: yupFilterSchemas.relationToOne(
    i18n('entities.subAnswer.fields.question'),
  ),
  subQuestion: yupFilterSchemas.relationToOne(
    i18n('entities.subAnswer.fields.subQuestion'),
  ),
  answer: yupFilterSchemas.relationToOne(
    i18n('entities.subAnswer.fields.answer'),
  ),
  subAnswer: yupFilterSchemas.string(
    i18n('entities.subAnswer.fields.subAnswer'),
  ),
});

const emptyValues = {
  assessment: null,
  question: null,
  subQuestion: null,
  answer: null,
  subAnswer: null,
}

const previewRenders = {
  assessment: {
      label: i18n('entities.subAnswer.fields.assessment'),
      render: filterRenders.relationToOne(),
    },
  question: {
      label: i18n('entities.subAnswer.fields.question'),
      render: filterRenders.relationToOne(),
    },
  subQuestion: {
      label: i18n('entities.subAnswer.fields.subQuestion'),
      render: filterRenders.relationToOne(),
    },
  answer: {
      label: i18n('entities.subAnswer.fields.answer'),
      render: filterRenders.relationToOne(),
    },
  subAnswer: {
    label: i18n('entities.subAnswer.fields.subAnswer'),
    render: filterRenders.generic(),
  },
}

const SubAnswerListFilter = (props) => {
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
                    label={i18n('entities.subAnswer.fields.assessment')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <QuestionAutocompleteFormItem  
                    name="question"
                    label={i18n('entities.subAnswer.fields.question')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SubQuestionAutocompleteFormItem  
                    name="subQuestion"
                    label={i18n('entities.subAnswer.fields.subQuestion')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <AnswerAutocompleteFormItem  
                    name="answer"
                    label={i18n('entities.subAnswer.fields.answer')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="subAnswer"
                    label={i18n('entities.subAnswer.fields.subAnswer')}      
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

export default SubAnswerListFilter;