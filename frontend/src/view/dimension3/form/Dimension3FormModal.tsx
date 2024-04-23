import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import Dimension3Form from 'src/view/dimension3/form/Dimension3Form';
import Dimension3Service from 'src/modules/dimension3/dimension3Service';
import Errors from 'src/modules/shared/error/errors';

const Dimension3FormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await Dimension3Service.create(data);
      const record = await Dimension3Service.find(id);
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
      title={i18n('entities.dimension3.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <Dimension3Form
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default Dimension3FormModal;
