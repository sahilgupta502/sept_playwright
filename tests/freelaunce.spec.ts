import {test,expect} from '@playwright/test';

test('freelaunce_test',async({page})=>{
await page.goto('https://freelance-learn-automation.vercel.app/practise');
await page.locator('.practiseBtn').click();
await page.waitForTimeout(4000);
});