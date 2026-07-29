// GrowthOS Admin v2 database connector

const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

module.exports = {
  query(text, params) {
    return pool.query(text, params);
  }
};
