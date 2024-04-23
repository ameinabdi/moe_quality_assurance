import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';


const QuestionView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.question) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.question.fields.question')}
        >
          {record.question}
        </Form.Item>
      )}

      {Boolean(record.type) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.question.fields.type')}
        >
          {i18n(
            `entities.question.enumerators.type.${record.type}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.hint) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.question.fields.hint')}
        >
          {record.hint}
        </Form.Item>
      )}

      {Boolean(record.validation) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.question.fields.validation')}
        >
          {(record.validation || []).map((value) => (
            <div key={value}>
              {i18n(
                `entities.question.enumerators.validation.${value}`,
              )}
            </div>
          ))}
        </Form.Item>
      )}

      {Boolean(record.answerValue) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.question.fields.answerValue')}
        >
          {record.answerValue}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default QuestionView;
