import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.governmentTeacherInformation.fields.id'),
  },
  {
    name: 'school',
    label: i18n('entities.governmentTeacherInformation.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'state',
    label: i18n('entities.governmentTeacherInformation.fields.state'),
  },
  {
    name: 'region',
    label: i18n('entities.governmentTeacherInformation.fields.region'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'district',
    label: i18n('entities.governmentTeacherInformation.fields.district'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'fullName',
    label: i18n('entities.governmentTeacherInformation.fields.fullName'),
  },
  {
    name: 'gender',
    label: i18n('entities.governmentTeacherInformation.fields.gender'),
  },
  {
    name: 'teacherIDNumber',
    label: i18n('entities.governmentTeacherInformation.fields.teacherIDNumber'),
  },
  {
    name: 'niraID',
    label: i18n('entities.governmentTeacherInformation.fields.niraID'),
  },
  {
    name: 'educationLevel',
    label: i18n('entities.governmentTeacherInformation.fields.educationLevel'),
  },
  {
    name: 'graduationYear',
    label: i18n('entities.governmentTeacherInformation.fields.graduationYear'),
  },
  {
    name: 'taughtLevel',
    label: i18n('entities.governmentTeacherInformation.fields.taughtLevel'),
  },
  {
    name: 'teachingShift',
    label: i18n('entities.governmentTeacherInformation.fields.teachingShift'),
  },
  {
    name: 'gradesTaught',
    label: i18n('entities.governmentTeacherInformation.fields.gradesTaught'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'subjectsTaught',
    label: i18n('entities.governmentTeacherInformation.fields.subjectsTaught'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'teachertraining',
    label: i18n('entities.governmentTeacherInformation.fields.teachertraining'),
  },
  {
    name: 'trainingNo',
    label: i18n('entities.governmentTeacherInformation.fields.trainingNo'),
  },
  {
    name: 'present',
    label: i18n('entities.governmentTeacherInformation.fields.present'),
  },
  {
    name: 'contactNumber',
    label: i18n('entities.governmentTeacherInformation.fields.contactNumber'),
  },
  {
    name: 'experience',
    label: i18n('entities.governmentTeacherInformation.fields.experience'),
  },
  {
    name: 'joinedYear',
    label: i18n('entities.governmentTeacherInformation.fields.joinedYear'),
  },
  {
    name: 'disablity',
    label: i18n('entities.governmentTeacherInformation.fields.disablity'),
  },
  {
    name: 'gPSLocation',
    label: i18n('entities.governmentTeacherInformation.fields.gPSLocation'),
  },
  {
    name: 'teacherPhoto',
    label: i18n('entities.governmentTeacherInformation.fields.teacherPhoto'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'teacherSignature',
    label: i18n('entities.governmentTeacherInformation.fields.teacherSignature'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.governmentTeacherInformation.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.governmentTeacherInformation.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
