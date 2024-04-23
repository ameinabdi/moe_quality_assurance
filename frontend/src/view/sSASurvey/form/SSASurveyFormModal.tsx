import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import SSASurveyForm from 'src/view/sSASurvey/form/SSASurveyForm';
import SSASurveyService from 'src/modules/sSASurvey/sSASurveyService';
import Errors from 'src/modules/shared/error/errors';

const SSASurveyFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await SSASurveyService.create(data);
      const record = await SSASurveyService.find(id);
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
      title={i18n('entities.sSASurvey.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <SSASurveyForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default SSASurveyFormModal;
