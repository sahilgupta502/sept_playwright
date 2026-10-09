import {test,expect} from '@playwright/test';


test('new_upload',async({page})=>{
await page.goto('https://demoqa.com/upload-download?utm_source=chatgpt.com');
await page.locator('#uploadFile').setInputFiles('C:/Users/hp/Desktop/13-09-2026/sep_file.txt');

await page.getByRole('button',{
name:'Upload'
});


const data1=page.waitForEvent('download');

await page.getByRole('button',{
    name:'Download'
}).click();

const data2=await data1;

data2.saveAs('C:/Users/hp/Desktop/13-09-2026/sampleFilen.jpeg');
});

