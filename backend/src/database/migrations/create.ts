/**
 * This script is responsible for creating the SQL tables.
 * Run it via `npm run db:create`.
 */
require('dotenv').config();

import models from '../models';

const { database } = models(); // destructure the result
const { sequelize } = database; // get the sequelize instance

sequelize.sync()
  .then(() => {
    console.log('✅ Tables created successfully.');
    process.exit();
  })
  .catch((error) => {
    console.error('❌ Error creating tables:', error);
    process.exit(1);
  });