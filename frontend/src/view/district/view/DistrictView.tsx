import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';


const DistrictView = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.name) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.district.fields.name')}
        >
          {record.name}
        </Form.Item>
      )}

      {Boolean(record.region) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.district.fields.region')}
        >
          {record.region}
        </Form.Item>
      )}

      {Boolean(record.state) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.district.fields.state')}
        >
          {record.state}
        </Form.Item>
      )}
    </ViewWrapper>
  );
};

export default DistrictView;
