import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import SchoolViewItem from 'src/view/school/view/SchoolViewItem';

const Dimension3View = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.indicator31) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator31')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator31.${record.indicator31}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator32) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator32')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator32.${record.indicator32}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator33) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator33')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator33.${record.indicator33}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator34) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator34')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator34.${record.indicator34}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator35) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator35')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator35.${record.indicator35}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator36) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator36')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator36.${record.indicator36}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator37) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator37')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator37.${record.indicator37}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator38) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator38')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator38.${record.indicator38}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator39) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator39')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator39.${record.indicator39}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator310) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator310')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator310.${record.indicator310}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator311) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator311')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator311.${record.indicator311}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator312) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator312')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator312.${record.indicator312}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator313) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator313')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator313.${record.indicator313}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator314) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator314')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator314.${record.indicator314}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator315) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension3.fields.indicator315')}
        >
          {i18n(
            `entities.dimension3.enumerators.indicator315.${record.indicator315}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.school) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.dimension3.fields.school')}
          >
            <SchoolViewItem value={record.school} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default Dimension3View;
