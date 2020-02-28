const http = require('http');

module.exports = (commonConfig, API_PATH, GRAFANA_API_KEY, BODY) => {
  // API options
  const options = {
    hostname: commonConfig.hostName,
    port: commonConfig.port,
    path: API_PATH,
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GRAFANA_API_KEY}`,
    },
  };

  const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.on('data', (data) => {
      console.log(`BODY: ${data}`);
    });
  });


  req.on('error', (e) => {
    console.error(`ERROR: ${e.message}`);
  });


  req.write(BODY);
  req.end();
};
