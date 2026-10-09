import {test,expect} from '@playwright/test';

test('new_one_google',async({page})=>{
await page.goto('https://www.google.com');
await page.locator('//textarea[@class="gLFyf"]').fill("live cricket score");
//await page.getByText('live cricket score').click();

await page.locator('//a[@href="https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header"]').click();
await page.goBack();
//await page.goForward();

//await page.locator('//a[@href="https://blog.google/newsletter-subscribe/?utm_source=about.google&utm_medium=referral&utm_campaign=homepage"]').click();
await page.locator('[class="hWdRGb"]').click();
await page.locator('upload a file  ').setInputFiles('C:/Users/hp/Desktop/13-09-2026/sampleFile.jpeg');


});