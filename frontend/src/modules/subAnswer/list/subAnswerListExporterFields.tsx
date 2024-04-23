import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.subAnswer.fields.id'),
  },
  {
    name: 'assessment',
    label: i18n('entities.subAnswer.fields.assessment'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'question',
    label: i18n('entities.subAnswer.fields.question'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'subQuestion',
    label: i18n('entities.subAnswer.fields.subQuestion'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'answer',
    label: i18n('entities.subAnswer.fields.answer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'subAnswer',
    label: i18n('entities.subAnswer.fields.subAnswer'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.subAnswer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.subAnswer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
