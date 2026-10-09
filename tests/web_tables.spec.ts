import {test,expect} from '@playwright/test';

test('web_table_test',async({page})=>{

await page.goto('https://demoqa.com/webtables');

const trValue=await page.locator('tr').filter({
    hasText:'Insurance'
});

await trValue.locator('[id="edit-record-1"]').click();

const dialog=await trValue.locator('dialog');

await dialog.locator('[id="#firstName"]').fill('test1');
await dialog.locator('[id="#lastName"]').fill('demo1');



    // await page.goto('https://the-internet.herokuapp.com/tables?utm_source');

// const data=await page.locator('#table2 tr').filter({
//     hasText:'jsmith@gmail.com'
// });

// console.log(data.textContent());
// await page.getByRole('link',{
//     name:'edit'}).click();

});