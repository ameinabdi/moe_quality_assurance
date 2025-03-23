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
import actions from 'src/modules/dimensionGPE4/list/dimensionGPE4ListActions';
import selectors from 'src/modules/dimensionGPE4/list/dimensionGPE4ListSelectors';
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
import dimensionGPE4Enumerators from 'src/modules/dimensionGPE4/dimensionGPE4Enumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';

const schema = yup.object().shape({
  indicator41: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE4.fields.indicator41'),
  ),
  indicator42: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE4.fields.indicator42'),
  ),
  indicator43: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE4.fields.indicator43'),
  ),
  indicator44: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE4.fields.indicator44'),
  ),
  school: yupFilterSchemas.relationToOne(
    i18n('entities.dimensionGPE4.fields.school'),
  ),
});

const emptyValues = {
  indicator41: null,
  indicator42: null,
  indicator43: null,
  indicator44: null,
  school: null,
}

const previewRenders = {
  indicator41: {
    label: i18n('entities.dimensionGPE4.fields.indicator41'),
    render: filterRenders.enumerator('entities.dimensionGPE4.enumerators.indicator41',),
  },
  indicator42: {
    label: i18n('entities.dimensionGPE4.fields.indicator42'),
    render: filterRenders.enumerator('entities.dimensionGPE4.enumerators.indicator42',),
  },
  indicator43: {
    label: i18n('entities.dimensionGPE4.fields.indicator43'),
    render: filterRenders.enumerator('entities.dimensionGPE4.enumerators.indicator43',),
  },
  indicator44: {
    label: i18n('entities.dimensionGPE4.fields.indicator44'),
    render: filterRenders.enumerator('entities.dimensionGPE4.enumerators.indicator44',),
  },
  school: {
      label: i18n('entities.dimensionGPE4.fields.school'),
      render: filterRenders.relationToOne(),
    },
}

const DimensionGPE4ListFilter = (props) => {
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
                    name="indicator41"
                    label={i18n('entities.dimensionGPE4.fields.indicator41')}
                    options={dimensionGPE4Enumerators.indicator41.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE4.enumerators.indicator41.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator42"
                    label={i18n('entities.dimensionGPE4.fields.indicator42')}
                    options={dimensionGPE4Enumerators.indicator42.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE4.enumerators.indicator42.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator43"
                    label={i18n('entities.dimensionGPE4.fields.indicator43')}
                    options={dimensionGPE4Enumerators.indicator43.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE4.enumerators.indicator43.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator44"
                    label={i18n('entities.dimensionGPE4.fields.indicator44')}
                    options={dimensionGPE4Enumerators.indicator44.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE4.enumerators.indicator44.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SchoolAutocompleteFormItem  
                    name="school"
                    label={i18n('entities.dimensionGPE4.fields.school')}        
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

export default DimensionGPE4ListFilter;