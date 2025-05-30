import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.region.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.region.fields.name'),
  },
  {
    name: 'state',
    label: i18n('entities.region.fields.state'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.region.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.region.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
