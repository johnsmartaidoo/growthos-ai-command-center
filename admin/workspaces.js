// GrowthOS Admin v2 Client Workspace Management foundation

const Workspaces = {
  workspaces: [],

  create(workspace) {
    const item = {...workspace, status: workspace.status || 'active'};
    this.workspaces.push(item);
    return item;
  },

  update(id, data) {
    const workspace = this.workspaces.find(item => item.id === id);
    if (workspace) Object.assign(workspace, data);
    return workspace;
  },

  archive(id) {
    const workspace = this.workspaces.find(item => item.id === id);
    if (workspace) workspace.status = 'archived';
    return workspace;
  }
};

export default Workspaces;
