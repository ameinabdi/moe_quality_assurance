import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import DistrictForm from 'src/view/district/form/DistrictForm';
import DistrictService from 'src/modules/district/districtService';
import Errors from 'src/modules/shared/error/errors';

const DistrictFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await DistrictService.create(data);
      const record = await DistrictService.find(id);
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
      title={i18n('entities.district.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <DistrictForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default DistrictFormModal;
