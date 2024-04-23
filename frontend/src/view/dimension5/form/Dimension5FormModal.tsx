import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import Dimension5Form from 'src/view/dimension5/form/Dimension5Form';
import Dimension5Service from 'src/modules/dimension5/dimension5Service';
import Errors from 'src/modules/shared/error/errors';

const Dimension5FormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await Dimension5Service.create(data);
      const record = await Dimension5Service.find(id);
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
      title={i18n('entities.dimension5.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <Dimension5Form
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default Dimension5FormModal;
