const ProxyURL =
  localStorage.getItem("ProxyURL") != undefined
    ? localStorage.getItem("ProxyURL")
    : "";

const requestHeaders = {
  Accept: "application/json;odata=verbose",
};

export { ProxyURL, requestHeaders };
