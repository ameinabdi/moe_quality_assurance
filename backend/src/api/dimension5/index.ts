export default (app) => {
  app.post(
    `/tenant/:tenantId/dimension5`,
    require('./dimension5Create').default,
  );
  app.put(
    `/tenant/:tenantId/dimension5/:id`,
    require('./dimension5Update').default,
  );
  app.post(
    `/tenant/:tenantId/dimension5/import`,
    require('./dimension5Import').default,
  );
  app.delete(
    `/tenant/:tenantId/dimension5`,
    require('./dimension5Destroy').default,
  );
  app.get(
    `/tenant/:tenantId/dimension5/autocomplete`,
    require('./dimension5Autocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/dimension5`,
    require('./dimension5List').default,
  );
  app.get(
    `/tenant/:tenantId/dimension5/:id`,
    require('./dimension5Find').default,
  );
};
