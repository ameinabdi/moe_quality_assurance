import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'finalizedDate',
    label: i18n('entities.sSASurvey.fields.finalizedDate'),
    schema: schemas.date(
      i18n('entities.sSASurvey.fields.finalizedDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'principal',
    label: i18n('entities.sSASurvey.fields.principal'),
    schema: schemas.string(
      i18n('entities.sSASurvey.fields.principal'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'signatureofprincipal',
    label: i18n('entities.sSASurvey.fields.signatureofprincipal'),
    schema: schemas.images(
      i18n('entities.sSASurvey.fields.signatureofprincipal'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'introduction',
    label: i18n('entities.sSASurvey.fields.introduction'),
    schema: schemas.string(
      i18n('entities.sSASurvey.fields.introduction'),
      {},
    ),
  },
  {
    name: 'guidelines',
    label: i18n('entities.sSASurvey.fields.guidelines'),
    schema: schemas.string(
      i18n('entities.sSASurvey.fields.guidelines'),
      {},
    ),
  },
  {
    name: 'school',
    label: i18n('entities.sSASurvey.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.sSASurvey.fields.school'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dimension1',
    label: i18n('entities.sSASurvey.fields.dimension1'),
    schema: schemas.relationToOne(
      i18n('entities.sSASurvey.fields.dimension1'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dimension2',
    label: i18n('entities.sSASurvey.fields.dimension2'),
    schema: schemas.relationToOne(
      i18n('entities.sSASurvey.fields.dimension2'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dimension3',
    label: i18n('entities.sSASurvey.fields.dimension3'),
    schema: schemas.relationToOne(
      i18n('entities.sSASurvey.fields.dimension3'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dimension4',
    label: i18n('entities.sSASurvey.fields.dimension4'),
    schema: schemas.relationToOne(
      i18n('entities.sSASurvey.fields.dimension4'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'dimension5',
    label: i18n('entities.sSASurvey.fields.dimension5'),
    schema: schemas.relationToOne(
      i18n('entities.sSASurvey.fields.dimension5'),
      {},
    ),
  },
  {
    name: 'schoolStamp',
    label: i18n('entities.sSASurvey.fields.schoolStamp'),
    schema: schemas.images(
      i18n('entities.sSASurvey.fields.schoolStamp'),
      {},
    ),
  },
];