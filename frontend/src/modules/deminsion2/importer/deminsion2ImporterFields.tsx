import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import deminsion2Enumerators from 'src/modules/deminsion2/deminsion2Enumerators';

export default [
  {
    name: 'indicator21',
    label: i18n('entities.deminsion2.fields.indicator21'),
    schema: schemas.enumerator(
      i18n('entities.deminsion2.fields.indicator21'),
      {
        "options": deminsion2Enumerators.indicator21
      },
    ),
  },
  {
    name: 'indicator22',
    label: i18n('entities.deminsion2.fields.indicator22'),
    schema: schemas.enumerator(
      i18n('entities.deminsion2.fields.indicator22'),
      {
        "options": deminsion2Enumerators.indicator22
      },
    ),
  },
  {
    name: 'indicator23',
    label: i18n('entities.deminsion2.fields.indicator23'),
    schema: schemas.enumerator(
      i18n('entities.deminsion2.fields.indicator23'),
      {
        "options": deminsion2Enumerators.indicator23
      },
    ),
  },
  {
    name: 'indicator24',
    label: i18n('entities.deminsion2.fields.indicator24'),
    schema: schemas.enumerator(
      i18n('entities.deminsion2.fields.indicator24'),
      {
        "options": deminsion2Enumerators.indicator24
      },
    ),
  },
  {
    name: 'indicator25',
    label: i18n('entities.deminsion2.fields.indicator25'),
    schema: schemas.enumerator(
      i18n('entities.deminsion2.fields.indicator25'),
      {
        "options": deminsion2Enumerators.indicator25
      },
    ),
  },
  {
    name: 'indicator26',
    label: i18n('entities.deminsion2.fields.indicator26'),
    schema: schemas.enumerator(
      i18n('entities.deminsion2.fields.indicator26'),
      {
        "options": deminsion2Enumerators.indicator26
      },
    ),
  },
  {
    name: 'indicator27',
    label: i18n('entities.deminsion2.fields.indicator27'),
    schema: schemas.enumerator(
      i18n('entities.deminsion2.fields.indicator27'),
      {
        "options": deminsion2Enumerators.indicator27
      },
    ),
  },
  {
    name: 'indicator28',
    label: i18n('entities.deminsion2.fields.indicator28'),
    schema: schemas.enumerator(
      i18n('entities.deminsion2.fields.indicator28'),
      {
        "options": deminsion2Enumerators.indicator28
      },
    ),
  },
  {
    name: 'school',
    label: i18n('entities.deminsion2.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.deminsion2.fields.school'),
      {},
    ),
  },
];