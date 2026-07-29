// GrowthOS Admin v2 audit event service

const db = require('./db');

async function record(action, actorId, metadata = {}) {
  return db.query(
    'INSERT INTO audit_logs (action, actor_id, metadata, created_at) VALUES ($1, $2, $3, NOW())',
    [action, actorId, JSON.stringify(metadata)]
  );
}

module.exports = { record };
