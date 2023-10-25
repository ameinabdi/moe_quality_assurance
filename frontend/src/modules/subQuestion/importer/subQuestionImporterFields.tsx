import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import subQuestionEnumerators from 'src/modules/subQuestion/subQuestionEnumerators';

export default [
  {
    name: 'question',
    label: i18n('entities.subQuestion.fields.question'),
    schema: schemas.string(
      i18n('entities.subQuestion.fields.question'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'type',
    label: i18n('entities.subQuestion.fields.type'),
    schema: schemas.enumerator(
      i18n('entities.subQuestion.fields.type'),
      {
        "required": true,
        "options": subQuestionEnumerators.type
      },
    ),
  },
  {
    name: 'hint',
    label: i18n('entities.subQuestion.fields.hint'),
    schema: schemas.string(
      i18n('entities.subQuestion.fields.hint'),
      {},
    ),
  },
  {
    name: 'validation',
    label: i18n('entities.subQuestion.fields.validation'),
    schema: schemas.stringArray(
      i18n('entities.subQuestion.fields.validation'),
      {},
    ),
  },
  {
    name: 'answerValue',
    label: i18n('entities.subQuestion.fields.answerValue'),
    schema: schemas.string(
      i18n('entities.subQuestion.fields.answerValue'),
      {},
    ),
  },
];