import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.tools.fields.id'),
  },
  {
    name: 'type',
    label: i18n('entities.tools.fields.type'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'name',
    label: i18n('entities.tools.fields.name'),
  },
  {
    name: 'description',
    label: i18n('entities.tools.fields.description'),
  },
  {
    name: 'attachment',
    label: i18n('entities.tools.fields.attachment'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.tools.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.tools.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
