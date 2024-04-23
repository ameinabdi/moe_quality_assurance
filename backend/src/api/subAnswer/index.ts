export default (app) => {
  app.post(
    `/tenant/:tenantId/sub-answer`,
    require('./subAnswerCreate').default,
  );
  app.put(
    `/tenant/:tenantId/sub-answer/:id`,
    require('./subAnswerUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/sub-answer/import`,
    require('./subAnswerImport').default,
  );
  app.delete(
    `/tenant/:tenantId/sub-answer`,
    require('./subAnswerDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/sub-answer/autocomplete`,
    require('./subAnswerAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/sub-answer`,
    require('./subAnswerList').default,
  );
  app.get(
    `/tenant/:tenantId/sub-answer/:id`,
    require('./subAnswerFind').default,
  );
};
