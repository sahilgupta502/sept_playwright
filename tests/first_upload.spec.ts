import {test,expect} from '@playwright/test';

test('first_upload',async({page})=>{
await page.goto('https://demoqa.com/upload-download?utm_source=chatgpt.com');
const row=await page.locator('li').filter({hasText:'Check Box'})
await row.locator('checkbox').click();
});