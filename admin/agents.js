const Agents = {
  data: [],
  async load(){
    const response = await fetch('/api/agents');
    this.data = await response.json();
    return this.data;
  }
};
window.Agents = Agents;
