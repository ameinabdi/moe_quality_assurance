import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Row, Col, Form } from 'antd';
import ImagesViewer from 'src/view/shared/ImagesViewer';
import SchoolViewItem from 'src/view/school/view/SchoolViewItem';
import DistrictViewItem from 'src/view/district/view/DistrictViewItem';

const GovernmentTeacherInformationView = (props) => {
  const { record, loading } = props;

  const threeColumnsResponsiveProps = {
    xs: 24,
    sm: 24,
    md: 8,
    lg: 8,
    xl: 8,
    style: {
      marginBottom: 24,
      padding:5
    },
  };

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      <Row>
        <Col  {...threeColumnsResponsiveProps}>
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
          {Boolean(record.teacherPhoto) && Boolean(record.teacherPhoto.length) && (
            <Form.Item
              {...viewItemLayout}
              labelAlign='left'
              label={i18n('entities.governmentTeacherInformation.fields.teacherPhoto')}
            >
              <ImagesViewer value={record.teacherPhoto} />
            </Form.Item>
          )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
          {Boolean(record.fullName) && (
            <Form.Item
              {...viewItemLayout}
              labelAlign='left'
              label={i18n('entities.governmentTeacherInformation.fields.fullName')}
            >
              {record.fullName}
            </Form.Item>
          )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
          {Boolean(record.gender) && (
            <Form.Item
              {...viewItemLayout}
              labelAlign='left'
              label={i18n('entities.governmentTeacherInformation.fields.gender')}
            >
              {i18n(
                `entities.governmentTeacherInformation.enumerators.gender.${record.gender}`,
              )}
            </Form.Item>
          )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
          {Boolean(record.teacherIDNumber) && (
            <Form.Item
              {...viewItemLayout}
              labelAlign='left'
              label={i18n('entities.governmentTeacherInformation.fields.teacherIDNumber')}
            >
              {record.teacherIDNumber}
            </Form.Item>
          )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
          {Boolean(record.school) && (
            <Form.Item
            
              {...viewItemLayout}
              labelAlign='left'
              label={i18n('entities.governmentTeacherInformation.fields.school')}
            >
              <SchoolViewItem value={record.school} />
            </Form.Item>
          )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        {Boolean(record.district) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign='left'
            label={i18n('entities.governmentTeacherInformation.fields.district')}
          >
            <DistrictViewItem value={record.district} />
          </Form.Item>
        )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        {Boolean(record.niraID) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign='left'
            label={i18n('entities.governmentTeacherInformation.fields.niraID')}
          >
            {record.niraID}
          </Form.Item>
        )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        {Boolean(record.educationLevel) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign='left'
            label={i18n('entities.governmentTeacherInformation.fields.educationLevel')}
          >
            {record.educationLevel}
          </Form.Item>
        )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        {Boolean(record.graduationYear) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign='left'
            label={i18n('entities.governmentTeacherInformation.fields.graduationYear')}
          >
            {record.graduationYear}
          </Form.Item>
        )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        {Boolean(record.taughtLevel) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign='left'
            label={i18n('entities.governmentTeacherInformation.fields.taughtLevel')}
          >
            {i18n(
              `entities.governmentTeacherInformation.enumerators.taughtLevel.${record.taughtLevel}`,
            )}
          </Form.Item>
        )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        {Boolean(record.teachingShift) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign='left'
            label={i18n('entities.governmentTeacherInformation.fields.teachingShift')}
          >
            {i18n(
              `entities.governmentTeacherInformation.enumerators.teachingShift.${record.teachingShift}`,
            )}
          </Form.Item>
        )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        {Boolean(record.gradesTaught) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign='left'
            label={i18n('entities.governmentTeacherInformation.fields.gradesTaught')}
          >
            {(record.gradesTaught || []).map((value) => (
              <div key={value}>
                {i18n(
                  `entities.governmentTeacherInformation.enumerators.gradesTaught.${value}`,
                )}
              </div>
            ))}
          </Form.Item>
        )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        {Boolean(record.subjectsTaught) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign='left'
            label={i18n('entities.governmentTeacherInformation.fields.subjectsTaught')}
          >
            {(record.subjectsTaught || []).map((value) => (
              <div key={value}>
                {i18n(
                  `entities.governmentTeacherInformation.enumerators.subjectsTaught.${value}`,
                )}
              </div>
            ))}
          </Form.Item>
        )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        {Boolean(record.teachertraining) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign='left'
            label={i18n('entities.governmentTeacherInformation.fields.teachertraining')}
          >
            {i18n(
              `entities.governmentTeacherInformation.enumerators.teachertraining.${record.teachertraining}`,
            )}
          </Form.Item>
        )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
          {Boolean(record.trainingNo) && (
            <Form.Item
              {...viewItemLayout}
              labelAlign='left'
              label={i18n('entities.governmentTeacherInformation.fields.trainingNo')}
            >
              {i18n(
                `entities.governmentTeacherInformation.enumerators.trainingNo.${record.trainingNo}`,
              )}
            </Form.Item>
          )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
          {Boolean(record.present) && (
            <Form.Item
              {...viewItemLayout}
              labelAlign='left'
              label={i18n('entities.governmentTeacherInformation.fields.present')}
            >
              {i18n(
                `entities.governmentTeacherInformation.enumerators.present.${record.present}`,
              )}
            </Form.Item>
          )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        {Boolean(record.contactNumber) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign='left'
            label={i18n('entities.governmentTeacherInformation.fields.contactNumber')}
          >
            {record.contactNumber}
          </Form.Item>
        )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
          {Boolean(record.experience) && (
            <Form.Item
              {...viewItemLayout}
              labelAlign='left'
              label={i18n('entities.governmentTeacherInformation.fields.experience')}
            >
              {record.experience}
            </Form.Item>
          )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
          {Boolean(record.joinedYear) && (
            <Form.Item
              {...viewItemLayout}
              labelAlign='left'
              label={i18n('entities.governmentTeacherInformation.fields.joinedYear')}
            >
              {record.joinedYear}
            </Form.Item>
          )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        {Boolean(record.disablity) && (
          <Form.Item
            {...viewItemLayout}
            labelAlign='left'
            label={i18n('entities.governmentTeacherInformation.fields.disablity')}
          >
            {i18n(
              `entities.governmentTeacherInformation.enumerators.disablity.${record.disablity}`,
            )}
          </Form.Item>
        )}
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
        </Col>
        <Col  {...threeColumnsResponsiveProps}>
          {Boolean(record.teacherSignature) && Boolean(record.teacherSignature.length) && (
            <Form.Item
              {...viewItemLayout}
              labelAlign='left'
              label={i18n('entities.governmentTeacherInformation.fields.teacherSignature')}
            >
              <ImagesViewer value={record.teacherSignature} />
            </Form.Item>
          )}
        </Col>
      </Row>
      
    </ViewWrapper>
  );
};

export default GovernmentTeacherInformationView;
