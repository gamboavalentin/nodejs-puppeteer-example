import puppeteer from 'puppeteer'
// Or import puppeteer from 'puppeteer-core';

try {
  // Launch the browser and open a new blank page
  console.log('TEST RUN ⏱️')
  console.log('Loading Puppeteer launch...')
  const browser = await puppeteer.launch();
  console.log('Loading Puppeteer newPage...')
  const page = await browser.newPage()

  // Navigate the page to a URL.
  console.log('Loading Puppeteer goto [https://developer.chrome.com/]...')
  await page.goto('https://developer.chrome.com/')

  // Set screen size.
  await page.setViewport({width: 1080, height: 1024})

  // Type into search box.
  console.log('Fill locator [.devsite-search-field]...')
  await page.locator('.devsite-search-field').fill('automate beyond recorder')

  // Wait and click on first result.
  console.log('Click Locator [.devsite-result-item-link]...')
  await page.locator('.devsite-result-item-link').click();

  // Locate the full title with a unique string.
  console.log('Wait Handle Locator [text/Customize and automate]...')
  const textSelector = await page.locator('text/Customize and automate').waitHandle()

  console.log('Get Full Title...')
  const fullTitle = await textSelector?.evaluate(el => el.textContent)

  // Print the full title.
  console.error('TEST PASS ✅   ->  The title of this blog post is "%s".', fullTitle)

  await browser.close()
} catch (error) {
  console.error('TEST ERROR ❌   ->  Error = ', error)
}