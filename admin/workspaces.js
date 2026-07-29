const Workspaces = {
  data: [],
  async load(){
    const response = await fetch('/api/workspaces');
    this.data = await response.json();
    return this.data;
  }
};
window.Workspaces = Workspaces;
