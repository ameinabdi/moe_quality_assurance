import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import questionEnumerators from 'src/modules/question/questionEnumerators';

export default [
  {
    name: 'question',
    label: i18n('entities.question.fields.question'),
    schema: schemas.string(
      i18n('entities.question.fields.question'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.question.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.question.fields.type'),
      {
        "options": questionEnumerators.type
      },
    ),
  },
  {
    name: 'hint',
    label: i18n('entities.question.fields.hint'),
    schema: schemas.string(
      i18n('entities.question.fields.hint'),
      {},
    ),
  },
  {
    name: 'validation',
    label: i18n('entities.question.fields.validation'),
    schema: schemas.stringArray(
      i18n('entities.question.fields.validation'),
      {},
    ),
  },
  {
    name: 'answerValue',
    label: i18n('entities.question.fields.answerValue'),
    schema: schemas.string(
      i18n('entities.question.fields.answerValue'),
      {},
    ),
  },
];