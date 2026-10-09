import {test,expect} from '@playwright/test';

test('newTab',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/windows');

const page11=page.waitForEvent('popup');

await page.locator('a[href="/windows/new"]').click();
const newPage=await page11;

//await newPage.getByText('New Window').isVisible();
await expect(newPage).toHaveTitle(
    'New Window'
);
});

