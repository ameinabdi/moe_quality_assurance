import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.questionSection.fields.id'),
  },
  {
    name: 'title',
    label: i18n('entities.questionSection.fields.title'),
  },
  {
    name: 'description',
    label: i18n('entities.questionSection.fields.description'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.questionSection.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.questionSection.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
