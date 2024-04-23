import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.sSASurvey.fields.id'),
  },
  {
    name: 'finalizedDate',
    label: i18n('entities.sSASurvey.fields.finalizedDate'),
  },
  {
    name: 'principal',
    label: i18n('entities.sSASurvey.fields.principal'),
  },
  {
    name: 'signatureofprincipal',
    label: i18n('entities.sSASurvey.fields.signatureofprincipal'),
    render: exporterRenders.filesOrImages(),
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
    name: 'indicator21',
    label: i18n('entities.deminsion2.fields.indicator21'),
  },
  {
    name: 'indicator22',
    label: i18n('entities.deminsion2.fields.indicator22'),
  },
  {
    name: 'indicator23',
    label: i18n('entities.deminsion2.fields.indicator23'),
  },
  {
    name: 'indicator24',
    label: i18n('entities.deminsion2.fields.indicator24'),
  },
  {
    name: 'indicator25',
    label: i18n('entities.deminsion2.fields.indicator25'),
  },
  {
    name: 'indicator26',
    label: i18n('entities.deminsion2.fields.indicator26'),
  },
  {
    name: 'indicator27',
    label: i18n('entities.deminsion2.fields.indicator27'),
  },
  {
    name: 'indicator28',
    label: i18n('entities.deminsion2.fields.indicator28'),
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
    name: 'indicator41',
    label: i18n('entities.dimension4.fields.indicator41'),
  },
  {
    name: 'indicator42',
    label: i18n('entities.dimension4.fields.indicator42'),
  },
  {
    name: 'indicator43',
    label: i18n('entities.dimension4.fields.indicator43'),
  },
  {
    name: 'indicator44',
    label: i18n('entities.dimension4.fields.indicator44'),
  },
  {
    name: 'indicator51',
    label: i18n('entities.dimension5.fields.indicator51'),
  },
  {
    name: 'indicator52',
    label: i18n('entities.dimension5.fields.indicator52'),
  },
  {
    name: 'indicator53',
    label: i18n('entities.dimension5.fields.indicator53'),
  },
  {
    name: 'indicator54',
    label: i18n('entities.dimension5.fields.indicator54'),
  },
  {
    name: 'indicator55',
    label: i18n('entities.dimension5.fields.indicator55'),
  },
  {
    name: 'indicator56',
    label: i18n('entities.dimension5.fields.indicator56'),
  },
  {
    name: 'indicator57',
    label: i18n('entities.dimension5.fields.indicator57'),
  },
  {
    name: 'indicator58',
    label: i18n('entities.dimension5.fields.indicator58'),
  },
  {
    name: 'indicator59',
    label: i18n('entities.dimension5.fields.indicator59'),
  },
  {
    name: 'indicator510',
    label: i18n('entities.dimension5.fields.indicator510'),
  },
  {
    name: 'indicator511',
    label: i18n('entities.dimension5.fields.indicator511'),
  },
  {
    name: 'indicator512',
    label: i18n('entities.dimension5.fields.indicator512'),
  },
  {
    name: 'indicator513',
    label: i18n('entities.dimension5.fields.indicator513'),
  },
  {
    name: 'indicator514',
    label: i18n('entities.dimension5.fields.indicator514'),
  },
  {
    name: 'indicator515',
    label: i18n('entities.dimension5.fields.indicator515'),
  },
  {
    name: 'indicator516',
    label: i18n('entities.dimension5.fields.indicator516'),
  },
  {
    name: 'indicator517',
    label: i18n('entities.dimension5.fields.indicator517'),
  },
  {
    name: 'indicator518',
    label: i18n('entities.dimension5.fields.indicator518'),
  },
  {
    name: 'indicator519',
    label: i18n('entities.dimension5.fields.indicator519'),
  },
  {
    name: 'indicator520',
    label: i18n('entities.dimension5.fields.indicator520'),
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
    name: 'dimension2Solution',
    label: i18n('entities.sSASurvey.fields.dimension2Solution'),
  },
  {
    name: 'dimension4Challenge',
    label: i18n('entities.sSASurvey.fields.dimension4Challenge'),
  },
  {
    name: 'dimension4Rate',
    label: i18n('entities.sSASurvey.fields.dimension4Rate'),
  },
  {
    name: 'dimension4Solution',
    label: i18n('entities.sSASurvey.fields.dimension4Solution'),
  },
  {
    name: 'dimension5Challenge',
    label: i18n('entities.sSASurvey.fields.dimension5Challenge'),
  },
  {
    name: 'dimension5Rate',
    label: i18n('entities.sSASurvey.fields.dimension5Rate'),
  },
  {
    name: 'dimension5Solution',
    label: i18n('entities.sSASurvey.fields.dimension5Solution'),
  },
  {
    name: 'schoolStamp',
    label: i18n('entities.sSASurvey.fields.schoolStamp'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.sSASurvey.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.sSASurvey.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
