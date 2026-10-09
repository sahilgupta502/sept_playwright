import {test,expect, Locator} from '@playwright/test';

test('channing_filter',async({page})=>{
// await page.goto('https://the-internet.herokuapp.com/tables?utm_source');

// await expect(page).toHaveTitle(/Internet/);
// const viewRow:Locator=await page.locator('tr').filter({
//     hasText:'Smith'
// });
// await viewRow.getByRole('button',{
//     name:'delete'
// });

await page.goto('https://the-internet.herokuapp.com/?utm_source');
await page.locator('a[href="/abtest"]').click();
await page.goBack();
await page.locator('a[href="/challenging_dom"]').click();
await page.goBack();
await page.locator('a[href="http://elementalselenium.com/"]').click();
});