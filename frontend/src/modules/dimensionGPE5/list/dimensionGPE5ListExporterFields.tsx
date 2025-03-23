import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.dimensionGPE5.fields.id'),
  },
  {
    name: 'indicator51',
    label: i18n('entities.dimensionGPE5.fields.indicator51'),
  },
  {
    name: 'indicator52',
    label: i18n('entities.dimensionGPE5.fields.indicator52'),
  },
  {
    name: 'indicator53',
    label: i18n('entities.dimensionGPE5.fields.indicator53'),
  },
  {
    name: 'indicator54',
    label: i18n('entities.dimensionGPE5.fields.indicator54'),
  },
  {
    name: 'indicator55',
    label: i18n('entities.dimensionGPE5.fields.indicator55'),
  },
  {
    name: 'indicator56',
    label: i18n('entities.dimensionGPE5.fields.indicator56'),
  },
  {
    name: 'indicator57',
    label: i18n('entities.dimensionGPE5.fields.indicator57'),
  },
  {
    name: 'indicator58',
    label: i18n('entities.dimensionGPE5.fields.indicator58'),
  },
  {
    name: 'indicator59',
    label: i18n('entities.dimensionGPE5.fields.indicator59'),
  },
  {
    name: 'indicator510',
    label: i18n('entities.dimensionGPE5.fields.indicator510'),
  },
  {
    name: 'indicator511',
    label: i18n('entities.dimensionGPE5.fields.indicator511'),
  },
  {
    name: 'indicator512',
    label: i18n('entities.dimensionGPE5.fields.indicator512'),
  },
  {
    name: 'indicator513',
    label: i18n('entities.dimensionGPE5.fields.indicator513'),
  },
  {
    name: 'indicator514',
    label: i18n('entities.dimensionGPE5.fields.indicator514'),
  },
  {
    name: 'indicator515',
    label: i18n('entities.dimensionGPE5.fields.indicator515'),
  },
  {
    name: 'indicator516',
    label: i18n('entities.dimensionGPE5.fields.indicator516'),
  },
  {
    name: 'indicator517',
    label: i18n('entities.dimensionGPE5.fields.indicator517'),
  },
  {
    name: 'indicator518',
    label: i18n('entities.dimensionGPE5.fields.indicator518'),
  },
  {
    name: 'indicator519',
    label: i18n('entities.dimensionGPE5.fields.indicator519'),
  },
  {
    name: 'indicator520',
    label: i18n('entities.dimensionGPE5.fields.indicator520'),
  },
  {
    name: 'indicator521',
    label: i18n('entities.dimensionGPE5.fields.indicator521'),
  },
  {
    name: 'indicator522',
    label: i18n('entities.dimensionGPE5.fields.indicator522'),
  },
  {
    name: 'indicator523',
    label: i18n('entities.dimensionGPE5.fields.indicator523'),
  },
  {
    name: 'indicator524',
    label: i18n('entities.dimensionGPE5.fields.indicator524'),
  },
  {
    name: 'teacher',
    label: i18n('entities.dimensionGPE5.fields.teacher'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'school',
    label: i18n('entities.dimensionGPE5.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.dimensionGPE5.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.dimensionGPE5.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
