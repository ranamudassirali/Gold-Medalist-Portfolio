const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3002'); // your dev server
    await page.screenshot({ path: '.claude/screenshots/ui_preview.png' });
    await browser.close();
})();