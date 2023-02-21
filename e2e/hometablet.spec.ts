import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: { width: 820, height: 1180 }
})

test.describe("Testing for home tablet", () => {
    test('Test title click', async ({ page }) => {
        await page.goto('http://localhost:3000/');
        await page.click("text=Built with Kaggle, you can sort through the latest statistic information about covid-19 cases around the globe.");  
    })
    test('Testing for colours on iPhone XR', async ({page})=> {
        await page.goto('http://localhost:3000/');
        
        const mainContainer = page.locator('#colouring');
        const checkingBackgroundColour = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background-color")
        })
        console.log(checkingBackgroundColour);
        expect(checkingBackgroundColour).toBe("white");
    })
})