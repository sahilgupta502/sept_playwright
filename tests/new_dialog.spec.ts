import {test,expect, Page} from '@playwright/test';

test('new_dialog',async({page})=>{
await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

page.on('dialog',async(dialog)=>{

    console.log(dialog.message());
    await dialog.accept("Hello......... ");

})
//await page.getByText('Click for JS Alert').click();

//await page.getByText('Click for JS Confirm').click();

await page.getByText('Click for JS Prompt').click();

});