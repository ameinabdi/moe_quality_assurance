import express from 'express';
import cors from 'cors';
import { authMiddleware } from '../middlewares/authMiddleware';
import { tenantMiddleware } from '../middlewares/tenantMiddleware';
import { databaseMiddleware } from '../middlewares/databaseMiddleware';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { createRateLimiter } from './apiRateLimiter';
import { languageMiddleware } from '../middlewares/languageMiddleware';
import authSocial from './auth/authSocial';
import setupSwaggerUI from './apiDocumentation';
const path = require('path');
const fs = require('fs');
const app = express();

// Enables CORS
app.use(cors({ origin: true }));

// Initializes and adds the database middleware.
app.use(databaseMiddleware);

// Sets the current language of the request
app.use(languageMiddleware);

// Configures the authentication middleware
// to set the currentUser to the requests
app.use(authMiddleware);

// Setup the Documentation
setupSwaggerUI(app);

// Default rate limiter
const defaultRateLimiter = createRateLimiter({
  max: 5000000,
  windowMs: 15 * 60 * 1000,
  message: 'errors.429',
});
app.use(defaultRateLimiter);

// Enables Helmet, a set of tools to
// increase security.
app.use(helmet());

// Parses the body of POST/PUT request
// to JSON
app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      const url = (<any>req).originalUrl;
      if (url.startsWith('/api/plan/stripe/webhook')) {
        // Stripe Webhook needs the body raw in order
        // to validate the request
        (<any>req).rawBody = buf.toString();
      }
    },
  }),
);

// Configure the Entity routes
const routes = express.Router();

// Enable Passport for Social Sign-in
authSocial(app, routes);

require('./auditLog').default(routes);
require('./auth').default(routes);
require('./plan').default(routes);
require('./tenant').default(routes);
require('./file').default(routes);
require('./user').default(routes);
require('./settings').default(routes);
require('./assessment').default(routes);
require('./questionSection').default(routes);
require('./question').default(routes);
require('./subQuestion').default(routes);
require('./assessmentAnswer').default(routes);
require('./answer').default(routes);
require('./subAnswer').default(routes);

require('./school').default(routes);
require('./sSASurvey').default(routes);
require('./dimension1').default(routes);
require('./deminsion2').default(routes);
require('./dimension3').default(routes);
require('./dimension4').default(routes);
require('./dimension5').default(routes);
require('./dashboard').default(routes);
require('./report').default(routes);

require('./schoolSupervision').default(routes);
require('./dimensionSsv1').default(routes);
require('./dimensionSsv2').default(routes);
require('./dimensionSsv3').default(routes);
require('./governmentTeacherInformation').default(routes);
require('./state').default(routes);
require('./region').default(routes);
require('./district').default(routes);
require('./tools').default(routes);
require('./toolTypes').default(routes);
require('./schoolSupervisionGPE').default(routes);
require('./dimensionGPE1').default(routes);
require('./dimensionGPE2').default(routes);
require('./dimensionGPE3').default(routes);
require('./dimensionGPE4').default(routes);
require('./dimensionGPE5').default(routes);
require('./teacherGPE').default(routes);

// Loads the Tenant if the :tenantId param is passed
routes.param('tenantId', tenantMiddleware);

// Add the routes to the /api endpoint
app.use('/api', routes);

const frontendDir = path.join(
  __dirname,
  '../../../frontend/build',
);

if (fs.existsSync(frontendDir)) {
  console.log('Serving static files from', frontendDir);
  app.use('/', express.static(frontendDir));

  app.get('*', function(request, response) {
    console.log('Request for:', request.url);
    response.sendFile(path.resolve(frontendDir, 'index.html'));
  });
} else {
  console.error('Frontend build directory not found:', frontendDir);

}
export default app;
