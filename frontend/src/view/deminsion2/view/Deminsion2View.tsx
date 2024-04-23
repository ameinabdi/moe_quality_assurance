import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import SchoolViewItem from 'src/view/school/view/SchoolViewItem';

const Deminsion2View = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.indicator21) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.deminsion2.fields.indicator21')}
        >
          {i18n(
            `entities.deminsion2.enumerators.indicator21.${record.indicator21}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator22) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.deminsion2.fields.indicator22')}
        >
          {i18n(
            `entities.deminsion2.enumerators.indicator22.${record.indicator22}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator23) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.deminsion2.fields.indicator23')}
        >
          {i18n(
            `entities.deminsion2.enumerators.indicator23.${record.indicator23}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator24) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.deminsion2.fields.indicator24')}
        >
          {i18n(
            `entities.deminsion2.enumerators.indicator24.${record.indicator24}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator25) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.deminsion2.fields.indicator25')}
        >
          {i18n(
            `entities.deminsion2.enumerators.indicator25.${record.indicator25}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator26) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.deminsion2.fields.indicator26')}
        >
          {i18n(
            `entities.deminsion2.enumerators.indicator26.${record.indicator26}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator27) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.deminsion2.fields.indicator27')}
        >
          {i18n(
            `entities.deminsion2.enumerators.indicator27.${record.indicator27}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator28) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.deminsion2.fields.indicator28')}
        >
          {i18n(
            `entities.deminsion2.enumerators.indicator28.${record.indicator28}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.school) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.deminsion2.fields.school')}
          >
            <SchoolViewItem value={record.school} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default Deminsion2View;
