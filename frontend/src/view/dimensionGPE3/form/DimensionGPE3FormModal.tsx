import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import DimensionGPE3Form from 'src/view/dimensionGPE3/form/DimensionGPE3Form';
import DimensionGPE3Service from 'src/modules/dimensionGPE3/dimensionGPE3Service';
import Errors from 'src/modules/shared/error/errors';

const DimensionGPE3FormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await DimensionGPE3Service.create(data);
      const record = await DimensionGPE3Service.find(id);
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
      title={i18n('entities.dimensionGPE3.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <DimensionGPE3Form
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default DimensionGPE3FormModal;
