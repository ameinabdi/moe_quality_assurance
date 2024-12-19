import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import DimensionSsv2Form from 'src/view/dimensionSsv2/form/DimensionSsv2Form';
import DimensionSsv2Service from 'src/modules/dimensionSsv2/dimensionSsv2Service';
import Errors from 'src/modules/shared/error/errors';

const DimensionSsv2FormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await DimensionSsv2Service.create(data);
      const record = await DimensionSsv2Service.find(id);
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
      title={i18n('entities.dimensionSsv2.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <DimensionSsv2Form
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default DimensionSsv2FormModal;
