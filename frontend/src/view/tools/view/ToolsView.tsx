import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import FilesViewer from 'src/view/shared/FilesViewer';
import ToolTypesViewItem from 'src/view/toolTypes/view/ToolTypesViewItem';

const ToolsView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.type) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.tools.fields.type')}
          >
            <ToolTypesViewItem value={record.type} />
          </Form.Item>
        )}

      {Boolean(record.name) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.tools.fields.name')}
        >
          {record.name}
        </Form.Item>
      )}

      {Boolean(record.description) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.tools.fields.description')}
        >
          {record.description}
        </Form.Item>
      )}

      {Boolean(record.attachment) &&
        Boolean(record.attachment.length) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n(
              'entities.tools.fields.attachment',
            )}
          >
            <FilesViewer value={record.attachment} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default ToolsView;
