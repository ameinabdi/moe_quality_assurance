import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import StateViewItem from 'src/view/state/view/StateViewItem';

const RegionView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.name) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.region.fields.name')}
        >
          {record.name}
        </Form.Item>
      )}

      {Boolean(record.state) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.region.fields.state')}
          >
            <StateViewItem value={record.state} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default RegionView;
