import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import assessmentAnswerEnumerators from 'src/modules/assessmentAnswer/assessmentAnswerEnumerators';
import moment from 'moment';

export default [
  {
    name: 'assessment',
    label: i18n('entities.assessmentAnswer.fields.assessment'),
    schema: schemas.relationToOne(
      i18n('entities.assessmentAnswer.fields.assessment'),
      {},
    ),
  },
  {
    name: 'status',
    label: i18n('entities.assessmentAnswer.fields.status'),
    schema: schemas.enumerator(
      i18n('entities.assessmentAnswer.fields.status'),
      {
        "options": assessmentAnswerEnumerators.status
      },
    ),
  },
  {
    name: 'submitDate',
    label: i18n('entities.assessmentAnswer.fields.submitDate'),
    schema: schemas.datetime(
      i18n('entities.assessmentAnswer.fields.submitDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
];