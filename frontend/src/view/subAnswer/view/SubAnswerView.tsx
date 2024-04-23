import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import AssessmentViewItem from 'src/view/assessment/view/AssessmentViewItem';
import QuestionViewItem from 'src/view/question/view/QuestionViewItem';
import SubQuestionViewItem from 'src/view/subQuestion/view/SubQuestionViewItem';
import AnswerViewItem from 'src/view/answer/view/AnswerViewItem';

const SubAnswerView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.assessment) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.subAnswer.fields.assessment')}
          >
            <AssessmentViewItem value={record.assessment} />
          </Form.Item>
        )}

      {Boolean(record.question) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.subAnswer.fields.question')}
          >
            <QuestionViewItem value={record.question} />
          </Form.Item>
        )}

      {Boolean(record.subQuestion) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.subAnswer.fields.subQuestion')}
          >
            <SubQuestionViewItem value={record.subQuestion} />
          </Form.Item>
        )}

      {Boolean(record.answer) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.subAnswer.fields.answer')}
          >
            <AnswerViewItem value={record.answer} />
          </Form.Item>
        )}

      {Boolean(record.subAnswer) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.subAnswer.fields.subAnswer')}
        >
          {record.subAnswer}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default SubAnswerView;
