import {
  DeleteOutlined,
  EditOutlined,
  PrinterOutlined,
} from '@ant-design/icons';
import { Button, Popconfirm } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'src/modules/hook';
import { Link } from 'react-router-dom';
import { i18n } from 'src/i18n';
import sSASurveySelectors from 'src/modules/sSASurvey/sSASurveySelectors';
import destroyActions from 'src/modules/sSASurvey/destroy/sSASurveyDestroyActions';
import destroySelectors from 'src/modules/sSASurvey/destroy/sSASurveyDestroySelectors';
import Toolbar from 'src/view/shared/styles/Toolbar';
import {useParams } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

const SSASurveyViewToolbar = (props) => {
  const dispatch = useAppDispatch();
  const match = useParams();

 
  const hasPermissionToEdit = useSelector(
    sSASurveySelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    sSASurveySelectors.selectPermissionToDestroy,
  );
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const id:any = match.id;

  const doDestroy = () => {
    dispatch(destroyActions.doDestroy(id));
  };

  const reactToPrintTrigger = React.useCallback(() => {
    return (
      <Button 
      type="dashed" 
      icon={<PrinterOutlined  rev={undefined}  />} 
      >
        {i18n('common.print')}
      </Button>
    ); 
  }, []);

  return (
    <Toolbar>
      <ReactToPrint
        content={props.handleToPrint}
        documentTitle="AwesomeFileName"
        trigger={reactToPrintTrigger}
      />

      {hasPermissionToEdit && (
        <Link to={`/s-s-a-survey/${id}/edit`}>
          <Button type="primary" icon={<EditOutlined rev={undefined}  />}>
            {i18n('common.edit')}
          </Button>
        </Link>
      )}

      {hasPermissionToDestroy && (
        <Popconfirm
          title={i18n('common.areYouSure')}
          onConfirm={doDestroy}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        >
          <Button
            type="primary"
            icon={<DeleteOutlined rev={undefined}  />}
            disabled={destroyLoading}
          >
            {i18n('common.destroy')}
          </Button>
        </Popconfirm>
      )}

    </Toolbar>
  );
};

export default SSASurveyViewToolbar;
