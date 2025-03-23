import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'introduction',
    label: i18n('entities.schoolSupervisionGPE.fields.introduction'),
    schema: schemas.string(
      i18n('entities.schoolSupervisionGPE.fields.introduction'),
      {},
    ),
  },
  {
    name: 'guidelines',
    label: i18n('entities.schoolSupervisionGPE.fields.guidelines'),
    schema: schemas.string(
      i18n('entities.schoolSupervisionGPE.fields.guidelines'),
      {},
    ),
  },
  {
    name: 'finalizedDate',
    label: i18n('entities.schoolSupervisionGPE.fields.finalizedDate'),
    schema: schemas.date(
      i18n('entities.schoolSupervisionGPE.fields.finalizedDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'principal',
    label: i18n('entities.schoolSupervisionGPE.fields.principal'),
    schema: schemas.string(
      i18n('entities.schoolSupervisionGPE.fields.principal'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'signatureofprincipal',
    label: i18n('entities.schoolSupervisionGPE.fields.signatureofprincipal'),
    schema: schemas.images(
      i18n('entities.schoolSupervisionGPE.fields.signatureofprincipal'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'school',
    label: i18n('entities.schoolSupervisionGPE.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.schoolSupervisionGPE.fields.school'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dimension1',
    label: i18n('entities.schoolSupervisionGPE.fields.dimension1'),
    schema: schemas.relationToOne(
      i18n('entities.schoolSupervisionGPE.fields.dimension1'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dimension2',
    label: i18n('entities.schoolSupervisionGPE.fields.dimension2'),
    schema: schemas.relationToOne(
      i18n('entities.schoolSupervisionGPE.fields.dimension2'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dimension3',
    label: i18n('entities.schoolSupervisionGPE.fields.dimension3'),
    schema: schemas.relationToOne(
      i18n('entities.schoolSupervisionGPE.fields.dimension3'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dimension4',
    label: i18n('entities.schoolSupervisionGPE.fields.dimension4'),
    schema: schemas.relationToOne(
      i18n('entities.schoolSupervisionGPE.fields.dimension4'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'schoolStamp',
    label: i18n('entities.schoolSupervisionGPE.fields.schoolStamp'),
    schema: schemas.images(
      i18n('entities.schoolSupervisionGPE.fields.schoolStamp'),
      {},
    ),
  },
];