import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import dimension1Enumerators from 'src/modules/dimension1/dimension1Enumerators';

export default [
  {
    name: 'indicator11',
    label: i18n('entities.dimension1.fields.indicator11'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator11'),
      {
        "options": dimension1Enumerators.indicator11
      },
    ),
  },
  {
    name: 'indicator12',
    label: i18n('entities.dimension1.fields.indicator12'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator12'),
      {
        "options": dimension1Enumerators.indicator12
      },
    ),
  },
  {
    name: 'indicator13',
    label: i18n('entities.dimension1.fields.indicator13'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator13'),
      {
        "options": dimension1Enumerators.indicator13
      },
    ),
  },
  {
    name: 'indicator14',
    label: i18n('entities.dimension1.fields.indicator14'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator14'),
      {
        "options": dimension1Enumerators.indicator14
      },
    ),
  },
  {
    name: 'indicator15',
    label: i18n('entities.dimension1.fields.indicator15'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator15'),
      {
        "options": dimension1Enumerators.indicator15
      },
    ),
  },
  {
    name: 'indicator16',
    label: i18n('entities.dimension1.fields.indicator16'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator16'),
      {
        "options": dimension1Enumerators.indicator16
      },
    ),
  },
  {
    name: 'indicator17',
    label: i18n('entities.dimension1.fields.indicator17'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator17'),
      {
        "options": dimension1Enumerators.indicator17
      },
    ),
  },
  {
    name: 'indicator18',
    label: i18n('entities.dimension1.fields.indicator18'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator18'),
      {
        "options": dimension1Enumerators.indicator18
      },
    ),
  },
  {
    name: 'indicator19',
    label: i18n('entities.dimension1.fields.indicator19'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator19'),
      {
        "options": dimension1Enumerators.indicator19
      },
    ),
  },
  {
    name: 'indicator110',
    label: i18n('entities.dimension1.fields.indicator110'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator110'),
      {
        "options": dimension1Enumerators.indicator110
      },
    ),
  },
  {
    name: 'indicator111',
    label: i18n('entities.dimension1.fields.indicator111'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator111'),
      {
        "options": dimension1Enumerators.indicator111
      },
    ),
  },
  {
    name: 'indicator112',
    label: i18n('entities.dimension1.fields.indicator112'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator112'),
      {
        "options": dimension1Enumerators.indicator112
      },
    ),
  },
  {
    name: 'indicator113',
    label: i18n('entities.dimension1.fields.indicator113'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator113'),
      {
        "options": dimension1Enumerators.indicator113
      },
    ),
  },
  {
    name: 'indicator114',
    label: i18n('entities.dimension1.fields.indicator114'),
    schema: schemas.enumerator(
      i18n('entities.dimension1.fields.indicator114'),
      {
        "options": dimension1Enumerators.indicator114
      },
    ),
  },
  {
    name: 'school',
    label: i18n('entities.dimension1.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.dimension1.fields.school'),
      {},
    ),
  },
];