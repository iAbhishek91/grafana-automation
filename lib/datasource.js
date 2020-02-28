const { commonConfig, apiPath } = require('../config');
const makeHttpRequest = require('./makeHttpRequest');
const dataSource = require('../json/datasource.json');

// config check
const { GRAFANA_API_KEY } = process.env;
if (!GRAFANA_API_KEY) process.exit(1);


// create database
makeHttpRequest(
  commonConfig,
  apiPath.createDataSource,
  GRAFANA_API_KEY,
  JSON.stringify(dataSource),
);
