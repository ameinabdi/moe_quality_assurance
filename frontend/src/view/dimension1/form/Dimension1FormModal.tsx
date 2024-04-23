import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import Dimension1Form from 'src/view/dimension1/form/Dimension1Form';
import Dimension1Service from 'src/modules/dimension1/dimension1Service';
import Errors from 'src/modules/shared/error/errors';

const Dimension1FormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await Dimension1Service.create(data);
      const record = await Dimension1Service.find(id);
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
      title={i18n('entities.dimension1.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <Dimension1Form
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default Dimension1FormModal;
