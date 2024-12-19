import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import GovernmentTeacherInformationForm from 'src/view/governmentTeacherInformation/form/GovernmentTeacherInformationForm';
import GovernmentTeacherInformationService from 'src/modules/governmentTeacherInformation/governmentTeacherInformationService';
import Errors from 'src/modules/shared/error/errors';

const GovernmentTeacherInformationFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await GovernmentTeacherInformationService.create(data);
      const record = await GovernmentTeacherInformationService.find(id);
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
      title={i18n('entities.governmentTeacherInformation.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <GovernmentTeacherInformationForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default GovernmentTeacherInformationFormModal;
