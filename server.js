import RestProxy from "sp-rest-proxy";

const settings = {
  configPath: "./sharePointConfig/private.json",
  port: 8081,
  staticRoot: "node_modules/sp-rest-proxy/static",
};

const restProxy = new RestProxy(settings);
restProxy.serve();
