// GrowthOS Admin v2 mutation service

const db = require('./db');
const { record } = require('./audit');
const { requireFields } = require('./validation');

async function createUser(payload, actorId) {
  requireFields(payload, ['email', 'role']);
  const result = await db.query(
    'INSERT INTO users (email, role) VALUES ($1, $2) RETURNING *',
    [payload.email, payload.role]
  );
  await record('create_user', actorId, result.rows[0]);
  return result.rows[0];
}

async function updateAgent(id, payload, actorId) {
  requireFields(payload, ['status']);
  const result = await db.query(
    'UPDATE ai_agents SET status = $1 WHERE id = $2 RETURNING *',
    [payload.status, id]
  );
  await record('update_agent', actorId, result.rows[0]);
  return result.rows[0];
}

module.exports = { createUser, updateAgent };
