# Grafana Automation

This is a simple project which is automatically creates GRAFANA dashboard.

## Quick start

- Clone the repo

- Configure 'config.js' file. Present in the root of the project

- Configure Authentication key.
  Authentication key is not kept in the code repo for security. This project consume the authentication API key from the environment variable.

  set env variable

  ```sh
  # below command in all nix system
  export GRAFANA_API_KEY=eyJrIjoiR1RJaGR4bGdIMllqWWxDblo3T4R5SXpJa2hwNDU2MVYiLCJuIjoiYWJoaXNoZWsiLCJpZCI6MX0
  ```

- Run the script.

```sh
node src/run.js
```

## About Grafana API

- data source: This method is idempotent and will not create or update the data source if its already exists.
- dash board: The same function will create and update the dashboard. How to create the dashboard JSON as it is quite complex and manually creation will make it error prone. Follow the below steps:
  - Grab the JSON from the dashboard settings >> JSON Model tab.
  - wrap the JSON in { "dashboard" : `copied JSON goes here` }.
  - The dashboard will be created, then if any modification required, do it in UI and commit in the version control.
  - The script `/lib/dashBoard.js` will create dashboard one by one. you can extend it as and when required.
