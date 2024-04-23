import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import SchoolViewItem from 'src/view/school/view/SchoolViewItem';

const Dimension4View = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.indicator41) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension4.fields.indicator41')}
        >
          {i18n(
            `entities.dimension4.enumerators.indicator41.${record.indicator41}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator42) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension4.fields.indicator42')}
        >
          {i18n(
            `entities.dimension4.enumerators.indicator42.${record.indicator42}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator43) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension4.fields.indicator43')}
        >
          {i18n(
            `entities.dimension4.enumerators.indicator43.${record.indicator43}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator44) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension4.fields.indicator44')}
        >
          {i18n(
            `entities.dimension4.enumerators.indicator44.${record.indicator44}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.school) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.dimension4.fields.school')}
          >
            <SchoolViewItem value={record.school} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default Dimension4View;
