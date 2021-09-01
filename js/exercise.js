function queryParam(url) {
  // check param
  const obj = {};
  return url
    .split("?")[1]
    .split("&")
    .reduce((result, cur) => {
      const params = cur.split("=");
      result[params[0]] = params[1];
      return result;
    }, obj);
}

console.log(
  "queryParam",
  queryParam(
    "https://www.google.com/search?q=%E7%BF%BB%E8%AF%91&rlz=1C1GCEU_zh-CNHK911HK911&oq=%E7%BF%BB%E8%AF%91&aqs=chrome.0.69i59j35i39j0i512l7.827j0j7&sourceid=chrome&ie=UTF-8"
  )
);
