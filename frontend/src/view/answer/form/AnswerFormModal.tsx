import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import AnswerForm from 'src/view/answer/form/AnswerForm';
import AnswerService from 'src/modules/answer/answerService';
import Errors from 'src/modules/shared/error/errors';

const AnswerFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await AnswerService.create(data);
      const record = await AnswerService.find(id);
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
      title={i18n('entities.answer.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <AnswerForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default AnswerFormModal;
