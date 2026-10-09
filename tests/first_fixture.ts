import {test, expect, Page} from '@playwright/test';

 type MyFixture22={
 loggedInFixture:Page
 }

export const test2=test.extend<MyFixture22>({
    loggedInFixture:async({page},use)=>{

        await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');
        await page.locator('#user-name').click();
        await page.keyboard.type('standard_user',{
        delay:400
        });

await page.locator('#password').click();
await page.keyboard.type('secret_sauce',{
    delay:400
});

await page.keyboard.press('Enter');
await use(page);    
}
});

export const expect1=expect;