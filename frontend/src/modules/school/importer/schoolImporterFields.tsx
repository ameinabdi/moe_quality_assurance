import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import schoolEnumerators from 'src/modules/school/schoolEnumerators';

export default [
  {
    name: 'schoolName',
    label: i18n('entities.school.fields.schoolName'),
    schema: schemas.string(
      i18n('entities.school.fields.schoolName'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'schoolLevel',
    label: i18n('entities.school.fields.schoolLevel'),
    schema: schemas.stringArray(
      i18n('entities.school.fields.schoolLevel'),
      {},
    ),
  },
  {
    name: 'schoolType',
    label: i18n('entities.school.fields.schoolType'),
    schema: schemas.enumerator(
      i18n('entities.school.fields.schoolType'),
      {
        "options": schoolEnumerators.schoolType
      },
    ),
  },
  {
    name: 'schoolPhone',
    label: i18n('entities.school.fields.schoolPhone'),
    schema: schemas.string(
      i18n('entities.school.fields.schoolPhone'),
      {},
    ),
  },
  {
    name: 'schoolEmail',
    label: i18n('entities.school.fields.schoolEmail'),
    schema: schemas.string(
      i18n('entities.school.fields.schoolEmail'),
      {},
    ),
  },
  {
    name: 'schoolLocation',
    label: i18n('entities.school.fields.schoolLocation'),
    schema: schemas.string(
      i18n('entities.school.fields.schoolLocation'),
      {},
    ),
  },
  {
    name: 'schoolEMISNumber',
    label: i18n('entities.school.fields.schoolEMISNumber'),
    schema: schemas.string(
      i18n('entities.school.fields.schoolEMISNumber'),
      {},
    ),
  },
  {
    name: 'classes',
    label: i18n('entities.school.fields.classes'),
    schema: schemas.string(
      i18n('entities.school.fields.classes'),
      {},
    ),
  },
  {
    name: 'toilets',
    label: i18n('entities.school.fields.toilets'),
    schema: schemas.integer(
      i18n('entities.school.fields.toilets'),
      {},
    ),
  },
  {
    name: 'maleStaff',
    label: i18n('entities.school.fields.maleStaff'),
    schema: schemas.integer(
      i18n('entities.school.fields.maleStaff'),
      {},
    ),
  },
  {
    name: 'femaleStaff',
    label: i18n('entities.school.fields.femaleStaff'),
    schema: schemas.integer(
      i18n('entities.school.fields.femaleStaff'),
      {},
    ),
  },
  {
    name: 'nonTeachingFemaleStaff',
    label: i18n('entities.school.fields.nonTeachingFemaleStaff'),
    schema: schemas.integer(
      i18n('entities.school.fields.nonTeachingFemaleStaff'),
      {},
    ),
  },
  {
    name: 'nonTeachingMaleStaff',
    label: i18n('entities.school.fields.nonTeachingMaleStaff'),
    schema: schemas.integer(
      i18n('entities.school.fields.nonTeachingMaleStaff'),
      {},
    ),
  },
  {
    name: 'headTeacher',
    label: i18n('entities.school.fields.headTeacher'),
    schema: schemas.string(
      i18n('entities.school.fields.headTeacher'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'headsex',
    label: i18n('entities.school.fields.headsex'),
    schema: schemas.enumerator(
      i18n('entities.school.fields.headsex'),
      {
        "options": schoolEnumerators.headsex
      },
    ),
  },
  {
    name: 'headTeacherPhone',
    label: i18n('entities.school.fields.headTeacherPhone'),
    schema: schemas.string(
      i18n('entities.school.fields.headTeacherPhone'),
      {},
    ),
  },
  {
    name: 'headTeacherLevelEduction',
    label: i18n('entities.school.fields.headTeacherLevelEduction'),
    schema: schemas.string(
      i18n('entities.school.fields.headTeacherLevelEduction'),
      {},
    ),
  },
];