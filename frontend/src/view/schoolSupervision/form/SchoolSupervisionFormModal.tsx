import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import SchoolSupervisionForm from 'src/view/schoolSupervision/form/SchoolSupervisionForm';
import SchoolSupervisionService from 'src/modules/schoolSupervision/schoolSupervisionService';
import Errors from 'src/modules/shared/error/errors';

const SchoolSupervisionFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await SchoolSupervisionService.create(data);
      const record = await SchoolSupervisionService.find(id);
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
      title={i18n('entities.schoolSupervision.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <SchoolSupervisionForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default SchoolSupervisionFormModal;
