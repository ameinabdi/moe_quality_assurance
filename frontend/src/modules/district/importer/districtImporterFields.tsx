import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.district.fields.name'),
    schema: schemas.string(
      i18n('entities.district.fields.name'),
      {},
    ),
  },
  {
    name: 'region',
    label: i18n('entities.district.fields.region'),
    schema: schemas.string(
      i18n('entities.district.fields.region'),
      {},
    ),
  },
  {
    name: 'state',
    label: i18n('entities.district.fields.state'),
    schema: schemas.string(
      i18n('entities.district.fields.state'),
      {},
    ),
  },
];