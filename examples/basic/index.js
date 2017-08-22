const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
      headless: false
    });
  const page = await browser.newPage();
  page.on('request', req => {
      console.log(req.url)
  })
  await page.goto('https://google.com');
  await page.screenshot({path: 'example.png'});

  browser.close();
})();