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
import actions from 'src/modules/deminsion2/list/deminsion2ListActions';
import selectors from 'src/modules/deminsion2/list/deminsion2ListSelectors';
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
import deminsion2Enumerators from 'src/modules/deminsion2/deminsion2Enumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';

const schema = yup.object().shape({
  indicator21: yupFilterSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator21'),
  ),
  indicator22: yupFilterSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator22'),
  ),
  indicator23: yupFilterSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator23'),
  ),
  indicator24: yupFilterSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator24'),
  ),
  indicator25: yupFilterSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator25'),
  ),
  indicator26: yupFilterSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator26'),
  ),
  indicator27: yupFilterSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator27'),
  ),
  indicator28: yupFilterSchemas.enumerator(
    i18n('entities.deminsion2.fields.indicator28'),
  ),
  school: yupFilterSchemas.relationToOne(
    i18n('entities.deminsion2.fields.school'),
  ),
});

const emptyValues = {
  indicator21: null,
  indicator22: null,
  indicator23: null,
  indicator24: null,
  indicator25: null,
  indicator26: null,
  indicator27: null,
  indicator28: null,
  school: null,
}

const previewRenders = {
  indicator21: {
    label: i18n('entities.deminsion2.fields.indicator21'),
    render: filterRenders.enumerator('entities.deminsion2.enumerators.indicator21',),
  },
  indicator22: {
    label: i18n('entities.deminsion2.fields.indicator22'),
    render: filterRenders.enumerator('entities.deminsion2.enumerators.indicator22',),
  },
  indicator23: {
    label: i18n('entities.deminsion2.fields.indicator23'),
    render: filterRenders.enumerator('entities.deminsion2.enumerators.indicator23',),
  },
  indicator24: {
    label: i18n('entities.deminsion2.fields.indicator24'),
    render: filterRenders.enumerator('entities.deminsion2.enumerators.indicator24',),
  },
  indicator25: {
    label: i18n('entities.deminsion2.fields.indicator25'),
    render: filterRenders.enumerator('entities.deminsion2.enumerators.indicator25',),
  },
  indicator26: {
    label: i18n('entities.deminsion2.fields.indicator26'),
    render: filterRenders.enumerator('entities.deminsion2.enumerators.indicator26',),
  },
  indicator27: {
    label: i18n('entities.deminsion2.fields.indicator27'),
    render: filterRenders.enumerator('entities.deminsion2.enumerators.indicator27',),
  },
  indicator28: {
    label: i18n('entities.deminsion2.fields.indicator28'),
    render: filterRenders.enumerator('entities.deminsion2.enumerators.indicator28',),
  },
  school: {
      label: i18n('entities.deminsion2.fields.school'),
      render: filterRenders.relationToOne(),
    },
}

const Deminsion2ListFilter = (props) => {
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
                    name="indicator21"
                    label={i18n('entities.deminsion2.fields.indicator21')}
                    options={deminsion2Enumerators.indicator21.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.deminsion2.enumerators.indicator21.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator22"
                    label={i18n('entities.deminsion2.fields.indicator22')}
                    options={deminsion2Enumerators.indicator22.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.deminsion2.enumerators.indicator22.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator23"
                    label={i18n('entities.deminsion2.fields.indicator23')}
                    options={deminsion2Enumerators.indicator23.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.deminsion2.enumerators.indicator23.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator24"
                    label={i18n('entities.deminsion2.fields.indicator24')}
                    options={deminsion2Enumerators.indicator24.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.deminsion2.enumerators.indicator24.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator25"
                    label={i18n('entities.deminsion2.fields.indicator25')}
                    options={deminsion2Enumerators.indicator25.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.deminsion2.enumerators.indicator25.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator26"
                    label={i18n('entities.deminsion2.fields.indicator26')}
                    options={deminsion2Enumerators.indicator26.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.deminsion2.enumerators.indicator26.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator27"
                    label={i18n('entities.deminsion2.fields.indicator27')}
                    options={deminsion2Enumerators.indicator27.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.deminsion2.enumerators.indicator27.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator28"
                    label={i18n('entities.deminsion2.fields.indicator28')}
                    options={deminsion2Enumerators.indicator28.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.deminsion2.enumerators.indicator28.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SchoolAutocompleteFormItem  
                    name="school"
                    label={i18n('entities.deminsion2.fields.school')}        
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

export default Deminsion2ListFilter;