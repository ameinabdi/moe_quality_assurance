import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.school.fields.id'),
  },
  {
    name: 'schoolName',
    label: i18n('entities.school.fields.schoolName'),
  },
  {
    name: 'schoolLevel',
    label: i18n('entities.school.fields.schoolLevel'),
    render: exporterRenders.stringArray(),
  },
  {
    name: 'schoolType',
    label: i18n('entities.school.fields.schoolType'),
  },
  {
    name: 'schoolPhone',
    label: i18n('entities.school.fields.schoolPhone'),
  },
  {
    name: 'schoolEmail',
    label: i18n('entities.school.fields.schoolEmail'),
  },
  {
    name: 'schoolLocation',
    label: i18n('entities.school.fields.schoolLocation'),
  },
  {
    name: 'schoolEMISNumber',
    label: i18n('entities.school.fields.schoolEMISNumber'),
  },
  {
    name: 'classes',
    label: i18n('entities.school.fields.classes'),
  },
  {
    name: 'toilets',
    label: i18n('entities.school.fields.toilets'),
  },
  {
    name: 'maleStaff',
    label: i18n('entities.school.fields.maleStaff'),
  },
  {
    name: 'femaleStaff',
    label: i18n('entities.school.fields.femaleStaff'),
  },
  {
    name: 'nonTeachingFemaleStaff',
    label: i18n('entities.school.fields.nonTeachingFemaleStaff'),
  },
  {
    name: 'nonTeachingMaleStaff',
    label: i18n('entities.school.fields.nonTeachingMaleStaff'),
  },
  {
    name: 'headTeacher',
    label: i18n('entities.school.fields.headTeacher'),
  },
  {
    name: 'headsex',
    label: i18n('entities.school.fields.headsex'),
  },
  {
    name: 'headTeacherPhone',
    label: i18n('entities.school.fields.headTeacherPhone'),
  },
  {
    name: 'headTeacherLevelEduction',
    label: i18n('entities.school.fields.headTeacherLevelEduction'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.school.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.school.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
