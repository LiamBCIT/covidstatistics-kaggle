import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 }
})

test.describe("Testing for country page tablet", () => {
  test("checking h2 string value", async ({ page }) => {
    await page.goto("http://localhost:3000/viewbycountry");
    const h2 = page.locator("#h2-container");
    const h2Text = await h2.innerText();
    expect(h2Text).toEqual("View By Country");

  });

  test("checking home is there", async ({ page }) => {
    await page.goto("http://localhost:3000/viewbycountry");
    const contry = page.locator("#contrytablet-link");
    const contryText = await contry.innerText();
    expect(contryText).toEqual("Home");

  });
})