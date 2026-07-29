// GrowthOS Admin v2 AI Agent Control Center foundation

const Agents = {
  agents: [],

  create(agent) {
    const item = {
      ...agent,
      status: agent.status || 'active'
    };
    this.agents.push(item);
    return item;
  },

  update(id, config) {
    const agent = this.agents.find(item => item.id === id);
    if (agent) Object.assign(agent, config);
    return agent;
  },

  toggle(id) {
    const agent = this.agents.find(item => item.id === id);
    if (agent) agent.status = agent.status === 'active' ? 'disabled' : 'active';
    return agent;
  }
};

export default Agents;
