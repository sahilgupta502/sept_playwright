import {test,expect} from '@playwright/test';

test('date_file_test',async({page})=>{
await page.goto('https://jqueryui.com/datepicker/');
await expect(page.locator('body')).toContainText('Datepicker');

await page.locator('.hasDatepicker').fill('10/02/2020');
});