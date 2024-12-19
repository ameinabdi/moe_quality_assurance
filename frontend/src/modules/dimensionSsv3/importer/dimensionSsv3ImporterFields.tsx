import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import dimensionSsv3Enumerators from 'src/modules/dimensionSsv3/dimensionSsv3Enumerators';

export default [
  {
    name: 'indicator51',
    label: i18n('entities.dimensionSsv3.fields.indicator51'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator51'),
      {
        "options": dimensionSsv3Enumerators.indicator51
      },
    ),
  },
  {
    name: 'indicator52',
    label: i18n('entities.dimensionSsv3.fields.indicator52'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator52'),
      {
        "options": dimensionSsv3Enumerators.indicator52
      },
    ),
  },
  {
    name: 'indicator53',
    label: i18n('entities.dimensionSsv3.fields.indicator53'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator53'),
      {
        "options": dimensionSsv3Enumerators.indicator53
      },
    ),
  },
  {
    name: 'indicator54',
    label: i18n('entities.dimensionSsv3.fields.indicator54'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator54'),
      {
        "options": dimensionSsv3Enumerators.indicator54
      },
    ),
  },
  {
    name: 'indicator55',
    label: i18n('entities.dimensionSsv3.fields.indicator55'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator55'),
      {
        "options": dimensionSsv3Enumerators.indicator55
      },
    ),
  },
  {
    name: 'indicator56',
    label: i18n('entities.dimensionSsv3.fields.indicator56'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator56'),
      {
        "options": dimensionSsv3Enumerators.indicator56
      },
    ),
  },
  {
    name: 'indicator57',
    label: i18n('entities.dimensionSsv3.fields.indicator57'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator57'),
      {
        "options": dimensionSsv3Enumerators.indicator57
      },
    ),
  },
  {
    name: 'indicator58',
    label: i18n('entities.dimensionSsv3.fields.indicator58'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator58'),
      {
        "options": dimensionSsv3Enumerators.indicator58
      },
    ),
  },
  {
    name: 'indicator59',
    label: i18n('entities.dimensionSsv3.fields.indicator59'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator59'),
      {
        "options": dimensionSsv3Enumerators.indicator59
      },
    ),
  },
  {
    name: 'indicator510',
    label: i18n('entities.dimensionSsv3.fields.indicator510'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator510'),
      {
        "options": dimensionSsv3Enumerators.indicator510
      },
    ),
  },
  {
    name: 'indicator511',
    label: i18n('entities.dimensionSsv3.fields.indicator511'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator511'),
      {
        "options": dimensionSsv3Enumerators.indicator511
      },
    ),
  },
  {
    name: 'indicator512',
    label: i18n('entities.dimensionSsv3.fields.indicator512'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator512'),
      {
        "options": dimensionSsv3Enumerators.indicator512
      },
    ),
  },
  {
    name: 'indicator513',
    label: i18n('entities.dimensionSsv3.fields.indicator513'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator513'),
      {
        "options": dimensionSsv3Enumerators.indicator513
      },
    ),
  },
  {
    name: 'indicator514',
    label: i18n('entities.dimensionSsv3.fields.indicator514'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator514'),
      {
        "options": dimensionSsv3Enumerators.indicator514
      },
    ),
  },
  {
    name: 'indicator515',
    label: i18n('entities.dimensionSsv3.fields.indicator515'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator515'),
      {
        "options": dimensionSsv3Enumerators.indicator515
      },
    ),
  },
  {
    name: 'indicator516',
    label: i18n('entities.dimensionSsv3.fields.indicator516'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator516'),
      {
        "options": dimensionSsv3Enumerators.indicator516
      },
    ),
  },
  {
    name: 'indicator517',
    label: i18n('entities.dimensionSsv3.fields.indicator517'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator517'),
      {
        "options": dimensionSsv3Enumerators.indicator517
      },
    ),
  },
  {
    name: 'indicator518',
    label: i18n('entities.dimensionSsv3.fields.indicator518'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator518'),
      {
        "options": dimensionSsv3Enumerators.indicator518
      },
    ),
  },
  {
    name: 'indicator519',
    label: i18n('entities.dimensionSsv3.fields.indicator519'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator519'),
      {
        "options": dimensionSsv3Enumerators.indicator519
      },
    ),
  },
  {
    name: 'indicator520',
    label: i18n('entities.dimensionSsv3.fields.indicator520'),
    schema: schemas.enumerator(
      i18n('entities.dimensionSsv3.fields.indicator520'),
      {
        "options": dimensionSsv3Enumerators.indicator520
      },
    ),
  },
  {
    name: 'school',
    label: i18n('entities.dimensionSsv3.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.dimensionSsv3.fields.school'),
      {},
    ),
  },
];