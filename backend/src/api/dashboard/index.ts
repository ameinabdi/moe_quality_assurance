export default (app) => {
  app.get(`/dashboard`, require('./dashboard').default);
  app.get(`/supervision-report`, require('./supervisionReport').default);
  app.get(`/teacher-report`, require('./teacherReport').default);
  app.get(`/state-report`, require('./stateReport').default);

  app.get(`/activities`, require('./activities').default);

};
