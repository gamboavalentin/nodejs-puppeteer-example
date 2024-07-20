import puppeteer from 'puppeteer';

try {
  console.log('TEST RUN ⏱️')
  console.log('Loading Puppeteer launch...')
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox']})
  console.log('Loading Puppeteer newPage...')
  const page = await browser.newPage()
  await page.setCacheEnabled(false)
  console.log('Loading Puppeteer goto [https://pptr.dev/]...')
  await page.goto('https://pptr.dev/')
  console.log('Get Title...')
  const title = await page.$eval('h1', text => text.textContent)
  console.log('TEST PASS ✅   ->  [https://pptr.dev/] Title = ', title)

  await browser.close();
} catch (error) {
  console.error('TEST ERROR ❌   ->  Error = ', error)
}