import {
  SearchOutlined,
  UndoOutlined,
} from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useForm, FormProvider } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';import { i18n } from 'src/i18n';
import actions from 'src/modules/school/list/schoolListActions';
import selectors from 'src/modules/school/list/schoolListSelectors';
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
import InputNumberRangeFormItem from 'src/view/shared/form/items/InputNumberRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import schoolEnumerators from 'src/modules/school/schoolEnumerators';

const schema = yup.object().shape({
  schoolName: yupFilterSchemas.string(
    i18n('entities.school.fields.schoolName'),
  ),
  schoolLevel: yupFilterSchemas.stringArray(
    i18n('entities.school.fields.schoolLevel'),
  ),
  schoolType: yupFilterSchemas.enumerator(
    i18n('entities.school.fields.schoolType'),
  ),
  schoolPhone: yupFilterSchemas.string(
    i18n('entities.school.fields.schoolPhone'),
  ),
  schoolEmail: yupFilterSchemas.string(
    i18n('entities.school.fields.schoolEmail'),
  ),
  schoolLocation: yupFilterSchemas.string(
    i18n('entities.school.fields.schoolLocation'),
  ),
  schoolEMISNumber: yupFilterSchemas.string(
    i18n('entities.school.fields.schoolEMISNumber'),
  ),
  classes: yupFilterSchemas.string(
    i18n('entities.school.fields.classes'),
  ),
  toiletsRange: yupFilterSchemas.integerRange(
    i18n('entities.school.fields.toiletsRange'),
  ),
  maleStaffRange: yupFilterSchemas.integerRange(
    i18n('entities.school.fields.maleStaffRange'),
  ),
  femaleStaffRange: yupFilterSchemas.integerRange(
    i18n('entities.school.fields.femaleStaffRange'),
  ),
  nonTeachingFemaleStaffRange: yupFilterSchemas.integerRange(
    i18n('entities.school.fields.nonTeachingFemaleStaffRange'),
  ),
  nonTeachingMaleStaffRange: yupFilterSchemas.integerRange(
    i18n('entities.school.fields.nonTeachingMaleStaffRange'),
  ),
  headTeacher: yupFilterSchemas.string(
    i18n('entities.school.fields.headTeacher'),
  ),
  headsex: yupFilterSchemas.enumerator(
    i18n('entities.school.fields.headsex'),
  ),
  headTeacherPhone: yupFilterSchemas.string(
    i18n('entities.school.fields.headTeacherPhone'),
  ),
  headTeacherLevelEduction: yupFilterSchemas.string(
    i18n('entities.school.fields.headTeacherLevelEduction'),
  ),
});

const emptyValues = {
  schoolName: null,
  schoolLevel: [],
  schoolType: null,
  schoolPhone: null,
  schoolEmail: null,
  schoolLocation: null,
  schoolEMISNumber: null,
  classes: null,
  toiletsRange: [],
  maleStaffRange: [],
  femaleStaffRange: [],
  nonTeachingFemaleStaffRange: [],
  nonTeachingMaleStaffRange: [],
  headTeacher: null,
  headsex: null,
  headTeacherPhone: null,
  headTeacherLevelEduction: null,
}

const previewRenders = {
  schoolName: {
    label: i18n('entities.school.fields.schoolName'),
    render: filterRenders.generic(),
  },
  schoolLevel: {
    label: i18n('entities.school.fields.schoolLevel'),
    render: filterRenders.enumeratorMultiple('entities.school.enumerators.schoolLevel',),
  },
  schoolType: {
    label: i18n('entities.school.fields.schoolType'),
    render: filterRenders.enumerator('entities.school.enumerators.schoolType',),
  },
  schoolPhone: {
    label: i18n('entities.school.fields.schoolPhone'),
    render: filterRenders.generic(),
  },
  schoolEmail: {
    label: i18n('entities.school.fields.schoolEmail'),
    render: filterRenders.generic(),
  },
  schoolLocation: {
    label: i18n('entities.school.fields.schoolLocation'),
    render: filterRenders.generic(),
  },
  schoolEMISNumber: {
    label: i18n('entities.school.fields.schoolEMISNumber'),
    render: filterRenders.generic(),
  },
  classes: {
    label: i18n('entities.school.fields.classes'),
    render: filterRenders.generic(),
  },
  toiletsRange: {
    label: i18n('entities.school.fields.toiletsRange'),
    render: filterRenders.range(),
  },
  maleStaffRange: {
    label: i18n('entities.school.fields.maleStaffRange'),
    render: filterRenders.range(),
  },
  femaleStaffRange: {
    label: i18n('entities.school.fields.femaleStaffRange'),
    render: filterRenders.range(),
  },
  nonTeachingFemaleStaffRange: {
    label: i18n('entities.school.fields.nonTeachingFemaleStaffRange'),
    render: filterRenders.range(),
  },
  nonTeachingMaleStaffRange: {
    label: i18n('entities.school.fields.nonTeachingMaleStaffRange'),
    render: filterRenders.range(),
  },
  headTeacher: {
    label: i18n('entities.school.fields.headTeacher'),
    render: filterRenders.generic(),
  },
  headsex: {
    label: i18n('entities.school.fields.headsex'),
    render: filterRenders.enumerator('entities.school.enumerators.headsex',),
  },
  headTeacherPhone: {
    label: i18n('entities.school.fields.headTeacherPhone'),
    render: filterRenders.generic(),
  },
  headTeacherLevelEduction: {
    label: i18n('entities.school.fields.headTeacherLevelEduction'),
    render: filterRenders.generic(),
  },
}

const SchoolListFilter = (props) => {
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
                    name="schoolName"
                    label={i18n('entities.school.fields.schoolName')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="schoolLevel"
                    label={i18n('entities.school.fields.schoolLevel')}
                    options={schoolEnumerators.schoolLevel.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.school.enumerators.schoolLevel.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                    mode="multiple"
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="schoolType"
                    label={i18n('entities.school.fields.schoolType')}
                    options={schoolEnumerators.schoolType.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.school.enumerators.schoolType.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="schoolPhone"
                    label={i18n('entities.school.fields.schoolPhone')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="schoolEmail"
                    label={i18n('entities.school.fields.schoolEmail')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="schoolLocation"
                    label={i18n('entities.school.fields.schoolLocation')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="schoolEMISNumber"
                    label={i18n('entities.school.fields.schoolEMISNumber')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="classes"
                    label={i18n('entities.school.fields.classes')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="toiletsRange"
                    label={i18n('entities.school.fields.toiletsRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="maleStaffRange"
                    label={i18n('entities.school.fields.maleStaffRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="femaleStaffRange"
                    label={i18n('entities.school.fields.femaleStaffRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="nonTeachingFemaleStaffRange"
                    label={i18n('entities.school.fields.nonTeachingFemaleStaffRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="nonTeachingMaleStaffRange"
                    label={i18n('entities.school.fields.nonTeachingMaleStaffRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="headTeacher"
                    label={i18n('entities.school.fields.headTeacher')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="headsex"
                    label={i18n('entities.school.fields.headsex')}
                    options={schoolEnumerators.headsex.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.school.enumerators.headsex.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="headTeacherPhone"
                    label={i18n('entities.school.fields.headTeacherPhone')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="headTeacherLevelEduction"
                    label={i18n('entities.school.fields.headTeacherLevelEduction')}      
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

export default SchoolListFilter;