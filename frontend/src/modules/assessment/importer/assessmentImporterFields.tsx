import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.assessment.fields.title'),
    schema: schemas.string(
      i18n('entities.assessment.fields.title'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.assessment.fields.description'),
    schema: schemas.string(
      i18n('entities.assessment.fields.description'),
      {},
    ),
  },
  {
    name: 'level',
    label: i18n('entities.assessment.fields.level'),
    schema: schemas.stringArray(
      i18n('entities.assessment.fields.level'),
      {},
    ),
  },
];