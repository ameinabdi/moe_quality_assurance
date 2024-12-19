import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';


const ToolTypesView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.name) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.toolTypes.fields.name')}
        >
          {record.name}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default ToolTypesView;
