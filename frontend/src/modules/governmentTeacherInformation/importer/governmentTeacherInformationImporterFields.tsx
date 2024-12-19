import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import governmentTeacherInformationEnumerators from 'src/modules/governmentTeacherInformation/governmentTeacherInformationEnumerators';
import moment from 'moment';

export default [
  {
    name: 'school',
    label: i18n('entities.governmentTeacherInformation.fields.school'),
    schema: schemas.relationToOne(
      i18n('entities.governmentTeacherInformation.fields.school'),
      {},
    ),
  },
  {
    name: 'state',
    label: i18n('entities.governmentTeacherInformation.fields.state'),
    schema: schemas.string(
      i18n('entities.governmentTeacherInformation.fields.state'),
      {},
    ),
  },
  {
    name: 'region',
    label: i18n('entities.governmentTeacherInformation.fields.region'),
    schema: schemas.relationToOne(
      i18n('entities.governmentTeacherInformation.fields.region'),
      {},
    ),
  },
  {
    name: 'district',
    label: i18n('entities.governmentTeacherInformation.fields.district'),
    schema: schemas.relationToOne(
      i18n('entities.governmentTeacherInformation.fields.district'),
      {},
    ),
  },
  {
    name: 'fullName',
    label: i18n('entities.governmentTeacherInformation.fields.fullName'),
    schema: schemas.string(
      i18n('entities.governmentTeacherInformation.fields.fullName'),
      {},
    ),
  },
  {
    name: 'gender',
    label: i18n('entities.governmentTeacherInformation.fields.gender'),
    schema: schemas.enumerator(
      i18n('entities.governmentTeacherInformation.fields.gender'),
      {
        "options": governmentTeacherInformationEnumerators.gender
      },
    ),
  },
  {
    name: 'teacherIDNumber',
    label: i18n('entities.governmentTeacherInformation.fields.teacherIDNumber'),
    schema: schemas.string(
      i18n('entities.governmentTeacherInformation.fields.teacherIDNumber'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'niraID',
    label: i18n('entities.governmentTeacherInformation.fields.niraID'),
    schema: schemas.string(
      i18n('entities.governmentTeacherInformation.fields.niraID'),
      {},
    ),
  },
  {
    name: 'educationLevel',
    label: i18n('entities.governmentTeacherInformation.fields.educationLevel'),
    schema: schemas.string(
      i18n('entities.governmentTeacherInformation.fields.educationLevel'),
      {},
    ),
  },
  {
    name: 'graduationYear',
    label: i18n('entities.governmentTeacherInformation.fields.graduationYear'),
    schema: schemas.date(
      i18n('entities.governmentTeacherInformation.fields.graduationYear'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'taughtLevel',
    label: i18n('entities.governmentTeacherInformation.fields.taughtLevel'),
    schema: schemas.enumerator(
      i18n('entities.governmentTeacherInformation.fields.taughtLevel'),
      {
        "options": governmentTeacherInformationEnumerators.taughtLevel
      },
    ),
  },
  {
    name: 'teachingShift',
    label: i18n('entities.governmentTeacherInformation.fields.teachingShift'),
    schema: schemas.enumerator(
      i18n('entities.governmentTeacherInformation.fields.teachingShift'),
      {
        "options": governmentTeacherInformationEnumerators.teachingShift
      },
    ),
  },
  {
    name: 'gradesTaught',
    label: i18n('entities.governmentTeacherInformation.fields.gradesTaught'),
    schema: schemas.stringArray(
      i18n('entities.governmentTeacherInformation.fields.gradesTaught'),
      {},
    ),
  },
  {
    name: 'subjectsTaught',
    label: i18n('entities.governmentTeacherInformation.fields.subjectsTaught'),
    schema: schemas.stringArray(
      i18n('entities.governmentTeacherInformation.fields.subjectsTaught'),
      {},
    ),
  },
  {
    name: 'teachertraining',
    label: i18n('entities.governmentTeacherInformation.fields.teachertraining'),
    schema: schemas.enumerator(
      i18n('entities.governmentTeacherInformation.fields.teachertraining'),
      {
        "options": governmentTeacherInformationEnumerators.teachertraining
      },
    ),
  },
  {
    name: 'trainingNo',
    label: i18n('entities.governmentTeacherInformation.fields.trainingNo'),
    schema: schemas.enumerator(
      i18n('entities.governmentTeacherInformation.fields.trainingNo'),
      {
        "options": governmentTeacherInformationEnumerators.trainingNo
      },
    ),
  },
  {
    name: 'present',
    label: i18n('entities.governmentTeacherInformation.fields.present'),
    schema: schemas.enumerator(
      i18n('entities.governmentTeacherInformation.fields.present'),
      {
        "options": governmentTeacherInformationEnumerators.present
      },
    ),
  },
  {
    name: 'contactNumber',
    label: i18n('entities.governmentTeacherInformation.fields.contactNumber'),
    schema: schemas.string(
      i18n('entities.governmentTeacherInformation.fields.contactNumber'),
      {},
    ),
  },
  {
    name: 'experience',
    label: i18n('entities.governmentTeacherInformation.fields.experience'),
    schema: schemas.integer(
      i18n('entities.governmentTeacherInformation.fields.experience'),
      {},
    ),
  },
  {
    name: 'joinedYear',
    label: i18n('entities.governmentTeacherInformation.fields.joinedYear'),
    schema: schemas.date(
      i18n('entities.governmentTeacherInformation.fields.joinedYear'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'disablity',
    label: i18n('entities.governmentTeacherInformation.fields.disablity'),
    schema: schemas.enumerator(
      i18n('entities.governmentTeacherInformation.fields.disablity'),
      {
        "options": governmentTeacherInformationEnumerators.disablity
      },
    ),
  },
  {
    name: 'gPSLocation',
    label: i18n('entities.governmentTeacherInformation.fields.gPSLocation'),
    schema: schemas.string(
      i18n('entities.governmentTeacherInformation.fields.gPSLocation'),
      {},
    ),
  },
  {
    name: 'teacherPhoto',
    label: i18n('entities.governmentTeacherInformation.fields.teacherPhoto'),
    schema: schemas.images(
      i18n('entities.governmentTeacherInformation.fields.teacherPhoto'),
      {
        "max": 1,
        "required": true
      },
    ),
  },
  {
    name: 'teacherSignature',
    label: i18n('entities.governmentTeacherInformation.fields.teacherSignature'),
    schema: schemas.images(
      i18n('entities.governmentTeacherInformation.fields.teacherSignature'),
      {
        "required": true
      },
    ),
  },
];