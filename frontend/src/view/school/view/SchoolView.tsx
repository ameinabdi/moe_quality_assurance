import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';


const SchoolView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.schoolName) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.schoolName')}
        >
          {record.schoolName}
        </Form.Item>
      )}

      {Boolean(record.schoolLevel) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.schoolLevel')}
        >
          {(record.schoolLevel || []).map((value) => (
            <div key={value}>
              {i18n(
                `entities.school.enumerators.schoolLevel.${value}`,
              )}
            </div>
          ))}
        </Form.Item>
      )}

      {Boolean(record.schoolType) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.schoolType')}
        >
          {i18n(
            `entities.school.enumerators.schoolType.${record.schoolType}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.schoolPhone) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.schoolPhone')}
        >
          {record.schoolPhone}
        </Form.Item>
      )}

      {Boolean(record.schoolEmail) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.schoolEmail')}
        >
          {record.schoolEmail}
        </Form.Item>
      )}

      {Boolean(record.schoolLocation) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.schoolLocation')}
        >
          {record.schoolLocation}
        </Form.Item>
      )}

      {Boolean(record.schoolEMISNumber) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.schoolEMISNumber')}
        >
          {record.schoolEMISNumber}
        </Form.Item>
      )}

      {Boolean(record.classes) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.classes')}
        >
          {record.classes}
        </Form.Item>
      )}

      {Boolean(record.toilets) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.toilets')}
        >
          {record.toilets}
        </Form.Item>
      )}

      {Boolean(record.maleStaff) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.maleStaff')}
        >
          {record.maleStaff}
        </Form.Item>
      )}

      {Boolean(record.femaleStaff) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.femaleStaff')}
        >
          {record.femaleStaff}
        </Form.Item>
      )}

      {Boolean(record.nonTeachingFemaleStaff) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.nonTeachingFemaleStaff')}
        >
          {record.nonTeachingFemaleStaff}
        </Form.Item>
      )}

      {Boolean(record.nonTeachingMaleStaff) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.nonTeachingMaleStaff')}
        >
          {record.nonTeachingMaleStaff}
        </Form.Item>
      )}

      {Boolean(record.headTeacher) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.headTeacher')}
        >
          {record.headTeacher}
        </Form.Item>
      )}

      {Boolean(record.headsex) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.headsex')}
        >
          {i18n(
            `entities.school.enumerators.headsex.${record.headsex}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.headTeacherPhone) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.headTeacherPhone')}
        >
          {record.headTeacherPhone}
        </Form.Item>
      )}

      {Boolean(record.headTeacherLevelEduction) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.school.fields.headTeacherLevelEduction')}
        >
          {record.headTeacherLevelEduction}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default SchoolView;
