// GrowthOS Admin v2 authentication and RBAC middleware

async function requireAuth(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

async function requirePermission(user, permission) {
  if (!user || !user.permissions || !user.permissions.includes(permission)) {
    throw new Error('Forbidden');
  }
  return true;
}

module.exports = { requireAuth, requirePermission };
