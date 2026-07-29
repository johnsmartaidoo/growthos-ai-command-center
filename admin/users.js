// GrowthOS Admin v2 live user management

const Users = {
  users: [],

  async load() {
    const response = await fetch('/api/users');
    this.users = await response.json();
    return this.users;
  }
};

export default Users;
