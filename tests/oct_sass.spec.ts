import {test,expect} from '@playwright/test';

test('oct_sass_test',async({page})=>{
await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');

await expect(page.locator('body')).toContainText('Swag Labs');

await page.locator('#user-name').click();

await page.keyboard.type('standard_user',{
    delay:400
});




await page.locator('#password').click();
await page.keyboard.type('secret_sauce',{
    delay:400
});

//await page.locator('#password').fill('secret_sauce');
//await page.keyboard.press('Enter');
await page.getByRole('button',{
    name:'Login'
}).click();

//await expect(page.locator('body')).toContainText('Epic sadface: Sorry, this user has been locked out.');

});