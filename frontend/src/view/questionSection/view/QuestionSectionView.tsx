import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';


const QuestionSectionView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.title) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.questionSection.fields.title')}
        >
          {record.title}
        </Form.Item>
      )}

      {Boolean(record.description) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.questionSection.fields.description')}
        >
          {record.description}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default QuestionSectionView;
