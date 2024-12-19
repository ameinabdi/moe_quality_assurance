import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'type',
    label: i18n('entities.tools.fields.type'),
    schema: schemas.relationToOne(
      i18n('entities.tools.fields.type'),
      {},
    ),
  },
  {
    name: 'name',
    label: i18n('entities.tools.fields.name'),
    schema: schemas.string(
      i18n('entities.tools.fields.name'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.tools.fields.description'),
    schema: schemas.string(
      i18n('entities.tools.fields.description'),
      {},
    ),
  },
  {
    name: 'attachment',
    label: i18n('entities.tools.fields.attachment'),
    schema: schemas.files(
      i18n('entities.tools.fields.attachment'),
      {},
    ),
  },
];