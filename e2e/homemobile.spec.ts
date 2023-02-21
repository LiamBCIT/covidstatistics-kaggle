import {test, devices, expect} from "@playwright/test";

test.use({
    browserName: "chromium",
    ...devices['iPhone XR']
})


test.describe("feature text and localhost test", () => {
    test("Testing for localhost working link", async ({ page }) => {
            await page.goto("http://localhost:3000/");
    });
        test("Testing for Coronavirus data 24/7", async ({ page }) => {
            await page.click("text=Built with Kaggle, you can sort through the latest statistic information about covid-19 cases around the globe.");
        })   
})