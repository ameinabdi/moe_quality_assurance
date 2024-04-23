import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';import { i18n } from 'src/i18n';
import actions from 'src/modules/dimension3/list/dimension3ListActions';
import selectors from 'src/modules/dimension3/list/dimension3ListSelectors';
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
import dimension3Enumerators from 'src/modules/dimension3/dimension3Enumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';

const schema = yup.object().shape({
  indicator31: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator31'),
  ),
  indicator32: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator32'),
  ),
  indicator33: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator33'),
  ),
  indicator34: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator34'),
  ),
  indicator35: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator35'),
  ),
  indicator36: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator36'),
  ),
  indicator37: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator37'),
  ),
  indicator38: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator38'),
  ),
  indicator39: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator39'),
  ),
  indicator310: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator310'),
  ),
  indicator311: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator311'),
  ),
  indicator312: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator312'),
  ),
  indicator313: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator313'),
  ),
  indicator314: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator314'),
  ),
  indicator315: yupFilterSchemas.enumerator(
    i18n('entities.dimension3.fields.indicator315'),
  ),
  school: yupFilterSchemas.relationToOne(
    i18n('entities.dimension3.fields.school'),
  ),
});

const emptyValues = {
  indicator31: null,
  indicator32: null,
  indicator33: null,
  indicator34: null,
  indicator35: null,
  indicator36: null,
  indicator37: null,
  indicator38: null,
  indicator39: null,
  indicator310: null,
  indicator311: null,
  indicator312: null,
  indicator313: null,
  indicator314: null,
  indicator315: null,
  school: null,
}

const previewRenders = {
  indicator31: {
    label: i18n('entities.dimension3.fields.indicator31'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator31',),
  },
  indicator32: {
    label: i18n('entities.dimension3.fields.indicator32'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator32',),
  },
  indicator33: {
    label: i18n('entities.dimension3.fields.indicator33'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator33',),
  },
  indicator34: {
    label: i18n('entities.dimension3.fields.indicator34'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator34',),
  },
  indicator35: {
    label: i18n('entities.dimension3.fields.indicator35'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator35',),
  },
  indicator36: {
    label: i18n('entities.dimension3.fields.indicator36'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator36',),
  },
  indicator37: {
    label: i18n('entities.dimension3.fields.indicator37'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator37',),
  },
  indicator38: {
    label: i18n('entities.dimension3.fields.indicator38'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator38',),
  },
  indicator39: {
    label: i18n('entities.dimension3.fields.indicator39'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator39',),
  },
  indicator310: {
    label: i18n('entities.dimension3.fields.indicator310'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator310',),
  },
  indicator311: {
    label: i18n('entities.dimension3.fields.indicator311'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator311',),
  },
  indicator312: {
    label: i18n('entities.dimension3.fields.indicator312'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator312',),
  },
  indicator313: {
    label: i18n('entities.dimension3.fields.indicator313'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator313',),
  },
  indicator314: {
    label: i18n('entities.dimension3.fields.indicator314'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator314',),
  },
  indicator315: {
    label: i18n('entities.dimension3.fields.indicator315'),
    render: filterRenders.enumerator('entities.dimension3.enumerators.indicator315',),
  },
  school: {
      label: i18n('entities.dimension3.fields.school'),
      render: filterRenders.relationToOne(),
    },
}

const Dimension3ListFilter = (props) => {
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
                    name="indicator31"
                    label={i18n('entities.dimension3.fields.indicator31')}
                    options={dimension3Enumerators.indicator31.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator31.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator32"
                    label={i18n('entities.dimension3.fields.indicator32')}
                    options={dimension3Enumerators.indicator32.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator32.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator33"
                    label={i18n('entities.dimension3.fields.indicator33')}
                    options={dimension3Enumerators.indicator33.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator33.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator34"
                    label={i18n('entities.dimension3.fields.indicator34')}
                    options={dimension3Enumerators.indicator34.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator34.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator35"
                    label={i18n('entities.dimension3.fields.indicator35')}
                    options={dimension3Enumerators.indicator35.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator35.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator36"
                    label={i18n('entities.dimension3.fields.indicator36')}
                    options={dimension3Enumerators.indicator36.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator36.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator37"
                    label={i18n('entities.dimension3.fields.indicator37')}
                    options={dimension3Enumerators.indicator37.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator37.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator38"
                    label={i18n('entities.dimension3.fields.indicator38')}
                    options={dimension3Enumerators.indicator38.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator38.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator39"
                    label={i18n('entities.dimension3.fields.indicator39')}
                    options={dimension3Enumerators.indicator39.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator39.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator310"
                    label={i18n('entities.dimension3.fields.indicator310')}
                    options={dimension3Enumerators.indicator310.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator310.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator311"
                    label={i18n('entities.dimension3.fields.indicator311')}
                    options={dimension3Enumerators.indicator311.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator311.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator312"
                    label={i18n('entities.dimension3.fields.indicator312')}
                    options={dimension3Enumerators.indicator312.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator312.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator313"
                    label={i18n('entities.dimension3.fields.indicator313')}
                    options={dimension3Enumerators.indicator313.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator313.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator314"
                    label={i18n('entities.dimension3.fields.indicator314')}
                    options={dimension3Enumerators.indicator314.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator314.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator315"
                    label={i18n('entities.dimension3.fields.indicator315')}
                    options={dimension3Enumerators.indicator315.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimension3.enumerators.indicator315.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SchoolAutocompleteFormItem  
                    name="school"
                    label={i18n('entities.dimension3.fields.school')}        
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

export default Dimension3ListFilter;