import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.dimension4.fields.id'),
  },
  {
    name: 'indicator41',
    label: i18n('entities.dimension4.fields.indicator41'),
  },
  {
    name: 'indicator42',
    label: i18n('entities.dimension4.fields.indicator42'),
  },
  {
    name: 'indicator43',
    label: i18n('entities.dimension4.fields.indicator43'),
  },
  {
    name: 'indicator44',
    label: i18n('entities.dimension4.fields.indicator44'),
  },
  {
    name: 'school',
    label: i18n('entities.dimension4.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.dimension4.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.dimension4.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
