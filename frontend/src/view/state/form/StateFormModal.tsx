import React, { useState } from 'react';
import { Modal } from 'antd';
import { i18n } from 'src/i18n';
import StateForm from 'src/view/state/form/StateForm';
import StateService from 'src/modules/state/stateService';
import Errors from 'src/modules/shared/error/errors';

const StateFormModal = (props) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await StateService.create(data);
      const record = await StateService.find(id);
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
      title={i18n('entities.state.new.title')}
      visible={props.visible}
      onCancel={() => props.onCancel()}
      footer={false}
      width="80%"
    >
      <StateForm
        saveLoading={saveLoading}
        onSubmit={doSubmit}
        onCancel={props.onCancel}
        modal
      />
    </Modal>
  );
};

export default StateFormModal;
