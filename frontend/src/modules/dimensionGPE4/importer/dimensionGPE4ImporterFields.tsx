import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import dimensionGPE4Enumerators from 'src/modules/dimensionGPE4/dimensionGPE4Enumerators';

export default [
  {
    name: 'indicator41',
    label: i18n('entities.dimensionGPE4.fields.indicator41'),
    schema: schemas.enumerator(
      i18n('entities.dimensionGPE4.fields.indicator41'),
      {
        "options": dimensionGPE4Enumerators.indicator41
      },
    ),
  },
  {
    name: 'indicator42',
    label: i18n('entities.dimensionGPE4.fields.indicator42'),
    schema: schemas.enumerator(
      i18n('entities.dimensionGPE4.fields.indicator42'),
      {
        "options": dimensionGPE4Enumerators.indicator42
      },
    ),
  },
  {
    name: 'indicator43',
    label: i18n('entities.dimensionGPE4.fields.indicator43'),
    schema: schemas.enumerator(
      i18n('entities.dimensionGPE4.fields.indicator43'),
      {
        "options": dimensionGPE4Enumerators.indicator43
      },
    ),
  },
  {
    name: 'indicator44',
    label: i18n('entities.dimensionGPE4.fields.indicator44'),
    schema: schemas.enumerator(
      i18n('entities.dimensionGPE4.fields.indicator44'),
      {
        "options": dimensionGPE4Enumerators.indicator44
      },
    ),
  },
  {
    name: 'school',
    label: i18n('entities.dimensionGPE4.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.dimensionGPE4.fields.school'),
      {},
    ),
  },
];