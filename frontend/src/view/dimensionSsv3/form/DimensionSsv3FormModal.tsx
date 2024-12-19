import React, { useState } from 'react';
import { Drawer } from 'antd';
import { i18n } from 'src/i18n';
import DimensionSsv3Form from 'src/view/dimensionSsv3/form/DimensionSsv3Form';
import DimensionSsv3Service from 'src/modules/dimensionSsv3/dimensionSsv3Service';
import Errors from 'src/modules/shared/error/errors';

const DimensionSsv3FormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await DimensionSsv3Service.create(data);
      const record = await DimensionSsv3Service.find(id);
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
    <Drawer
      style={{ top: 24 }}
      title={i18n('entities.dimensionSsv3.new.title')}
      visible={props.visible}
      onClose={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <DimensionSsv3Form
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        supervision={props.supervision}
        modal
      />
    </Drawer>
  );
};

export default DimensionSsv3FormModal;
