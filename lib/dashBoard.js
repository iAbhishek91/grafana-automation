const { commonConfig, apiPath } = require('../config');
const makeHttpRequest = require('./makeHttpRequest');
const dashboard = require('../json/myDashboard.json');

// config check
const { GRAFANA_API_KEY } = process.env;
if (!GRAFANA_API_KEY) process.exit(1);


// create dashboard
makeHttpRequest(
  commonConfig,
  apiPath.createDashboard,
  GRAFANA_API_KEY,
  JSON.stringify(dashboard),
);
