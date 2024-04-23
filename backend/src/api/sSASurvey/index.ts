export default (app) => {
  app.post(
    `/tenant/:tenantId/s-s-a-survey`,
    require('./sSASurveyCreate').default,
  );
  app.put(
    `/tenant/:tenantId/s-s-a-survey/:id`,
    require('./sSASurveyUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/s-s-a-survey/import`,
    require('./sSASurveyImport').default,
  );
  app.delete(
    `/tenant/:tenantId/s-s-a-survey`,
    require('./sSASurveyDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/s-s-a-survey/autocomplete`,
    require('./sSASurveyAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/s-s-a-survey`,
    require('./sSASurveyList').default,
  );
  app.get(
    `/tenant/:tenantId/s-s-a-survey/:id`,
    require('./sSASurveyFind').default,
  );
};