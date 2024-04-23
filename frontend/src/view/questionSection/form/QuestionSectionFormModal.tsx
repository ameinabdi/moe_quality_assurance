import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import QuestionSectionForm from 'src/view/questionSection/form/QuestionSectionForm';
import QuestionSectionService from 'src/modules/questionSection/questionSectionService';
import Errors from 'src/modules/shared/error/errors';

const QuestionSectionFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await QuestionSectionService.create(data);
      const record = await QuestionSectionService.find(id);
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
      title={i18n('entities.questionSection.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <QuestionSectionForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default QuestionSectionFormModal;
