import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import Deminsion2Form from 'src/view/deminsion2/form/Deminsion2Form';
import Deminsion2Service from 'src/modules/deminsion2/deminsion2Service';
import Errors from 'src/modules/shared/error/errors';

const Deminsion2FormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await Deminsion2Service.create(data);
      const record = await Deminsion2Service.find(id);
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
      title={i18n('entities.deminsion2.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <Deminsion2Form
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default Deminsion2FormModal;
