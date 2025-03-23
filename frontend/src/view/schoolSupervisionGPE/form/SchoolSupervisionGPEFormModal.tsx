import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import SchoolSupervisionGPEForm from 'src/view/schoolSupervisionGPE/form/SchoolSupervisionGPEForm';
import SchoolSupervisionGPEService from 'src/modules/schoolSupervisionGPE/schoolSupervisionGPEService';
import Errors from 'src/modules/shared/error/errors';

const SchoolSupervisionGPEFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await SchoolSupervisionGPEService.create(data);
      const record = await SchoolSupervisionGPEService.find(id);
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
      title={i18n('entities.schoolSupervisionGPE.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <SchoolSupervisionGPEForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default SchoolSupervisionGPEFormModal;
