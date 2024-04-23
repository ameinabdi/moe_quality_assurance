import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import Dimension4Form from 'src/view/dimension4/form/Dimension4Form';
import Dimension4Service from 'src/modules/dimension4/dimension4Service';
import Errors from 'src/modules/shared/error/errors';

const Dimension4FormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await Dimension4Service.create(data);
      const record = await Dimension4Service.find(id);
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
      title={i18n('entities.dimension4.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <Dimension4Form
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default Dimension4FormModal;
