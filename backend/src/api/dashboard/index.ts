export default (app) => {
  app.get(`/dashboard`, require('./dashboard').default);
  app.get(`/activities`, require('./activities').default);

};
