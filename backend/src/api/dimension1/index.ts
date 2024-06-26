export default (app) => {
  app.post(
    `/tenant/:tenantId/dimension1`,
    require('./dimension1Create').default,
  );
  app.put(
    `/tenant/:tenantId/dimension1/:id`,
    require('./dimension1Update').default,
  );
  app.post(
    `/tenant/:tenantId/dimension1/import`,
    require('./dimension1Import').default,
  );
  app.delete(
    `/tenant/:tenantId/dimension1`,
    require('./dimension1Destroy').default,
  );
  app.get(
    `/tenant/:tenantId/dimension1/autocomplete`,
    require('./dimension1Autocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/dimension1`,
    require('./dimension1List').default,
  );
  app.get(
    `/tenant/:tenantId/dimension1/:id`,
    require('./dimension1Find').default,
  );
};
