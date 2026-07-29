// GrowthOS Admin v2 User Management foundation

const Users = {
  users: [],

  create(user) {
    this.users.push({...user, status: user.status || 'active'});
    return user;
  },

  update(id, data) {
    const user = this.users.find(item => item.id === id);
    if (user) Object.assign(user, data);
    return user;
  },

  remove(id) {
    this.users = this.users.filter(item => item.id !== id);
  }
};

export default Users;
