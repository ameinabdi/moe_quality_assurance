import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import SchoolViewItem from 'src/view/school/view/SchoolViewItem';

const Dimension5View = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.indicator51) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator51')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator51.${record.indicator51}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator52) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator52')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator52.${record.indicator52}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator53) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator53')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator53.${record.indicator53}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator54) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator54')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator54.${record.indicator54}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator55) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator55')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator55.${record.indicator55}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator56) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator56')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator56.${record.indicator56}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator57) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator57')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator57.${record.indicator57}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator58) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator58')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator58.${record.indicator58}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator59) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator59')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator59.${record.indicator59}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator510) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator510')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator510.${record.indicator510}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator511) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator511')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator511.${record.indicator511}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator512) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator512')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator512.${record.indicator512}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator513) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator513')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator513.${record.indicator513}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator514) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator514')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator514.${record.indicator514}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator515) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator515')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator515.${record.indicator515}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator516) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator516')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator516.${record.indicator516}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator517) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator517')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator517.${record.indicator517}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator518) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator518')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator518.${record.indicator518}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator519) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator519')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator519.${record.indicator519}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator520) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimension5.fields.indicator520')}
        >
          {i18n(
            `entities.dimension5.enumerators.indicator520.${record.indicator520}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.school) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.dimension5.fields.school')}
          >
            <SchoolViewItem value={record.school} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default Dimension5View;
