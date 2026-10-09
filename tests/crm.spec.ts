import {test,expect} from '@playwright/test';

test('crm_test',async({page})=>{
await page.goto('https://www.salesfresh.com/auth/signin');
await page.locator('[name="email"]').fill('test1@gmail.com');

await page.keyboard.press('Enter');

await page.locator('//a[@href="/auth/signup"]').click();

await expect(page.locator('body')).toContainText('Sign up for Salesfresh');
await page.reload();
await page.waitForTimeout(2000);
await page.goBack();
//await page.locator('Sign In').click();
});