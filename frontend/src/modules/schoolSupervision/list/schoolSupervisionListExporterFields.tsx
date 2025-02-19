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
    name: 'schoolName',
    label: i18n('entities.school.fields.schoolName'),
  },
  {
    name: 'state',
    label: 'state',
    render: (value)=>(value?.name),

  },
  {
    name: 'district',
    label: 'district',
    render: (value)=>(value?.name),
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
    name: 'indicator11',
    label: i18n('entities.dimension1.fields.indicator11'),
  },
  {
    name: 'indicator12',
    label: i18n('entities.dimension1.fields.indicator12'),
  },
  {
    name: 'indicator13',
    label: i18n('entities.dimension1.fields.indicator13'),
  },
  {
    name: 'indicator14',
    label: i18n('entities.dimension1.fields.indicator14'),
  },
  {
    name: 'indicator15',
    label: i18n('entities.dimension1.fields.indicator15'),
  },
  {
    name: 'indicator16',
    label: i18n('entities.dimension1.fields.indicator16'),
  },
  {
    name: 'indicator17',
    label: i18n('entities.dimension1.fields.indicator17'),
  },
  {
    name: 'indicator18',
    label: i18n('entities.dimension1.fields.indicator18'),
  },
  {
    name: 'indicator19',
    label: i18n('entities.dimension1.fields.indicator19'),
  },
  {
    name: 'indicator110',
    label: i18n('entities.dimension1.fields.indicator110'),
  },
  {
    name: 'indicator111',
    label: i18n('entities.dimension1.fields.indicator111'),
  },
  {
    name: 'indicator112',
    label: i18n('entities.dimension1.fields.indicator112'),
  },
  {
    name: 'indicator113',
    label: i18n('entities.dimension1.fields.indicator113'),
  },
  {
    name: 'indicator114',
    label: i18n('entities.dimension1.fields.indicator114'),
  },
  {
    name: 'indicator31',
    label: i18n('entities.dimension3.fields.indicator31'),
  },
  {
    name: 'indicator32',
    label: i18n('entities.dimension3.fields.indicator32'),
  },
  {
    name: 'indicator33',
    label: i18n('entities.dimension3.fields.indicator33'),
  },
  {
    name: 'indicator34',
    label: i18n('entities.dimension3.fields.indicator34'),
  },
  {
    name: 'indicator35',
    label: i18n('entities.dimension3.fields.indicator35'),
  },
  {
    name: 'indicator36',
    label: i18n('entities.dimension3.fields.indicator36'),
  },
  {
    name: 'indicator37',
    label: i18n('entities.dimension3.fields.indicator37'),
  },
  {
    name: 'indicator38',
    label: i18n('entities.dimension3.fields.indicator38'),
  },
  {
    name: 'indicator39',
    label: i18n('entities.dimension3.fields.indicator39'),
  },
  {
    name: 'indicator310',
    label: i18n('entities.dimension3.fields.indicator310'),
  },
  {
    name: 'indicator311',
    label: i18n('entities.dimension3.fields.indicator311'),
  },
  {
    name: 'indicator312',
    label: i18n('entities.dimension3.fields.indicator312'),
  },
  {
    name: 'indicator313',
    label: i18n('entities.dimension3.fields.indicator313'),
  },
  {
    name: 'indicator314',
    label: i18n('entities.dimension3.fields.indicator314'),
  },
  {
    name: 'indicator315',
    label: i18n('entities.dimension3.fields.indicator315'),
  },
  {
    name: 'dimension1Challenge',
    label: i18n('entities.sSASurvey.fields.dimension1Challenge'),
  },
  {
    name: 'dimension1Rate',
    label: i18n('entities.sSASurvey.fields.dimension1Rate'),
  },
  {
    name: 'dimension1Solution',
    label: i18n('entities.sSASurvey.fields.dimension1Solution'),
  },
  {
    name: 'dimension2Challenge',
    label: i18n('entities.sSASurvey.fields.dimension2Challenge'),
  },
  {
    name: 'dimension2Rate',
    label: i18n('entities.sSASurvey.fields.dimension2Rate'),
  },
  {
    name: 'dimension2Solution',
    label: i18n('entities.sSASurvey.fields.dimension2Solution'),
  },
  {
    name: 'dimension3Challenge',
    label: i18n('entities.sSASurvey.fields.dimension2Challenge'),
  },
  {
    name: 'dimension3Rate',
    label: i18n('entities.sSASurvey.fields.dimension3Rate'),
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
