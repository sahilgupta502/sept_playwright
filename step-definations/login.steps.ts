import {Given,When,Then} from '@cucumber/cucumber';
import { chromium,Page,Browser, expect } from '@playwright/test';

let browser:Browser;
let page:Page;
Given('user is on the login page',async function(){

    browser=await chromium.launch({
        headless:false,
        slowMo:1000,
        timeout:30000
    });
page=await browser.newPage();
await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');
});

When('user enters valid user-name and password',async function(){
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
});

When('user clicks on login button',async function(){
await page.keyboard.press('Enter');
});

Then('user should see the dashboard',async function(){
await expect(page).toHaveURL(/inventory/);
await page.locator('.product_sort_container').click();
await page.locator('.product_sort_container').selectOption({
value:'za'
});

await page.locator('.product_sort_container').selectOption({
    value:'lohi'
});

await browser.close();
});