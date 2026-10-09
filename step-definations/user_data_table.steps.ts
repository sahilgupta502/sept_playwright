import {test,expect, chromium, Browser, Page} from '@playwright/test';
import {Given,When,Then} from '@cucumber/cucumber';

let browser:Browser
let page:Page

Given('user go to the login page',async function(dataTable){
browser=await chromium.launch({
    slowMo:1200,
    headless:false
   // timeout:30000
});
const table=dataTable.hashes();
console.log("Data tables==",table);
//console.log("login user name==",table.username);
//console.log("login password==",table.password);


page=await browser.newPage();
await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');



});

When('user enter username and password value',async function(){
await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.keyboard.press('Enter');
});

Then('user go to the dashboard page',async function(){
await expect(page).toHaveURL(/inventory/);
await browser.close();
});