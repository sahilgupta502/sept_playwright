import {expect, Page} from '@playwright/test';

export async function login(page:Page,userName:string,password:string)
{
await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');

await expect(page).toHaveTitle('Swag Labs');
await page.locator('#user-name').fill(userName);
await page.locator('#password').fill(password);
 await expect(page.getByRole('button',{
    name:'Login'
 })).toBeVisible();
 await expect(page.getByRole('button',{
    name:'Login'
 })).toBeEnabled();

await page.locator('//input[@id="login-button"]').click();
}

