// GrowthOS Admin v2 RBAC foundation

export const permissions = {
  super_admin: ['users.manage', 'clients.manage', 'agents.manage', 'logs.view'],
  admin: ['users.manage', 'clients.manage', 'agents.manage'],
  operator: ['agents.manage'],
  viewer: ['logs.view']
};

export function can(role, permission) {
  return permissions[role]?.includes(permission) || false;
}
