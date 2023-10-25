import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import AssessmentViewItem from 'src/view/assessment/view/AssessmentViewItem';
import QuestionViewItem from 'src/view/question/view/QuestionViewItem';

const AnswerView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.assessment) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.answer.fields.assessment')}
          >
            <AssessmentViewItem value={record.assessment} />
          </Form.Item>
        )}

      {Boolean(record.question) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.answer.fields.question')}
          >
            <QuestionViewItem value={record.question} />
          </Form.Item>
        )}

      {Boolean(record.answer) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.answer.fields.answer')}
        >
          {record.answer}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default AnswerView;
