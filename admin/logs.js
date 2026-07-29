const Logs = {
  data: [],
  async load(){
    const response = await fetch('/api/logs');
    this.data = await response.json();
    return this.data;
  }
};
window.Logs = Logs;
