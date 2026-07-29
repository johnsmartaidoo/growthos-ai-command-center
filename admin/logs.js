// GrowthOS Admin v2 live audit logs

const AuditLogs = {
  logs: [],

  async load() {
    const response = await fetch('/api/logs');
    this.logs = await response.json();
    return this.logs;
  }
};

export default AuditLogs;
