// GrowthOS Admin v2 Production API foundation

const API = {
  baseURL: '/api',

  async request(endpoint, options = {}) {
    return fetch(`${this.baseURL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      },
      ...options
    });
  },

  users() {
    return this.request('/users');
  },

  workspaces() {
    return this.request('/workspaces');
  },

  agents() {
    return this.request('/agents');
  },

  logs() {
    return this.request('/logs');
  }
};

export default API;
