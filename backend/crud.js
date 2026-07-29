// GrowthOS Admin v2 CRUD service foundation

const db = require('./db');
const { record } = require('./audit');

async function create(resource, table, payload, actorId) {
  const keys = Object.keys(payload);
  const values = Object.values(payload);
  const placeholders = keys.map((_, i) => `$${i + 1}`).join(', ');

  const result = await db.query(
    `INSERT INTO ${table} (${keys.join(', ')}) VALUES (${placeholders}) RETURNING *`,
    values
  );

  await record(`create_${resource}`, actorId, result.rows[0]);
  return result.rows[0];
}

module.exports = { create };
