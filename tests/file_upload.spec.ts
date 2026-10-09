import {test,expect} from '@playwright/test';

test('file_upload',async({page})=>{
await page.goto('https://testing.qaautomationlabs.com/file-upload.php');

//await page.getByTitle('Browse for a file to upload').setInputFiles('C:/Users/hp/Desktop/13-09-2026/sample_file.txt');
//await page.locator('.file-label').setInputFiles('/testData/sample_file.txt');
const button=await page.getByRole('button',{
    'name':'Browse File'
});
console.log(button.textContent());
//await button.setInputFiles('testData/sample_file.txt');

});