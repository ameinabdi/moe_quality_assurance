import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.schoolSupervisionGPE.fields.id'),
  },
  {
    name: 'introduction',
    label: i18n('entities.schoolSupervisionGPE.fields.introduction'),
  },
  {
    name: 'guidelines',
    label: i18n('entities.schoolSupervisionGPE.fields.guidelines'),
  },
  {
    name: 'finalizedDate',
    label: i18n('entities.schoolSupervisionGPE.fields.finalizedDate'),
  },
  {
    name: 'principal',
    label: i18n('entities.schoolSupervisionGPE.fields.principal'),
  },
  {
    name: 'signatureofprincipal',
    label: i18n('entities.schoolSupervisionGPE.fields.signatureofprincipal'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'school',
    label: i18n('entities.schoolSupervisionGPE.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dimension1',
    label: i18n('entities.schoolSupervisionGPE.fields.dimension1'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dimension2',
    label: i18n('entities.schoolSupervisionGPE.fields.dimension2'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dimension3',
    label: i18n('entities.schoolSupervisionGPE.fields.dimension3'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dimension4',
    label: i18n('entities.schoolSupervisionGPE.fields.dimension4'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'schoolStamp',
    label: i18n('entities.schoolSupervisionGPE.fields.schoolStamp'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.schoolSupervisionGPE.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.schoolSupervisionGPE.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
