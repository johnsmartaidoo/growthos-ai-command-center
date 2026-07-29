// GrowthOS Admin v2 live workspace management

const Workspaces = {
  workspaces: [],

  async load() {
    const response = await fetch('/api/workspaces');
    this.workspaces = await response.json();
    return this.workspaces;
  }
};

export default Workspaces;
