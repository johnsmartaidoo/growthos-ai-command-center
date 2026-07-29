async function loadDashboard(){
  const endpoints = ['users','workspaces','agents','logs'];
  const results = {};
  for (const endpoint of endpoints) {
    const response = await fetch(`/api/${endpoint}`);
    results[endpoint] = await response.json();
  }
  window.GrowthOSDashboard = results;
  return results;
}

window.addEventListener('load', loadDashboard);
