export default (app) => {
  app.post(
    `/tenant/:tenantId/question-section`,
    require('./questionSectionCreate').default,
  );
  app.put(
    `/tenant/:tenantId/question-section/:id`,
    require('./questionSectionUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/question-section/import`,
    require('./questionSectionImport').default,
  );
  app.delete(
    `/tenant/:tenantId/question-section`,
    require('./questionSectionDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/question-section/autocomplete`,
    require('./questionSectionAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/question-section`,
    require('./questionSectionList').default,
  );
  app.get(
    `/tenant/:tenantId/question-section/:id`,
    require('./questionSectionFind').default,
  );
};
