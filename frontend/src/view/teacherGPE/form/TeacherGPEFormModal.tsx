import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import TeacherGPEForm from 'src/view/teacherGPE/form/TeacherGPEForm';
import TeacherGPEService from 'src/modules/teacherGPE/teacherGPEService';
import Errors from 'src/modules/shared/error/errors';

const TeacherGPEFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await TeacherGPEService.create(data);
      const record = await TeacherGPEService.find(id);
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
      title={i18n('entities.teacherGPE.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <TeacherGPEForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default TeacherGPEFormModal;
