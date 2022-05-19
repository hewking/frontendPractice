const render = require('./render');

(async () => {
    render(ctx = {
        request: {
            body: '<html><body><h1>Hello Puppeteer!</h1></body></html>',
            query: {
                width: '300',
                url: "https://www.baidu.com"
            },
        },
        set: (key, value) => {

        }
    });
    console.log("image");
})()


