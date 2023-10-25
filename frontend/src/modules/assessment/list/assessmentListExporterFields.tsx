import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.assessment.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.assessment.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.assessment.fields.description'),
  },
  {
    name: 'level',
    label: i18n('entities.assessment.fields.level'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.assessment.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.assessment.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
