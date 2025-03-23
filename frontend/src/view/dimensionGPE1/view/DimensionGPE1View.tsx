import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import ViewWrapper, {
  viewItemLayout,
} from 'src/view/shared/styles/ViewWrapper';
import { i18n } from 'src/i18n';
import { Form } from 'antd';
import SchoolViewItem from 'src/view/school/view/SchoolViewItem';

const DimensionGPE1View = (props) => {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <ViewWrapper>
      {Boolean(record.indicator11) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator11')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator11.${record.indicator11}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator12) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator12')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator12.${record.indicator12}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator13) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator13')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator13.${record.indicator13}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator14) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator14')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator14.${record.indicator14}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator15) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator15')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator15.${record.indicator15}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator16) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator16')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator16.${record.indicator16}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator17) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator17')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator17.${record.indicator17}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator18) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator18')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator18.${record.indicator18}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator19) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator19')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator19.${record.indicator19}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator110) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator110')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator110.${record.indicator110}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator111) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator111')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator111.${record.indicator111}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator112) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator112')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator112.${record.indicator112}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator113) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator113')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator113.${record.indicator113}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.indicator114) && (
        <Form.Item
          {...viewItemLayout}
          label={i18n('entities.dimensionGPE1.fields.indicator114')}
        >
          {i18n(
            `entities.dimensionGPE1.enumerators.indicator114.${record.indicator114}`,
          )}
        </Form.Item>
      )}

      {Boolean(record.school) && (
          <Form.Item
            {...viewItemLayout}
            label={i18n('entities.dimensionGPE1.fields.school')}
          >
            <SchoolViewItem value={record.school} />
          </Form.Item>
        )}
    </ViewWrapper>
  );
};

export default DimensionGPE1View;
