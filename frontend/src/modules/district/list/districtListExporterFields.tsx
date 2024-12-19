import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.district.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.district.fields.name'),
  },
  {
    name: 'region',
    label: i18n('entities.district.fields.region'),
  },
  {
    name: 'state',
    label: i18n('entities.district.fields.state'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.district.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.district.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
