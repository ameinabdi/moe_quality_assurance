import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import dimensionSsv2Enumerators from 'src/modules/dimensionSsv2/dimensionSsv2Enumerators';

export default [
  {
    name: 'indicator31',
    label: i18n('entities.dimensionSsv2.fields.indicator31'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator31'),
      {
        "options": dimensionSsv2Enumerators.indicator31
      },
    ),
  },
  {
    name: 'indicator32',
    label: i18n('entities.dimensionSsv2.fields.indicator32'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator32'),
      {
        "options": dimensionSsv2Enumerators.indicator32
      },
    ),
  },
  {
    name: 'indicator33',
    label: i18n('entities.dimensionSsv2.fields.indicator33'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator33'),
      {
        "options": dimensionSsv2Enumerators.indicator33
      },
    ),
  },
  {
    name: 'indicator34',
    label: i18n('entities.dimensionSsv2.fields.indicator34'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator34'),
      {
        "options": dimensionSsv2Enumerators.indicator34
      },
    ),
  },
  {
    name: 'indicator35',
    label: i18n('entities.dimensionSsv2.fields.indicator35'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator35'),
      {
        "options": dimensionSsv2Enumerators.indicator35
      },
    ),
  },
  {
    name: 'indicator36',
    label: i18n('entities.dimensionSsv2.fields.indicator36'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator36'),
      {
        "options": dimensionSsv2Enumerators.indicator36
      },
    ),
  },
  {
    name: 'indicator37',
    label: i18n('entities.dimensionSsv2.fields.indicator37'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator37'),
      {
        "options": dimensionSsv2Enumerators.indicator37
      },
    ),
  },
  {
    name: 'indicator38',
    label: i18n('entities.dimensionSsv2.fields.indicator38'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator38'),
      {
        "options": dimensionSsv2Enumerators.indicator38
      },
    ),
  },
  {
    name: 'indicator39',
    label: i18n('entities.dimensionSsv2.fields.indicator39'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator39'),
      {
        "options": dimensionSsv2Enumerators.indicator39
      },
    ),
  },
  {
    name: 'indicator310',
    label: i18n('entities.dimensionSsv2.fields.indicator310'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator310'),
      {
        "options": dimensionSsv2Enumerators.indicator310
      },
    ),
  },
  {
    name: 'indicator311',
    label: i18n('entities.dimensionSsv2.fields.indicator311'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator311'),
      {
        "options": dimensionSsv2Enumerators.indicator311
      },
    ),
  },
  {
    name: 'indicator312',
    label: i18n('entities.dimensionSsv2.fields.indicator312'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator312'),
      {
        "options": dimensionSsv2Enumerators.indicator312
      },
    ),
  },
  {
    name: 'indicator313',
    label: i18n('entities.dimensionSsv2.fields.indicator313'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator313'),
      {
        "options": dimensionSsv2Enumerators.indicator313
      },
    ),
  },
  {
    name: 'indicator314',
    label: i18n('entities.dimensionSsv2.fields.indicator314'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator314'),
      {
        "options": dimensionSsv2Enumerators.indicator314
      },
    ),
  },
  {
    name: 'indicator315',
    label: i18n('entities.dimensionSsv2.fields.indicator315'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv2.fields.indicator315'),
      {
        "options": dimensionSsv2Enumerators.indicator315
      },
    ),
  },
  {
    name: 'school',
    label: i18n('entities.dimensionSsv2.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.dimensionSsv2.fields.school'),
      {},
    ),
  },
];