import {test,expect} from '@playwright/test';

test('visual_test',async({page})=>{
await page.goto('https://www.google.com/');
await page.screenshot({path: "testData/baseline2.png"});

   await expect(page).toHaveScreenshot('testData/baseline2.png');
});