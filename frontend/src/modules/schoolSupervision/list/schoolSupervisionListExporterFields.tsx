import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.schoolSupervision.fields.id'),
  },
  {
    name: 'finalizedDate',
    label: i18n('entities.schoolSupervision.fields.finalizedDate'),
  },
  {
    name: 'principal',
    label: i18n('entities.schoolSupervision.fields.principal'),
  },
  {
    name: 'signatureofprincipal',
    label: i18n('entities.schoolSupervision.fields.signatureofprincipal'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'introduction',
    label: i18n('entities.schoolSupervision.fields.introduction'),
  },
  {
    name: 'guidelines',
    label: i18n('entities.schoolSupervision.fields.guidelines'),
  },
  {
    name: 'school',
    label: i18n('entities.schoolSupervision.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dimension1',
    label: i18n('entities.schoolSupervision.fields.dimension1'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dimension2',
    label: i18n('entities.schoolSupervision.fields.dimension2'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dimension3',
    label: i18n('entities.schoolSupervision.fields.dimension3'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dimension4',
    label: i18n('entities.schoolSupervision.fields.dimension4'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dimension5',
    label: i18n('entities.schoolSupervision.fields.dimension5'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'schoolStamp',
    label: i18n('entities.schoolSupervision.fields.schoolStamp'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.schoolSupervision.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.schoolSupervision.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
