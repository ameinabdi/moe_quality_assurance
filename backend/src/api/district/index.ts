export default (app) => {
  app.post(
    `/tenant/:tenantId/district`,
    require('./districtCreate').default,
  );
  app.put(
    `/tenant/:tenantId/district/:id`,
    require('./districtUpdate').default,
  );
  app.post(
    `/tenant/:tenantId/district/import`,
    require('./districtImport').default,
  );
  app.delete(
    `/tenant/:tenantId/district`,
    require('./districtDestroy').default,
  );
  app.get(
    `/tenant/:tenantId/district/autocomplete`,
    require('./districtAutocomplete').default,
  );
  app.get(
    `/tenant/:tenantId/district`,
    require('./districtList').default,
  );
  app.get(
    `/tenant/:tenantId/district/:id`,
    require('./districtFind').default,
  );
};
