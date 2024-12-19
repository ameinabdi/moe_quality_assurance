import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import DimensionSsv1Form from 'src/view/dimensionSsv1/form/DimensionSsv1Form';
import DimensionSsv1Service from 'src/modules/dimensionSsv1/dimensionSsv1Service';
import Errors from 'src/modules/shared/error/errors';

const DimensionSsv1FormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await DimensionSsv1Service.create(data);
      const record = await DimensionSsv1Service.find(id);
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
      title={i18n('entities.dimensionSsv1.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <DimensionSsv1Form
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default DimensionSsv1FormModal;
