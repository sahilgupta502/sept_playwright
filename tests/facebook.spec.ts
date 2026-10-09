import {test,expect} from '@playwright/test';

test('facebook_test',async({page})=>{
await page.goto('https://www.facebook.com/');
await page.getByText('email').fill('test1@gmail.com');
await page.locator('#_R_1hmkqsqppb6amH1_').fill('123456');
await page.getByRole('button',{
    name:'Log in'
}).click();

// await page.getByRole('link',{
//     name:'https://www.facebook.com/login/identify/?ci=AdAdc_3LYRhE-9b1ETjvuWXxuS1PxmVDnxjV-yZFPA34ELEHhtY2VSYNU-4s4uCjgdRIFguWNvCehMI0up2vqAnTVaGkCMX4Mtw_JTif_uH9TRSFjjA4iG6KvYTQW6NICCCN1AlobA-PNAFyUlvnfu5BCWQUO-tfcWkbZFRgRYI_TiMNgY0gkFpQxwc_C-8vcRwvwTQSMpHCjH5ENHnIQwTMYlctFkU-NVZBB-znQy1UkrTJBVxf3BAt40B0tsQO4CNJPbvjfndpKpWJ9PbkXhabkDFm'
// }).click();

await page.getByText('Forgotten Password?').click();
await page.getByLabel('Mobile number or email address').fill('sahilgupta502@gmail.com');

await page.getByRole('button',{
    name:'Continue'
}).click();

await page.screenshot({
    path:'testData/sample_screenshot.jpg'});
});