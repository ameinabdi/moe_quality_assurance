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
import actions from 'src/modules/dimensionGPE5/list/dimensionGPE5ListActions';
import selectors from 'src/modules/dimensionGPE5/list/dimensionGPE5ListSelectors';
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
import dimensionGPE5Enumerators from 'src/modules/dimensionGPE5/dimensionGPE5Enumerators';
import TeacherGPEAutocompleteFormItem from 'src/view/teacherGPE/autocomplete/TeacherGPEAutocompleteFormItem';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';

const schema = yup.object().shape({
  indicator51: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator51'),
  ),
  indicator52: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator52'),
  ),
  indicator53: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator53'),
  ),
  indicator54: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator54'),
  ),
  indicator55: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator55'),
  ),
  indicator56: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator56'),
  ),
  indicator57: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator57'),
  ),
  indicator58: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator58'),
  ),
  indicator59: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator59'),
  ),
  indicator510: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator510'),
  ),
  indicator511: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator511'),
  ),
  indicator512: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator512'),
  ),
  indicator513: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator513'),
  ),
  indicator514: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator514'),
  ),
  indicator515: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator515'),
  ),
  indicator516: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator516'),
  ),
  indicator517: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator517'),
  ),
  indicator518: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator518'),
  ),
  indicator519: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator519'),
  ),
  indicator520: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator520'),
  ),
  indicator521: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator521'),
  ),
  indicator522: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator522'),
  ),
  indicator523: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator523'),
  ),
  indicator524: yupFilterSchemas.enumerator(
    i18n('entities.dimensionGPE5.fields.indicator524'),
  ),
  teacher: yupFilterSchemas.relationToOne(
    i18n('entities.dimensionGPE5.fields.teacher'),
  ),
  school: yupFilterSchemas.relationToOne(
    i18n('entities.dimensionGPE5.fields.school'),
  ),
});

const emptyValues = {
  indicator51: null,
  indicator52: null,
  indicator53: null,
  indicator54: null,
  indicator55: null,
  indicator56: null,
  indicator57: null,
  indicator58: null,
  indicator59: null,
  indicator510: null,
  indicator511: null,
  indicator512: null,
  indicator513: null,
  indicator514: null,
  indicator515: null,
  indicator516: null,
  indicator517: null,
  indicator518: null,
  indicator519: null,
  indicator520: null,
  indicator521: null,
  indicator522: null,
  indicator523: null,
  indicator524: null,
  teacher: null,
  school: null,
}

const previewRenders = {
  indicator51: {
    label: i18n('entities.dimensionGPE5.fields.indicator51'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator51',),
  },
  indicator52: {
    label: i18n('entities.dimensionGPE5.fields.indicator52'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator52',),
  },
  indicator53: {
    label: i18n('entities.dimensionGPE5.fields.indicator53'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator53',),
  },
  indicator54: {
    label: i18n('entities.dimensionGPE5.fields.indicator54'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator54',),
  },
  indicator55: {
    label: i18n('entities.dimensionGPE5.fields.indicator55'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator55',),
  },
  indicator56: {
    label: i18n('entities.dimensionGPE5.fields.indicator56'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator56',),
  },
  indicator57: {
    label: i18n('entities.dimensionGPE5.fields.indicator57'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator57',),
  },
  indicator58: {
    label: i18n('entities.dimensionGPE5.fields.indicator58'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator58',),
  },
  indicator59: {
    label: i18n('entities.dimensionGPE5.fields.indicator59'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator59',),
  },
  indicator510: {
    label: i18n('entities.dimensionGPE5.fields.indicator510'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator510',),
  },
  indicator511: {
    label: i18n('entities.dimensionGPE5.fields.indicator511'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator511',),
  },
  indicator512: {
    label: i18n('entities.dimensionGPE5.fields.indicator512'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator512',),
  },
  indicator513: {
    label: i18n('entities.dimensionGPE5.fields.indicator513'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator513',),
  },
  indicator514: {
    label: i18n('entities.dimensionGPE5.fields.indicator514'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator514',),
  },
  indicator515: {
    label: i18n('entities.dimensionGPE5.fields.indicator515'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator515',),
  },
  indicator516: {
    label: i18n('entities.dimensionGPE5.fields.indicator516'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator516',),
  },
  indicator517: {
    label: i18n('entities.dimensionGPE5.fields.indicator517'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator517',),
  },
  indicator518: {
    label: i18n('entities.dimensionGPE5.fields.indicator518'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator518',),
  },
  indicator519: {
    label: i18n('entities.dimensionGPE5.fields.indicator519'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator519',),
  },
  indicator520: {
    label: i18n('entities.dimensionGPE5.fields.indicator520'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator520',),
  },
  indicator521: {
    label: i18n('entities.dimensionGPE5.fields.indicator521'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator521',),
  },
  indicator522: {
    label: i18n('entities.dimensionGPE5.fields.indicator522'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator522',),
  },
  indicator523: {
    label: i18n('entities.dimensionGPE5.fields.indicator523'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator523',),
  },
  indicator524: {
    label: i18n('entities.dimensionGPE5.fields.indicator524'),
    render: filterRenders.enumerator('entities.dimensionGPE5.enumerators.indicator524',),
  },
  teacher: {
      label: i18n('entities.dimensionGPE5.fields.teacher'),
      render: filterRenders.relationToOne(),
    },
  school: {
      label: i18n('entities.dimensionGPE5.fields.school'),
      render: filterRenders.relationToOne(),
    },
}

const DimensionGPE5ListFilter = (props) => {
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
                    name="indicator51"
                    label={i18n('entities.dimensionGPE5.fields.indicator51')}
                    options={dimensionGPE5Enumerators.indicator51.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator51.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator52"
                    label={i18n('entities.dimensionGPE5.fields.indicator52')}
                    options={dimensionGPE5Enumerators.indicator52.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator52.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator53"
                    label={i18n('entities.dimensionGPE5.fields.indicator53')}
                    options={dimensionGPE5Enumerators.indicator53.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator53.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator54"
                    label={i18n('entities.dimensionGPE5.fields.indicator54')}
                    options={dimensionGPE5Enumerators.indicator54.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator54.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator55"
                    label={i18n('entities.dimensionGPE5.fields.indicator55')}
                    options={dimensionGPE5Enumerators.indicator55.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator55.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator56"
                    label={i18n('entities.dimensionGPE5.fields.indicator56')}
                    options={dimensionGPE5Enumerators.indicator56.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator56.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator57"
                    label={i18n('entities.dimensionGPE5.fields.indicator57')}
                    options={dimensionGPE5Enumerators.indicator57.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator57.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator58"
                    label={i18n('entities.dimensionGPE5.fields.indicator58')}
                    options={dimensionGPE5Enumerators.indicator58.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator58.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator59"
                    label={i18n('entities.dimensionGPE5.fields.indicator59')}
                    options={dimensionGPE5Enumerators.indicator59.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator59.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator510"
                    label={i18n('entities.dimensionGPE5.fields.indicator510')}
                    options={dimensionGPE5Enumerators.indicator510.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator510.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator511"
                    label={i18n('entities.dimensionGPE5.fields.indicator511')}
                    options={dimensionGPE5Enumerators.indicator511.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator511.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator512"
                    label={i18n('entities.dimensionGPE5.fields.indicator512')}
                    options={dimensionGPE5Enumerators.indicator512.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator512.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator513"
                    label={i18n('entities.dimensionGPE5.fields.indicator513')}
                    options={dimensionGPE5Enumerators.indicator513.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator513.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator514"
                    label={i18n('entities.dimensionGPE5.fields.indicator514')}
                    options={dimensionGPE5Enumerators.indicator514.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator514.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator515"
                    label={i18n('entities.dimensionGPE5.fields.indicator515')}
                    options={dimensionGPE5Enumerators.indicator515.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator515.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator516"
                    label={i18n('entities.dimensionGPE5.fields.indicator516')}
                    options={dimensionGPE5Enumerators.indicator516.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator516.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator517"
                    label={i18n('entities.dimensionGPE5.fields.indicator517')}
                    options={dimensionGPE5Enumerators.indicator517.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator517.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator518"
                    label={i18n('entities.dimensionGPE5.fields.indicator518')}
                    options={dimensionGPE5Enumerators.indicator518.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator518.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator519"
                    label={i18n('entities.dimensionGPE5.fields.indicator519')}
                    options={dimensionGPE5Enumerators.indicator519.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator519.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator520"
                    label={i18n('entities.dimensionGPE5.fields.indicator520')}
                    options={dimensionGPE5Enumerators.indicator520.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator520.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator521"
                    label={i18n('entities.dimensionGPE5.fields.indicator521')}
                    options={dimensionGPE5Enumerators.indicator521.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator521.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator522"
                    label={i18n('entities.dimensionGPE5.fields.indicator522')}
                    options={dimensionGPE5Enumerators.indicator522.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator522.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator523"
                    label={i18n('entities.dimensionGPE5.fields.indicator523')}
                    options={dimensionGPE5Enumerators.indicator523.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator523.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="indicator524"
                    label={i18n('entities.dimensionGPE5.fields.indicator524')}
                    options={dimensionGPE5Enumerators.indicator524.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.dimensionGPE5.enumerators.indicator524.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <TeacherGPEAutocompleteFormItem  
                    name="teacher"
                    label={i18n('entities.dimensionGPE5.fields.teacher')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SchoolAutocompleteFormItem  
                    name="school"
                    label={i18n('entities.dimensionGPE5.fields.school')}        
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

export default DimensionGPE5ListFilter;