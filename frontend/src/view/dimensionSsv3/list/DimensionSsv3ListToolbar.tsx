import React from 'react';
import Toolbar from 'src/view/shared/styles/Toolbar';
import { Button, Tooltip, Popconfirm } from 'antd';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import dimensionSsv3Selectors from 'src/modules/dimensionSsv3/dimensionSsv3Selectors';
import selectors from 'src/modules/dimensionSsv3/list/dimensionSsv3ListSelectors';
import destroyActions from 'src/modules/dimensionSsv3/destroy/dimensionSsv3DestroyActions';
import { i18n } from 'src/i18n';
import destroySelectors from 'src/modules/dimensionSsv3/destroy/dimensionSsv3DestroySelectors';
import {
  DeleteOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import DimensionSsv3FormModal from '../form/DimensionSsv3FormModal';

const DimensionSsv3Toolbar = (props) => {
  const dispatch = useAppDispatch();
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const hasPermissionToDestroy = useSelector(
    dimensionSsv3Selectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    dimensionSsv3Selectors.selectPermissionToCreate,
  );
  const [modalVisible, setModalVisible] =  React.useState(false);

  const doCloseModal = () => {
    setModalVisible(false);
  };

  const doOpenModal = () => {
    setModalVisible(true);
  };

  const doCreateSuccess = (record) => {
    window.location.reload();
    doCloseModal();
  };


  const doDestroyAllSelected = () => {
    dispatch(destroyActions.doDestroyAll(selectedKeys));
  };


  const renderDestroyButton = () => {
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;
    const button = (
      <Button
        disabled={disabled}
        loading={destroyLoading}
        type="primary"
        icon={<DeleteOutlined rev={undefined} />}
      >
        {i18n('common.destroy')}
      </Button>
    );
    const buttonWithConfirm = (
      <Popconfirm
        title={i18n('common.areYouSure')}
        onConfirm={() => doDestroyAllSelected()}
        okText={i18n('common.yes')}
        cancelText={i18n('common.no')}
      >
        {button}
      </Popconfirm>
    );

    if (disabled) {
      return (
        <Tooltip title={i18n('common.mustSelectARow')}>
          {button}
        </Tooltip>
      );
    }

    return buttonWithConfirm;
  };

  return (
    <Toolbar>
      {hasPermissionToCreate && (
          <Button type="primary" icon={<PlusOutlined rev={undefined} />}  onClick={doOpenModal}>
            {i18n('common.new')}
          </Button>
      )}
      {renderDestroyButton()}
      <DimensionSsv3FormModal
        visible={modalVisible}
        onCancel={doCloseModal}
        onSuccess={doCreateSuccess}
        record={props.record}
        supervision={props.supervision}

      />
     </Toolbar>
  );
};

export default DimensionSsv3Toolbar;
