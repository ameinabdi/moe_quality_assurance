import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.teacherGPE.fields.id'),
  },
  {
    name: 'school',
    label: i18n('entities.teacherGPE.fields.school'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'state',
    label: i18n('entities.teacherGPE.fields.state'),
  },
  {
    name: 'region',
    label: i18n('entities.teacherGPE.fields.region'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'district',
    label: i18n('entities.teacherGPE.fields.district'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'fullName',
    label: i18n('entities.teacherGPE.fields.fullName'),
  },
  {
    name: 'gender',
    label: i18n('entities.teacherGPE.fields.gender'),
  },
  {
    name: 'subjectName',
    label: i18n('entities.teacherGPE.fields.subjectName'),
  },
  {
    name: 'teachingLevel',
    label: i18n('entities.teacherGPE.fields.teachingLevel'),
  },
  {
    name: 'grade',
    label: i18n('entities.teacherGPE.fields.grade'),
  },
  {
    name: 'totalStudent',
    label: i18n('entities.teacherGPE.fields.totalStudent'),
  },
  {
    name: 'maleStudents',
    label: i18n('entities.teacherGPE.fields.maleStudents'),
  },
  {
    name: 'femaleStudent',
    label: i18n('entities.teacherGPE.fields.femaleStudent'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.teacherGPE.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.teacherGPE.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
