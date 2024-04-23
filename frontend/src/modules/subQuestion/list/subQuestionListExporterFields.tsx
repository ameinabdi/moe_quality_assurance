import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.subQuestion.fields.id'),
  },
  {
    name: 'question',
    label: i18n('entities.subQuestion.fields.question'),
  },
  {
    name: 'type',
    label: i18n('entities.subQuestion.fields.type'),
  },
  {
    name: 'hint',
    label: i18n('entities.subQuestion.fields.hint'),
  },
  {
    name: 'validation',
    label: i18n('entities.subQuestion.fields.validation'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'answerValue',
    label: i18n('entities.subQuestion.fields.answerValue'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.subQuestion.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.subQuestion.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
