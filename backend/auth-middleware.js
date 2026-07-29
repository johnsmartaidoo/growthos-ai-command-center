// GrowthOS Admin v2 authentication and RBAC middleware

async function requireAuth(req) {
  if (!req.user) {
    throw new Error('Unauthorized');
  }
  return req.user;
}

async function requirePermission(user, permission) {
  if (!user || !user.permissions || !user.permissions.includes(permission)) {
    throw new Error('Forbidden');
  }
  return true;
}

module.exports = { requireAuth, requirePermission };
