export default (app) => {
  app.post(
    `/tenant/:tenantId/tools`,
    require('./toolsCreate').default,
  );
  app.put(
    `/tenant/:tenantId/tools/:id`,
    require('./toolsUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/tools/import`,
    require('./toolsImport').default,
  );
  app.delete(
    `/tenant/:tenantId/tools`,
    require('./toolsDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/tools/autocomplete`,
    require('./toolsAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/tools`,
    require('./toolsList').default,
  );
  app.get(
    `/tenant/:tenantId/tools/:id`,
    require('./toolsFind').default,
  );
};