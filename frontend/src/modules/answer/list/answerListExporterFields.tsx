import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.answer.fields.id'),
  },
  {
    name: 'assessment',
    label: i18n('entities.answer.fields.assessment'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'question',
    label: i18n('entities.answer.fields.question'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'answer',
    label: i18n('entities.answer.fields.answer'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.answer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.answer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
