import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';


const AssessmentView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.title) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.assessment.fields.title')}
        >
          {record.title}
        </Form.Item>
      )}

      {Boolean(record.description) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.assessment.fields.description')}
        >
          {record.description}
        </Form.Item>
      )}

      {Boolean(record.level) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.assessment.fields.level')}
        >
          {(record.level || []).map((value) => (
            <div key={value}>
              {i18n(
                `entities.assessment.enumerators.level.${value}`,
              )}
            </div>
          ))}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default AssessmentView;
