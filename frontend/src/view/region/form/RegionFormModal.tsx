import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import RegionForm from 'src/view/region/form/RegionForm';
import RegionService from 'src/modules/region/regionService';
import Errors from 'src/modules/shared/error/errors';

const RegionFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await RegionService.create(data);
      const record = await RegionService.find(id);
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
      title={i18n('entities.region.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <RegionForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default RegionFormModal;
