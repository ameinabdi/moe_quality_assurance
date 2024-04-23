export default (app) => {
  app.get(`/report/ssa-report`, require('./ssaReport').default);

};
