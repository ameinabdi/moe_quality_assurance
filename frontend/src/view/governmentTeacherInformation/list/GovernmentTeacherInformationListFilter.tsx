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
import actions from 'src/modules/governmentTeacherInformation/list/governmentTeacherInformationListActions';
import selectors from 'src/modules/governmentTeacherInformation/list/governmentTeacherInformationListSelectors';
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
import governmentTeacherInformationEnumerators from 'src/modules/governmentTeacherInformation/governmentTeacherInformationEnumerators';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import SchoolAutocompleteFormItem from 'src/view/school/autocomplete/SchoolAutocompleteFormItem';
import RegionAutocompleteFormItem from 'src/view/region/autocomplete/RegionAutocompleteFormItem';
import DistrictAutocompleteFormItem from 'src/view/district/autocomplete/DistrictAutocompleteFormItem';

const schema = yup.object().shape({
  school: yupFilterSchemas.relationToOne(
    i18n('entities.governmentTeacherInformation.fields.school'),
  ),
  state: yupFilterSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.state'),
  ),
  region: yupFilterSchemas.relationToOne(
    i18n('entities.governmentTeacherInformation.fields.region'),
  ),
  district: yupFilterSchemas.relationToOne(
    i18n('entities.governmentTeacherInformation.fields.district'),
  ),
  fullName: yupFilterSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.fullName'),
  ),
  gender: yupFilterSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.gender'),
  ),
  teacherIDNumber: yupFilterSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.teacherIDNumber'),
  ),
  niraID: yupFilterSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.niraID'),
  ),
  educationLevel: yupFilterSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.educationLevel'),
  ),
  graduationYearRange: yupFilterSchemas.dateRange(
    i18n('entities.governmentTeacherInformation.fields.graduationYearRange'),
  ),
  taughtLevel: yupFilterSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.taughtLevel'),
  ),
  teachingShift: yupFilterSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.teachingShift'),
  ),
  gradesTaught: yupFilterSchemas.stringArray(
    i18n('entities.governmentTeacherInformation.fields.gradesTaught'),
  ),
  subjectsTaught: yupFilterSchemas.stringArray(
    i18n('entities.governmentTeacherInformation.fields.subjectsTaught'),
  ),
  teachertraining: yupFilterSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.teachertraining'),
  ),
  trainingNo: yupFilterSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.trainingNo'),
  ),
  present: yupFilterSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.present'),
  ),
  contactNumber: yupFilterSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.contactNumber'),
  ),
  experienceRange: yupFilterSchemas.integerRange(
    i18n('entities.governmentTeacherInformation.fields.experienceRange'),
  ),
  joinedYearRange: yupFilterSchemas.dateRange(
    i18n('entities.governmentTeacherInformation.fields.joinedYearRange'),
  ),
  disablity: yupFilterSchemas.enumerator(
    i18n('entities.governmentTeacherInformation.fields.disablity'),
  ),
  gPSLocation: yupFilterSchemas.string(
    i18n('entities.governmentTeacherInformation.fields.gPSLocation'),
  ),
});

const emptyValues = {
  school: null,
  state: null,
  region: null,
  district: null,
  fullName: null,
  gender: null,
  teacherIDNumber: null,
  niraID: null,
  educationLevel: null,
  graduationYearRange: [],
  taughtLevel: null,
  teachingShift: null,
  gradesTaught: [],
  subjectsTaught: [],
  teachertraining: null,
  trainingNo: null,
  present: null,
  contactNumber: null,
  experienceRange: [],
  joinedYearRange: [],
  disablity: null,
  gPSLocation: null,
}

const previewRenders = {
  school: {
      label: i18n('entities.governmentTeacherInformation.fields.school'),
      render: filterRenders.relationToOne(),
    },
  state: {
    label: i18n('entities.governmentTeacherInformation.fields.state'),
    render: filterRenders.generic(),
  },
  region: {
      label: i18n('entities.governmentTeacherInformation.fields.region'),
      render: filterRenders.relationToOne(),
    },
  district: {
      label: i18n('entities.governmentTeacherInformation.fields.district'),
      render: filterRenders.relationToOne(),
    },
  fullName: {
    label: i18n('entities.governmentTeacherInformation.fields.fullName'),
    render: filterRenders.generic(),
  },
  gender: {
    label: i18n('entities.governmentTeacherInformation.fields.gender'),
    render: filterRenders.enumerator('entities.governmentTeacherInformation.enumerators.gender',),
  },
  teacherIDNumber: {
    label: i18n('entities.governmentTeacherInformation.fields.teacherIDNumber'),
    render: filterRenders.generic(),
  },
  niraID: {
    label: i18n('entities.governmentTeacherInformation.fields.niraID'),
    render: filterRenders.generic(),
  },
  educationLevel: {
    label: i18n('entities.governmentTeacherInformation.fields.educationLevel'),
    render: filterRenders.generic(),
  },
  graduationYearRange: {
    label: i18n('entities.governmentTeacherInformation.fields.graduationYearRange'),
    render: filterRenders.dateRange(),
  },
  taughtLevel: {
    label: i18n('entities.governmentTeacherInformation.fields.taughtLevel'),
    render: filterRenders.enumerator('entities.governmentTeacherInformation.enumerators.taughtLevel',),
  },
  teachingShift: {
    label: i18n('entities.governmentTeacherInformation.fields.teachingShift'),
    render: filterRenders.enumerator('entities.governmentTeacherInformation.enumerators.teachingShift',),
  },
  gradesTaught: {
    label: i18n('entities.governmentTeacherInformation.fields.gradesTaught'),
    render: filterRenders.enumeratorMultiple('entities.governmentTeacherInformation.enumerators.gradesTaught',),
  },
  subjectsTaught: {
    label: i18n('entities.governmentTeacherInformation.fields.subjectsTaught'),
    render: filterRenders.enumeratorMultiple('entities.governmentTeacherInformation.enumerators.subjectsTaught',),
  },
  teachertraining: {
    label: i18n('entities.governmentTeacherInformation.fields.teachertraining'),
    render: filterRenders.enumerator('entities.governmentTeacherInformation.enumerators.teachertraining',),
  },
  trainingNo: {
    label: i18n('entities.governmentTeacherInformation.fields.trainingNo'),
    render: filterRenders.enumerator('entities.governmentTeacherInformation.enumerators.trainingNo',),
  },
  present: {
    label: i18n('entities.governmentTeacherInformation.fields.present'),
    render: filterRenders.enumerator('entities.governmentTeacherInformation.enumerators.present',),
  },
  contactNumber: {
    label: i18n('entities.governmentTeacherInformation.fields.contactNumber'),
    render: filterRenders.generic(),
  },
  experienceRange: {
    label: i18n('entities.governmentTeacherInformation.fields.experienceRange'),
    render: filterRenders.range(),
  },
  joinedYearRange: {
    label: i18n('entities.governmentTeacherInformation.fields.joinedYearRange'),
    render: filterRenders.dateRange(),
  },
  disablity: {
    label: i18n('entities.governmentTeacherInformation.fields.disablity'),
    render: filterRenders.enumerator('entities.governmentTeacherInformation.enumerators.disablity',),
  },
  gPSLocation: {
    label: i18n('entities.governmentTeacherInformation.fields.gPSLocation'),
    render: filterRenders.generic(),
  },
}

const GovernmentTeacherInformationListFilter = (props) => {
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
                    label={i18n('entities.governmentTeacherInformation.fields.school')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="state"
                    label={i18n('entities.governmentTeacherInformation.fields.state')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <RegionAutocompleteFormItem  
                    name="region"
                    label={i18n('entities.governmentTeacherInformation.fields.region')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DistrictAutocompleteFormItem  
                    name="district"
                    label={i18n('entities.governmentTeacherInformation.fields.district')}        
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="fullName"
                    label={i18n('entities.governmentTeacherInformation.fields.fullName')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="gender"
                    label={i18n('entities.governmentTeacherInformation.fields.gender')}
                    options={governmentTeacherInformationEnumerators.gender.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.governmentTeacherInformation.enumerators.gender.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="teacherIDNumber"
                    label={i18n('entities.governmentTeacherInformation.fields.teacherIDNumber')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="niraID"
                    label={i18n('entities.governmentTeacherInformation.fields.niraID')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="educationLevel"
                    label={i18n('entities.governmentTeacherInformation.fields.educationLevel')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="graduationYearRange"
                    label={i18n('entities.governmentTeacherInformation.fields.graduationYearRange')}    
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="taughtLevel"
                    label={i18n('entities.governmentTeacherInformation.fields.taughtLevel')}
                    options={governmentTeacherInformationEnumerators.taughtLevel.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.governmentTeacherInformation.enumerators.taughtLevel.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="teachingShift"
                    label={i18n('entities.governmentTeacherInformation.fields.teachingShift')}
                    options={governmentTeacherInformationEnumerators.teachingShift.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.governmentTeacherInformation.enumerators.teachingShift.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="gradesTaught"
                    label={i18n('entities.governmentTeacherInformation.fields.gradesTaught')}
                    options={governmentTeacherInformationEnumerators.gradesTaught.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.governmentTeacherInformation.enumerators.gradesTaught.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                    mode="multiple"
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="subjectsTaught"
                    label={i18n('entities.governmentTeacherInformation.fields.subjectsTaught')}
                    options={governmentTeacherInformationEnumerators.subjectsTaught.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.governmentTeacherInformation.enumerators.subjectsTaught.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                    mode="multiple"
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="teachertraining"
                    label={i18n('entities.governmentTeacherInformation.fields.teachertraining')}
                    options={governmentTeacherInformationEnumerators.teachertraining.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.governmentTeacherInformation.enumerators.teachertraining.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="trainingNo"
                    label={i18n('entities.governmentTeacherInformation.fields.trainingNo')}
                    options={governmentTeacherInformationEnumerators.trainingNo.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.governmentTeacherInformation.enumerators.trainingNo.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="present"
                    label={i18n('entities.governmentTeacherInformation.fields.present')}
                    options={governmentTeacherInformationEnumerators.present.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.governmentTeacherInformation.enumerators.present.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="contactNumber"
                    label={i18n('entities.governmentTeacherInformation.fields.contactNumber')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputNumberRangeFormItem
                    name="experienceRange"
                    label={i18n('entities.governmentTeacherInformation.fields.experienceRange')}      
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <DatePickerRangeFormItem
                    name="joinedYearRange"
                    label={i18n('entities.governmentTeacherInformation.fields.joinedYearRange')}    
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <SelectFormItem
                    name="disablity"
                    label={i18n('entities.governmentTeacherInformation.fields.disablity')}
                    options={governmentTeacherInformationEnumerators.disablity.map(
                      (value) => ({
                        value,
                        label: i18n(
                          `entities.governmentTeacherInformation.enumerators.disablity.${value}`,
                        ),
                      }),
                    )}
                    layout={filterItemLayout}
                  />
                </Col>
                <Col xs={24} md={24} lg={12}>
                  <InputFormItem
                    name="gPSLocation"
                    label={i18n('entities.governmentTeacherInformation.fields.gPSLocation')}      
                    layout={filterItemLayout}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="filter-buttons" span={24}>
                  <Button
                    loading={loading}
                    icon={<SearchOutlined rev={undefined} />}
                    type="primary"
                    htmlType="submit"
                  >
                    {i18n('common.search')}
                  </Button>
                  <Button
                    loading={loading}
                    onClick={onReset}
                    icon={<UndoOutlined rev={undefined} />}
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

export default GovernmentTeacherInformationListFilter;