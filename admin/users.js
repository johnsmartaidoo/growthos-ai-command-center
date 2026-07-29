const Users = {
  users: [],
  async load(){
    const response = await fetch('/api/users');
    this.users = await response.json();
    return this.users;
  }
};
window.Users = Users;
