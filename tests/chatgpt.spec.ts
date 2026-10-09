import {test,expect} from '@playwright/test';

test.describe.configure({mode:'parallel'})

test('chatgpt_test',async({page})=>{
await page.goto('https://chatgpt.com/');
await expect(page.locator('body')).toContainText('What are you working on?');
await page.locator('#mobile-composer-prompt').fill('BDD kya hota hai');
await page.keyboard.press('Enter');

await page.getByText('Help').click();
await page.goBack();
await page.getByText('Settings').click();
await page.goBack();

const popupValue=page.waitForEvent('popup');
// await page.getByRole('button',{
//     name:'Login'
// }).click();


await page.locator('#octane-mobile-composer-actions-popover').click();

// await page.locator('Log in').click();

// const popup1=await popupValue;
// await popup1.locator('#mobile-auth-email').fill('test1@gmail.com');
});