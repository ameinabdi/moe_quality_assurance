import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import dimension3Enumerators from 'src/modules/dimension3/dimension3Enumerators';

export default [
  {
    name: 'indicator31',
    label: i18n('entities.dimension3.fields.indicator31'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator31'),
      {
        "options": dimension3Enumerators.indicator31
      },
    ),
  },
  {
    name: 'indicator32',
    label: i18n('entities.dimension3.fields.indicator32'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator32'),
      {
        "options": dimension3Enumerators.indicator32
      },
    ),
  },
  {
    name: 'indicator33',
    label: i18n('entities.dimension3.fields.indicator33'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator33'),
      {
        "options": dimension3Enumerators.indicator33
      },
    ),
  },
  {
    name: 'indicator34',
    label: i18n('entities.dimension3.fields.indicator34'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator34'),
      {
        "options": dimension3Enumerators.indicator34
      },
    ),
  },
  {
    name: 'indicator35',
    label: i18n('entities.dimension3.fields.indicator35'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator35'),
      {
        "options": dimension3Enumerators.indicator35
      },
    ),
  },
  {
    name: 'indicator36',
    label: i18n('entities.dimension3.fields.indicator36'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator36'),
      {
        "options": dimension3Enumerators.indicator36
      },
    ),
  },
  {
    name: 'indicator37',
    label: i18n('entities.dimension3.fields.indicator37'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator37'),
      {
        "options": dimension3Enumerators.indicator37
      },
    ),
  },
  {
    name: 'indicator38',
    label: i18n('entities.dimension3.fields.indicator38'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator38'),
      {
        "options": dimension3Enumerators.indicator38
      },
    ),
  },
  {
    name: 'indicator39',
    label: i18n('entities.dimension3.fields.indicator39'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator39'),
      {
        "options": dimension3Enumerators.indicator39
      },
    ),
  },
  {
    name: 'indicator310',
    label: i18n('entities.dimension3.fields.indicator310'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator310'),
      {
        "options": dimension3Enumerators.indicator310
      },
    ),
  },
  {
    name: 'indicator311',
    label: i18n('entities.dimension3.fields.indicator311'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator311'),
      {
        "options": dimension3Enumerators.indicator311
      },
    ),
  },
  {
    name: 'indicator312',
    label: i18n('entities.dimension3.fields.indicator312'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator312'),
      {
        "options": dimension3Enumerators.indicator312
      },
    ),
  },
  {
    name: 'indicator313',
    label: i18n('entities.dimension3.fields.indicator313'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator313'),
      {
        "options": dimension3Enumerators.indicator313
      },
    ),
  },
  {
    name: 'indicator314',
    label: i18n('entities.dimension3.fields.indicator314'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator314'),
      {
        "options": dimension3Enumerators.indicator314
      },
    ),
  },
  {
    name: 'indicator315',
    label: i18n('entities.dimension3.fields.indicator315'),
    schema: schemas.enumerator(
      i18n('entities.dimension3.fields.indicator315'),
      {
        "options": dimension3Enumerators.indicator315
      },
    ),
  },
  {
    name: 'school',
    label: i18n('entities.dimension3.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.dimension3.fields.school'),
      {},
    ),
  },
];