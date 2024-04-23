import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.dimension1.fields.id'),
  },
  {
    name: 'indicator11',
    label: i18n('entities.dimension1.fields.indicator11'),
  },
  {
    name: 'indicator12',
    label: i18n('entities.dimension1.fields.indicator12'),
  },
  {
    name: 'indicator13',
    label: i18n('entities.dimension1.fields.indicator13'),
  },
  {
    name: 'indicator14',
    label: i18n('entities.dimension1.fields.indicator14'),
  },
  {
    name: 'indicator15',
    label: i18n('entities.dimension1.fields.indicator15'),
  },
  {
    name: 'indicator16',
    label: i18n('entities.dimension1.fields.indicator16'),
  },
  {
    name: 'indicator17',
    label: i18n('entities.dimension1.fields.indicator17'),
  },
  {
    name: 'indicator18',
    label: i18n('entities.dimension1.fields.indicator18'),
  },
  {
    name: 'indicator19',
    label: i18n('entities.dimension1.fields.indicator19'),
  },
  {
    name: 'indicator110',
    label: i18n('entities.dimension1.fields.indicator110'),
  },
  {
    name: 'indicator111',
    label: i18n('entities.dimension1.fields.indicator111'),
  },
  {
    name: 'indicator112',
    label: i18n('entities.dimension1.fields.indicator112'),
  },
  {
    name: 'indicator113',
    label: i18n('entities.dimension1.fields.indicator113'),
  },
  {
    name: 'indicator114',
    label: i18n('entities.dimension1.fields.indicator114'),
  },
  {
    name: 'school',
    label: i18n('entities.dimension1.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.dimension1.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.dimension1.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
