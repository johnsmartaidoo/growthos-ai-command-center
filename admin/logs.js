// GrowthOS Admin v2 Audit Logs foundation

const AuditLogs = {
  logs: [],

  record(event) {
    const entry = {
      ...event,
      timestamp: event.timestamp || new Date().toISOString()
    };
    this.logs.push(entry);
    return entry;
  },

  list() {
    return this.logs;
  }
};

export default AuditLogs;
