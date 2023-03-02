function parseUrl(url) {
    const obj = {};
  
    const queryStringIndex = url.indexOf("?");
    const queryString = queryStringIndex >= 0 ? url.substring(queryStringIndex + 1) : "";
    if (queryString) {
      queryString.split("&").forEach(function(keyValue) {
        const [key, value] = keyValue.split("=");
        obj[key] = decodeURIComponent(value);
      });
    }
  
    const [protocol, rest] = url.split("//");
    const [hostname, pathname] = rest.split("/", 2);
  
    obj.protocol = protocol.substring(0, protocol.length - 1);
    obj.hostname = hostname;
    obj.pathname = pathname;
  
    return obj;
  }
  
  const url = "https://app.yzw.cn/z?t=2&bt=4&c=Jtqa1Z6DuuEAd0o";
  console.log(parseUrl(url));
  