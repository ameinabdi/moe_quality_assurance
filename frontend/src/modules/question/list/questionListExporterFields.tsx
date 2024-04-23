import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.question.fields.id'),
  },
  {
    name: 'question',
    label: i18n('entities.question.fields.question'),
  },
  {
    name: 'type',
    label: i18n('entities.question.fields.type'),
  },
  {
    name: 'hint',
    label: i18n('entities.question.fields.hint'),
  },
  {
    name: 'validation',
    label: i18n('entities.question.fields.validation'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'answerValue',
    label: i18n('entities.question.fields.answerValue'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.question.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.question.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
