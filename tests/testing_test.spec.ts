import {test,expect} from '@playwright/test';

test('testing_sauce',async({page})=>{
   
await page.goto('https://www.saucedemo.com/?utm_source');

await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();

await page.locator('//a[@class="shopping_cart_link"]').click();

//await page.goBack();
await page.locator('#checkout').click();
await expect(page).toHaveTitle('Swag Labs');

await page.getByPlaceholder('First Name').fill('sample');
await page.getByPlaceholder('Last Name').fill('demo');
await page.getByPlaceholder('Zip/Postal Code').fill('123456');
await page.getByText('continue').click();
await page.getByText('finish').click();


const download=page.waitForEvent('download');
await page.locator('#generate-pdf-order').click();

const page2=await download;

await page2.saveAs('C:/Users/hp/Desktop/22-09-2026/new_order_file.pdf');

await page.getByText('Back Home').click();
await page.locator('//span[@class="select_container"]').click();

await page.locator('//select[@class="product_sort_container"]').selectOption({
    value:'za'
});

await page.locator('[class="select_container"]').click();

await page.locator('[class="product_sort_container"]').selectOption({
    value:'lohi'
})

await page.locator('[class="bm-burger-button"]').click();

await page.locator('//a[@id="about_sidebar_link"]').click();
await page.goBack();

const menu=await page.locator('[class="bm-menu-wrap"]');
// if(await menu.isVisible){
// await page.getByRole('button',{name:'Logout'}).click();

// }else{
    await page.locator('[class="bm-burger-button"]').click();
await page.getByRole('button',{name:'Logout'}).click();

//}

//await page.waitForTimeout(5000);
});