import { test, expect } from '@playwright/test'

    test('should navigate to the about page', async ({ page }) => {
    await page.goto('http://localhost:3000/viewbycountry')
    await page.click('text=View By Country')
    await expect(page).toHaveURL('http://localhost:3000/viewbycountry')
})

test('Test multiple tabs', async ({ browser }) => {
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();

    await page1.goto('http://localhost:3000/viewbycountry');
    await page2.goto('http://localhost:3000/viewbycountry');
    await page3.goto('http://localhost:3000/viewbycountry');
})