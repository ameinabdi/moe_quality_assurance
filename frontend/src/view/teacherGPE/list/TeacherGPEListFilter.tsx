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
import actions from 'src/modules/teacherGPE/list/teacherGPEListActions';
import selectors from 'src/modules/teacherGPE/list/teacherGPEListSelectors';
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
import teacherGPEEnumerators from 'src/modules/teacherGPE/teacherGPEEnumerators';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';
import RegionAutocompleteFormItem from 'src/view/region/autocomplete/RegionAutocompleteFormItem';
import DistrictAutocompleteFormItem from 'src/view/district/autocomplete/DistrictAutocompleteFormItem';

const schema = yup.object().shape({
  school: yupFilterSchemas.relationToOne(
    i18n('entities.teacherGPE.fields.school'),
  ),
  state: yupFilterSchemas.string(
    i18n('entities.teacherGPE.fields.state'),
  ),
  region: yupFilterSchemas.relationToOne(
    i18n('entities.teacherGPE.fields.region'),
  ),
  district: yupFilterSchemas.relationToOne(
    i18n('entities.teacherGPE.fields.district'),
  ),
  fullName: yupFilterSchemas.string(
    i18n('entities.teacherGPE.fields.fullName'),
  ),
  gender: yupFilterSchemas.enumerator(
    i18n('entities.teacherGPE.fields.gender'),
  ),
  subjectName: yupFilterSchemas.enumerator(
    i18n('entities.teacherGPE.fields.subjectName'),
  ),
  teachingLevel: yupFilterSchemas.enumerator(
    i18n('entities.teacherGPE.fields.teachingLevel'),
  ),
  grade: yupFilterSchemas.enumerator(
    i18n('entities.teacherGPE.fields.grade'),
  ),
  totalStudentRange: yupFilterSchemas.integerRange(
    i18n('entities.teacherGPE.fields.totalStudentRange'),
  ),
  maleStudentsRange: yupFilterSchemas.integerRange(
    i18n('entities.teacherGPE.fields.maleStudentsRange'),
  ),
  femaleStudentRange: yupFilterSchemas.integerRange(
    i18n('entities.teacherGPE.fields.femaleStudentRange'),
  ),
});

const emptyValues = {
  school: null,
  state: null,
  region: null,
  district: null,
  fullName: null,
  gender: null,
  subjectName: null,
  teachingLevel: null,
  grade: null,
  totalStudentRange: [],
  maleStudentsRange: [],
  femaleStudentRange: [],
}

const previewRenders = {
  school: {
      label: i18n('entities.teacherGPE.fields.school'),
      render: filterRenders.relationToOne(),
    },
  state: {
    label: i18n('entities.teacherGPE.fields.state'),
    render: filterRenders.generic(),
  },
  region: {
      label: i18n('entities.teacherGPE.fields.region'),
      render: filterRenders.relationToOne(),
    },
  district: {
      label: i18n('entities.teacherGPE.fields.district'),
      render: filterRenders.relationToOne(),
    },
  fullName: {
    label: i18n('entities.teacherGPE.fields.fullName'),
    render: filterRenders.generic(),
  },
  gender: {
    label: i18n('entities.teacherGPE.fields.gender'),
    render: filterRenders.enumerator('entities.teacherGPE.enumerators.gender',),
  },
  subjectName: {
    label: i18n('entities.teacherGPE.fields.subjectName'),
    render: filterRenders.enumerator('entities.teacherGPE.enumerators.subjectName',),
  },
  teachingLevel: {
    label: i18n('entities.teacherGPE.fields.teachingLevel'),
    render: filterRenders.enumerator('entities.teacherGPE.enumerators.teachingLevel',),
  },
  grade: {
    label: i18n('entities.teacherGPE.fields.grade'),
    render: filterRenders.enumerator('entities.teacherGPE.enumerators.grade',),
  },
  totalStudentRange: {
    label: i18n('entities.teacherGPE.fields.totalStudentRange'),
    render: filterRenders.range(),
  },
  maleStudentsRange: {
    label: i18n('entities.teacherGPE.fields.maleStudentsRange'),
    render: filterRenders.range(),
  },
  femaleStudentRange: {
    label: i18n('entities.teacherGPE.fields.femaleStudentRange'),
    render: filterRenders.range(),
  },
}

const TeacherGPEListFilter = (props) => {
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
                  <SchoolAutocompleteFormItem  
                    name="school"
                    label={i18n('entities.teacherGPE.fields.school')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="state"
                    label={i18n('entities.teacherGPE.fields.state')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <RegionAutocompleteFormItem  
                    name="region"
                    label={i18n('entities.teacherGPE.fields.region')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DistrictAutocompleteFormItem  
                    name="district"
                    label={i18n('entities.teacherGPE.fields.district')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="fullName"
                    label={i18n('entities.teacherGPE.fields.fullName')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="gender"
                    label={i18n('entities.teacherGPE.fields.gender')}
                    options={teacherGPEEnumerators.gender.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.teacherGPE.enumerators.gender.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="subjectName"
                    label={i18n('entities.teacherGPE.fields.subjectName')}
                    options={teacherGPEEnumerators.subjectName.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.teacherGPE.enumerators.subjectName.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="teachingLevel"
                    label={i18n('entities.teacherGPE.fields.teachingLevel')}
                    options={teacherGPEEnumerators.teachingLevel.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.teacherGPE.enumerators.teachingLevel.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="grade"
                    label={i18n('entities.teacherGPE.fields.grade')}
                    options={teacherGPEEnumerators.grade.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.teacherGPE.enumerators.grade.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="totalStudentRange"
                    label={i18n('entities.teacherGPE.fields.totalStudentRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="maleStudentsRange"
                    label={i18n('entities.teacherGPE.fields.maleStudentsRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="femaleStudentRange"
                    label={i18n('entities.teacherGPE.fields.femaleStudentRange')}      
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

export default TeacherGPEListFilter;