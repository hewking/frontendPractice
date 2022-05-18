const render = require('./render');

const imageAsync = render(ctx = {
    request: {
        body: '<html><body><h1>Hello Puppeteer!</h1></body></html>',
        query: {
            width: '300',
            url: "https://www.baidu.com"
        }
    }
});

(async function(){
    const image = await imageAsync;
    console.log("image", image);
})()


