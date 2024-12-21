import { i18n } from 'src/i18n';
import schemas from 'src/modules/shared/yup/yupImporterSchemas';

export default [
  {
    name: 'type',
    label: i18n('user.fields.type'),
    schema: schemas.string(i18n('user.fields.type')),
  },
  {
    name: 'fullName',
    label: i18n('user.fields.fullName'),
    schema: schemas.string(i18n('user.fields.fullName')),
  },
  {
    name: 'email',
    label: i18n('user.fields.email'),
    schema: schemas.email(i18n('user.fields.email')),
  },
  {
    name: 'state',
    label: i18n('user.fields.state'),
    schema: schemas.relationToOne(i18n('user.fields.state')),
  },
  {
    name: 'district',
    label: i18n('user.fields.district'),
    schema: schemas.relationToOne(i18n('user.fields.district')),
  },
];
