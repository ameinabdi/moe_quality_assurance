export default (app) => {
  app.post(
    `/tenant/:tenantId/deminsion2`,
    require('./deminsion2Create').default,
  );
  app.put(
    `/tenant/:tenantId/deminsion2/:id`,
    require('./deminsion2Update').default,
  );
  app.post(
    `/tenant/:tenantId/deminsion2/import`,
    require('./deminsion2Import').default,
  );
  app.delete(
    `/tenant/:tenantId/deminsion2`,
    require('./deminsion2Destroy').default,
  );
  app.get(
    `/tenant/:tenantId/deminsion2/autocomplete`,
    require('./deminsion2Autocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/deminsion2`,
    require('./deminsion2List').default,
  );
  app.get(
    `/tenant/:tenantId/deminsion2/:id`,
    require('./deminsion2Find').default,
  );
};