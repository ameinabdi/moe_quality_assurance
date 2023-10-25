import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'assessment',
    label: i18n('entities.subAnswer.fields.assessment'),
    schema: schemas.relationToOne(
      i18n('entities.subAnswer.fields.assessment'),
      {},
    ),
  },
  {
    name: 'question',
    label: i18n('entities.subAnswer.fields.question'),
    schema: schemas.relationToOne(
      i18n('entities.subAnswer.fields.question'),
      {},
    ),
  },
  {
    name: 'subQuestion',
    label: i18n('entities.subAnswer.fields.subQuestion'),
    schema: schemas.relationToOne(
      i18n('entities.subAnswer.fields.subQuestion'),
      {},
    ),
  },
  {
    name: 'answer',
    label: i18n('entities.subAnswer.fields.answer'),
    schema: schemas.relationToOne(
      i18n('entities.subAnswer.fields.answer'),
      {},
    ),
  },
  {
    name: 'subAnswer',
    label: i18n('entities.subAnswer.fields.subAnswer'),
    schema: schemas.string(
      i18n('entities.subAnswer.fields.subAnswer'),
      {
        "required": true
      },
    ),
  },
];