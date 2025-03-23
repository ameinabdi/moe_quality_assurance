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
import actions from 'src/modules/dimensionGPE1/list/dimensionGPE1ListActions';
import selectors from 'src/modules/dimensionGPE1/list/dimensionGPE1ListSelectors';
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
import dimensionGPE1Enumerators from 'src/modules/dimensionGPE1/dimensionGPE1Enumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';

const schema = yup.object().shape({
  indicator11: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator11'),
  ),
  indicator12: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator12'),
  ),
  indicator13: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator13'),
  ),
  indicator14: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator14'),
  ),
  indicator15: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator15'),
  ),
  indicator16: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator16'),
  ),
  indicator17: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator17'),
  ),
  indicator18: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator18'),
  ),
  indicator19: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator19'),
  ),
  indicator110: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator110'),
  ),
  indicator111: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator111'),
  ),
  indicator112: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator112'),
  ),
  indicator113: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator113'),
  ),
  indicator114: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE1.fields.indicator114'),
  ),
  school: yupFilterSchemas.relationToOne(
    i18n('entities.dimensionGPE1.fields.school'),
  ),
});

const emptyValues = {
  indicator11: null,
  indicator12: null,
  indicator13: null,
  indicator14: null,
  indicator15: null,
  indicator16: null,
  indicator17: null,
  indicator18: null,
  indicator19: null,
  indicator110: null,
  indicator111: null,
  indicator112: null,
  indicator113: null,
  indicator114: null,
  school: null,
}

const previewRenders = {
  indicator11: {
    label: i18n('entities.dimensionGPE1.fields.indicator11'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator11',),
  },
  indicator12: {
    label: i18n('entities.dimensionGPE1.fields.indicator12'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator12',),
  },
  indicator13: {
    label: i18n('entities.dimensionGPE1.fields.indicator13'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator13',),
  },
  indicator14: {
    label: i18n('entities.dimensionGPE1.fields.indicator14'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator14',),
  },
  indicator15: {
    label: i18n('entities.dimensionGPE1.fields.indicator15'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator15',),
  },
  indicator16: {
    label: i18n('entities.dimensionGPE1.fields.indicator16'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator16',),
  },
  indicator17: {
    label: i18n('entities.dimensionGPE1.fields.indicator17'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator17',),
  },
  indicator18: {
    label: i18n('entities.dimensionGPE1.fields.indicator18'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator18',),
  },
  indicator19: {
    label: i18n('entities.dimensionGPE1.fields.indicator19'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator19',),
  },
  indicator110: {
    label: i18n('entities.dimensionGPE1.fields.indicator110'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator110',),
  },
  indicator111: {
    label: i18n('entities.dimensionGPE1.fields.indicator111'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator111',),
  },
  indicator112: {
    label: i18n('entities.dimensionGPE1.fields.indicator112'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator112',),
  },
  indicator113: {
    label: i18n('entities.dimensionGPE1.fields.indicator113'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator113',),
  },
  indicator114: {
    label: i18n('entities.dimensionGPE1.fields.indicator114'),
    render: filterRenders.enumerator('entities.dimensionGPE1.enumerators.indicator114',),
  },
  school: {
      label: i18n('entities.dimensionGPE1.fields.school'),
      render: filterRenders.relationToOne(),
    },
}

const DimensionGPE1ListFilter = (props) => {
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
                    name="indicator11"
                    label={i18n('entities.dimensionGPE1.fields.indicator11')}
                    options={dimensionGPE1Enumerators.indicator11.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator11.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator12"
                    label={i18n('entities.dimensionGPE1.fields.indicator12')}
                    options={dimensionGPE1Enumerators.indicator12.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator12.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator13"
                    label={i18n('entities.dimensionGPE1.fields.indicator13')}
                    options={dimensionGPE1Enumerators.indicator13.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator13.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator14"
                    label={i18n('entities.dimensionGPE1.fields.indicator14')}
                    options={dimensionGPE1Enumerators.indicator14.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator14.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator15"
                    label={i18n('entities.dimensionGPE1.fields.indicator15')}
                    options={dimensionGPE1Enumerators.indicator15.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator15.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator16"
                    label={i18n('entities.dimensionGPE1.fields.indicator16')}
                    options={dimensionGPE1Enumerators.indicator16.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator16.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator17"
                    label={i18n('entities.dimensionGPE1.fields.indicator17')}
                    options={dimensionGPE1Enumerators.indicator17.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator17.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator18"
                    label={i18n('entities.dimensionGPE1.fields.indicator18')}
                    options={dimensionGPE1Enumerators.indicator18.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator18.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator19"
                    label={i18n('entities.dimensionGPE1.fields.indicator19')}
                    options={dimensionGPE1Enumerators.indicator19.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator19.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator110"
                    label={i18n('entities.dimensionGPE1.fields.indicator110')}
                    options={dimensionGPE1Enumerators.indicator110.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator110.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator111"
                    label={i18n('entities.dimensionGPE1.fields.indicator111')}
                    options={dimensionGPE1Enumerators.indicator111.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator111.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator112"
                    label={i18n('entities.dimensionGPE1.fields.indicator112')}
                    options={dimensionGPE1Enumerators.indicator112.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator112.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator113"
                    label={i18n('entities.dimensionGPE1.fields.indicator113')}
                    options={dimensionGPE1Enumerators.indicator113.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator113.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator114"
                    label={i18n('entities.dimensionGPE1.fields.indicator114')}
                    options={dimensionGPE1Enumerators.indicator114.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE1.enumerators.indicator114.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SchoolAutocompleteFormItem  
                    name="school"
                    label={i18n('entities.dimensionGPE1.fields.school')}        
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

export default DimensionGPE1ListFilter;