import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import AssessmentAnswerForm from 'src/view/assessmentAnswer/form/AssessmentAnswerForm';
import AssessmentAnswerService from 'src/modules/assessmentAnswer/assessmentAnswerService';
import Errors from 'src/modules/shared/error/errors';

const AssessmentAnswerFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await AssessmentAnswerService.create(data);
      const record = await AssessmentAnswerService.find(id);
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
      title={i18n('entities.assessmentAnswer.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <AssessmentAnswerForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default AssessmentAnswerFormModal;
