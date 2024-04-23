import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.deminsion2.fields.id'),
  },
  {
    name: 'indicator21',
    label: i18n('entities.deminsion2.fields.indicator21'),
  },
  {
    name: 'indicator22',
    label: i18n('entities.deminsion2.fields.indicator22'),
  },
  {
    name: 'indicator23',
    label: i18n('entities.deminsion2.fields.indicator23'),
  },
  {
    name: 'indicator24',
    label: i18n('entities.deminsion2.fields.indicator24'),
  },
  {
    name: 'indicator25',
    label: i18n('entities.deminsion2.fields.indicator25'),
  },
  {
    name: 'indicator26',
    label: i18n('entities.deminsion2.fields.indicator26'),
  },
  {
    name: 'indicator27',
    label: i18n('entities.deminsion2.fields.indicator27'),
  },
  {
    name: 'indicator28',
    label: i18n('entities.deminsion2.fields.indicator28'),
  },
  {
    name: 'school',
    label: i18n('entities.deminsion2.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.deminsion2.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.deminsion2.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
