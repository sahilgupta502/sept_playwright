import { Given, Then, When } from "@cucumber/cucumber";
import {Browser, chromium, expect, Page} from '@playwright/test';
let broswer:Browser;
let page:Page
Given('user is on login page',async function name() {
   broswer=await chromium.launch({
    headless:false,
    slowMo:1200
});
page=await broswer.newPage();
await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');

});

When('user enter username and password',async function name() {
   await page.locator('#user-name').fill('visual_user'); 
   await page.locator('#password').fill('secret_sauce');
   await page.getByRole('button',{
name:'Login'
   }).click();
});

Then('user goto dashboard screen',async function()  {
    await expect(page).toHaveURL(/inventory/);
    await broswer.close();
});

