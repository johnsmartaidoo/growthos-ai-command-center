// GrowthOS Admin v2 live AI agent control

const Agents = {
  agents: [],

  async load() {
    const response = await fetch('/api/agents');
    this.agents = await response.json();
    return this.agents;
  }
};

export default Agents;
