import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import DimensionGPE5Form from 'src/view/dimensionGPE5/form/DimensionGPE5Form';
import DimensionGPE5Service from 'src/modules/dimensionGPE5/dimensionGPE5Service';
import Errors from 'src/modules/shared/error/errors';

const DimensionGPE5FormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await DimensionGPE5Service.create(data);
      const record = await DimensionGPE5Service.find(id);
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
      title={i18n('entities.dimensionGPE5.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <DimensionGPE5Form
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default DimensionGPE5FormModal;
