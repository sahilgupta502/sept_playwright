import {test,expect} from '@playwright/test';

test('link_test',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/tables?utm_source#edit');

const table1=await page.locator('table1');

const value=await table1.locator('tr').filter({
    hasText:'Smith'
});
//console.log(value.allInnerTexts());
await value.locator('a[href="#edit"]').click();
});