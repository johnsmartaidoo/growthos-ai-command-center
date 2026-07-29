const express = require('express');
const cors = require('cors');
const api = require('./api');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => res.json({status:'ok', service:'growthos-api'}));
app.get('/api/users', api.users);
app.get('/api/workspaces', api.workspaces);
app.get('/api/agents', api.agents);
app.get('/api/logs', api.logs);

app.listen(process.env.PORT || 3000, () => console.log('GrowthOS API running'));
