import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.questionSection.fields.title'),
    schema: schemas.string(
      i18n('entities.questionSection.fields.title'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'description',
    label: i18n('entities.questionSection.fields.description'),
    schema: schemas.string(
      i18n('entities.questionSection.fields.description'),
      {},
    ),
  },
];