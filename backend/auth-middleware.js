// GrowthOS Admin v2 authentication middleware foundation

export function requireAdmin(user) {
  if (!user || !user.role) {
    throw new Error('Unauthorized');
  }

  return user;
}
