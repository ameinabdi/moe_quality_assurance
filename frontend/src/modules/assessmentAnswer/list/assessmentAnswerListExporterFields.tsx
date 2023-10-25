import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.assessmentAnswer.fields.id'),
  },
  {
    name: 'assessment',
    label: i18n('entities.assessmentAnswer.fields.assessment'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'status',
    label: i18n('entities.assessmentAnswer.fields.status'),
  },
  {
    name: 'submitDate',
    label: i18n('entities.assessmentAnswer.fields.submitDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.assessmentAnswer.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.assessmentAnswer.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
