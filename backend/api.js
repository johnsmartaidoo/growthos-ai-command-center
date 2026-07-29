// GrowthOS Admin v2 production API service layer

const db = require('./db');
const { requireAuth, requirePermission } = require('./auth-middleware');

async function users(req, res) {
  await requireAuth(req);
  await requirePermission(req.user, 'users:read');
  const result = await db.query('SELECT * FROM users ORDER BY created_at DESC');
  res.json(result.rows);
}

async function workspaces(req, res) {
  await requireAuth(req);
  await requirePermission(req.user, 'workspaces:read');
  const result = await db.query('SELECT * FROM client_workspaces ORDER BY created_at DESC');
  res.json(result.rows);
}

async function agents(req, res) {
  await requireAuth(req);
  await requirePermission(req.user, 'agents:read');
  const result = await db.query('SELECT * FROM ai_agents ORDER BY created_at DESC');
  res.json(result.rows);
}

async function logs(req, res) {
  await requireAuth(req);
  await requirePermission(req.user, 'logs:read');
  const result = await db.query('SELECT * FROM audit_logs ORDER BY created_at DESC');
  res.json(result.rows);
}

module.exports = { users, workspaces, agents, logs };
