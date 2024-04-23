import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'assessment',
    label: i18n('entities.answer.fields.assessment'),
    schema: schemas.relationToOne(
      i18n('entities.answer.fields.assessment'),
      {},
    ),
  },
  {
    name: 'question',
    label: i18n('entities.answer.fields.question'),
    schema: schemas.relationToOne(
      i18n('entities.answer.fields.question'),
      {},
    ),
  },
  {
    name: 'answer',
    label: i18n('entities.answer.fields.answer'),
    schema: schemas.string(
      i18n('entities.answer.fields.answer'),
      {
        "required": true
      },
    ),
  },
];