export default (app) => {
  app.post(
    `/tenant/:tenantId/dimension-g-p-e1`,
    require('./dimensionGPE1Create').default,
  );
  app.put(
    `/tenant/:tenantId/dimension-g-p-e1/:id`,
    require('./dimensionGPE1Update').default,
  );
  app.post(
    `/tenant/:tenantId/dimension-g-p-e1/import`,
    require('./dimensionGPE1Import').default,
  );
  app.delete(
    `/tenant/:tenantId/dimension-g-p-e1`,
    require('./dimensionGPE1Destroy').default,
  );
  app.get(
    `/tenant/:tenantId/dimension-g-p-e1/autocomplete`,
    require('./dimensionGPE1Autocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/dimension-g-p-e1`,
    require('./dimensionGPE1List').default,
  );
  app.get(
    `/tenant/:tenantId/dimension-g-p-e1/:id`,
    require('./dimensionGPE1Find').default,
  );
};
