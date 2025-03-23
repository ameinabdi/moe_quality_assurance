import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import teacherGPEEnumerators from 'src/modules/teacherGPE/teacherGPEEnumerators';

export default [
  {
    name: 'school',
    label: i18n('entities.teacherGPE.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.teacherGPE.fields.school'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'state',
    label: i18n('entities.teacherGPE.fields.state'),
    schema: schemas.string(
      i18n('entities.teacherGPE.fields.state'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'region',
    label: i18n('entities.teacherGPE.fields.region'),
    schema: schemas.relationToOne(
      i18n('entities.teacherGPE.fields.region'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'district',
    label: i18n('entities.teacherGPE.fields.district'),
    schema: schemas.relationToOne(
      i18n('entities.teacherGPE.fields.district'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'fullName',
    label: i18n('entities.teacherGPE.fields.fullName'),
    schema: schemas.string(
      i18n('entities.teacherGPE.fields.fullName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'gender',
    label: i18n('entities.teacherGPE.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.teacherGPE.fields.gender'),
      {
        "required": true,
        "options": teacherGPEEnumerators.gender
      },
    ),
  },
  {
    name: 'subjectName',
    label: i18n('entities.teacherGPE.fields.subjectName'),
    schema: schemas.enumerator(
      i18n('entities.teacherGPE.fields.subjectName'),
      {
        "options": teacherGPEEnumerators.subjectName
      },
    ),
  },
  {
    name: 'teachingLevel',
    label: i18n('entities.teacherGPE.fields.teachingLevel'),
    schema: schemas.enumerator(
      i18n('entities.teacherGPE.fields.teachingLevel'),
      {
        "required": true,
        "options": teacherGPEEnumerators.teachingLevel
      },
    ),
  },
  {
    name: 'grade',
    label: i18n('entities.teacherGPE.fields.grade'),
    schema: schemas.enumerator(
      i18n('entities.teacherGPE.fields.grade'),
      {
        "required": true,
        "options": teacherGPEEnumerators.grade
      },
    ),
  },
  {
    name: 'totalStudent',
    label: i18n('entities.teacherGPE.fields.totalStudent'),
    schema: schemas.integer(
      i18n('entities.teacherGPE.fields.totalStudent'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'maleStudents',
    label: i18n('entities.teacherGPE.fields.maleStudents'),
    schema: schemas.integer(
      i18n('entities.teacherGPE.fields.maleStudents'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'femaleStudent',
    label: i18n('entities.teacherGPE.fields.femaleStudent'),
    schema: schemas.integer(
      i18n('entities.teacherGPE.fields.femaleStudent'),
      {
        "required": true
      },
    ),
  },
];