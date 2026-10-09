import {test,expect, chromium} from '@playwright/test';

test('notification_test',async()=>{

    const broswer=await chromium.launch();
    const context=await broswer.newContext({
        permissions:['notifications']
    });
const page1=await context.newPage();
 await page1.goto('https://toolnaru.com/en/test/notification-test?utm_source=chatgpt.com');

 await page1.getByText('Send page test notification').click();

await page1.waitForTimeout(2000);

await page1.getByText('Send page test notification').click();

await page1.waitForTimeout(4000);

await page1.waitForSelector('#login',{
    state:'visible'
})
});