import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import QuestionForm from 'src/view/question/form/QuestionForm';
import QuestionService from 'src/modules/question/questionService';
import Errors from 'src/modules/shared/error/errors';

const QuestionFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await QuestionService.create(data);
      const record = await QuestionService.find(id);
      props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      setSaveLoading(false);
    }
  };

  if (!props.visible) {
    return null;
  }

  return (
    <Modal
      style={{ top: 24 }}
      title={i18n('entities.question.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <QuestionForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default QuestionFormModal;
