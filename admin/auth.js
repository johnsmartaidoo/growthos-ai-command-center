// GrowthOS Admin v2 authentication foundation
// Connect this layer to the production auth provider.

const AdminAuth = {
  sessionKey: 'growthos_admin_session',

  login(user) {
    if (!user || !user.role) return false;
    localStorage.setItem(this.sessionKey, JSON.stringify(user));
    return true;
  },

  logout() {
    localStorage.removeItem(this.sessionKey);
  },

  currentUser() {
    return JSON.parse(localStorage.getItem(this.sessionKey) || 'null');
  },

  hasRole(roles = []) {
    const user = this.currentUser();
    return !!user && roles.includes(user.role);
  }
};

export default AdminAuth;
