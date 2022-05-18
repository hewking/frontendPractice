const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
(async () => {
  // 启动一个 chrome，
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port};
  // 使用 lighthouse 对目标页面进行跑分
  const runnerResult = await lighthouse('http://119.29.195.26', options);
  // `.report` 是一个 html 类型的分析页面
  const reportHtml = runnerResult.report;
  fs.writeFileSync('lhreport.html', reportHtml);
  // `.lhr` 是用于 lighthous-ci 的结果集合
  console.log('Report is done for', runnerResult.lhr.finalUrl);
  console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
  await chrome.kill();
})();