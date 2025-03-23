import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import DimensionGPE4Form from 'src/view/dimensionGPE4/form/DimensionGPE4Form';
import DimensionGPE4Service from 'src/modules/dimensionGPE4/dimensionGPE4Service';
import Errors from 'src/modules/shared/error/errors';

const DimensionGPE4FormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await DimensionGPE4Service.create(data);
      const record = await DimensionGPE4Service.find(id);
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
      title={i18n('entities.dimensionGPE4.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <DimensionGPE4Form
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default DimensionGPE4FormModal;
