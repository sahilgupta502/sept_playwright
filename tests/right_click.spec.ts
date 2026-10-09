import {test,expect} from '@playwright/test';

test.skip('right_click_test',async({page})=>{
//page.emulateMedia({colorScheme:'dark'});

   await page.goto('https://www.playwrightautomation.com/practice.html?utm_source=chatgpt.com');

   await expect.soft(page.locator('body')).toContainText('Advanced Frame Handling');


// await page.locator('#name').fill('test');
// await page.locator('#email').fill('test20@gmail.com');
// await page.locator('#address').fill('Delhi Noida');
// await page.locator('#btn-submit-text-inputs').click();

// await page.locator('#gender-male').check();
// await page.locator('#gender-female').check();



// //await page.locator('#day-sunday').check();
// const countValue=await page.locator('[name="days"]').all();

// // for(let checkBox of countValue)
// // {
// //    await checkBox.check();
// // }

// await page.locator('#day-sunday').check();
// await page.locator('#day-monday').check();
// await page.locator('#day-wednesday').check();
// await page.locator('#day-friday').check();
// await page.locator('#day-saturday').check();



// await page.locator('#toggle-autosave').click();

// await page.locator('#day-wednesday').uncheck();
// await page.locator('#day-sunday').uncheck();

await page.locator('#colors').selectOption([
   'Nike','Adidas','Puma' 
]);

await page.locator('#tooltip-trigger').hover();

await page.waitForTimeout(4000);

await page.locator('#country').click();
await page.locator('#country').selectOption({
   value:'brazil'
});

await page.locator('#sorted-list').click();

await page.locator('#sorted-list').selectOption({
value:'cheetah'
});

await page.getByTestId('sorted-note').click();

//await page.locator('.plm-toggle').click();
 await page.waitForTimeout(5000);
// for(let idx=0;idx<countValue;idx++){
// await page.locator('[name="days"]').nth(idx).check();
// }
});

test('input_generator',async({page})=>{

await page.emulateMedia({colorScheme:'dark'});

await page.goto('https://codesbeautify.com/html-number-input-generator?utm_source=chatgpt.com');

await page.getByText('placeholder').fill('hello how are you')
await page.getByText('Read only').check();
await page.getByText('Read only').uncheck();

await page.locator('[class="btn btn-primary"]').click();
await expect(page.locator('body')).toContainText('About the HTML Number Input Generator');

await expect(page.locator('body')).toContainText('How to use');
await page.locator('[name="min"]').click();
 //await page.locator('[name="min"]').press('ArrowUp');
 //await page.locator('[name="min"]').press('ArrowUp');

// for(let idx=0;idx<2;idx++)
// {
//    await page.locator('[name="min"]').press('ArrowUp',{
//       delay:200
//    });
// }

const maxValue=page.locator('[name="max"]');

await maxValue.click();

for(let idx=0;idx<2;idx++)
{
 await maxValue.press('ArrowUp',{
      delay:400
   });
}

for(let jdx=0;jdx<1;jdx++)
{
   await maxValue.press('ArrowDown',{
      delay:400
   });
}

const downloadValue=page.waitForEvent('download');
await page.getByRole('button',{
   name:'Download'
}).click();

const value=await downloadValue;

await value.saveAs('C:/Users/hp/Desktop/22-09-2026/sample_oct_file.txt');

});