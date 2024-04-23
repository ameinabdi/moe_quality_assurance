import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.dimension3.fields.id'),
  },
  {
    name: 'indicator31',
    label: i18n('entities.dimension3.fields.indicator31'),
  },
  {
    name: 'indicator32',
    label: i18n('entities.dimension3.fields.indicator32'),
  },
  {
    name: 'indicator33',
    label: i18n('entities.dimension3.fields.indicator33'),
  },
  {
    name: 'indicator34',
    label: i18n('entities.dimension3.fields.indicator34'),
  },
  {
    name: 'indicator35',
    label: i18n('entities.dimension3.fields.indicator35'),
  },
  {
    name: 'indicator36',
    label: i18n('entities.dimension3.fields.indicator36'),
  },
  {
    name: 'indicator37',
    label: i18n('entities.dimension3.fields.indicator37'),
  },
  {
    name: 'indicator38',
    label: i18n('entities.dimension3.fields.indicator38'),
  },
  {
    name: 'indicator39',
    label: i18n('entities.dimension3.fields.indicator39'),
  },
  {
    name: 'indicator310',
    label: i18n('entities.dimension3.fields.indicator310'),
  },
  {
    name: 'indicator311',
    label: i18n('entities.dimension3.fields.indicator311'),
  },
  {
    name: 'indicator312',
    label: i18n('entities.dimension3.fields.indicator312'),
  },
  {
    name: 'indicator313',
    label: i18n('entities.dimension3.fields.indicator313'),
  },
  {
    name: 'indicator314',
    label: i18n('entities.dimension3.fields.indicator314'),
  },
  {
    name: 'indicator315',
    label: i18n('entities.dimension3.fields.indicator315'),
  },
  {
    name: 'school',
    label: i18n('entities.dimension3.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.dimension3.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.dimension3.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
