import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import moment from 'moment';
import AssessmentViewItem from 'src/view/assessment/view/AssessmentViewItem';

const AssessmentAnswerView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.assessment) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.assessmentAnswer.fields.assessment')}
          >
            <AssessmentViewItem value={record.assessment} />
          </Form.Item>
        )}

      {Boolean(record.status) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.assessmentAnswer.fields.status')}
        >
          {i18n(
            `entities.assessmentAnswer.enumerators.status.${record.status}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.submitDate) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n(
            'entities.assessmentAnswer.fields.submitDate',
          )}
        >
          <>
            {moment(record.submitDate).format(
              'YYYY-MM-DD HH:mm',
            )}
          </>
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default AssessmentAnswerView;
