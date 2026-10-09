import {test,expect} from '@playwright/test';

test('new_facebook11',async({page})=>{
await page.goto('https://www.facebook.com/');
await page.getByText('email').fill("test1@gmail.com");
await page.locator('[name="pass"]').fill("sample#45122");

await page.locator('//div[@class="x6s0dn4 x78zum5 x1c4vz4f x2lah0s xyqm7xq"]').click();

await page.getByRole('button',{
    name:'Log in'
}).click();

await page.getByText('Forgotten password?').click();
//await page.locator('//div[@class="x3nfvp2 x1n2onr6 xh8yej3"]').click();
//await page.locator('//a[@href="/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjo1LCJjcmVhdGlvbl90aW1lIjoxNzkwMzUzNTg3fQ%3D%3D&ars=facebook_login"]').click();

//await page.locator('[class="x78zum5 xdt5ytf xh8yej3"]').fill('test23@gmail.com');

await page.getByLabel('Mobile number or email address').fill('test122@gmail.com');
await page.getByRole('button',{
    name:'Continue'
}).click();
await page.locator('//div[@class="html-div xdj266r x14z9mp xat24cr x1lziwak xexx8yu xyri2b x18d9i69 x1c1uobl"]').click();

});